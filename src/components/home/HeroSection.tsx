import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Sparkles, MapPin, Building2, Wallet, Activity, X, Send } from "lucide-react";
import heroImg from "@/assets/hero-1.jpg";
import { cn } from "@/lib/utils";

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
        className="flex w-full items-center gap-2.5 rounded-xl px-3 py-3 text-left text-sm text-foreground transition-colors hover:bg-secondary/60"
      >
        <Icon className="h-4 w-4 shrink-0 text-gold" />
        <span className="flex flex-col">
          <span className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">{label}</span>
          <span className="font-medium">{value}</span>
        </span>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-20 mt-2 w-44 animate-fade-up rounded-xl glass p-1.5">
          {options.map((o) => (
            <button
              key={o}
              onClick={() => {
                setValue(o);
                setOpen(false);
              }}
              className="block w-full rounded-lg px-3 py-2 text-left text-sm text-foreground hover:bg-secondary"
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
  const [aiOpen, setAiOpen] = useState(false);
  const [prompt, setPrompt] = useState("");

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury SLV residence at golden dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full animate-ken-burns object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/40 to-obsidian/85" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 text-center text-background">
        <p className="section-label mx-auto text-gold animate-fade-up">SLV Builders &amp; Developers Pvt Ltd</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.08] animate-fade-up sm:text-6xl lg:text-7xl">
          Luxury Living{" "}
          <span className="text-gradient-gold">Starts Here</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-background/75 animate-fade-up sm:text-lg">
          Premium gated communities crafted for modern lifestyles across Vijayawada and the
          Amaravati capital region — trusted homes since 2007.
        </p>

        {/* Search panel */}
        <div className="mx-auto mt-10 max-w-4xl animate-fade-up rounded-3xl glass p-3 text-left sm:p-4">
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
            <SelectChip icon={MapPin} label="Location" options={["All Cities", "Vijayawada", "Amaravati"]} />
            <SelectChip icon={Building2} label="Property Type" options={propertyTypes} />
            <SelectChip icon={Wallet} label="Budget" options={budgets} />
            <SelectChip icon={Activity} label="Status" options={statuses} />
          </div>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <Link
              to="/projects"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-gold py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.01]"
            >
              <Search className="h-4 w-4" /> Search Residences
            </Link>
            <button
              onClick={() => setAiOpen(true)}
              className="flex items-center justify-center gap-2 rounded-xl border border-gold/40 bg-obsidian/40 px-5 py-3.5 text-sm font-semibold text-gold backdrop-blur-md transition-colors hover:bg-obsidian/60"
            >
              <Sparkles className="h-4 w-4" /> Ask AI Assistant
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-background/80 animate-fade-up">
          {[
            ["25+", "Years of Legacy"],
            ["40+", "Landmark Projects"],
            ["3.2M", "Sq.ft Delivered"],
            ["98%", "Happy Families"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <p className="font-display text-3xl font-bold text-gold">{n}</p>
              <p className="text-xs uppercase tracking-wider text-background/60">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Assistant drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[60] w-full max-w-md transform transition-transform duration-500 sm:p-4",
          aiOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-full flex-col glass-dark text-background sm:rounded-3xl">
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-gold" />
              <span className="font-display text-lg font-semibold">AI Property Assistant</span>
            </div>
            <button onClick={() => setAiOpen(false)} aria-label="Close" className="text-background/70 hover:text-background">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 p-4 text-sm text-background/90">
              Hello! Tell me what you're looking for in natural language and I'll find your ideal home.
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
                  className="rounded-full border border-gold/30 px-3 py-1.5 text-xs text-gold hover:bg-gold/10"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 p-4">
            <div className="flex items-center gap-2 rounded-2xl bg-white/10 p-2 pl-4">
              <input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Find a 3BHK villa near hi-tech zones..."
                className="flex-1 bg-transparent text-sm text-background placeholder:text-background/50 focus:outline-none"
              />
              <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-gold text-gold-foreground">
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[0.65rem] text-background/40">
              AI suggestions are illustrative — connect Lovable Cloud to enable live search.
            </p>
          </div>
        </div>
      </div>
      {aiOpen && (
        <div className="fixed inset-0 z-50 bg-obsidian/50 backdrop-blur-sm" onClick={() => setAiOpen(false)} />
      )}
    </section>
  );
}
