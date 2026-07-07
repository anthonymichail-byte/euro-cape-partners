import { site } from "@/lib/site";

const coreServices = [
  {
    name: "European Distributor Search",
    description:
      "Identifying and qualifying European importers and distributors for South African tree nut, dried fruit, and vegetable producers.",
  },
  {
    name: "Buyer Prospecting & Lead Generation",
    description:
      "Targeted outreach to European retail buyers, wholesalers, and food-service groups to build a qualified buyer pipeline.",
  },
  {
    name: "Sales Representation",
    description:
      "Ongoing commercial representation in Europe, including price negotiation, contract terms, and buyer relationship management.",
  },
];

export function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": coreServices.map((service) => ({
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
      areaServed: {
        "@type": "Place",
        name: "Europe",
      },
      serviceType: "Export sales representation",
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
