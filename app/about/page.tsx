import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderArt } from "@/components/PlaceholderArt";

export const metadata: Metadata = {
  title: "About | Euro-Cape Partners",
  description:
    "Euro-Cape Partners is a Greece-based broker and sales agency representing South African dry fruit, nut, and vegetable producers directly in European markets — without buying or holding stock.",
};

const principles = [
  {
    title: "We represent, we don't resell",
    description:
      "Euro-Cape Partners operates as a broker and agent, not a trading house. We never take title to product. Every sale is between your business and the European buyer — we sit in the middle to make it happen.",
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
              African producers — the Cape — with buyers across Europe. We
              are based in Greece, giving us a working position in Southern
              Europe with direct routes into Northern European markets.
            </p>
          </div>
          <PlaceholderArt
            alt="Stylized trade route map connecting the Cape of South Africa to ports in Southern and Northern Europe"
            variant="sand"
            pattern="map"
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
            independently — hiring locally, opening an entity, building
            buyer relationships from zero — is slow and expensive for a
            single exporter to do alone.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            We operate as that presence for multiple producers at once,
            representing each one directly to distributors, importers, and
            retail buyers. We do not buy product ourselves, and we do not
            hold inventory. Every relationship we build is on behalf of the
            producer whose name is on the label — our role is to be the
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
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-sm border border-forest/10 bg-cream p-8">
                <h3 className="font-serif text-lg font-semibold text-forest-dark">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {principle.description}
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
