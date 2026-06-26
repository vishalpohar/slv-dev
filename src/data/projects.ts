import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";
export type ProjectCategory = "Villa" | "Penthouse" | "Apartment";

export interface ProjectAmenity {
  label: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  location: string;
  city: string;
  priceFrom: number; // in INR
  bedrooms: string;
  sqftFrom: number;
  sqftTo: number;
  launchDate: string;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  specifications: { label: string; value: string }[];
  proximity: { label: string; distance: string }[];
  floorPlans: { type: string; sqft: number; image: string }[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "the-obsidian-residences",
    name: "The Obsidian Residences",
    tagline: "Sky-high penthouses with infinity horizons",
    category: "Penthouse",
    status: "Ongoing",
    location: "Knowledge City, Gachibowli",
    city: "Hyderabad",
    priceFrom: 42000000,
    bedrooms: "3 & 4 BHK",
    sqftFrom: 2800,
    sqftTo: 4600,
    launchDate: "Q1 2025",
    image: project1,
    gallery: [project1, project3, project2],
    description:
      "The Obsidian Residences redefine vertical luxury with double-height penthouses, private sky decks, and panoramic glass facades that dissolve the boundary between living space and skyline. Every residence is crafted for those who measure success in altitude.",
    amenities: [
      "Infinity Edge Pool",
      "Smart Home Automation",
      "Private Sky Lounge",
      "Concierge Services",
      "Wellness Spa & Sauna",
      "EV Charging Bays",
      "Co-working Sky Studio",
      "Landscaped Terraces",
    ],
    specifications: [
      { label: "Structure", value: "RCC framed, seismic zone compliant" },
      { label: "Flooring", value: "Imported Italian marble" },
      { label: "Windows", value: "Double-glazed acoustic glass" },
      { label: "Kitchen", value: "Modular with quartz countertops" },
    ],
    proximity: [
      { label: "International Airport", distance: "28 km" },
      { label: "Tech Hub (HITEC City)", distance: "4 km" },
      { label: "International Schools", distance: "2.5 km" },
      { label: "Multi-specialty Hospital", distance: "3 km" },
    ],
    floorPlans: [
      { type: "3 BHK", sqft: 2800, image: project1 },
      { type: "4 BHK", sqft: 4600, image: project3 },
    ],
  },
  {
    id: "2",
    slug: "alabaster-villas",
    name: "Alabaster Villas",
    tagline: "Private estates wrapped in landscaped serenity",
    category: "Villa",
    status: "Completed",
    location: "Kokapet Special Reserve",
    city: "Hyderabad",
    priceFrom: 68000000,
    bedrooms: "4 & 5 BHK",
    sqftFrom: 4200,
    sqftTo: 7200,
    launchDate: "Delivered 2024",
    image: project2,
    gallery: [project2, project1, project3],
    description:
      "A gated enclave of 42 bespoke villas, each set within private gardens and crowned by a personal pool. Alabaster Villas merge timeless architecture with intelligent living, offering generational homes for India's most discerning families.",
    amenities: [
      "Private Pool per Villa",
      "Home Theatre Provision",
      "Landscaped Gardens",
      "Clubhouse & Lounge",
      "24/7 Gated Security",
      "Tennis & Squash Courts",
      "Children's Play Forest",
      "Solar-ready Roofing",
    ],
    specifications: [
      { label: "Plot Sizes", value: "350 - 600 sq yards" },
      { label: "Flooring", value: "Engineered wood & marble" },
      { label: "Ceiling Height", value: "11 ft living spaces" },
      { label: "Parking", value: "3-4 covered car bays" },
    ],
    proximity: [
      { label: "ORR Exit", distance: "1.2 km" },
      { label: "Financial District", distance: "6 km" },
      { label: "International Schools", distance: "4 km" },
      { label: "Premium Hospital", distance: "5 km" },
    ],
    floorPlans: [
      { type: "4 BHK", sqft: 4200, image: project2 },
      { type: "5 BHK", sqft: 7200, image: project1 },
    ],
  },
  {
    id: "3",
    slug: "celeste-towers",
    name: "Celeste Towers",
    tagline: "Twin towers of refined urban living",
    category: "Apartment",
    status: "Upcoming",
    location: "Manchirevula, Narsingi",
    city: "Hyderabad",
    priceFrom: 18500000,
    bedrooms: "2 & 3 BHK",
    sqftFrom: 1450,
    sqftTo: 2350,
    launchDate: "Q3 2025",
    image: project3,
    gallery: [project3, project2, project1],
    description:
      "Celeste Towers bring elevated everyday living to the heart of the city — two soaring towers connected by a sky bridge, surrounded by curated retail, wellness, and green commons. Designed for professionals who want the city at their feet.",
    amenities: [
      "Sky Bridge Lounge",
      "Rooftop Infinity Pool",
      "Fully-equipped Gym",
      "Retail Promenade",
      "Amphitheatre",
      "Pet Park",
      "Business Centre",
      "Rainwater Harvesting",
    ],
    specifications: [
      { label: "Structure", value: "Mivan shear-wall technology" },
      { label: "Flooring", value: "Vitrified double-charged tiles" },
      { label: "Lifts", value: "High-speed automatic elevators" },
      { label: "Kitchen", value: "Granite platform, modular ready" },
    ],
    proximity: [
      { label: "Outer Ring Road", distance: "2 km" },
      { label: "IT Corridor", distance: "7 km" },
      { label: "Reputed Schools", distance: "1.5 km" },
      { label: "City Hospital", distance: "3.5 km" },
    ],
    floorPlans: [
      { type: "2 BHK", sqft: 1450, image: project3 },
      { type: "3 BHK", sqft: 2350, image: project2 },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const formatPrice = (value: number): string => {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)} L`;
  return `₹${value.toLocaleString("en-IN")}`;
};

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Owner, Alabaster Villas",
    quote:
      "From the first walkthrough to handover, SLV delivered an experience worthy of the home itself. Impeccable craftsmanship.",
  },
  {
    name: "Priya Nair",
    role: "Investor, Celeste Towers",
    quote:
      "The transparency and attention to detail were unmatched. SLV treats every buyer like a long-term partner.",
  },
  {
    name: "Rohan Kapoor",
    role: "Resident, Obsidian Residences",
    quote:
      "Living here feels like living above the city. The finishes and amenities exceed anything else in the market.",
  },
];

export const jobOpenings = [
  {
    id: "j1",
    title: "Senior Sales Relationship Manager",
    department: "Sales & Relationship",
    location: "Hyderabad",
    type: "Full-time",
    description:
      "Lead high-value client relationships across our luxury portfolio, owning the journey from first enquiry to handover.",
  },
  {
    id: "j2",
    title: "Architectural Project Lead",
    department: "Design & Projects",
    location: "Hyderabad",
    type: "Full-time",
    description:
      "Drive design intent and execution quality across ongoing developments in collaboration with consultants.",
  },
  {
    id: "j3",
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "Hyderabad / Remote",
    type: "Full-time",
    description:
      "Own brand storytelling, performance campaigns, and the digital experience that powers lead generation.",
  },
];
