import Link from "next/link";
import { SITE, NAV_LINKS, CONTACT_LINK, SERVICES } from "@/lib/constants";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className = "relative bg-charcoal-2 overflow-hidden">
            { /* Faint grid texture to mimic grouting */ }
            <div
                className = "absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #8a8578 1px, transparent 1px), linear-gradient(to bottom, #8a8578 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />

            <div className = "relative max-w-295 mx-auto px-6 md:px-8 pt-20 pb-10">
                <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1fr_1fr] gap-12 lg:gap-10 pb-16">
                    { /* Brand */ }
                    <div>
                        <Link
                            href = "/"
                            className = "font-display text-xl tracking-wide text-white flex items-center gap-2 mb-5"
                        >
                            <span aria-hidden = "true" className = "text-white/70">(((</span>
                            <span>
                                Geo<span className = "text-orange">Grout</span>
                            </span>
                        </Link>
                        <p className = "text-[#c9c4b8] text-sm leading-relaxed max-w-xs mb-6">
                            Owner-operated geotechnical grouting and ground modification
                             contracting, serving the Western United States since 1985.
                        </p>
                        <a
                            href = {CONTACT_LINK.href}
                            className = "inline-block font-heading text-[13px] tracking-widest uppercase text-orange hover:text-red transition-colors"
                        >
                            {CONTACT_LINK.label} →
                        </a>
                    </div>

                    { /* Quick Links */ }
                    <div>
                        <span className = "font-mono text-[11px] tracking-widest uppercase text-steel block mb-5">
                            Site
                        </span>
                        <ul className = "flex flex-col gap-3">
                            <li>
                                <Link
                                    href = "/"
                                    className = "font-heading text-[13px] tracking-wide uppercase text-white/85 hover:text-orange transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            {NAV_LINKS.map((link) => (
                                <li key ={link.href}>
                                    <Link
                                    href = {link.href}
                                    className = "font-heading text-[13px] tracking-wide uppercase text-white/85 hover:text-orange transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li> 
                        ))}
                        <li>
                            <a
                                href={CONTACT_LINK.href}
                                className = "font-heading text-[13px] tracking-wide uppercase text-white/85 hover:text-orange transition-colors"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Services */}
          <div>
            <span className="font-mono text-[11px] tracking-widest uppercase text-steel block mb-5">
              Services
            </span>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-heading text-[13px] tracking-wide uppercase text-white/85 hover:text-orange transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <span className="font-mono text-[11px] tracking-widest uppercase text-steel block mb-5">
              Contact
            </span>
            <div className="flex flex-col gap-3 font-mono text-sm">
              <a
                href={SITE.phoneHref}
                className="text-white/85 hover:text-orange transition-colors"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="text-white/85 hover:text-orange transition-colors break-all"
              >
                {SITE.email}
              </a>
              <span className="text-[#c9c4b8] leading-relaxed">{SITE.address}</span>
              <span className="text-steel">{SITE.hours}</span>
            </div>
        </div>
    </div>

    <div className="grout-line dark" />

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="font-mono text-[11px] tracking-wide text-steel">
            © {year} {SITE.name}. All rights reserved.
          </span>
          <a
            href="https://lazz.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] tracking-wide text-steel hover:text-orange transition-colors"
          >
            Site designed &amp; built by Jacob Lazzarini
          </a>
        </div>
      </div>
    </footer>
  );
}