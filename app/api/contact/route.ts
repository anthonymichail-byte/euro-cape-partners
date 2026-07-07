import { NextRequest, NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/contactValidation";
import { checkRateLimit } from "@/lib/rateLimit";

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  const { allowed, retryAfterSeconds } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      {
        ok: false,
        reason: "rate_limited",
        error: "Too many submissions. Please try again later.",
      },
      { status: 429, headers: retryAfterSeconds ? { "Retry-After": String(retryAfterSeconds) } : undefined }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid_body", error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots tend to fill every field. Humans never see this one.
  // Report success without doing anything further, so bots get no signal.
  if (typeof (body as Record<string, unknown>)?.website === "string" && (body as Record<string, unknown>).website !== "") {
    return NextResponse.json({ ok: true });
  }

  const result = validateContactPayload(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, reason: "validation", error: result.error }, { status: 400 });
  }

  const formspreeId = process.env.FORMSPREE_ID;
  if (!formspreeId) {
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 200 });
  }

  try {
    const upstream = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    });

    if (!upstream.ok) {
      return NextResponse.json({ ok: false, reason: "upstream_error", error: "Could not send your message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, reason: "upstream_error", error: "Could not send your message." }, { status: 502 });
  }
}
