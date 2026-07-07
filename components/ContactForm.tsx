"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error" | "rate_limited";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
    website: "", // honeypot: real users never fill this in
  });

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Enquiry from ${values.company || values.name || "website"}`
  )}&body=${encodeURIComponent(
    `Name: ${values.name}\nCompany: ${values.company}\nEmail: ${values.email}\n\n${values.message}`
  )}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => null);

      if (data?.ok) {
        setStatus("success");
        setValues({ name: "", company: "", email: "", message: "", website: "" });
        return;
      }

      if (data?.reason === "not_configured") {
        window.location.href = mailtoHref;
        setStatus("idle");
        return;
      }

      if (data?.reason === "rate_limited") {
        setStatus("rate_limited");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-forest/15 bg-sand p-8 text-center">
        <p className="font-serif text-xl font-semibold text-forest-dark">
          Message sent.
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          Thank you. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field: visually hidden from sighted users, skipped by
          screen readers, but present in the DOM for bots to fill in. */}
      <div className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => setValues((v) => ({ ...v, website: e.target.value }))}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className="mt-2 w-full rounded-sm border border-forest/20 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest-dark"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={values.company}
            onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
            className="mt-2 w-full rounded-sm border border-forest/20 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest-dark"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className="mt-2 w-full rounded-sm border border-forest/20 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest-dark"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          placeholder="Tell us about your product range, current export markets, and where you'd like Euro-Cape Partners to help."
          className="mt-2 w-full resize-none rounded-sm border border-forest/20 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-forest-dark"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-clay-dark">
          Something went wrong sending your message. You can also email us
          directly at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      )}

      {status === "rate_limited" && (
        <p className="text-sm text-clay-dark">
          You&apos;ve sent several messages recently, so we&apos;ve paused
          submissions from this connection for a bit. Please email us
          directly at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>{" "}
          in the meantime.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-sm bg-forest-dark px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-forest disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
