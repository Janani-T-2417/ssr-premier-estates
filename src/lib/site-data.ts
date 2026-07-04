import brochureNunna from "@/assets/brochure-nunna.asset.json";
import brochureKankipadu from "@/assets/brochure-kankipadu.asset.json";
import ventureNunnaImg from "@/assets/venture-nunna.jpg";
import ventureKankipaduImg from "@/assets/venture-kankipadu.jpg";
import ventureVuyyuruImg from "@/assets/venture-vuyyuru.jpg";
import venturePenamaluruImg from "@/assets/venture-penamaluru.jpg";
import ventureRamarapaduImg from "@/assets/venture-ramarapadu.jpg";
import videoNunna from "@/assets/video-nunna.asset.json";
import videoKankipadu from "@/assets/video-kankipadu.asset.json";
import videoVuyyuru from "@/assets/video-vuyyuru.asset.json";
import videoPenamaluru from "@/assets/video-penamaluru.asset.json";
import videoRamarapadu from "@/assets/video-ramarapadu.asset.json";

export const COMPANY = {
  name: "SRR GROUP",
  tagline: "YOUR DREAMS COMES TRUE WITH US",
  phone: "9491103142",
  phoneDisplay: "+91 94911 03142",
  email: "Sivaraghava142@gmail.com",
  address: {
    line1: "First Floor, Infinity Plaza",
    line2: "High School Road, Patamata",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    pin: "520007",
  },
  instagram: "https://www.instagram.com/srr_group_?igsh=emJtZmIzcTNhdTc1",
  mapEmbed:
    "https://www.google.com/maps?q=Infinity+Plaza,+High+School+Road,+Patamata,+Vijayawada,+Andhra+Pradesh+520007&output=embed",
};

export type Venture = {
  slug: string;
  name: string;
  subtitle?: string;
  status:
    | "Completed"
    | "Fully Completed"
    | "Ongoing Project"
    | "Upcoming"
    | "Few Plots Available";
  availability?: string;
  launch?: string;
  location: string;
  image: string;
  videoUrl?: string;
  brochureUrl?: string;
  tagline: string;
  overview: string;
  highlights: string[];
  amenities: string[];
  connectivity?: string[];
};

export const VENTURES: Venture[] = [
  {
    slug: "nunna",
    name: "SRR Nunna",
    subtitle: "Premium Plots & Luxury Homes",
    status: "Completed",
    availability: "Resell Available",
    launch: "03 April 2022",
    location: "Nunna, Vijayawada",
    image: ventureNunnaImg,
    videoUrl: videoNunna.url,
    brochureUrl: brochureNunna.url,
    tagline: "350+ premium plots & 70+ constructed homes in a fully developed community.",
    overview:
      "A landmark completed venture just 1 KM from Nunna West Bypass — thoughtfully master-planned with wide 40 ft CC roads, underground drainage, water pipeline and premium residential infrastructure surrounded by top engineering colleges.",
    highlights: [
      "350+ Premium Plots",
      "70+ Constructed Houses",
      "Grand Club House",
      "Compound Wall & Gated Security",
      "40 ft CC Roads",
      "Underground Drainage",
      "Electricity Network",
      "Water Pipeline",
      "1 KM from Nunna West Bypass",
      "Near Leading Engineering Colleges",
    ],
    amenities: ["Swimming Pool", "Gymnasium", "Yoga Deck", "Jogging Track", "Children's Park"],
  },
  {
    slug: "kankipadu",
    name: "Royal Imperia — Kankipadu",
    subtitle: "85 Acre Lakefront Luxury Township",
    status: "Fully Completed",
    availability: "Resell Available",
    launch: "08 May 2022",
    location: "Kankipadu, Vijayawada",
    image: ventureKankipaduImg,
    videoUrl: videoKankipadu.url,
    brochureUrl: brochureKankipadu.url,
    tagline: "An 85-acre lakefront township with Lotus, Duplex & Luxury Villas.",
    overview:
      "Spread across 85 acres near Bandar Road, Royal Imperia is a masterpiece of resort-style living — a 1.5 acre private lake with boating, a grand luxury club house, wide 60 ft & 40 ft avenues, underground services and a curated collection of Lotus, Duplex and Luxury Villas.",
    highlights: [
      "Fully Completed Township",
      "Resell Available",
      "85 Acres Master Township",
      "1.5 Acre Private Lake with Boating",
      "Lotus Villas · Duplex Villas · Luxury Villas",
      "60 ft & 40 ft Wide Roads",
      "Compound Wall + Solar Fencing",
      "Underground Electricity & Drainage",
      "Water Pipeline",
      "Walking distance from Bus Stand",
      "Direct access from Bandar Road",
    ],
    amenities: [
      "Luxury Club House",
      "Swimming Pool",
      "Gymnasium",
      "Yoga",
      "Library",
      "Mini Theatre",
      "Guest Rooms",
      "Mini Function Hall",
      "Boating",
    ],
  },
  {
    slug: "vuyyuru",
    name: "Royal Millennia — Vuyyuru",
    subtitle: "Signature Row Houses & Wellness Parks",
    status: "Ongoing Project",
    location: "Vuyyuru",
    image: ventureVuyyuruImg,
    videoUrl: videoVuyyuru.url,
    tagline: "A signature ongoing project of luxury row houses & wellness parks.",
    overview:
      "Royal Millennia introduces a majestic grand entrance, cycling tracks, luxury row houses and dedicated sports, kids and yoga parks — a premium address designed for wellness-driven modern living.",
    highlights: [
      "Ongoing Project",
      "Grand Premium Entrance",
      "Luxury Row Houses",
      "Cycling Track",
      "Sports Park",
      "Kids Park",
      "Yoga Park",
      "Premium Master-Planned Layout",
    ],
    amenities: ["Sports Park", "Yoga Park", "Cycling Track", "Kids Park", "Landscaped Gardens"],
  },
  {
    slug: "penamaluru",
    name: "SRR Penamaluru",
    subtitle: "Coming Soon — Future Landmark",
    status: "Upcoming",
    availability: "Few Plots Available",
    location: "Penamaluru, Vijayawada",
    image: venturePenamaluruImg,
    videoUrl: videoPenamaluru.url,
    tagline: "The next SRR landmark — a future investment opportunity.",
    overview:
      "An upcoming flagship community at Penamaluru. Register your interest early to secure priority allotment and pre-launch pricing on our most anticipated venture yet.",
    highlights: [
      "Few Plots Available",
      "Prime Penamaluru Location",
      "Master-Planned Community",
      "Priority Early Bookings",
      "Pre-Launch Advantage",
    ],
    amenities: ["Clubhouse", "Swimming Pool", "Sports Park", "Landscaped Gardens"],
  },
  {
    slug: "ramarapadu",
    name: "SRR Ramarapadu",
    subtitle: "Premium Gated Plotted Community",
    status: "Few Plots Available",
    availability: "Few Plots Available",
    location: "Ramaravarapadu, Vijayawada",
    image: ventureRamarapaduImg,
    videoUrl: videoRamarapadu.url,
    tagline: "A rare address at Ramaravarapadu — limited premium plots remaining.",
    overview:
      "SRR Ramarapadu is a boutique gated community at one of Vijayawada's fastest-growing corridors. With wide CC roads, underground utilities, landscaped avenues and a curated amenity core, it is designed as a future-ready lifestyle address. Only a handful of premium plots remain — reserve yours before the final release.",
    highlights: [
      "Few Plots Available",
      "Prime Ramaravarapadu Location",
      "Wide CC Roads",
      "Underground Drainage & Electricity",
      "Water Pipeline",
      "Compound Wall & Gated Security",
      "Landscaped Central Avenue",
      "Excellent Investment Appreciation",
    ],
    amenities: ["Clubhouse", "Swimming Pool", "Landscaped Gardens", "Kids Park", "Jogging Track"],
  },
];

export function getVenture(slug: string) {
  return VENTURES.find((v) => v.slug === slug);
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/91${COMPANY.phone}?text=${encodeURIComponent(message)}`;
}
