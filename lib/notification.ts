/**
 * Internal inquiry notification — SERVER-ONLY.
 *
 * Never import this module from a client component: it reads provider
 * credentials from server environment variables. It is consumed solely by
 * the contact Server Action (app/contact/actions.ts).
 *
 * Provider: Resend (https://resend.com), called directly over HTTPS with
 * the platform fetch API — no SDK dependency. Until a custom domain is
 * verified with the provider, the sender identity is Resend's own
 * onboarding address, which the provider sanctions for this purpose.
 *
 * The email is an operational alert only. The contact_inquiries row in
 * Supabase remains the source of record.
 */

import type { InquiryInput } from "@/lib/inquiry";
import { INQUIRY_TYPES } from "@/lib/inquiry";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

/** Provider-verified default sender (Resend onboarding identity). */
const DEFAULT_FROM = "Huerta Group Website <onboarding@resend.dev>";

const REQUEST_TIMEOUT_MS = 8_000;

const SUBJECT_VALUE_MAX = 60;

export type NotificationOutcome =
  | { status: "sent"; messageId: string | null }
  | { status: "failed"; errorCode: string }
  | { status: "not_configured" };

interface StoredInquiry extends InquiryInput {
  id: string;
  createdAt: string;
}

/**
 * Strips CR/LF and other control characters so user content can never
 * inject email headers, then collapses whitespace runs.
 */
function sanitizeInline(value: string): string {
  return value
    .replace(/[\r\n\t\v\f\u0000-\u001f\u2028\u2029\u00a0]+/g, " ")
    .replace(/ {2,}/g, " ")
    .trim();
}

function truncate(value: string, max: number): string {
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

/** Escapes content for HTML while preserving message line breaks. */
function escapeMultiline(value: string): string {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

function inquiryTypeLabel(value: string): string {
  return INQUIRY_TYPES.find((t) => t.value === value)?.label ?? value;
}

function buildSubject(inquiry: StoredInquiry): string {
  const source = sanitizeInline(inquiry.organization) || sanitizeInline(inquiry.name);
  return `New Huerta Group inquiry — ${truncate(source, SUBJECT_VALUE_MAX)}`;
}

function buildText(inquiry: StoredInquiry): string {
  return [
    "New contact inquiry received.",
    "",
    `Inquiry ID: ${inquiry.id}`,
    `Submitted:  ${inquiry.createdAt}`,
    `Name:       ${sanitizeInline(inquiry.name)}`,
    `Organization: ${sanitizeInline(inquiry.organization)}`,
    `Email:      ${sanitizeInline(inquiry.email)}`,
    `Type:       ${inquiryTypeLabel(inquiry.inquiryType)}`,
    inquiry.sourcePath ? `Source:     ${sanitizeInline(inquiry.sourcePath)}` : null,
    "",
    "Message:",
    inquiry.message.replace(/\r\n?/g, "\n"),
    "",
    "—",
    "The Supabase contact_inquiries table is the source of record for this inquiry.",
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
}

function buildHtml(inquiry: StoredInquiry): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#555555;vertical-align:top;white-space:nowrap;">${label}</td><td style="padding:4px 0;color:#111111;">${value}</td></tr>`;

  const rows = [
    row("Inquiry ID", escapeHtml(inquiry.id)),
    row("Submitted", escapeHtml(inquiry.createdAt)),
    row("Name", escapeHtml(sanitizeInline(inquiry.name))),
    row("Organization", escapeHtml(sanitizeInline(inquiry.organization))),
    row("Email", escapeHtml(sanitizeInline(inquiry.email))),
    row("Type", escapeHtml(inquiryTypeLabel(inquiry.inquiryType))),
    inquiry.sourcePath
      ? row("Source", escapeHtml(sanitizeInline(inquiry.sourcePath)))
      : "",
  ].join("");

  return `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;color:#111111;max-width:640px;">
  <p style="margin:0 0 12px;"><strong>New contact inquiry received.</strong></p>
  <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${rows}</table>
  <p style="margin:16px 0 4px;color:#555555;">Message:</p>
  <div style="padding:12px;border:1px solid #dddddd;border-radius:4px;background:#fafafa;color:#111111;">${escapeMultiline(inquiry.message.replace(/\r\n?/g, "\n"))}</div>
  <p style="margin:16px 0 0;color:#888888;font-size:12px;">The Supabase <code>contact_inquiries</code> table is the source of record for this inquiry.</p>
</div>`;
}

/**
 * Attempts the internal notification for a persisted inquiry.
 * Never throws — every outcome is returned as data so the caller can
 * record it without affecting the user-facing submission result.
 */
export async function sendInquiryNotification(
  inquiry: StoredInquiry,
): Promise<NotificationOutcome> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_NOTIFICATION_EMAIL;
  if (!apiKey || !recipient) {
    return { status: "not_configured" };
  }
  const from = process.env.CONTACT_NOTIFICATION_FROM ?? DEFAULT_FROM;

  // Reply-To uses the inquiry's already-validated email; sanitize again
  // defensively so no control characters can reach a header.
  const replyTo = sanitizeInline(inquiry.email);

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: replyTo,
        subject: buildSubject(inquiry),
        text: buildText(inquiry),
        html: buildHtml(inquiry),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      // Record the HTTP status only — never response bodies, which could
      // contain account details.
      return { status: "failed", errorCode: `http_${response.status}` };
    }

    const body = (await response.json().catch(() => null)) as {
      id?: string;
    } | null;
    return { status: "sent", messageId: body?.id ?? null };
  } catch (error) {
    const code =
      error instanceof Error && error.name === "TimeoutError"
        ? "timeout"
        : "request_failed";
    return { status: "failed", errorCode: code };
  }
}
