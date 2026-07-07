import Link from "next/link";
import { PlaceholderArt } from "@/components/PlaceholderArt";

const coreServices = [
  {
    title: "European Distributor Search",
    description:
      "We identify and qualify importers and distributors across Southern and Northern Europe whose category focus, retail relationships, and volumes match your production capacity.",
  },
  {
    title: "Buyer Prospecting & Lead Generation",
    description:
      "Targeted outreach to retail buyers, wholesalers, and food-service groups — building a qualified pipeline of European buyers actively sourcing dry fruit, nuts, and produce.",
  },
  {
    title: "Sales Representation",
    description:
      "We act as your on-the-ground commercial team in Europe: negotiating terms, managing buyer relationships, and representing your brand at the table — without you opening a local entity.",
  },
];

const trustPoints = [
  {
    title: "No inventory risk",
    description:
      "We never buy or hold stock. Product moves directly from your facility to the buyer, so your working capital stays where it belongs — in production.",
  },
  {
    title: "Aligned incentives",
    description:
      "We're compensated on the sales we generate for you. Our commercial interest only grows when your export volumes do.",
  },
  {
    title: "EU compliance fluency",
    description:
      "Import documentation, labelling, phytosanitary requirements, and retailer-specific standards for dry goods and fresh produce — handled by people who deal with them daily.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-dark text-cream">
        <div className="container-page relative z-10 grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sand">
              South Africa &rarr; Europe
            </p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              Your European Sales Office
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">
              Euro-Cape Partners helps premium South African dry fruit, nut,
              and vegetable producers enter and grow in European markets —
              without the cost or risk of building a commercial team abroad.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-sm bg-clay px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-clay-dark"
              >
                Talk to Us
              </Link>
              <Link
                href="/services"
                className="rounded-sm border border-cream/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-cream/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <PlaceholderArt
            alt="Crates of macadamia nuts and dried fruit staged at a Western Cape packhouse, ready for export to Europe"
            variant="forest"
            pattern="crates"
            className="h-72 w-full md:h-[26rem]"
          />
        </div>
      </section>

      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-dark">
            Our Mission
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-forest-dark md:text-4xl">
            Commercial representation, built for exporters who can produce —
            but haven&apos;t yet cracked Europe.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            South African producers of tree nuts, dried fruit, and vegetables
            make some of the most competitive product in the world. What most
            lack isn&apos;t quality — it&apos;s a European commercial
            presence. We are that presence: a dedicated sales office based in
            Europe, working exclusively on your behalf.
          </p>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="container-page">
          <div className="mb-12 flex items-end justify-between gap-4">
            <h2 className="font-serif text-2xl font-semibold text-forest-dark md:text-3xl">
              Core Services
            </h2>
            <Link href="/services" className="text-sm font-semibold text-clay-dark hover:underline">
              View all services &rarr;
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {coreServices.map((service, i) => (
              <div
                key={service.title}
                className="rounded-sm border border-forest/10 bg-cream p-8"
              >
                <span className="font-serif text-3xl text-clay">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-forest-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <PlaceholderArt
            alt="Shipping containers and pallets of boxed produce at a European port terminal, representing import coordination"
            variant="clay"
            pattern="port"
            className="h-72 w-full md:h-[28rem]"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-dark">
              Why Producers Choose Us
            </p>
            <h2 className="mt-4 font-serif text-2xl font-semibold text-forest-dark md:text-3xl">
              A partner, not a middleman with a warehouse.
            </h2>
            <div className="mt-8 space-y-6">
              {trustPoints.map((point) => (
                <div key={point.title} className="border-l-2 border-clay pl-5">
                  <h3 className="font-serif text-lg font-semibold text-forest-dark">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest-dark py-20 text-cream">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-serif text-3xl font-semibold md:text-4xl">
            Ready to build a real presence in Europe?
          </h2>
          <p className="max-w-lg text-cream/75">
            Tell us about your product range and current export status. We&apos;ll
            let you know, directly, whether we&apos;re a fit.
          </p>
          <Link
            href="/contact"
            className="mt-2 rounded-sm bg-clay px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-clay-dark"
          >
            Contact Euro-Cape Partners
          </Link>
        </div>
      </section>
    </>
  );
}
