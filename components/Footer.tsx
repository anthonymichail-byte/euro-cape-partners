import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-forest-dark text-cream/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/favicon-512.png"
              alt="Euro-Cape Partners logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-md"
            />
            <p className="font-serif text-lg font-semibold text-cream">{site.name}</p>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            An outsourced European sales office for South African dry fruit,
            nut, and vegetable producers, representing growers directly in
            Southern and Northern European markets.
          </p>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-cream/50">
            Founded by Dr. Antonios Michail, who lived and worked in South
            Africa for three years.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-cream/75 hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Bridging South African producers with European buyers.</p>
        </div>
      </div>
    </footer>
  );
}
