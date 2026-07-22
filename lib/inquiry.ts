/**
 * Shared contact-inquiry types, constants, and validation.
 *
 * Safe to import from client components — contains no credentials and no
 * database access. Server-side persistence lives in app/contact/actions.ts.
 */

export const INQUIRY_TYPES = [
  { value: "operations-systems", label: "Operations and systems" },
  { value: "process-development", label: "Process development" },
  { value: "technology-automation", label: "Technology or automation" },
  { value: "organizational-growth", label: "Organizational growth" },
  { value: "partnership", label: "Partnership or collaboration" },
  { value: "general", label: "General inquiry" },
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number]["value"];

export const FIELD_LIMITS = {
  name: 200,
  organization: 200,
  email: 320,
  message: 5000,
  sourcePath: 200,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export interface InquiryInput {
  name: string;
  organization: string;
  email: string;
  inquiryType: InquiryType;
  message: string;
  sourcePath: string | null;
}

export type InquiryFieldErrors = Partial<
  Record<"name" | "organization" | "email" | "inquiryType" | "message", string>
>;

interface ValidationResult {
  data: InquiryInput | null;
  errors: InquiryFieldErrors;
}

function asTrimmedString(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

/** Validates and normalizes raw form data. Used on the server. */
export function validateInquiry(formData: FormData): ValidationResult {
  const errors: InquiryFieldErrors = {};

  const name = asTrimmedString(formData.get("name"));
  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length > FIELD_LIMITS.name) {
    errors.name = `Please keep your name under ${FIELD_LIMITS.name} characters.`;
  }

  const organization = asTrimmedString(formData.get("organization"));
  if (!organization) {
    errors.organization = "Please enter your organization.";
  } else if (organization.length > FIELD_LIMITS.organization) {
    errors.organization = `Please keep the organization name under ${FIELD_LIMITS.organization} characters.`;
  }

  const email = asTrimmedString(formData.get("email"));
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (email.length > FIELD_LIMITS.email || !EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const inquiryTypeRaw = asTrimmedString(formData.get("inquiryType"));
  const inquiryType = INQUIRY_TYPES.find((t) => t.value === inquiryTypeRaw)
    ?.value;
  if (!inquiryType) {
    errors.inquiryType = "Please choose the closest inquiry type.";
  }

  const message = asTrimmedString(formData.get("message"));
  if (!message) {
    errors.message = "Please describe what you would like to discuss.";
  } else if (message.length > FIELD_LIMITS.message) {
    errors.message = `Please keep your message under ${FIELD_LIMITS.message} characters.`;
  }

  if (Object.keys(errors).length > 0 || !inquiryType) {
    return { data: null, errors };
  }

  const sourcePathRaw = asTrimmedString(formData.get("sourcePath"));
  const sourcePath =
    sourcePathRaw.startsWith("/") &&
    sourcePathRaw.length <= FIELD_LIMITS.sourcePath
      ? sourcePathRaw
      : null;

  return {
    data: { name, organization, email, inquiryType, message, sourcePath },
    errors: {},
  };
}
