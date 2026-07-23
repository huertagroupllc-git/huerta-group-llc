"use server";

import { headers } from "next/headers";
import {
  validateInquiry,
  type InquiryFieldErrors,
} from "@/lib/inquiry";
import { sendInquiryNotification } from "@/lib/notification";

/**
 * Server-side inquiry submission.
 *
 * Security model: this file runs only on the server (Server Action).
 * The Supabase secret API key is read from server environment variables,
 * is never exposed to the browser, and is required because the
 * contact_inquiries table has RLS enabled with no public policies —
 * no anonymous read or write path exists.
 */

export interface SubmitInquiryState {
  status: "idle" | "success" | "error";
  errors?: InquiryFieldErrors;
  formError?: string;
  /**
   * Safe echo of the user's entries, returned with recoverable errors.
   * React 19 resets form fields to their defaultValue after an action
   * dispatch, so preserved values must round-trip through state.
   */
  values?: {
    name: string;
    organization: string;
    email: string;
    inquiryType: string;
    message: string;
  };
}

function echoValues(formData: FormData): SubmitInquiryState["values"] {
  const get = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value.slice(0, 5000) : "";
  };
  return {
    name: get("name"),
    organization: get("organization"),
    email: get("email"),
    inquiryType: get("inquiryType"),
    message: get("message"),
  };
}

/** Total payload guard — well above legitimate use, far below abuse. */
const MAX_PAYLOAD_CHARS = 12_000;

/** Submissions completed faster than this are treated as automated. */
const MIN_COMPLETION_MS = 3_000;

/**
 * Best-effort per-instance rate limiting. Serverless instances do not
 * share memory, so this bounds bursts per warm instance rather than
 * providing a durable global limit — documented in the README.
 */
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionLog = new Map<string, number[]>();

function isRateLimited(clientKey: string): boolean {
  const now = Date.now();
  const recent = (submissionLog.get(clientKey) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    submissionLog.set(clientKey, recent);
    return true;
  }
  recent.push(now);
  submissionLog.set(clientKey, recent);
  // Keep the map from growing unbounded on long-lived instances.
  if (submissionLog.size > 1000) {
    const cutoff = now - RATE_LIMIT_WINDOW_MS;
    for (const [key, times] of submissionLog) {
      if (times.every((t) => t < cutoff)) submissionLog.delete(key);
    }
  }
  return false;
}

const GENERIC_FAILURE =
  "Something went wrong on our side and your inquiry was not sent. Please try again in a few minutes.";

export async function submitInquiry(
  _prevState: SubmitInquiryState,
  formData: FormData,
): Promise<SubmitInquiryState> {
  // --- Abuse checks -------------------------------------------------------

  // Honeypot: hidden field no human fills in. Bots that complete it get a
  // success response with no persistence, to avoid teaching them the tell.
  const honeypot = formData.get("companyWebsite");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { status: "success" };
  }

  // Payload size guard.
  let totalChars = 0;
  for (const value of formData.values()) {
    if (typeof value === "string") totalChars += value.length;
  }
  if (totalChars > MAX_PAYLOAD_CHARS) {
    return { status: "error", formError: GENERIC_FAILURE, values: echoValues(formData) };
  }

  // --- Validation ---------------------------------------------------------
  // Runs before the timing gate so a human who clicks submit immediately
  // still receives real validation errors rather than a false success.

  const { data, errors } = validateInquiry(formData);
  if (!data) {
    return {
      status: "error",
      errors,
      formError: "Please correct the highlighted fields and submit again.",
      values: echoValues(formData),
    };
  }

  // Timing: a fully completed, valid form submitted faster than a human
  // can plausibly type is treated as automated (also silently).
  const startedAt = Number(formData.get("startedAt"));
  if (
    !Number.isFinite(startedAt) ||
    Date.now() - startedAt < MIN_COMPLETION_MS
  ) {
    return { status: "success" };
  }

  // Best-effort rate limiting keyed by client IP.
  const headerList = await headers();
  const clientKey =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(clientKey)) {
    return {
      status: "error",
      formError:
        "Too many submissions in a short period. Please wait a while and try again.",
      values: echoValues(formData),
    };
  }

  // --- Persistence --------------------------------------------------------

  const supabaseUrl = process.env.SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY;
  if (!supabaseUrl || !secretKey) {
    console.error(
      "contact_inquiries: missing SUPABASE_URL or SUPABASE_SECRET_KEY",
    );
    return { status: "error", formError: GENERIC_FAILURE, values: echoValues(formData) };
  }

  let inquiryId: string;
  let inquiryCreatedAt: string;
  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/contact_inquiries`,
      {
        method: "POST",
        headers: {
          apikey: secretKey,
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
          // Return the created row so the notification can reference it.
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          name: data.name,
          organization: data.organization,
          email: data.email,
          inquiry_type: data.inquiryType,
          message: data.message,
          source_path: data.sourcePath,
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      // Log status only — never inquiry content or response bodies that
      // could contain internals.
      console.error(`contact_inquiries: insert failed (${response.status})`);
      return { status: "error", formError: GENERIC_FAILURE, values: echoValues(formData) };
    }

    const [row] = (await response.json()) as Array<{
      id: string;
      created_at: string;
    }>;
    inquiryId = row.id;
    inquiryCreatedAt = row.created_at;
  } catch {
    console.error("contact_inquiries: insert request failed");
    return { status: "error", formError: GENERIC_FAILURE, values: echoValues(formData) };
  }

  // --- Notification -------------------------------------------------------
  // The inquiry is already the stored source of record; the internal email
  // is an operational alert. Its failure must never affect the user-facing
  // result, and every outcome is recorded on the inquiry row.

  const outcome = await sendInquiryNotification({
    ...data,
    id: inquiryId,
    createdAt: inquiryCreatedAt,
  });

  try {
    const update = await fetch(
      `${supabaseUrl}/rest/v1/contact_inquiries?id=eq.${inquiryId}`,
      {
        method: "PATCH",
        headers: {
          apikey: secretKey,
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          notification_status: outcome.status,
          notification_attempted_at:
            outcome.status === "not_configured"
              ? null
              : new Date().toISOString(),
          notification_message_id:
            outcome.status === "sent" ? outcome.messageId : null,
          notification_error_code:
            outcome.status === "failed" ? outcome.errorCode : null,
        }),
        cache: "no-store",
      },
    );
    if (!update.ok) {
      console.error(
        `contact_inquiries: notification status update failed (${update.status})`,
      );
    }
  } catch {
    console.error("contact_inquiries: notification status update failed");
  }

  if (outcome.status !== "sent") {
    // Internal visibility only — the user's inquiry was stored successfully.
    console.error(`contact_inquiries: notification ${outcome.status}`);
  }

  return { status: "success" };
}
