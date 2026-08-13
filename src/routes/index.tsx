import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Crown, Award, Shield, TrendingUp, Star } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { PropertyCard } from "@/components/PropertyCard";
import { Reveal } from "@/components/Reveal";
import { projects, testimonials } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import aboutImage from "@/assets/project-1.jpg";
import aboutImage2 from "@/assets/project-2.jpg";
import avatar from "@/assets/testimonials/user-icon.jpg";
import thumbsUp from "@/assets/testimonials/thumbs-up.png";

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
        content:
          "A curated portfolio of luxury villas, penthouses, and residences in India's finest locations.",
      },
    ],
  }),
  component: Index,
});

const philosophy = [
  {
    no: "01",
    icon: Award,
    title: "Unrivaled Quality",
    desc: "Premium-grade materials and industry-leading techniques ensure durability that spans generations.",
  },
  {
    no: "02",
    icon: TrendingUp,
    title: "Strategic Locations",
    desc: "Projects sit on the fastest-growing corridors of Vijayawada and Amaravati for maximum value appreciation.",
  },
  {
    no: "03",
    icon: Shield,
    title: "Absolute Transparency",
    desc: "RERA-approved projects, clear titles, and honest pricing have been our hallmark since 2007.",
  },
  {
    no: "04",
    icon: Crown,
    title: "20 Years of Trusted Legacy",
    desc: "For over two decades, SLV Builders has delivered premium communities built on trust, quality, and customer satisfaction.",
  },
];

const accolades = [
  { text: "20+ Years of Trust", icon: Crown },
  { text: "ISO 9001:2015 Certified", icon: Award },
  { text: "5000+ Happy Families", icon: Shield },
  { text: "CREDAI Member", icon: TrendingUp },
];

function Index() {
  const featured = testimonials[0];
  const ongoingProjects = projects.filter((p) => p.status === "Ongoing");

  return (
    <>
      <HeroSection />

      {/* ── Accolades marquee strip ── */}
      <section className="relative overflow-hidden border-b border-border/60 bg-card py-0">
        {/* Gold accent lines */}
        <div className="absolute inset-x-0 top-0 h-px hairline-gold opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-px hairline-gold opacity-70" />

        <div className="flex overflow-hidden py-4">
          <div className="animate-marquee flex shrink-0 items-center gap-0 whitespace-nowrap">
            {[...accolades, ...accolades, ...accolades, ...accolades].map((a, i) => (
              <span
                key={i}
                className="flex items-center gap-3 px-8 text-[0.72rem] font-bold uppercase tracking-[0.3em] text-muted-foreground"
              >
                <a.icon className="h-3.5 w-3.5 text-gold shrink-0" />
                {a.text}
                <span
                  className="ml-4 h-px w-8 opacity-30"
                  style={{ background: "var(--gradient-gold)" }}
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── About SLV — staggered images ── */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-32 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="relative flex gap-5">
            {/* Ornamental frame lines */}
            <div
              className="absolute -left-6 -top-6 -z-10 h-36 w-36 border-l border-t opacity-40"
              style={{ borderColor: "var(--color-gold)" }}
            />
            <div
              className="absolute -bottom-6 -right-6 -z-10 h-24 w-24 border-r border-b opacity-30"
              style={{ borderColor: "var(--color-gold)" }}
            />

            <div className="flex gap-5 items-end">
              <div className="w-2/3 overflow-hidden rounded-md md:rounded-2xl shadow-2xl">
                <img
                  src={aboutImage}
                  alt="An SLV Builders gated community in the Vijayawada–Amaravati region"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="mt-20 w-1/3 overflow-hidden rounded-md md:rounded-2xl shadow-xl">
                <img
                  src={aboutImage2}
                  alt="Interior detail of an SLV residence"
                  loading="lazy"
                  className="aspect-[3/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 left-8 z-10 rounded-2xl px-5 py-3.5 shadow-2xl backdrop-blur-xl"
              style={{
                background: "var(--gradient-royal)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="font-display text-2xl font-bold text-white">20+</p>
              <p className="text-[0.65rem] uppercase tracking-widest text-white/60">
                Years of Trust
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:pl-6">
          <p className="section-label text-gold">Our Heritage</p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Building Legacies{" "}
            <span className="italic font-normal text-gradient-gold">Since 2007</span>
          </h2>

          {/* Hairline ornament */}
          <div className="mt-8 flex items-center gap-3">
            <div
              className="h-px flex-1 max-w-[60px]"
              style={{ background: "var(--gradient-gold)" }}
            />
            <div className="h-1 w-1 rotate-45 bg-gold" />
          </div>

          <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground">
            At SLV Builders &amp; Developers Pvt Ltd, we don't just build structures — we curate
            lifestyles. Beginning in Bhimavaram in 2007 and entering Vijayawada in 2015 with SLV
            Anjani Heights, we have redefined the skyline of the Amaravati capital region with
            architectural brilliance and structural integrity.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Guided by founder Sri Penmetsa Srinivasa Raju, SLV has delivered 20 residential
            projects, 2 commercial projects, and an educational institute — all built on trust.
          </p>

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              ["20+", "Projects"],
              ["5000+", "Families"],
              ["2", "Commercial"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-secondary/60 p-4 text-center">
                <p className="font-display text-2xl font-bold text-gradient-gold">{n}</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {l}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="group mt-10 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground hover-gold-line"
          >
            <span>Discover Our Story</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-300 group-hover:bg-gradient-gold group-hover:text-gold-foreground group-hover:border-transparent">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </Reveal>
      </section>

      {/* ── Featured projects ── */}
      <section
        className="relative overflow-hidden py-32"
        style={{
          background:
            "linear-gradient(180deg, var(--color-secondary) 0%, var(--color-background) 100%)",
        }}
      >
        {/* Decorative background pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-gold) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 flex flex-col items-baseline justify-between gap-6 sm:flex-row">
            <div>
              <p className="section-label text-gold">Portfolio</p>
              <h2 className="mt-4 font-display text-5xl font-bold text-foreground sm:text-6xl">
                Curated Spaces
              </h2>
              <p className="mt-3 text-sm font-medium text-muted-foreground">
                Exquisite residences in prime locations
              </p>
            </div>
            <Link
              to="/projects"
              search={{ status: undefined }}
              className="group flex items-center gap-2 rounded-full border border-gold/30 px-5 py-2.5 text-sm font-bold text-foreground transition-all duration-300 hover:border-gold hover:bg-gradient-gold hover:text-gold-foreground"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {ongoingProjects.map((p, i) => (
                <CarouselItem key={p.id} className="md:basis-1/2 lg:basis-1/3">
                  <Reveal delay={i * 100}>
                    <PropertyCard project={p} />
                  </Reveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4 lg:-left-6 border-gold/30 text-gold hover:border-gold hover:bg-gold hover:text-gold-foreground bg-background/80 backdrop-blur-sm" />
              <CarouselNext className="-right-4 lg:-right-6 border-gold/30 text-gold hover:border-gold hover:bg-gold hover:text-gold-foreground bg-background/80 backdrop-blur-sm" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* ── The SLV Philosophy — dark royal ── */}
      <section
        className="relative overflow-hidden py-32 text-white"
        style={{ background: "var(--gradient-royal)" }}
      >
        {/* Background glow orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "var(--color-gold)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "var(--color-gold)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="mb-20 text-center">
            <p className="section-label text-gold tracking-[0.35em]">Our Principles</p>
            <h2 className="mt-5 font-display text-5xl font-bold sm:text-6xl">The SLV Philosophy</h2>
            <div className="mx-auto mt-8 flex items-center justify-center gap-4">
              <div
                className="h-px w-12 opacity-50"
                style={{ background: "var(--gradient-gold)" }}
              />
              <div className="h-1.5 w-1.5 rotate-45 bg-gold opacity-70" />
              <div
                className="h-px w-12 opacity-50"
                style={{ background: "var(--gradient-gold)" }}
              />
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div
                  className="group relative h-full rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Hover gold glow */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(135deg, rgba(212,175,55,0.06), transparent)",
                    }}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        background: "rgba(212,175,55,0.12)",
                        border: "1px solid rgba(212,175,55,0.2)",
                      }}
                    >
                      <f.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div className="mt-6 font-display text-6xl italic font-bold text-gold/15">
                      {f.no}
                    </div>
                    <h3 className="mt-2 text-xl font-bold tracking-wide uppercase">{f.title}</h3>
                    <div
                      className="mt-4 h-px w-12 opacity-40"
                      style={{ background: "var(--gradient-gold)" }}
                    />
                    <p className="mt-4 font-light leading-relaxed text-white/60">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial — editorial ── */}
      <section className="relative overflow-hidden mx-auto max-w-5xl px-6 py-32 text-center">
        <Reveal>
          {/* Decorative quote mark */}
          <div className="relative inline-block">
            <Quote className="mx-auto h-12 w-12 text-gold opacity-90" />
            <div
              className="absolute inset-0 blur-xl opacity-30"
              style={{ background: "var(--color-gold)" }}
            />
          </div>

          {/* Gold ornament */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-16 opacity-40" style={{ background: "var(--gradient-gold)" }} />
            <div className="h-1 w-1 rotate-45 bg-gold opacity-60" />
            <div className="h-px w-16 opacity-40" style={{ background: "var(--gradient-gold)" }} />
          </div>

          <blockquote className="mt-10 font-display text-2xl font-semibold italic leading-snug text-foreground sm:text-4xl lg:text-5xl">
            "{featured.quote}"
          </blockquote>

          <div className="mt-12">
            <div
              className="mx-auto h-10 w-10 rounded-full"
              style={{ background: "var(--gradient-gold)", opacity: 0.3 }}
            />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-foreground">
              {featured.name}
            </p>
            <p className="mt-1.5 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              {featured.role}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Testimonial — optional ── */}
      <section className="relative overflow-hidden pb-32 pt-16 sm:pb-40 sm:pt-20 lg:pb-[250px]">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[65%] h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-lime-400/20 blur-[90px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] lg:blur-[120px]" />
          <div className="absolute left-[35%] top-[15%] h-[180px] w-[180px] rounded-full bg-blue-500/15 blur-[70px] sm:h-[230px] sm:w-[230px] lg:left-[45%] lg:h-[260px] lg:w-[260px] lg:blur-[100px]" />
        </div>

        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Main card */}
          <div className="relative mt-14 overflow-visible rounded-[24px] border border-white/15 bg-[#1f1f1f]/80 px-5 pb-24 pt-20 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:mt-20 sm:rounded-[30px] sm:px-10 sm:pb-28 sm:pt-24 lg:mt-24 lg:rounded-[36px] lg:px-16 lg:py-24 lg:pb-28 lg:shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
            {/* Holographic reflections */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[36px]">
              <div className="absolute left-[10%] top-[10%] h-24 w-24 rounded-full bg-blue-500/10 blur-[60px] sm:h-32 sm:w-32 sm:blur-[80px]" />
              <div className="absolute right-[10%] top-[25%] h-28 w-28 rounded-full bg-purple-500/10 blur-[60px] sm:h-40 sm:w-40 sm:blur-[80px]" />
              <div className="absolute bottom-[10%] left-[30%] h-28 w-28 rounded-full bg-lime-400/10 blur-[70px] sm:h-40 sm:w-40 sm:blur-[90px]" />
            </div>

            {/* Avatar */}
            <div className="absolute -top-12 left-5 z-30 sm:-top-14 sm:left-10 lg:-top-16 lg:left-16">
              <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white/20 bg-[#e5e4e0] shadow-2xl sm:h-28 sm:w-28 lg:h-32 lg:w-32 lg:border-[5px]">
                <img src={avatar} alt="Customer" className="h-full w-full object-cover" />
              </div>
            </div>

            {/* Rating pill */}
            <div className="absolute right-4 top-5 z-30 sm:right-8 sm:top-7 lg:right-16 lg:top-8">
              <div className="flex items-center gap-0.5 rounded-full border border-white/15 bg-[#353535]/90 px-3 py-2 shadow-2xl backdrop-blur-xl sm:gap-1 sm:px-5 sm:py-2.5 lg:px-8 lg:py-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Title */}
              <h2
                className="mt-3 text-center text-3xl font-bold leading-tight sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl"
                style={{
                  color: "#C8FF28",
                  textShadow: "0 0 30px rgba(200,255,40,0.35)",
                }}
              >
                A Dream Come True!
              </h2>

              {/* Quote */}
              <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/90 sm:mt-8 sm:text-xl md:text-2xl lg:mt-10 lg:text-3xl">
                I had a truly wonderful experience! I'm absolutely thrilled with the outstanding
                outcome of the project. Everything exceeded my expectations!
              </p>

              {/* Customer */}
              <div className="mt-8 text-center sm:mt-10 lg:mt-12">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white sm:text-sm sm:tracking-[0.35em]">
                  Arjun
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-white/50 sm:text-xs sm:tracking-[0.25em]">
                  House Owner
                </p>
              </div>
            </div>

            {/* Chrome thumbs */}
            <img
              src={thumbsUp}
              alt="Thumbs Up"
              className="pointer-events-none absolute -bottom-8 right-0 z-20 w-[115px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.65)] sm:-bottom-10 sm:w-[160px] md:w-[190px] lg:w-[230px]"
            />
          </div>
        </div>
      </section>

      {/* ── Final CTA — split royal ── */}
      <section className="px-6 pb-24">
        <Reveal
          className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 overflow-hidden rounded-3xl px-10 py-24 text-white md:flex-row md:px-24"
          style={{
            background: "var(--gradient-royal)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Background glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl opacity-25"
            style={{ background: "var(--color-gold)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full blur-3xl opacity-10"
            style={{ background: "var(--color-gold)" }}
          />

          {/* Ornamental corners */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-8 top-8 h-8 w-8 border-l border-t opacity-30"
            style={{ borderColor: "var(--color-gold)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-8 bottom-8 h-8 w-8 border-r border-b opacity-30"
            style={{ borderColor: "var(--color-gold)" }}
          />

          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <p className="section-label text-gold tracking-[0.3em]">Begin Your Journey</p>
            <h2 className="mt-5 font-display text-5xl font-bold sm:text-6xl lg:text-7xl">
              Your Future Awaits
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-white/65">
              Schedule a private viewing of our model homes and experience the pinnacle of luxury
              living in person.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group flex items-center gap-3 rounded-2xl px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-gold-foreground shadow-2xl transition-all duration-300 hover:scale-[1.04] hover:shadow-gold/20"
              style={{ background: "var(--gradient-gold)" }}
            >
              Contact Consultant
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              search={{ status: undefined }}
              className="flex items-center gap-3 rounded-2xl border border-white/20 px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
              Explore Projects
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
