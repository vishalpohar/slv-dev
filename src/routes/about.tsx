import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Rocket, PenTool, ArrowRight, Quote, Award, Trophy, Medal, ShieldCheck, Star, Users, Handshake, Sparkles, HardHat, Building2 } from "lucide-react";
//npimport { Eye, Rocket, PenTool, ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImage from "@/assets/about_slv.jpg";
import amaravathi from "@/assets/amaravathi.png";
import journey2 from "@/assets/project-2.jpg";
import journey3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — SLV Builders & Developers" },
      {
        name: "description",
        content:
          "Since 2007, SLV Builders & Developers has crafted trusted homes across Bhimavaram, Vijayawada, and the Amaravati region — built on the 4 Ts: Trust, Teamwork, Timely Delivery, and Transparency.",
      },
      { property: "og:title", content: "About SLV Builders & Developers" },
      {
        property: "og:description",
        content: "20 years of building trusted homes across Andhra Pradesh.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: AboutPage,
});

const stats = [
  ["20+", "Residential Projects"],
  ["2", "Commercial Projects"],
  ["5,000+", "Happy Families"],
  ["100%", "RERA Approved"],
];

const pillars = [
  { letter: "T", title: "Trust", desc: "Earned at every handshake, walkthrough, and handover." },
  { letter: "T", title: "Teamwork", desc: "Architects, engineers, and managers moving as one." },
  {
    letter: "T",
    title: "Timely Delivery",
    desc: "Every project handed over on the promised date.",
  },
  { letter: "T", title: "Transparency", desc: "Clear titles, clear pricing, and no surprises." },
];

const journey = [
  {
    year: "2007",
    title: "Where It All Began",
    img: amaravathi,
    desc: "SLV Group was founded in Bhimavaram with a single intent — providing affordable housing and lands to families who dreamed of a home of their own.",
  },
  {
    year: "2015",
    title: "Into the Capital City",
    img: journey2,
    desc: "With over a decade of trust and excellence, SLV entered Vijayawada under the divine blessings of **Sri Mavullamma Thalli**, introducing **SLV Anjani Heights**—the capital region's first premium gated community, setting a new benchmark for modern living.",
  },
  {
    year: "Today",
    title: "A Name People Trust",
    img: journey3,
    desc: "With 20 residential projects, 2 commercial projects, and an educational institute, SLV is a proud member of CREDAI–Vijayawada, IGBC, and NAREDCO — every project RERA approved.",
  },
];
const awards = [
  {
    icon: Trophy,
    year: "2023",
    title: "Developer of the Year — Andhra Pradesh",
    body: "Recognised by the Real Estate Excellence Council for consistent on-time delivery across residential portfolios.",
  },
  {
    icon: Award,
    year: "2022",
    title: "Best Gated Community Project",
    body: "Awarded to SLV Anjani Heights for design innovation, green cover, and community-first amenities.",
  },
  {
    icon: ShieldCheck,
    year: "2021",
    title: "RERA Compliance Excellence",
    body: "100% RERA-approved portfolio recognised for transparent titles, disclosures, and buyer protection.",
  },
  {
    icon: Medal,
    year: "2020",
    title: "CREDAI Quality Construction Award",
    body: "Honoured by CREDAI–Vijayawada for engineering standards and structural quality benchmarks.",
  },
  {
    icon: Star,
    year: "2019",
    title: "Customer Trust Award",
    body: "Voted among the most trusted builders in the Amaravati region by homeowner surveys.",
  },
  {
    icon: Sparkles,
    year: "2018",
    title: "IGBC Green Building Recognition",
    body: "Acknowledged by the Indian Green Building Council for sustainable design and material choices.",
  },
];

const workWithUs = [
  {
    icon: Users,
    title: "Home Buyers",
    desc: "Discover RERA-approved apartments, villas, and plots crafted around your family's next chapter.",
    cta: "Explore Projects",
  },
  {
    icon: Handshake,
    title: "Channel Partners",
    desc: "Partner with a 19-year-old brand known for transparent pricing, timely delivery, and reliable payouts.",
    cta: "Become a Partner",
  },
  {
    icon: HardHat,
    title: "Contractors & Vendors",
    desc: "Join our approved supplier network for civil, MEP, interiors, and material supply across active sites.",
    cta: "Get Empanelled",
  },
  {
    icon: Building2,
    title: "Landowners",
    desc: "Unlock the value of your land through joint developments with a builder trusted by 5,000+ families.",
    cta: "Propose a Site",
  },
];


function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* ---------- Legacy Hero ---------- */}
      <section className="mx-auto max-w-7xl px-6 pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="section-label text-gold">About SLV Developers</p>
            <h1 className="mt-6 font-display leading-tight text-foreground">
              <span className="inline-flex items-end gap-2 overflow-visible">
                <span
                  className="-mb-1 text-[3rem] italic font-medium text-gradient-gold sm:text-[4rem] lg:text-[4.5rem]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  near
                </span>

                <span className="-mb-3 text-[7rem] font-semibold leading-none text-gradient-gold drop-shadow-[0_6px_34px_rgba(212,175,55,0.42)] sm:text-[10rem] lg:text-[11rem]">
                  20
                </span>
              </span>

              <span className="block text-2xl italic tracking-[0.15em] text-foreground/80 sm:text-4xl">
                years of
              </span>

              <span className="block text-4xl font-bold uppercase tracking-tight sm:text-6xl">
                Trusted Legacy
              </span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-[var(--glass-shadow)]">
                <img
                  src={heroImage}
                  alt="An SLV residential landmark at twilight"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl glass p-5">
                <p className="text-sm leading-relaxed text-foreground/80">
                  SLV Group had its inception in <span className="font-semibold">2007</span> in
                  Bhimavaram with the intent of providing affordable housing and lands.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Statement ---------- */}
      <section className="mx-auto mt-28 max-w-5xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl">
            Building Trust for <span className="text-gradient-gold">Generations</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            With the able guidance and commitment of its founder, Sri Penmetsa Srinivasa Raju, SLV
            Group has grown across every format of construction. Owing to the patronage of loyal
            clients and the good word of mouth from buyers, SLV continues to set new benchmarks with
            quality construction — reaching the maximum audience while never compromising on the
            details that turn a building into a home.
          </p>
        </Reveal>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="mx-auto mt-20 max-w-7xl px-6">
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-gradient-obsidian text-background sm:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={l} className="px-8 py-12 text-center">
                <p className="font-display text-4xl font-bold text-gold sm:text-5xl">{n}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-background/60">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- Vision & Mission ---------- */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-card p-9 neu">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                Our Vision
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To become the first choice for those who wish to acquire a dream property — and the
                sought-after name in the construction industry.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-3xl bg-card p-9 neu">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground">
                <Rocket className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                Our Mission
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To evolve with our customers' requirements, providing them contemporary, sustainable
                dwellings through the highest standards of quality and workmanship.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Brand Pillars (4 Ts) ---------- */}
      <section className="mx-auto mt-28 max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="section-label text-gold">Our Philosophy</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-5xl">
              Built on the <span className="text-gradient-gold">4 Ts</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              The foundation of SLV Group rests on four enduring principles.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-gradient-obsidian p-8 text-background">
                <span className="font-display text-7xl font-bold text-gold/25 transition-colors group-hover:text-gold/40">
                  {p.letter}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/65">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Our Journey ---------- */}
      <section className="mx-auto mt-28 max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="section-label text-gold">Our Journey</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-5xl">
                A Journey Through the Years
              </h2>
            </div>
            <Link
              to="/projects"
              search={{ status: undefined }}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              Explore Our Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 space-y-16">
          {journey.map((j, i) => (
            <Reveal key={j.year}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-[2rem] shadow-[var(--glass-shadow)]">
                  <img
                    src={j.img}
                    alt={j.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div>
                  <span className="font-display text-6xl font-bold text-gold/30 sm:text-7xl">
                    {j.year}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                    {j.title}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{j.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

            {/* ---------- Awards & Recognition ---------- */}
      <section className="mx-auto mt-28 max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="section-label text-gold">Recognition</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-5xl">
              Awards & <span className="text-gradient-gold">Recognition</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Milestones earned through trust, timely delivery, and uncompromised quality.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-card p-8 neu">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-3xl font-bold text-gold/30 transition-colors group-hover:text-gold/50">
                      {a.year}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>


      {/* ---------- Founder quote ---------- */}
      <section className="mx-auto mt-28 max-w-4xl px-6">
        <Reveal>
          <div className="relative rounded-[2rem] glass p-10 text-center sm:p-14">
            <Quote className="mx-auto h-9 w-9 text-gold" />
            <p className="mt-6 font-display text-2xl italic leading-relaxed text-foreground sm:text-3xl">
              “We don't just build structures — we build relationships that last generations.”
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Sri Penmetsa Srinivasa Raju · Founder, SLV Group
            </p>
          </div>
        </Reveal>
      </section>

            {/* ---------- Work With Us ---------- */}
      <section className="mx-auto mt-28 max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="section-label text-gold">Collaborate</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-5xl">
              Work <span className="text-gradient-gold">With Us</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Whether you're buying a home, partnering on sales, supplying our sites, or bringing us
              your land — there's a place for you in the SLV story.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workWithUs.map((w, i) => {
            const Icon = w.icon;
            return (
              <Reveal key={w.title} delay={i * 100}>
                <div className="group flex h-full flex-col rounded-3xl bg-gradient-obsidian p-8 text-background">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold ring-1 ring-gold/30">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{w.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-background/65">{w.desc}</p>
                  <Link
                    to="/contact"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                  >
                    {w.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>


      {/* ---------- CTA ---------- */}
      <section className="mx-auto mt-24 max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-obsidian px-8 py-16 text-center text-background sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
            />
            <h2 className="relative font-display text-3xl font-bold sm:text-5xl">
              Let's Build Your Future Together
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-background/70">
              Connect with our team to find a home that matches your aspirations.
            </p>
            <Link
              to="/contact"
              className="relative mt-8 inline-flex rounded-xl bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.03]"
            >
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
