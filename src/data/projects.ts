import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";
export type ProjectCategory = "Villa" | "Apartment" | "Plots" | "Commercial";

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

const images = [project1, project2, project3] as const;

function galleryFor(index: number): string[] {
  const i = (index - 1) % 3;
  return [images[i], images[(i + 1) % 3], images[(i + 2) % 3]];
}

function primaryImage(index: number): string {
  return images[(index - 1) % 3];
}

const apartmentAmenities = [
  "Grand Clubhouse",
  "Swimming Pool",
  "Fully-equipped Gym",
  "Children's Play Area",
  "Landscaped Gardens",
  "Indoor Games Room",
  "24/7 Security & CCTV",
  "Power Backup",
];

const villaAmenities = [
  "Private Garden per Villa",
  "Grand Entrance Arch",
  "Landscaped Avenues",
  "Community Park",
  "Clubhouse",
  "Gated Security",
  "Underground Drainage",
  "Wide Internal Roads",
];

const plotAmenities = [
  "Gated Plotted Layout",
  "Avenue Plantation",
  "Underground Drainage",
  "Black-top Internal Roads",
  "Overhead Water Tank",
  "Entrance Arch & Security",
  "Children's Park",
  "Clear Marketable Titles",
];

const commercialAmenities = [
  "High Visibility Frontage",
  "Dedicated Parking",
  "Power Backup",
  "24/7 Security",
  "Wide Internal Roads",
  "Modern Elevators",
  "Fire Safety Systems",
  "Proximity to Key Hubs",
];

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
    image: primaryImage(1),
    gallery: galleryFor(1),
    description:
      "SLV Amaravathi Pride is a thoughtfully designed gated community of premium 2 & 3 BHK residences, minutes from Gannavaram Airport and the upcoming capital region. Spacious Vaastu-compliant homes, a grand clubhouse, and lush landscaped commons bring resort-style living to the heart of the Amaravati growth corridor.",
    amenities: apartmentAmenities,
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
      { type: "2 BHK", sqft: 1180, image: primaryImage(1) },
      { type: "3 BHK", sqft: 1860, image: primaryImage(2) },
    ],
  },
  {
    id: "2",
    slug: "slv-amaravathi-grand-iii",
    name: "SLV Amaravathi Grand III",
    tagline: "Luxury 3 & 4 BHK residences on Inner Ring Road, Gunadala",
    category: "Apartment",
    status: "Ongoing",
    location: "Inner Ring Road, Gunadala",
    city: "Vijayawada",
    priceFrom: 8100000,
    bedrooms: "3 & 4 BHK",
    sqftFrom: 1650,
    sqftTo: 2400,
    launchDate: "Ongoing 2025",
    image: primaryImage(2),
    gallery: galleryFor(2),
    description:
      "Step into community living at SLV Amaravathi Grand III, where spacious 3 & 4 BHK Vaastu-compliant homes blend modern comforts with serene surroundings. Premium finishes, a grand clubhouse with mini theatre, swimming pool, and indoor sports courts make this a landmark address on Gunadala's Inner Ring Road.",
    amenities: [
      "Mini Theatre",
      "Swimming Pool with Children's Pool",
      "Indoor Badminton Courts",
      "Gymnasium",
      "Multi-purpose Hall",
      "Cafeteria",
      "Guest Suites",
      "Spa & Beauty Saloon",
    ],
    specifications: [
      { label: "Structure", value: "Shear-wall Mivan technology" },
      { label: "Flooring", value: "Premium vitrified tiles" },
      { label: "Configurations", value: "3 & 4 BHK Vaastu compliant" },
      { label: "Approvals", value: "RERA registered" },
    ],
    proximity: [
      { label: "Inner Ring Road", distance: "On corridor" },
      { label: "Benz Circle", distance: "5 km" },
      { label: "Vijayawada Railway Stn", distance: "7 km" },
      { label: "City Hospital", distance: "3 km" },
    ],
    floorPlans: [
      { type: "3 BHK", sqft: 1650, image: primaryImage(2) },
      { type: "4 BHK", sqft: 2400, image: primaryImage(3) },
    ],
  },
  {
    id: "3",
    slug: "slv-amaravathi-grand-ii",
    name: "SLV Amaravathi Grand II",
    tagline: "Landmark high-rise living with curated amenities",
    category: "Apartment",
    status: "Ongoing",
    location: "Gunadala",
    city: "Vijayawada",
    priceFrom: 7500000,
    bedrooms: "2 & 3 BHK",
    sqftFrom: 1240,
    sqftTo: 2050,
    launchDate: "Ongoing",
    image: primaryImage(3),
    gallery: galleryFor(3),
    description:
      "SLV Amaravathi Grand II is an iconic gated high-rise community in Gunadala, pairing elegant architecture with a podium-level amenity deck — pool, clubhouse, and green courtyards. Every home is crafted for natural light, cross ventilation, and effortless modern living.",
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
      { label: "Gunadala Centre", distance: "1 km" },
      { label: "Benz Circle", distance: "5 km" },
      { label: "Vijayawada Railway Stn", distance: "7 km" },
      { label: "City Hospital", distance: "3 km" },
    ],
    floorPlans: [
      { type: "2 BHK", sqft: 1240, image: primaryImage(3) },
      { type: "3 BHK", sqft: 2050, image: primaryImage(1) },
    ],
  },
  {
    id: "4",
    slug: "slv-amaravathi-grand-i",
    name: "SLV Amaravathi Grand I",
    tagline: "The Amaravathi Grand legacy — delivered excellence in Gunadala",
    category: "Apartment",
    status: "Completed",
    location: "Gunadala",
    city: "Vijayawada",
    priceFrom: 7200000,
    bedrooms: "2 & 3 BHK",
    sqftFrom: 1200,
    sqftTo: 1900,
    launchDate: "Delivered",
    image: primaryImage(4),
    gallery: galleryFor(4),
    description:
      "The first chapter of the Amaravathi Grand series, SLV Amaravathi Grand I established the benchmark for gated high-rise living in Vijayawada. A delivered community of well-planned residences with clubhouse amenities and a vibrant resident base.",
    amenities: apartmentAmenities,
    specifications: [
      { label: "Structure", value: "RCC framed structure" },
      { label: "Flooring", value: "Vitrified tile flooring" },
      { label: "Kitchen", value: "Granite platform, ceramic dado" },
      { label: "Status", value: "Completed & occupied" },
    ],
    proximity: [
      { label: "Gunadala Centre", distance: "1 km" },
      { label: "Inner Ring Road", distance: "0.5 km" },
      { label: "Schools & Colleges", distance: "2 km" },
      { label: "Government Hospital", distance: "3 km" },
    ],
    floorPlans: [
      { type: "2 BHK", sqft: 1200, image: primaryImage(4) },
      { type: "3 BHK", sqft: 1900, image: primaryImage(5) },
    ],
  },
  {
    id: "5",
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
    image: primaryImage(5),
    gallery: galleryFor(5),
    description:
      "The project that put SLV on the map — Anjani Heights was the first gated community of its kind in Vijayawada. A delivered, fully-occupied landmark of well-planned homes, amenities, and a vibrant resident community that continues to set the benchmark for value and quality.",
    amenities: apartmentAmenities,
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
      { type: "2 BHK", sqft: 1080, image: primaryImage(5) },
      { type: "3 BHK", sqft: 1720, image: primaryImage(6) },
    ],
  },
  {
    id: "6",
    slug: "slv-green-meadows",
    name: "SLV Green Meadows",
    tagline: "Garden-side residences amid open green meadows",
    category: "Apartment",
    status: "Ongoing",
    location: "Inner Ring Road, Gunadala",
    city: "Vijayawada",
    priceFrom: 6200000,
    bedrooms: "2 & 3 BHK",
    sqftFrom: 1120,
    sqftTo: 1740,
    launchDate: "Ongoing",
    image: primaryImage(6),
    gallery: galleryFor(6),
    description:
      "Set against open green meadows, SLV Green Meadows is designed for families who want nature at their doorstep without leaving the city. Low-density blocks, abundant greenery, and a wholesome amenity mix create a calm, healthy lifestyle behind Innotel Hotel on Gunadala's Inner Ring Road.",
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
      { label: "Gunadala Centre", distance: "1 km" },
      { label: "Kanaka Durga Flyover", distance: "6 km" },
      { label: "Reputed Schools", distance: "2 km" },
      { label: "Hospital", distance: "3.5 km" },
    ],
    floorPlans: [
      { type: "2 BHK", sqft: 1120, image: primaryImage(6) },
      { type: "3 BHK", sqft: 1740, image: primaryImage(7) },
    ],
  },
  {
    id: "7",
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
    image: primaryImage(7),
    gallery: galleryFor(7),
    description:
      "A boutique enclave of independent villas wrapped in landscaped privacy. Bhadra Gowri Enclave blends timeless façades with generous interiors, private gardens, and a grand entrance arch — a delivered community of generational family homes.",
    amenities: villaAmenities,
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
      { type: "3 BHK Villa", sqft: 2200, image: primaryImage(7) },
      { type: "4 BHK Villa", sqft: 3400, image: primaryImage(8) },
    ],
  },
  {
    id: "8",
    slug: "slv-green-lands",
    name: "SLV Green Lands",
    tagline: "Premium gated plots in the Guntupalli growth corridor",
    category: "Plots",
    status: "Upcoming",
    location: "Guntupalli",
    city: "Vijayawada",
    priceFrom: 3500000,
    bedrooms: "Villa Plots",
    sqftFrom: 1800,
    sqftTo: 4500,
    launchDate: "Launching Soon",
    image: primaryImage(8),
    gallery: galleryFor(8),
    description:
      "SLV Green Lands offers fully-developed, gated villa plots in the fast-appreciating Guntupalli corridor. Ready-to-build parcels with avenue plantation, underground utilities, and clear titles — an ideal foundation for your dream home or a long-term investment.",
    amenities: plotAmenities,
    specifications: [
      { label: "Plot Sizes", value: "200 - 500 sq yards" },
      { label: "Roads", value: "33 ft & 40 ft black-top" },
      { label: "Facing", value: "East, West & North options" },
      { label: "Approvals", value: "DTCP / CRDA approved" },
    ],
    proximity: [
      { label: "Guntupalli Centre", distance: "2 km" },
      { label: "NH-16 Highway", distance: "3 km" },
      { label: "Gannavaram Airport", distance: "12 km" },
      { label: "Upcoming Capital City", distance: "20 km" },
    ],
    floorPlans: [
      { type: "200 Sq Yd Plot", sqft: 1800, image: primaryImage(8) },
      { type: "500 Sq Yd Plot", sqft: 4500, image: primaryImage(9) },
    ],
  },
  {
    id: "9",
    slug: "slv-cbn-nagar",
    name: "SLV CBN Nagar",
    tagline: "Well-planned residential layout in a prime Vijayawada locality",
    category: "Plots",
    status: "Ongoing",
    location: "CBN Nagar",
    city: "Vijayawada",
    priceFrom: 2800000,
    bedrooms: "Residential Plots",
    sqftFrom: 1500,
    sqftTo: 3600,
    launchDate: "Ongoing",
    image: primaryImage(9),
    gallery: galleryFor(9),
    description:
      "SLV CBN Nagar is a thoughtfully laid-out residential venture with wide internal roads, avenue plantation, and essential civic infrastructure. An accessible address for families seeking plotted development with SLV's trusted execution standards.",
    amenities: plotAmenities,
    specifications: [
      { label: "Plot Sizes", value: "150 - 300 sq yards" },
      { label: "Roads", value: "30 ft & 40 ft internal roads" },
      { label: "Facing", value: "Multiple facing options" },
      { label: "Approvals", value: "Layout approved" },
    ],
    proximity: [
      { label: "City Centre", distance: "8 km" },
      { label: "NH-16 Highway", distance: "4 km" },
      { label: "Schools", distance: "3 km" },
      { label: "Hospital", distance: "5 km" },
    ],
    floorPlans: [
      { type: "150 Sq Yd Plot", sqft: 1500, image: primaryImage(9) },
      { type: "300 Sq Yd Plot", sqft: 3600, image: primaryImage(10) },
    ],
  },
  {
    id: "10",
    slug: "slv-gsr-layout",
    name: "SLV GSR Layout",
    tagline: "Gated plotted development with clear titles and wide roads",
    category: "Plots",
    status: "Ongoing",
    location: "GSR Layout",
    city: "Vijayawada",
    priceFrom: 3200000,
    bedrooms: "Residential Plots",
    sqftFrom: 1600,
    sqftTo: 4000,
    launchDate: "Ongoing",
    image: primaryImage(10),
    gallery: galleryFor(10),
    description:
      "SLV GSR Layout brings SLV's plotted-development expertise to a well-connected Vijayawada address. Gated entry, landscaped avenues, and underground utilities create a ready foundation for custom dream homes.",
    amenities: plotAmenities,
    specifications: [
      { label: "Plot Sizes", value: "180 - 400 sq yards" },
      { label: "Roads", value: "33 ft black-top avenues" },
      { label: "Facing", value: "East & West facing plots" },
      { label: "Approvals", value: "Layout approved" },
    ],
    proximity: [
      { label: "Main Road", distance: "1 km" },
      { label: "NH-16 Highway", distance: "5 km" },
      { label: "Schools", distance: "2.5 km" },
      { label: "Hospital", distance: "4 km" },
    ],
    floorPlans: [
      { type: "180 Sq Yd Plot", sqft: 1600, image: primaryImage(10) },
      { type: "400 Sq Yd Plot", sqft: 4000, image: primaryImage(11) },
    ],
  },
  {
    id: "11",
    slug: "slv-pnb-apartment",
    name: "SLV PNB Apartment",
    tagline: "Trusted mid-rise residences in a well-connected neighbourhood",
    category: "Apartment",
    status: "Completed",
    location: "Vijayawada",
    city: "Vijayawada",
    priceFrom: 4500000,
    bedrooms: "2 & 3 BHK",
    sqftFrom: 950,
    sqftTo: 1400,
    launchDate: "Delivered",
    image: primaryImage(11),
    gallery: galleryFor(11),
    description:
      "SLV PNB Apartment is a delivered residential community offering practical, well-ventilated 2 & 3 BHK homes. A testament to SLV's early commitment to quality construction and honest delivery in Vijayawada's residential market.",
    amenities: apartmentAmenities,
    specifications: [
      { label: "Structure", value: "RCC framed structure" },
      { label: "Flooring", value: "Vitrified tile flooring" },
      { label: "Kitchen", value: "Granite platform with SS sink" },
      { label: "Status", value: "Completed & occupied" },
    ],
    proximity: [
      { label: "City Centre", distance: "5 km" },
      { label: "Bus Stand", distance: "4 km" },
      { label: "Schools", distance: "2 km" },
      { label: "Hospital", distance: "3 km" },
    ],
    floorPlans: [
      { type: "2 BHK", sqft: 950, image: primaryImage(11) },
      { type: "3 BHK", sqft: 1400, image: primaryImage(12) },
    ],
  },
  {
    id: "12",
    slug: "slv-tummala-complex",
    name: "SLV Tummala Complex",
    tagline: "Commercial spaces in a high-footfall Vijayawada location",
    category: "Commercial",
    status: "Completed",
    location: "Tummala Complex",
    city: "Vijayawada",
    priceFrom: 5500000,
    bedrooms: "Office & Retail",
    sqftFrom: 800,
    sqftTo: 5000,
    launchDate: "Delivered",
    image: primaryImage(12),
    gallery: galleryFor(12),
    description:
      "SLV Tummala Complex is a delivered commercial development offering retail and office spaces in a strategically located Vijayawada address. Built to SLV's construction standards with strong visibility and convenient access.",
    amenities: commercialAmenities,
    specifications: [
      { label: "Usage", value: "Retail & office spaces" },
      { label: "Flooring", value: "Vitrified tiles" },
      { label: "Parking", value: "Dedicated parking bays" },
      { label: "Status", value: "Completed" },
    ],
    proximity: [
      { label: "Main Road", distance: "0.5 km" },
      { label: "City Centre", distance: "6 km" },
      { label: "Bus Stand", distance: "5 km" },
      { label: "Hospital", distance: "4 km" },
    ],
    floorPlans: [
      { type: "Retail Unit", sqft: 800, image: primaryImage(12) },
      { type: "Office Space", sqft: 5000, image: primaryImage(13) },
    ],
  },
  {
    id: "13",
    slug: "slv-pnb-commercial-green-grandeur",
    name: "SLV PNB Commercial-1 & Green Grandeur",
    tagline: "Premium commercial and mixed-use development by SLV",
    category: "Commercial",
    status: "Completed",
    location: "Vijayawada",
    city: "Vijayawada",
    priceFrom: 6000000,
    bedrooms: "Commercial & Retail",
    sqftFrom: 1000,
    sqftTo: 6000,
    launchDate: "Delivered",
    image: primaryImage(13),
    gallery: galleryFor(13),
    description:
      "SLV PNB Commercial-1 & Green Grandeur represents SLV's foray into premium commercial real estate — combining high-street retail frontage with modern office configurations. A delivered asset in Vijayawada's commercial landscape.",
    amenities: commercialAmenities,
    specifications: [
      { label: "Usage", value: "Commercial & mixed-use" },
      { label: "Flooring", value: "Premium vitrified & granite" },
      { label: "Frontage", value: "High-visibility road frontage" },
      { label: "Status", value: "Completed" },
    ],
    proximity: [
      { label: "Main Road", distance: "On corridor" },
      { label: "City Centre", distance: "5 km" },
      { label: "Railway Station", distance: "7 km" },
      { label: "Hospital", distance: "3 km" },
    ],
    floorPlans: [
      { type: "Retail Space", sqft: 1000, image: primaryImage(13) },
      { type: "Commercial Floor", sqft: 6000, image: primaryImage(1) },
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
      "Clear titles, great location near Guntupalli, and transparent pricing. SLV has earned my trust for future investments in the Amaravati region.",
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
