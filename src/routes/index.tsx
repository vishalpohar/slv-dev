import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Gem, Building, HeartHandshake, Quote, Star, Award, CheckCircle2 } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";
import { projects, testimonials } from "@/data/projects";
import aboutImage from "@/assets/project-1.jpg";

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

const whyChooseUs = [
  { icon: Gem, title: "Quality Construction", desc: "Premium materials, modern engineering, and finishes built to last for generations." },
  { icon: ShieldCheck, title: "Clear & Legal Titles", desc: "RERA-approved projects with transparent pricing and fully verified documentation." },
  { icon: Building, title: "Prime Locations", desc: "Gated communities along Vijayawada and Amaravati's fastest-growing corridors." },
  { icon: HeartHandshake, title: "On-Time Delivery", desc: "A trusted track record since 2007 of handing over homes as promised." },
];

const accolades = [
  "RERA Certified",
  "CREDAI Member",
  "ISO 9001:2015",
  "Realty+ Excellence Award",
  "Times Business Awards",
  "IGBC Green Homes",
];

function Index() {
  return (
    <>
      <HeroSection />

      {/* Accolades marquee */}
      <section className="border-y border-border/60 bg-card py-6">
        <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
            {[...accolades, ...accolades].map((a, i) => (
              <span key={i} className="flex shrink-0 items-center gap-2.5 text-sm font-medium tracking-wide text-muted-foreground">
                <Award className="h-4 w-4 text-gold" />
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About SLV intro */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-gold opacity-10 blur-2xl" />
              <img
                src={aboutImage}
                alt="An SLV Builders gated community in the Vijayawada–Amaravati region"
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-[2rem] object-cover neu"
              />
              <div className="absolute bottom-6 left-6 rounded-2xl glass px-6 py-4 text-background">
                <p className="font-display text-3xl font-bold text-gold">2007</p>
                <p className="text-xs uppercase tracking-wider text-background/80">Building trust since</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="section-label text-gold">About SLV Developers</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Affordable, Quality Homes — <span className="text-gradient-gold">Crafted with Trust</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              SLV Group began in 2007 in Bhimavaram with a simple intent — providing affordable housing
              and lands. After building a strong brand over a decade, SLV entered Vijayawada in 2015 with
              <span className="font-medium text-foreground"> SLV Anjani Heights</span>, the capital city's
              first gated community of its kind.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Guided by founder Sri Penmetsa Srinivasa Raju and the patronage of loyal clients, SLV has
              grown to deliver 20 residential projects, 2 commercial projects, and an educational
              institute across the Amaravati capital region.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "20+ Residential Projects",
                "2 Commercial Projects",
                "RERA-Approved & Clear Titles",
                "On-Time, Trusted Delivery",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.03]"
            >
              Know More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>


      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <div>
            <p className="section-label text-gold">Featured Portfolio</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold text-foreground sm:text-5xl">
              Signature Residences
            </h2>
          </div>
          <Link
            to="/projects"
            className="group flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <PropertyCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-gradient-obsidian py-24 text-background">
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="section-label text-gold">The SLV Difference</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
              Why Discerning Families Choose Us
            </h2>
            <div className="mx-auto mt-6 w-24 hairline-gold" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 90}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground transition-transform duration-300 group-hover:scale-110">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/65">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label text-gold">Voices of Trust</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-5xl">
            Loved by Homeowners
          </h2>
          <div className="mx-auto mt-6 w-24 hairline-gold" />
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="h-full rounded-3xl bg-card p-8 neu transition-transform duration-300 hover:-translate-y-1.5">
                <Quote className="h-8 w-8 text-gold" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-lg font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-obsidian px-8 py-16 text-center text-background sm:px-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
          <p className="section-label text-gold">Begin Your Journey</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold sm:text-5xl">
            Your Landmark Address Awaits
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-background/70">
            Schedule a private viewing with our relationship team and step into a home crafted around you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.03]"
            >
              Book a Private Viewing
            </Link>
            <Link
              to="/projects"
              className="rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-white/10"
            >
              Explore Projects
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
