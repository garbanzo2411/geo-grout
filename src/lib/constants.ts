export const SITE = {
    name: "Geo Grout Ground Modification Specialist, Inc.",
    phone: "(415) 285-2400",
    phoneHref: "tel:+14152852400",
    email: "inquiries@gggms.com",
    address: "2194 Palou Ave, San Francisco, CA 94124",
    hours: "Mon-Fri, 6:30 AM - 5:00 PM",
    tagline: "Geotechnical Contractors for 40 Years",
};

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Past Jobs", href: "/work" },
  { label: "Services", href: "/services" },
];

export const CONTACT_LINK = { label: "Get a Quote", href: "/contact" };

// Placeholder reviews, need google and yelp APIs.

export const TESTIMONIALS: {
  id: string;
  name: string;
  platform: "Google" | "Yelp";
  rating: number;
  text: string;
}[] = [
  {
    id: "t1",
    name: "Marcus R.",
    platform: "Google",
    rating: 5,
    text: "Foundation was settling badly on one corner of the house. GeoGrout diagnosed it fast and the compaction grouting fixed it in two days. No more cracks.",
  },
  {
    id: "t2",
    name: "Priya S.",
    platform: "Yelp",
    rating: 5,
    text: "Professional crew, showed up on time every day, and cleaned up after themselves. Rare to find a contractor this straightforward.",
  },
  {
    id: "t3",
    name: "Daniel K.",
    platform: "Google",
    rating: 4,
    text: "Solid work on a tricky soil stabilization job for our warehouse addition. Took a bit longer than quoted but the result held up.",
  },
  {
    id: "t4",
    name: "Angela W.",
    platform: "Google",
    rating: 5,
    text: "Owner came out personally to walk the site before quoting. That alone told us we were in good hands. Would hire again.",
  },
  {
    id: "t5",
    name: "Tom H.",
    platform: "Yelp",
    rating: 5,
    text: "Void fill under our driveway slab — quick, clean, and the price was fair. Driveway's been solid for over a year now.",
  },
  {
    id: "t6",
    name: "Linda C.",
    platform: "Google",
    rating: 5,
    text: "Had three other companies tell us it wasn't fixable without full replacement. GeoGrout proved them wrong with jet grouting.",
  },
  {
    id: "t7",
    name: "Ray P.",
    platform: "Yelp",
    rating: 4,
    text: "Good communication throughout the project. They explained the geotechnical side in a way that actually made sense to us.",
  },
  {
    id: "t8",
    name: "Sam O.",
    platform: "Google",
    rating: 5,
    text: "Underpinning work on a century-old building downtown. Careful, precise, and respectful of the historic structure.",
  },
  {
    id: "t9",
    name: "Michelle T.",
    platform: "Google",
    rating: 5,
    text: "Called three grouting companies. GeoGrout was the only one who came out same week and actually returned our calls.",
  },
  {
    id: "t10",
    name: "James B.",
    platform: "Yelp",
    rating: 5,
    text: "40 years of experience shows. They caught a drainage issue the last contractor missed entirely.",
  },
];

export const SERVICES: {
  slug: string;
  title: string;
  blurb: string;
  image: string;
}[] = [
  {
    slug: "compaction-grouting",
    title: "Compaction Grouting",
    blurb:
      "Low-mobility grout injected under pressure to densify loose or settling soils beneath foundations.",
    image: "/images/services/compaction-grouting.jpg",
  },
  {
    slug: "permeation-grouting",
    title: "Permeation Grouting",
    blurb:
      "Chemical grout permeates soil pores to increase strength and reduce permeability without changing soil structure.",
    image: "/images/services/permeation-grouting.jpg",
  },
    {
    slug: "jet-grouting",
    title: "Jet Grouting",
    blurb:
      "High-pressure erosion and mixing to form engineered soil-cement columns for support and groundwater control.",
    image: "/images/services/jet-grouting.jpg",
  },
    {
    slug: "chemical-grouting",
    title: "Chemical Grouting",
    blurb:
      "Low-viscosity chemical solutions for fine soil penetration, sealing, and ground stabilization.",
    image: "/images/services/chemical-grouting.jpg",
  },
    {
    slug: "underpinning-settlement-repair",
    title: "Underpinning & Settlement Repair",
    blurb:
      "Foundation stabilization and lift for structures affected by settlement, subsidence, or soil movement.",
    image: "/images/services/underpinning-settlement-repair.jpg",
  },
    {
    slug: "void-fill-slab-stabilization",
    title: "Void Fill & Slab Stabilization",
    blurb:
      "Filling subsurface voids and re-leveling slabs to restore support and prevent further settlement.",
    image: "/images/services/void-fill-stabilization-repair.webp",
  },
];