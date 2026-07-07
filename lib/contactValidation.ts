export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MAX_LENGTHS = {
  name: 200,
  company: 200,
  email: 200,
  message: 5000,
};

/** Strips control characters and angle brackets to prevent header/CRLF injection and basic HTML injection. */
function sanitize(input: string): string {
  return input
    .replace(/[\r\n\t]/g, " ")
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, "")
    .replace(/[<>]/g, "")
    .trim();
}

export type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

export function validateContactPayload(raw: unknown): ValidationResult {
  if (typeof raw !== "object" || raw === null) {
    return { ok: false, error: "Invalid submission." };
  }

  const body = raw as Record<string, unknown>;
  const fields = ["name", "company", "email", "message"] as const;

  const values: Partial<ContactPayload> = {};

  for (const field of fields) {
    const value = body[field];
    if (typeof value !== "string" || value.trim().length === 0) {
      return { ok: false, error: `${field} is required.` };
    }
    const cleaned = sanitize(value);
    if (cleaned.length === 0) {
      return { ok: false, error: `${field} is required.` };
    }
    if (cleaned.length > MAX_LENGTHS[field]) {
      return { ok: false, error: `${field} is too long.` };
    }
    values[field] = cleaned;
  }

  if (!EMAIL_RE.test(values.email as string)) {
    return { ok: false, error: "Please provide a valid email address." };
  }

  return { ok: true, data: values as ContactPayload };
}
