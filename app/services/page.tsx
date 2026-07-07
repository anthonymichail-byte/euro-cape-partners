import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderArt } from "@/components/PlaceholderArt";

export const metadata: Metadata = {
  title: "Services | Euro-Cape Partners",
  description:
    "European distributor search, buyer prospecting, and sales representation for South African dry fruit, nut, and vegetable producers, plus trade fair support, market entry strategy, and export documentation.",
};

const coreServices = [
  {
    title: "European Distributor Search",
    description:
      "We map the distributor landscape for your specific category (tree nuts, dried fruit, or vegetables) and shortlist importers with the retail footprint, cold-chain or dry-goods handling, and volume appetite to match your production.",
  },
  {
    title: "Buyer Prospecting & Lead Generation",
    description:
      "Structured outreach campaigns to retail buyers, wholesalers, food-service groups, and private-label programs across our target markets, converting cold contacts into qualified, sampling-ready leads.",
  },
  {
    title: "Sales Representation",
    description:
      "Ongoing commercial representation: price negotiation, contract terms, order follow-through, and relationship management, so buyers deal with a European point of contact who knows your business.",
  },
];

const expandedServices = [
  {
    title: "Trade Fair Representation",
    description:
      "We attend and represent your brand at key European trade fairs, running meetings with pre-qualified buyers so you don't need to staff a stand yourself.",
  },
  {
    title: "EU Market Entry Strategy",
    description:
      "A structured go-to-market plan covering target countries, channel priority, and realistic timelines based on your product, certifications, and capacity.",
  },
  {
    title: "Pricing Strategy",
    description:
      "Landed-cost modelling and margin structuring across the supply chain, so your FOB price translates into a competitive, sustainable shelf price in Europe.",
  },
  {
    title: "Competitor Analysis",
    description:
      "A clear view of who else is selling into your category in Europe, at what price points, through which channels, and where the openings are.",
  },
  {
    title: "Import Coordination",
    description:
      "Coordination between your logistics team and European buyers or freight forwarders, keeping shipments, documentation, and delivery windows aligned.",
  },
  {
    title: "Export Documentation Support",
    description:
      "Guidance on the certificates, labelling, and compliance paperwork EU buyers and customs authorities expect for dry goods and produce shipments.",
  },
  {
    title: "Product Positioning",
    description:
      "Category and shelf positioning advice, private label vs. branded, premium vs. volume, matched to how each market actually buys.",
  },
  {
    title: "AI-Powered Sales Automation",
    description:
      "Automated buyer research and outreach tooling that keeps your pipeline moving between the deals that need a human conversation.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-forest-dark py-16 text-cream md:py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand">
            Services
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Everything a European sales office does, without the office.
          </h1>
          <p className="mt-5 max-w-xl text-cream/75">
            Core commercial services form the backbone of the relationship.
            Expanded services support specific moments (a trade fair, a new
            market, a pricing review) as your export program grows.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="font-serif text-2xl font-semibold text-forest-dark">
          Core Services
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {coreServices.map((service, i) => (
            <div key={service.title} className="rounded-sm border border-forest/10 bg-sand p-8">
              <span className="font-serif text-3xl text-clay">0{i + 1}</span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-forest-dark">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="container-page">
          <h2 className="font-serif text-2xl font-semibold text-forest-dark">
            Expanded Services
          </h2>
          <p className="mt-2 max-w-xl text-sm text-ink-soft">
            Brought in alongside core representation as your needs evolve.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-forest/10 bg-forest/10 sm:grid-cols-2 lg:grid-cols-4">
            {expandedServices.map((service) => (
              <div key={service.title} className="bg-cream p-6">
                <h3 className="font-serif text-base font-semibold text-forest-dark">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 rounded-sm border border-forest/10 bg-forest-dark p-10 text-cream md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
              Not sure which services you need yet?
            </h2>
            <p className="mt-3 max-w-xl text-cream/75">
              Most producers start with distributor search and sales
              representation, then add specialist services as specific
              opportunities come up. We&apos;ll help you scope it.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-sm bg-clay px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-clay-dark"
          >
            Discuss Your Range
          </Link>
        </div>
      </section>

      <section className="container-page pb-16">
        <PlaceholderArt
          alt="European trade fair hall with sample displays of nuts and dried fruit at a Euro-Cape Partners stand"
          variant="sand"
          pattern="grove"
          className="h-64 w-full md:h-80"
        />
      </section>
    </>
  );
}
