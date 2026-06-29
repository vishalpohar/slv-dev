import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";
export type ProjectCategory = "Villa" | "Apartment" | "Plots";

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
    slug: "slv-amaravathi-pride",
    name: "SLV Amaravathi Pride",
    tagline: "Premium gated apartments at the gateway to Amaravati",
    category: "Apartment",
    status: "Ongoing",
    location: "Kesarapalli, Gannavaram",
    city: "Vijayawada",
    priceFrom: 6800000,
    bedrooms: "2 & 3 BHK",
    sqftFrom: 1180,
    sqftTo: 1860,
    launchDate: "Ongoing 2025",
    image: project1,
    gallery: [project1, project3, project2],
    description:
      "SLV Amaravathi Pride is a thoughtfully designed gated community of premium 2 & 3 BHK residences, minutes from Gannavaram Airport and the upcoming capital region. Spacious Vaastu-compliant homes, a grand clubhouse, and lush landscaped commons bring resort-style living to the heart of the Amaravati growth corridor.",
    amenities: [
      "Grand Clubhouse",
      "Swimming Pool",
      "Fully-equipped Gym",
      "Children's Play Area",
      "Landscaped Gardens",
      "Indoor Games Room",
      "24/7 Security & CCTV",
      "Power Backup",
    ],
    specifications: [
      { label: "Structure", value: "RCC framed, seismic compliant" },
      { label: "Flooring", value: "Vitrified double-charged tiles" },
      { label: "Kitchen", value: "Granite platform with SS sink" },
      { label: "Approvals", value: "RERA registered, CRDA approved" },
    ],
    proximity: [
      { label: "Gannavaram Airport", distance: "6 km" },
      { label: "NH-16 Highway", distance: "2 km" },
      { label: "Reputed Schools", distance: "3 km" },
      { label: "Multi-specialty Hospital", distance: "4 km" },
    ],
    floorPlans: [
      { type: "2 BHK", sqft: 1180, image: project1 },
      { type: "3 BHK", sqft: 1860, image: project3 },
    ],
  },
  {
    id: "2",
    slug: "slv-amaravathi-grand",
    name: "SLV Amaravathi Grand",
    tagline: "Landmark high-rise living with curated amenities",
    category: "Apartment",
    status: "Ongoing",
    location: "Ramavarappadu Ring",
    city: "Vijayawada",
    priceFrom: 7500000,
    bedrooms: "2 & 3 BHK",
    sqftFrom: 1240,
    sqftTo: 2050,
    launchDate: "Ongoing 2025",
    image: project3,
    gallery: [project3, project1, project2],
    description:
      "An iconic gated high-rise community on the Ramavarappadu Ring, SLV Amaravathi Grand pairs elegant architecture with a podium-level amenity deck — pool, clubhouse, and green courtyards floating above the city. Every home is crafted for natural light, cross ventilation, and effortless modern living.",
    amenities: [
      "Podium Amenity Deck",
      "Infinity-edge Pool",
      "Clubhouse & Lounge",
      "Landscaped Courtyards",
      "Jogging Track",
      "Multipurpose Hall",
      "High-speed Elevators",
      "Rainwater Harvesting",
    ],
    specifications: [
      { label: "Structure", value: "Shear-wall Mivan technology" },
      { label: "Flooring", value: "Vitrified tiles, granite in lobby" },
      { label: "Lifts", value: "High-speed automatic elevators" },
      { label: "Approvals", value: "RERA registered, bank approved" },
    ],
    proximity: [
      { label: "Ramavarappadu Ring", distance: "0.5 km" },
      { label: "Benz Circle", distance: "5 km" },
      { label: "Vijayawada Railway Stn", distance: "7 km" },
      { label: "City Hospital", distance: "3 km" },
    ],
    floorPlans: [
      { type: "2 BHK", sqft: 1240, image: project3 },
      { type: "3 BHK", sqft: 2050, image: project1 },
    ],
  },
  {
    id: "3",
    slug: "slv-anjani-heights",
    name: "SLV Anjani Heights",
    tagline: "The capital city's first-of-its-kind gated community",
    category: "Apartment",
    status: "Completed",
    location: "Gunadala",
    city: "Vijayawada",
    priceFrom: 5800000,
    bedrooms: "2 & 3 BHK",
    sqftFrom: 1080,
    sqftTo: 1720,
    launchDate: "Delivered",
    image: project1,
    gallery: [project1, project2, project3],
    description:
      "The project that put SLV on the map — Anjani Heights was the first gated community of its kind in Vijayawada. A delivered, fully-occupied landmark of well-planned homes, amenities, and a vibrant resident community that continues to set the benchmark for value and quality.",
    amenities: [
      "Community Clubhouse",
      "Swimming Pool",
      "Gymnasium",
      "Children's Park",
      "Landscaped Greens",
      "Indoor Games",
      "Gated Security",
      "Power Backup",
    ],
    specifications: [
      { label: "Structure", value: "RCC framed structure" },
      { label: "Flooring", value: "Vitrified tile flooring" },
      { label: "Kitchen", value: "Granite platform, ceramic dado" },
      { label: "Status", value: "Completed & occupied" },
    ],
    proximity: [
      { label: "Gunadala Centre", distance: "1 km" },
      { label: "Vijayawada Bus Stand", distance: "4 km" },
      { label: "Schools & Colleges", distance: "2 km" },
      { label: "Government Hospital", distance: "3 km" },
    ],
    floorPlans: [
      { type: "2 BHK", sqft: 1080, image: project1 },
      { type: "3 BHK", sqft: 1720, image: project2 },
    ],
  },
  {
    id: "4",
    slug: "slv-siva-sai-bhadra-gowri-enclave",
    name: "SLV Siva Sai Bhadra Gowri Enclave",
    tagline: "Elegant independent villas in a serene enclave",
    category: "Villa",
    status: "Completed",
    location: "Penamaluru",
    city: "Vijayawada",
    priceFrom: 14500000,
    bedrooms: "3 & 4 BHK",
    sqftFrom: 2200,
    sqftTo: 3400,
    launchDate: "Delivered",
    image: project2,
    gallery: [project2, project1, project3],
    description:
      "A boutique enclave of independent villas wrapped in landscaped privacy. Bhadra Gowri Enclave blends timeless façades with generous interiors, private gardens, and a grand entrance arch — a delivered community of generational family homes.",
    amenities: [
      "Private Garden per Villa",
      "Grand Entrance Arch",
      "Landscaped Avenues",
      "Community Park",
      "Clubhouse",
      "Gated Security",
      "Underground Drainage",
      "Wide Internal Roads",
    ],
    specifications: [
      { label: "Plot Sizes", value: "200 - 300 sq yards" },
      { label: "Flooring", value: "Vitrified & marble flooring" },
      { label: "Facing", value: "East & West facing options" },
      { label: "Status", value: "Completed villas" },
    ],
    proximity: [
      { label: "Penamaluru Junction", distance: "1.5 km" },
      { label: "NH-16 Highway", distance: "3 km" },
      { label: "International School", distance: "2.5 km" },
      { label: "Hospital", distance: "4 km" },
    ],
    floorPlans: [
      { type: "3 BHK Villa", sqft: 2200, image: project2 },
      { type: "4 BHK Villa", sqft: 3400, image: project1 },
    ],
  },
  {
    id: "5",
    slug: "slv-laila-green-meadows",
    name: "SLV Laila Green Meadows",
    tagline: "Garden-side residences amid open green meadows",
    category: "Apartment",
    status: "Ongoing",
    location: "Poranki",
    city: "Vijayawada",
    priceFrom: 6200000,
    bedrooms: "2 & 3 BHK",
    sqftFrom: 1120,
    sqftTo: 1740,
    launchDate: "Ongoing",
    image: project3,
    gallery: [project3, project2, project1],
    description:
      "Set against open green meadows, SLV Laila Green Meadows is designed for families who want nature at their doorstep without leaving the city. Low-density blocks, abundant greenery, and a wholesome amenity mix create a calm, healthy lifestyle.",
    amenities: [
      "Central Green Meadow",
      "Swimming Pool",
      "Open-air Gym",
      "Children's Play Forest",
      "Walking & Jogging Trails",
      "Yoga Lawn",
      "24/7 Security",
      "Solar-ready Roofing",
    ],
    specifications: [
      { label: "Structure", value: "RCC framed structure" },
      { label: "Flooring", value: "Vitrified double-charged tiles" },
      { label: "Open Space", value: "65% open & landscaped" },
      { label: "Approvals", value: "RERA registered" },
    ],
    proximity: [
      { label: "Poranki Centre", distance: "1 km" },
      { label: "Kanaka Durga Flyover", distance: "6 km" },
      { label: "Reputed Schools", distance: "2 km" },
      { label: "Hospital", distance: "3.5 km" },
    ],
    floorPlans: [
      { type: "2 BHK", sqft: 1120, image: project3 },
      { type: "3 BHK", sqft: 1740, image: project1 },
    ],
  },
  {
    id: "6",
    slug: "slv-green-lands",
    name: "SLV Green Lands",
    tagline: "Premium gated plots in a high-growth corridor",
    category: "Plots",
    status: "Upcoming",
    location: "Gannavaram",
    city: "Amaravati Region",
    priceFrom: 3500000,
    bedrooms: "Villa Plots",
    sqftFrom: 1800,
    sqftTo: 4500,
    launchDate: "Launching Soon",
    image: project2,
    gallery: [project2, project3, project1],
    description:
      "SLV Green Lands offers fully-developed, gated villa plots in the fast-appreciating Amaravati capital-region corridor. Ready-to-build parcels with avenue plantation, underground utilities, and clear titles — an ideal foundation for your dream home or a long-term investment.",
    amenities: [
      "Gated Plotted Layout",
      "Avenue Plantation",
      "Underground Drainage",
      "Black-top Internal Roads",
      "Overhead Water Tank",
      "Entrance Arch & Security",
      "Children's Park",
      "Clear Marketable Titles",
    ],
    specifications: [
      { label: "Plot Sizes", value: "200 - 500 sq yards" },
      { label: "Roads", value: "33 ft & 40 ft black-top" },
      { label: "Facing", value: "East, West & North options" },
      { label: "Approvals", value: "DTCP / CRDA approved" },
    ],
    proximity: [
      { label: "Gannavaram Airport", distance: "8 km" },
      { label: "NH-16 Highway", distance: "3 km" },
      { label: "Proposed IT Hub", distance: "10 km" },
      { label: "Upcoming Capital City", distance: "20 km" },
    ],
    floorPlans: [
      { type: "200 Sq Yd Plot", sqft: 1800, image: project2 },
      { type: "500 Sq Yd Plot", sqft: 4500, image: project3 },
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
    name: "Ramesh Babu",
    role: "Owner, SLV Anjani Heights",
    quote:
      "SLV delivered exactly what was promised — on time and with honest documentation. Living in Anjani Heights has been a wonderful experience for our family.",
  },
  {
    name: "Lakshmi Prasanna",
    role: "Resident, SLV Amaravathi Pride",
    quote:
      "The quality of construction and the amenities are far beyond what we expected for the price. The team treated us like family throughout.",
  },
  {
    name: "Venkat Rao",
    role: "Investor, SLV Green Lands",
    quote:
      "Clear titles, great location near Gannavaram, and transparent pricing. SLV has earned my trust for future investments in the Amaravati region.",
  },
];

export const jobOpenings = [
  {
    id: "j1",
    title: "Senior Sales Relationship Manager",
    department: "Sales & Relationship",
    location: "Vijayawada",
    type: "Full-time",
    description:
      "Lead high-value client relationships across our residential portfolio, owning the journey from first enquiry to handover.",
  },
  {
    id: "j2",
    title: "Site Engineer (Civil)",
    department: "Projects & Execution",
    location: "Vijayawada / Amaravati",
    type: "Full-time",
    description:
      "Drive on-site execution quality, timelines, and safety across our ongoing gated community developments.",
  },
  {
    id: "j3",
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Vijayawada",
    type: "Full-time",
    description:
      "Own brand storytelling, performance campaigns, and the digital experience that powers our lead generation.",
  },
];
