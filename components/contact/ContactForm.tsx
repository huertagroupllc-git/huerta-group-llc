"use client";

import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";

import { useActionState, useEffect, useRef } from "react";
import {
  submitInquiry,
  type SubmitInquiryState,
} from "@/app/contact/actions";
import { FIELD_LIMITS, INQUIRY_TYPES } from "@/lib/inquiry";

const INITIAL_STATE: SubmitInquiryState = { status: "idle" };

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  organization: "Organization",
  email: "Email address",
  inquiryType: "Inquiry type",
  message: "Message",
};

const INPUT_CLASSES =
  "w-full rounded-sm border border-edge bg-ink-950 px-4 py-3 text-silver-100 caret-gold-500 transition-colors duration-200 ease-brand placeholder:text-silver-500 hover:border-gunmetal focus:border-gold-600 focus:hover:border-gold-600";

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
        className="card-surface border border-card-edge p-8 sm:p-10"
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
          <ArrowLink href="/about">Learn more about Huerta Group</ArrowLink>
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
          className="mb-8 border-l-2 border-gold-500 bg-ink-800 px-5 py-4"
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

      <div className="mt-6">
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

      <div className="mt-6">
        {/* The adopted design presents inquiry type as selectable chips
            (ddr-0011). Implemented as a radio group in a fieldset: same
            field name, same values, same required rule and the same
            server-side validation as the select it replaces — and a larger
            touch target than a native select on a phone. */}
        <fieldset
          key={values?.inquiryType ?? "initial"}
          aria-invalid={errors.inquiryType ? true : undefined}
          aria-describedby={
            errors.inquiryType ? "inquiryType-error" : undefined
          }
        >
          <legend className={LABEL_CLASSES}>
            Inquiry type <span className="text-gold-500">*</span>
          </legend>
          <div className="mt-2 flex flex-wrap gap-2.5">
            {INQUIRY_TYPES.map((type) => (
              <label key={type.value} className="group cursor-pointer text-sm">
                <input
                  type="radio"
                  name="inquiryType"
                  value={type.value}
                  required
                  defaultChecked={
                    (values?.inquiryType ?? "general") === type.value
                  }
                  className="peer sr-only"
                />
                <span className="inline-flex items-center border border-edge px-4 py-2.5 text-silver-300 transition-colors duration-200 ease-brand group-hover:border-gold-600 peer-checked:border-gold-500 peer-checked:bg-gold-500/10 peer-checked:text-silver-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold-500">
                  {type.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        {errors.inquiryType ? (
          <p id="inquiryType-error" className={ERROR_CLASSES}>
            {errors.inquiryType}
          </p>
        ) : null}
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
        medical, or otherwise sensitive information. Submitting this form does
        not create a client relationship, contract, or obligation.
      </p>

      <div className="mt-8">
        <Button type="submit" disabled={isPending}>
          {isPending ? "Sending…" : "Send inquiry"}
        </Button>
        <span aria-live="polite" className="sr-only">
          {isPending ? "Sending your inquiry." : ""}
        </span>
      </div>
    </form>
  );
}
