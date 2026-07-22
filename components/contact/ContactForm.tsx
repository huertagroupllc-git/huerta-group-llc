"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import {
  submitInquiry,
  type SubmitInquiryState,
} from "@/app/contact/actions";
import { FIELD_LIMITS, INQUIRY_TYPES } from "@/lib/inquiry";
import { cx } from "@/lib/cx";

const INITIAL_STATE: SubmitInquiryState = { status: "idle" };

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  organization: "Organization",
  email: "Email address",
  inquiryType: "Inquiry type",
  message: "Message",
};

const INPUT_CLASSES =
  "w-full rounded-sm border border-edge bg-ink-900 px-4 py-3 text-silver-100 placeholder:text-silver-500 focus:border-gold-600";

const LABEL_CLASSES = "mb-2 block text-sm font-medium text-silver-300";

const ERROR_CLASSES = "mt-2 text-sm text-gold-300";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitInquiry,
    INITIAL_STATE,
  );
  const startedAtRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Stamp the render time into the hidden timing field after mount, so the
  // statically rendered HTML stays deterministic.
  useEffect(() => {
    if (startedAtRef.current) {
      startedAtRef.current.value = String(Date.now());
    }
  }, []);

  // Move focus to the error summary or success confirmation when the
  // submission outcome changes.
  useEffect(() => {
    if (state.status === "error") summaryRef.current?.focus();
    if (state.status === "success") successRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="border border-edge bg-ink-900 p-8 sm:p-10"
      >
        <span aria-hidden="true" className="block h-px w-10 bg-gold-500" />
        <h2 className="mt-6 font-serif text-2xl text-silver-100">
          Your inquiry has been received.
        </h2>
        <p className="mt-4 leading-relaxed text-silver-400">
          Thank you for taking the time to write. Your inquiry will be
          reviewed, and if there is a productive way to help, you will hear
          back at the email address you provided.
        </p>
        <p className="mt-6">
          <Link
            href="/about"
            className="inline-block py-1 text-sm text-gold-400 transition-colors duration-200 hover:text-gold-300"
          >
            Learn more about Huerta Group →
          </Link>
        </p>
      </div>
    );
  }

  const errors = state.status === "error" ? (state.errors ?? {}) : {};
  const errorEntries = Object.entries(errors);
  const values = state.status === "error" ? state.values : undefined;

  return (
    <form action={formAction} noValidate>
      {state.status === "error" && state.formError ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mb-8 border-l-2 border-gold-500 bg-ink-900 px-5 py-4"
        >
          <p className="text-sm font-medium text-silver-100">
            {state.formError}
          </p>
          {errorEntries.length > 0 ? (
            <ul className="mt-2 space-y-1">
              {errorEntries.map(([field, message]) => (
                <li key={field} className="text-sm text-silver-400">
                  <a href={`#${field}`} className="underline">
                    {FIELD_LABELS[field] ?? field}
                  </a>
                  : {message}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}

      {/* Abuse-prevention fields: not for humans. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto">
        <label htmlFor="companyWebsite">
          Leave this field empty
          <input
            type="text"
            id="companyWebsite"
            name="companyWebsite"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </label>
      </div>
      <input
        type="hidden"
        name="startedAt"
        ref={startedAtRef}
        defaultValue=""
      />
      <input type="hidden" name="sourcePath" value="/contact" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL_CLASSES}>
            Name <span className="text-gold-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            defaultValue={values?.name}
            maxLength={FIELD_LIMITS.name}
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={INPUT_CLASSES}
          />
          {errors.name ? (
            <p id="name-error" className={ERROR_CLASSES}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="organization" className={LABEL_CLASSES}>
            Organization <span className="text-gold-500">*</span>
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            defaultValue={values?.organization}
            maxLength={FIELD_LIMITS.organization}
            autoComplete="organization"
            aria-invalid={errors.organization ? true : undefined}
            aria-describedby={
              errors.organization ? "organization-error" : undefined
            }
            className={INPUT_CLASSES}
          />
          {errors.organization ? (
            <p id="organization-error" className={ERROR_CLASSES}>
              {errors.organization}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={LABEL_CLASSES}>
            Email address <span className="text-gold-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            defaultValue={values?.email}
            maxLength={FIELD_LIMITS.email}
            autoComplete="email"
            inputMode="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={INPUT_CLASSES}
          />
          {errors.email ? (
            <p id="email-error" className={ERROR_CLASSES}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="inquiryType" className={LABEL_CLASSES}>
            Inquiry type <span className="text-gold-500">*</span>
          </label>
          <select
            // Remount when an echoed value arrives — React's post-action
            // form reset restores selects to their initial option otherwise.
            key={values?.inquiryType ?? "initial"}
            id="inquiryType"
            name="inquiryType"
            required
            defaultValue={values?.inquiryType ?? "general"}
            aria-invalid={errors.inquiryType ? true : undefined}
            aria-describedby={
              errors.inquiryType ? "inquiryType-error" : undefined
            }
            className={INPUT_CLASSES}
          >
            {INQUIRY_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.inquiryType ? (
            <p id="inquiryType-error" className={ERROR_CLASSES}>
              {errors.inquiryType}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className={LABEL_CLASSES}>
          Message <span className="text-gold-500">*</span>
        </label>
        <p id="message-hint" className="mb-2 text-sm text-silver-500">
          A few sentences about your organization and what you would like to
          discuss is plenty.
        </p>
        <textarea
          id="message"
          name="message"
          required
          defaultValue={values?.message}
          rows={7}
          maxLength={FIELD_LIMITS.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={
            errors.message ? "message-error message-hint" : "message-hint"
          }
          className={INPUT_CLASSES}
        />
        {errors.message ? (
          <p id="message-error" className={ERROR_CLASSES}>
            {errors.message}
          </p>
        ) : null}
      </div>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-silver-500">
        The information you share here is used to review and respond to your
        inquiry. Please do not include confidential, privileged, financial,
        medical, or otherwise sensitive information. Submitting this form
        does not create a client relationship, contract, or obligation.
      </p>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isPending}
          className={cx(
            "inline-flex items-center justify-center rounded-sm bg-gold-500 px-6 py-3 text-sm font-medium tracking-wide text-ink-950 transition-colors duration-200",
            isPending ? "opacity-60" : "hover:bg-gold-400",
          )}
        >
          {isPending ? "Sending…" : "Send inquiry"}
        </button>
        <span aria-live="polite" className="sr-only">
          {isPending ? "Sending your inquiry." : ""}
        </span>
      </div>
    </form>
  );
}
