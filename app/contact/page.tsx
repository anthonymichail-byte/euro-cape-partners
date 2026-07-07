import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Euro-Cape Partners",
  description:
    "Get in touch with Euro-Cape Partners about European sales representation for your South African dry fruit, nut, or vegetable export business.",
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page grid gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-dark">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-forest-dark md:text-5xl">
            Let&apos;s talk about your European sales.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            Tell us about your product range, current export markets, and
            what you&apos;re looking to achieve in Europe. We respond to
            every enquiry personally.
          </p>

          <div className="mt-10 space-y-4 border-t border-forest/10 pt-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Email
              </p>
              <a href={`mailto:${site.email}`} className="text-forest-dark hover:underline">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Location
              </p>
              <p className="text-forest-dark">{site.location}</p>
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-forest/10 bg-sand p-8 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
