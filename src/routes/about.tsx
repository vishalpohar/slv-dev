import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Award, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — SLV Builders & Developers" },
      {
        name: "description",
        content:
          "Since 2007, SLV Builders & Developers has crafted trusted homes across Bhimavaram, Vijayawada, and the Amaravati region — built on integrity, quality, and timely delivery.",
      },
      { property: "og:title", content: "About SLV Builders & Developers" },
      { property: "og:description", content: "18+ years of building trusted homes across Andhra Pradesh." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Our Mission", desc: "To provide affordable, high-quality homes and gated communities that families are proud to own for generations." },
  { icon: Eye, title: "Our Vision", desc: "To be the most trusted name in real estate across Vijayawada and the Amaravati capital region." },
  { icon: Award, title: "Our Promise", desc: "Transparent dealings, clear titles, and on-time delivery — on every single project." },
];

const stats = [
  ["2007", "Founded in Bhimavaram"],
  ["20+", "Residential Projects"],
  ["2", "Commercial Projects"],
  ["5,000+", "Happy Families"],
];

function AboutPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="section-label text-gold">Our Story</p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-6xl">
          Building Legacies, <span className="text-gradient-gold">Not Just Buildings</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          SLV Group began in 2007 in Bhimavaram with a simple intent — affordable, quality housing.
          In 2015 we entered Vijayawada with Anjani Heights, the city's first gated community of its
          kind, and have since grown into a trusted name across the Amaravati capital region.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid gap-4 rounded-[2rem] bg-gradient-obsidian px-8 py-12 text-background sm:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l} className="text-center">
              <p className="font-display text-4xl font-bold text-gold">{n}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-background/60">{l}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl bg-card p-8 neu">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground">
                <v.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold text-foreground">{v.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-4xl px-6">
        <div className="rounded-3xl glass p-8 sm:p-12">
          <Users className="h-8 w-8 text-gold" />
          <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">Crafted by People Who Care</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Behind every SLV address is a team of architects, engineers, and relationship managers who treat
            each project as their own home. We believe luxury is not just marble and glass — it's the trust we
            earn at every handshake, walkthrough, and handover.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-xl bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}
