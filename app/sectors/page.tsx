import Link from "next/link";
import { PlaceholderArt } from "@/components/PlaceholderArt";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tree Nuts, Dried Fruit & Vegetable Export Markets | Euro-Cape Partners",
  description:
    "Specialist European market entry support for South African tree nut (including macadamia), dried fruit, and vegetable producers seeking distribution across Belgium, Scandinavia, Spain, and beyond.",
  path: "/sectors",
});

const sectors = [
  {
    title: "Tree Nuts",
    example: "Macadamias, pecans, almonds",
    description:
      "South Africa is one of the world's leading macadamia producers, and its wider tree nut sector produces to exacting export standards. We represent growers and processors selling in-shell, kernel, and value-added nut products into European retail, food-service, and industrial-ingredient channels.",
    pattern: "grove" as const,
  },
  {
    title: "Dried Fruits",
    example: "Raisins, apricots, prunes, figs, mixed dried fruit",
    description:
      "The Cape's dried fruit sector, from raisins to stone fruit, has a long trading relationship with Europe. We build on that history with direct distributor and buyer relationships for both bulk and consumer-packaged formats.",
    pattern: "orchard" as const,
  },
  {
    title: "Vegetables & General Food Products",
    example: "Fresh and processed vegetables, pulses, general food products",
    description:
      "Beyond nuts and dried fruit, we represent producers of fresh and processed vegetables and other general food products, matching each product's shelf life and handling requirements to the right European buyer and route to market.",
    pattern: "crates" as const,
  },
];

export default function SectorsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Sectors", path: "/sectors" }]} />
      <section className="bg-forest-dark py-16 text-cream md:py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand">
            Sectors
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Focused on dry goods and produce. Nothing else.
          </h1>
          <p className="mt-5 max-w-xl text-cream/75">
            We work exclusively with South African producers of tree nuts,
            dried fruits, vegetables, and general food products. Category
            focus means our distributor and buyer network is deep, not
            broad.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="space-y-16">
          {sectors.map((sector, i) => (
            <Reveal key={sector.title} delayMs={i * 120}>
              <div
                className={`group grid gap-10 md:grid-cols-2 md:items-center ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-sm">
                  <PlaceholderArt
                    alt={`South African ${sector.title.toLowerCase()} (${sector.example.toLowerCase()}) ready for export to European markets`}
                    variant={i === 1 ? "clay" : i === 2 ? "sand" : "forest"}
                    pattern={sector.pattern}
                    className="h-64 w-full transition-transform duration-500 ease-out group-hover:scale-105 md:h-96"
                  />
                </div>
                <div>
                  <span className="font-serif text-3xl text-clay transition-transform duration-300 group-hover:scale-110 group-hover:text-clay-dark">
                    0{i + 1}
                  </span>
                  <h2 className="mt-3 font-serif text-2xl font-semibold text-forest-dark transition-colors md:text-3xl group-hover:text-clay-dark">
                    {sector.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wide text-ink-soft">
                    {sector.example}
                  </p>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
                    {sector.description}
                  </p>
                  <span className="mt-6 block h-0.5 w-10 bg-clay transition-all duration-300 group-hover:w-24" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-serif text-2xl font-semibold text-forest-dark md:text-3xl">
            Producing in one of these categories and export-ready?
          </h2>
          <Link
            href="/contact"
            className="rounded-sm bg-forest-dark px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-forest"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
