import { Link } from "@tanstack/react-router";
import { MoveRight } from "lucide-react";
import slvPoster from "@/assets/slv-poster.png";
import slvHero from "@/assets/videos/slv-hero.mp4";

/* ── Hero Section ────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background — cinematic scale-down */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={slvPoster}
        className="absolute inset-0 h-full w-full object-fill"
      >
        <source src={slvHero} type="video/mp4" />
      </video>

      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/80" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(180,140,40,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Subtle animated particle lines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-[10%] top-[15%] h-px w-48 opacity-20"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div
          className="absolute right-[8%] bottom-[30%] h-px w-32 opacity-15"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div
          className="absolute left-[55%] top-[8%] h-24 w-px opacity-15"
          style={{ background: "linear-gradient(to bottom, var(--color-gold), transparent)" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-4 text-center text-white">
        {/* Headline with word-by-word reveal and shimmer gold */}
        <Link to="/projects">
          <button className="inline-flex items-center gap-2 animate-fade-up stagger-7 mx-auto rounded-full bg-gradient-gold px-8 py-4 text-sm font-bold text-black hover:shadow-lg hover:shadow-gold/30">
            <p>Explore Our Projects</p> <MoveRight />
          </button>
        </Link>
      </div>
    </section>
  );
}
