"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/favicon-512.png"
            alt="Euro-Cape Partners logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-tight text-forest-dark">
              {site.name}
            </span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active
                    ? "text-forest-dark font-semibold"
                    : "text-ink-soft hover:text-forest-dark"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-sm bg-forest-dark px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-forest"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-forest-dark transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-forest-dark transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-forest-dark transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-forest/10 bg-cream md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-sm px-3 py-3 text-sm ${
                  pathname === item.href
                    ? "bg-sand text-forest-dark font-semibold"
                    : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
