import { site } from "@/lib/site";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/brand/favicon-512.png`,
    description:
      "Euro-Cape Partners is a Greece-based broker and sales agency acting as an outsourced European sales office for South African dry fruit, nut, and vegetable producers.",
    email: site.email,
    areaServed: ["Europe", "South Africa"],
    // Placeholders: replace with real social profile URLs once available.
    sameAs: [
      "https://www.linkedin.com/company/euro-cape-partners",
      "https://twitter.com/eurocapepartners",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
