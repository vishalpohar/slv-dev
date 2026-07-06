import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Sparkles, MapPin, Building2, Wallet, Activity, X, Send, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-1.jpg";
import { OPEN_AI_ASSISTANT_EVENT } from "@/components/AIAssistant";

const propertyTypes = ["Any Type", "Apartment", "Villa", "Plots"];
const budgets = ["Any Budget", "₹30 - 60 L", "₹60 L - 1 Cr", "₹1 Cr +"];
const statuses = ["Any Status", "Ongoing", "Completed", "Upcoming"];

function SelectChip({
  icon: Icon,
  label,
  options,
}: {
  icon: typeof MapPin;
  label: string;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(options[0]);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="group flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left text-sm transition-all duration-200 hover:bg-secondary/50"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-gold shadow-sm">
          <Icon className="h-3.5 w-3.5 text-gold-foreground" />
        </span>
        <span className="flex flex-1 flex-col">
          <span className="text-[0.63rem] font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
          <span className="font-medium text-foreground">{value}</span>
        </span>
        <ChevronDown className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-20 mt-2 w-48 animate-fade-up rounded-2xl glass shadow-2xl border border-white/50 p-1.5">
          {options.map((o) => (
            <button
              key={o}
              onClick={() => {
                setValue(o);
                setOpen(false);
              }}
              className={cn(
                "block w-full rounded-xl px-4 py-2.5 text-left text-sm transition-all duration-200",
                value === o
                  ? "bg-gradient-gold text-gold-foreground font-semibold"
                  : "text-foreground hover:bg-secondary",
              )}
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function HeroSection() {


  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Hero image with ken-burns */}
      <img
        src={heroImg}
        alt="Luxury SLV residence at golden dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full animate-ken-burns object-cover"
      />

      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/80" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(180,140,40,0.12) 0%, transparent 65%)" }} />

      {/* Subtle animated particle lines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[15%] h-px w-48 opacity-20" style={{ background: "var(--gradient-gold)" }} />
        <div className="absolute right-[8%] bottom-[30%] h-px w-32 opacity-15" style={{ background: "var(--gradient-gold)" }} />
        <div className="absolute left-[55%] top-[8%] h-24 w-px opacity-15" style={{ background: "linear-gradient(to bottom, var(--color-gold), transparent)" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 text-center text-white">

        {/* Royal badge */}
        <div className="animate-fade-up stagger-1 mx-auto inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-black/30 px-5 py-2 backdrop-blur-md">
          <span className="h-1 w-1 rounded-full bg-gold animate-pulse-gold" />
          <span className="section-label text-gold tracking-[0.35em]">Crafting Excellence Since 2007</span>
          <span className="h-1 w-1 rounded-full bg-gold animate-pulse-gold" />
        </div>

        {/* Headline with shimmer gold */}
        <h1 className="animate-fade-up stagger-2 mx-auto mt-7 max-w-5xl font-display text-5xl font-bold leading-[1.06] sm:text-6xl lg:text-8xl">
          Elegance in{" "}
          <em className="animate-gold-shimmer not-italic">Every Square Foot</em>
        </h1>

        {/* Sub-headline */}
        <p className="animate-fade-up stagger-3 mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Premium gated communities crafted for modern lifestyles across Vijayawada and the
          Amaravati capital region — trusted homes since 2007.
        </p>

        {/* Gold divider ornament */}
        <div className="animate-fade-up stagger-3 mx-auto mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, var(--color-gold))" }} />
          <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, var(--color-gold))" }} />
        </div>

        {/* Search panel — luxury glass card */}
        <div className="animate-fade-up stagger-4 mx-auto mt-10 max-w-4xl rounded-3xl text-left shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            border: "1px solid rgba(255,255,255,0.22)",
          }}
        >
          <div className="grid grid-cols-2 gap-0 divide-x divide-white/10 sm:grid-cols-4">
            <SelectChip icon={MapPin} label="Location" options={["All Cities", "Vijayawada", "Amaravati"]} />
            <SelectChip icon={Building2} label="Property Type" options={propertyTypes} />
            <SelectChip icon={Wallet} label="Budget" options={budgets} />
            <SelectChip icon={Activity} label="Status" options={statuses} />
          </div>
          <div className="border-t border-white/10 p-3 flex flex-col gap-2.5 sm:flex-row">
            <Link
              to="/projects"
              className="group flex flex-1 items-center justify-center gap-2.5 rounded-2xl py-4 text-sm font-bold tracking-wide text-gold-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Search className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Search Residences
            </Link>
            <button
              onClick={() => setAiOpen(true)}
              className="flex items-center justify-center gap-2.5 rounded-2xl border border-gold/35 bg-white/10 px-6 py-4 text-sm font-bold tracking-wide text-gold backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-gold/60"
            >
              <Sparkles className="h-4 w-4 animate-float" />
              Ask AI Assistant
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="animate-fade-up stagger-5 mx-auto mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {[
            ["19+", "Years of Legacy"],
            ["20+", "Residential Projects"],
            ["2", "Commercial Projects"],
            ["5000+", "Happy Families"],
          ].map(([n, l], i) => (
            <div key={l} className="group relative text-center cursor-default">
              {i > 0 && (
                <div className="absolute -left-6 top-1/2 h-8 w-px -translate-y-1/2 opacity-30"
                  style={{ background: "var(--gradient-gold)" }} />
              )}
              <p className="font-display text-4xl font-bold sm:text-5xl" style={{
                background: "var(--gradient-gold)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>
                {n}
              </p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/55">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="section-label text-white/40 text-[0.6rem]">Scroll</span>
        <div className="relative h-14 w-px overflow-hidden">
          <div className="absolute inset-0 w-full animate-scroll-line rounded-full" style={{ background: "linear-gradient(to bottom, var(--color-gold), transparent)" }} />
        </div>
      </div>

      {/* AI Assistant drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[60] w-full max-w-md transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-4",
          aiOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-full flex-col text-white sm:rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(160deg, rgba(18,16,22,0.97) 0%, rgba(12,10,16,0.99) 100%)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "-12px 0 60px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                <Sparkles className="h-4 w-4 text-gold-foreground" />
              </span>
              <div>
                <span className="font-display text-base font-semibold">AI Property Assistant</span>
                <p className="text-[0.65rem] text-white/40 uppercase tracking-widest">Powered by SLV Intelligence</p>
              </div>
            </div>
            <button onClick={() => setAiOpen(false)} aria-label="Close" className="flex h-8 w-8 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/10 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm p-4 text-sm leading-relaxed text-white/85"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              Hello! Tell me what you're looking for in natural language and I'll find your ideal home. 🏡
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "3 BHK gated apartment in Vijayawada",
                "Independent villa near Penamaluru",
                "Gated villa plot near Gannavaram Airport",
              ].map((s) => (
                <button
                  key={s}
                  onClick={() => setPrompt(s)}
                  className="rounded-full border px-3 py-1.5 text-xs text-gold transition-all duration-200 hover:bg-gold/10"
                  style={{ borderColor: "rgba(212,175,55,0.3)" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-2 rounded-2xl p-2 pl-4"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Find a 3BHK villa near hi-tech zones..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
              />
              <button className="flex h-9 w-9 items-center justify-center rounded-xl text-gold-foreground transition-transform hover:scale-110"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[0.6rem] text-white/30">
              AI suggestions are illustrative — connect Lovable Cloud to enable live search.
            </p>
          </div>
        </div>
      </div>

      {aiOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setAiOpen(false)} />
      )}
    </section>
  );
}
