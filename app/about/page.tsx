import Link from "next/link";
import { TradeRouteIllustration } from "@/components/Illustrations";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Euro-Cape Partners | European Market Entry Specialists for South African Food Producers",
  description:
    "Based in Greece, Euro-Cape Partners represents South African food producers directly in European markets, a broker model built on aligned incentives, not bulk trading or inventory risk.",
  path: "/about",
});

const principles = [
  {
    title: "We represent, we don't resell",
    description:
      "Euro-Cape Partners operates as a broker and agent, not a trading house. We never take title to product. Every sale is between your business and the European buyer, with us sitting in the middle to make it happen.",
  },
  {
    title: "No stock, no inventory risk",
    description:
      "Because we don't buy or hold product, there's no warehousing, no markdown risk, and no misalignment between what we're paid to move and what's actually good for your brand long-term.",
  },
  {
    title: "Paid to grow you, not to shift volume",
    description:
      "Our commercial model ties our return to your export growth over time, not to offloading a single shipment. That keeps us focused on the buyers and terms that serve your business, not just the next order.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <section className="bg-forest-dark py-16 text-cream md:py-20">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand">
              About Euro-Cape Partners
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              The bridge between the Cape and Europe.
            </h1>
            <p className="mt-5 max-w-lg text-cream/75">
              Our name says what we do: Euro-Cape Partners connects South
              African producers, the Cape, with buyers across Europe. We
              are based in Greece, giving us a working position in Southern
              Europe with direct routes into Northern European markets.
            </p>
          </div>
          <TradeRouteIllustration
            alt="Trade route map showing South African food exports moving from the Cape to distributors in Southern and Northern Europe"
            className="h-72 w-full md:h-96"
          />
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold text-forest-dark md:text-3xl">
            A broker model, by design
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Euro-Cape Partners was built around a simple observation: South
            African producers of tree nuts, dried fruit, and vegetables
            regularly have export-ready product but no European commercial
            presence to sell it through. Setting up that presence
            independently (hiring locally, opening an entity, building
            buyer relationships from zero) is slow and expensive for a
            single exporter to do alone.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            We operate as that presence for multiple producers at once,
            representing each one directly to distributors, importers, and
            retail buyers. We do not buy product ourselves, and we do not
            hold inventory. Every relationship we build is on behalf of the
            producer whose name is on the label, and our role is to be the
            commercial team on the ground in Europe that most exporters
            can&apos;t yet justify hiring themselves.
          </p>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="container-page">
          <h2 className="font-serif text-2xl font-semibold text-forest-dark md:text-3xl">
            How We Operate
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delayMs={i * 120}>
                <div className="group h-full rounded-sm border border-forest/10 bg-cream p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-clay/30 hover:shadow-xl hover:shadow-forest-dark/10">
                  <h3 className="font-serif text-lg font-semibold text-forest-dark transition-colors group-hover:text-clay-dark">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {principle.description}
                  </p>
                  <span className="mt-6 block h-0.5 w-10 bg-clay transition-all duration-300 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <div className="mx-auto flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-forest-dark font-serif text-3xl font-semibold text-cream md:mx-0">
            AM
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-dark">
              Founder
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-forest-dark md:text-3xl">
              Dr. Antonios Michail, PhD, MCIM
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              Euro-Cape Partners is led by Dr. Antonios Michail, a Chartered
              Marketer (MCIM) with a PhD in Business and Competitive
              Strategies and over 15 years of international go-to-market and
              business development experience across Greece, the UK, Cyprus,
              and South Africa.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              From 2011 to 2014, Antonios lived and worked in Pretoria and
              Gauteng, South Africa, as Marketing Director for Full Swing
              Trading, building ventures from the ground up: launching
              property developments in Meyerton and growing the Empire Pizza
              chain to three stores within a year, including branding, supply
              chain, and staff training. That firsthand experience of
              building businesses inside the South African market, rather
              than observing it from afar, is what shapes how Euro-Cape
              Partners represents South African producers in Europe today.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              Euro-Cape Partners is powered by{" "}
              <span className="font-semibold text-forest-dark">
                Think Growth Consulting
              </span>
              , the international growth and go-to-market consultancy
              Antonios founded in 2018. As Managing Director, he has advised
              more than 30 companies across Greece, the UK, Cyprus, and South
              Africa on strategy, market entry, and go-to-market execution,
              the same discipline behind how Euro-Cape Partners builds each
              producer&apos;s route into Europe.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-xs font-medium uppercase tracking-wide text-ink-soft">
              <li>PhD, Business &amp; Competitive Strategies</li>
              <li>Chartered Marketer (MCIM)</li>
              <li>Founder, Think Growth Consulting</li>
              <li>3 Years Living in South Africa</li>
              <li>15+ Years International Go-to-Market</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-10 rounded-sm border border-forest/10 bg-forest-dark p-10 text-cream md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
              Based in Greece. Working across Europe.
            </h2>
            <p className="mt-3 max-w-xl text-cream/75">
              Our position in Southern Europe means we understand the routes,
              the paperwork, and the buyers on both ends of the journey from
              the Cape.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-sm bg-clay px-7 py-3.5 text-center text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-clay-dark"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
