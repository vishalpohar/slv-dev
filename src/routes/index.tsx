import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";
import { projects, testimonials } from "@/data/projects";
import aboutImage from "@/assets/project-1.jpg";
import aboutImage2 from "@/assets/project-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SLV Builders & Developers — Premium Homes in Vijayawada & Amaravati" },
      {
        name: "description",
        content:
          "Discover premium villas, penthouses, and residences by SLV Builders & Developers. Crafted architecture, world-class amenities, and a seamless buying journey.",
      },
      { property: "og:title", content: "SLV Builders & Developers — Luxury Real Estate" },
      {
        property: "og:description",
        content: "A curated portfolio of luxury villas, penthouses, and residences in India's finest locations.",
      },
    ],
  }),
  component: Index,
});

const philosophy = [
  {
    no: "01",
    title: "Unrivaled Quality",
    desc: "Premium-grade materials and industry-leading techniques ensure durability that spans generations.",
  },
  {
    no: "02",
    title: "Strategic Locations",
    desc: "Projects sit on the fastest-growing corridors of Vijayawada and Amaravati for maximum value appreciation.",
  },
  {
    no: "03",
    title: "Absolute Transparency",
    desc: "RERA-approved projects, clear titles, and honest pricing have been our hallmark since 2007.",
  },
];

const accolades = ["18+ Years of Trust", "ISO 9001:2015 Certified", "5000+ Happy Families", "CREDAI Member"];

function Index() {
  const featured = testimonials[0];

  return (
    <>
      <HeroSection />

      {/* Accolades strip */}
      <section className="border-b border-border bg-card py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:justify-between">
          {accolades.map((a) => (
            <div key={a} className="flex items-center gap-3">
              <span className="text-lg leading-none text-gold">•</span>
              {a}
            </div>
          ))}
        </div>
      </section>

      {/* About SLV intro — staggered images */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="relative flex gap-4">
            <div className="absolute -left-8 -top-8 -z-10 h-40 w-40 border-l border-t border-gold/30" />
            <div className="w-2/3 overflow-hidden rounded-sm shadow-2xl">
              <img
                src={aboutImage}
                alt="An SLV Builders gated community in the Vijayawada–Amaravati region"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="mt-20 w-1/3 overflow-hidden rounded-sm shadow-xl">
              <img
                src={aboutImage2}
                alt="Interior detail of an SLV residence"
                loading="lazy"
                className="aspect-[3/5] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:pl-8">
          <p className="section-label text-gold">Our Heritage</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            Building Legacies Since 2007
          </h2>
          <p className="mt-8 text-lg font-light leading-relaxed text-muted-foreground">
            At SLV Builders &amp; Developers Pvt Ltd, we don't just build structures — we curate lifestyles.
            Beginning in Bhimavaram in 2007 and entering Vijayawada in 2015 with SLV Anjani Heights, we have
            redefined the skyline of the Amaravati capital region with architectural brilliance and structural
            integrity.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Guided by founder Sri Penmetsa Srinivasa Raju, SLV has delivered 20 residential projects, 2 commercial
            projects, and an educational institute — all built on trust.
          </p>
          <Link
            to="/about"
            className="group mt-10 inline-flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-foreground"
          >
            <span className="border-b-2 border-gold pb-1">Discover Our Story</span>
            <span className="h-px w-10 bg-gold transition-all duration-500 group-hover:w-16" />
          </Link>
        </Reveal>
      </section>

      {/* Featured projects — Curated Spaces */}
      <section className="bg-secondary/40 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 flex flex-col items-baseline justify-between gap-6 sm:flex-row">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Curated Spaces</h2>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Exquisite residences in prime locations
              </p>
            </div>
            <Link
              to="/projects"
              className="group flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <PropertyCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The SLV Philosophy */}
      <section className="relative overflow-hidden bg-gradient-obsidian py-28 text-background">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gold/5 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="mb-20 text-center">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">The SLV Philosophy</h2>
            <div className="mx-auto mt-8 h-0.5 w-20 bg-gold" />
          </Reveal>
          <div className="grid gap-16 md:grid-cols-3">
            {philosophy.map((f, i) => (
              <Reveal key={f.title} delay={i * 90} className="text-center">
                <div className="font-display text-4xl italic text-gold/30">{f.no}</div>
                <h3 className="mt-8 text-xl font-bold uppercase tracking-wide">{f.title}</h3>
                <p className="mt-4 font-light leading-relaxed text-background/65">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial — editorial */}
      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <Reveal>
          <Quote className="mx-auto h-10 w-10 text-gold" />
          <blockquote className="mt-8 font-display text-2xl leading-snug text-foreground sm:text-4xl">
            "{featured.quote}"
          </blockquote>
          <div className="mt-12">
            <p className="text-xs font-bold uppercase tracking-widest text-foreground">{featured.name}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{featured.role}</p>
          </div>
        </Reveal>
      </section>

      {/* Final CTA — split */}
      <section className="px-6 pb-24">
        <Reveal className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 overflow-hidden rounded-sm bg-gradient-obsidian px-10 py-20 text-background md:flex-row md:px-24">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h2 className="font-display text-4xl font-bold sm:text-6xl">Your Future Awaits</h2>
            <p className="mt-6 text-lg font-light text-background/70">
              Schedule a private viewing of our model homes and experience the pinnacle of luxury living in person.
            </p>
          </div>
          <div className="relative z-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-sm bg-gradient-gold px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] text-gold-foreground shadow-2xl transition-transform hover:scale-[1.03]"
            >
              Contact Consultant
            </Link>
            <Link
              to="/projects"
              className="rounded-sm border border-white/20 px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] text-background transition-colors hover:bg-white/10"
            >
              Explore Projects
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
