"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, CONTACT_LINK, SITE } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-gradient-to-r from-red to-orange shadow-md"
          : "bg-charcoal/20 backdrop-blur-md",
      ].join(" ")}
    >
      <nav className="max-w-[1180px] mx-auto flex items-center justify-between px-6 md:px-8 py-5">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-white flex items-center gap-2"
        >
          <span aria-hidden="true" className="text-white/70">(((</span>
          <span>
            Geo<span className={scrolled ? "text-charcoal" : "text-orange"}>Grout</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-9 font-heading text-[13px] tracking-[0.1em] uppercase text-white/85">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

                <div className="flex items-center gap-5">
          <a
            href={SITE.phoneHref}
            className="hidden lg:block font-mono text-sm text-white/90"
          >
            {SITE.phone}
          </a>
          <Link
            href={CONTACT_LINK.href}
            className={[
              "font-heading text-[13px] tracking-[0.1em] uppercase px-5 py-2.5 border transition-colors",
              scrolled
                ? "border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                : "border-white/70 text-white hover:bg-white hover:text-charcoal",
            ].join(" ")}
          >
            {CONTACT_LINK.label}
          </Link>
        </div>
      </nav>
    </header>
  );
}