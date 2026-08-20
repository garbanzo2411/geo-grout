import { FaStar } from "react-icons/fa";
import { TESTIMONIALS } from "@/lib/constants";

// Split the list into two columns so each side scrolls independently.
const COLUMN_A = TESTIMONIALS.filter((_, i) => i % 2 === 0);
const COLUMN_B = TESTIMONIALS.filter((_, i) => i % 2 === 1);

function ReviewCard({
  name,
  platform,
  rating,
  text,
}: {
  name: string;
  platform: "Google" | "Yelp";
  rating: number;
  text: string;
}) {
  return (
    <div className="bg-paper border border-steel/30 p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              size={12}
              className={i < rating ? "text-orange" : "text-steel/30"}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase text-steel">
          {platform}
        </span>
      </div>
      <p className="text-steel-dim text-sm leading-relaxed">{text}</p>
      <span className="font-heading text-xs uppercase tracking-wide text-charcoal">
        {name}
      </span>
    </div>
  );
}

function MarqueeColumn({
  reviews,
  direction,
  duration,
}: {
  reviews: typeof TESTIMONIALS;
  direction: "up" | "down";
  duration: number;
}) {
  const fadeMask =
    "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)";

  return (
    <div
      className="relative h-150 overflow-hidden marquee-paused"
      style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
    >
      <div
        className="flex flex-col gap-4 marquee-track"
        style={{
          animationName: `marquee-${direction}`,
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {/* Rendered twice back-to-back for a seamless loop */}
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} {...review} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-paper-2 py-24 md:py-28">
      <div className="max-w-295 mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 md:gap-20 items-center">
          {/* Left: intro copy */}
          <div>
            <span className="spec-tag text-red mb-5">Testimonials</span>
            <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.05] mb-6">
              What Others Are Saying
            </h2>
            <p className="text-steel-dim text-[15px] leading-relaxed max-w-md mb-8">
              Four decades of grouting and ground modification work builds a
              track record you can check for yourself. These are real
              customers, on real jobs, across the Western United States.
            </p>
            <div>
              <span className="font-display text-3xl text-charcoal">4.3</span>
              <span className="font-heading text-steel-dim text-sm"> / 5</span>
              <p className="font-mono text-[11px] tracking-widest uppercase text-steel mt-2">
                Average across 150+ Google &amp; Yelp reviews
              </p>
            </div>
          </div>

          {/* Right: two-column scrolling marquee of reviews */}
          <div className="grid grid-cols-2 gap-4">
            <MarqueeColumn reviews={COLUMN_A} direction="up" duration={38} />
            <MarqueeColumn reviews={COLUMN_B} direction="down" duration={44} />
          </div>
        </div>
      </div>
    </section>
  );
}
