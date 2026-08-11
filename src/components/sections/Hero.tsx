import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-charcoal">
      {/*
        Background: swap this div for a full-bleed <video> or next/image of a real
        job-site clip once footage is available. Keeping it a plain layer for now
        so the overlay/scrim treatment can be dialed in against real footage.
      */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,rgba(228,103,31,0.14),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8a8578 1px, transparent 1px), linear-gradient(to bottom, #8a8578 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
      </div>

      <div className="relative z-10 w-full max-w-295 mx-auto px-6 md:px-8 pb-24 pt-40">
        <span className="spec-tag text-orange mb-7">San Francisco, CA</span>
        <h1 className="font-display text-white text-[13vw] leading-[0.95] sm:text-[9vw] md:text-[6.2vw] max-w-4xl">
          {SITE.tagline}
        </h1>
        <p className="mt-7 max-w-lg text-[#c9c4b8] text-base md:text-lg leading-relaxed">
          Owner-operated grout, tile, and geotechnical contracting for homeowners
          and builders across the Bay Area — four decades of work that holds up.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="font-heading text-sm tracking-[0.08em] uppercase px-8 py-4 bg-orange text-white hover:bg-red transition-colors"
          >
            Get a Free Quote →
          </a>
          <a
            href="/work"
            className="font-heading text-sm tracking-[0.08em] uppercase px-8 py-4 border border-steel text-paper hover:border-orange hover:text-orange transition-colors"
          >
            See Our Work
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-steel">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <span className="w-px h-8 bg-steel/60" />
      </div>
    </section>
  );
}