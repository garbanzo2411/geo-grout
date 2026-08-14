import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <section className="bg-paper py-24 md:py-28">
      <div className="max-w-295 mx-auto px-6 md:px-8">
        <div className="mb-14 max-w-xl">
          <span className="spec-tag text-red mb-5">Our Services</span>
          <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.05] mb-5">
            Ground Modification, Done Right.
          </h2>
          <p className="text-steel-dim text-[15px] leading-relaxed">
            Four decades of combined crew experience across the full range of
            geotechnical grouting — residential and commercial, throughout
            the Western United States.
          </p>
        </div>

        {/* Hairline gaps between cells double as the site's grout-line motif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-steel/40 border border-steel/40">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative block aspect-4/5 overflow-hidden bg-charcoal"
            >
              <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.06]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Scrim: darker at rest for title legibility, deepens further on hover for the description */}
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/95 via-charcoal/35 to-transparent transition-opacity duration-300 group-hover:opacity-100" />

              {/* Tile lifts + gets a shadow on hover, all GPU-friendly transform/opacity */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                <h3 className="font-heading text-white text-lg uppercase tracking-wide mb-0 group-hover:mb-3 transition-all duration-300">
                  {service.title}
                </h3>

                <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-32 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <div className="grout-line dark mb-3 opacity-100" />
                  <p className="text-[#c9c4b8] text-sm leading-relaxed mb-3">
                    {service.blurb}
                  </p>
                  <span className="font-heading text-orange text-xs tracking-[0.08em] uppercase">
                    View Service →
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 shadow-none group-hover:shadow-2xl transition-shadow duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
