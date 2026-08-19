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