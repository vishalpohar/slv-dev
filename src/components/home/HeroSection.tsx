import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Sparkles, MapPin, Building2, Wallet, Activity } from "lucide-react";
import heroImg from "@/assets/hero-1.jpg";
import { OPEN_AI_ASSISTANT_EVENT } from "@/components/AIAssistant";
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
        <p className="section-label mx-auto text-gold animate-fade-up">Crafting Excellence Since 2007</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.1] animate-fade-up sm:text-6xl lg:text-7xl">
          Elegance in{" "}
          <span className="italic font-normal text-gradient-gold">Every Square Foot</span>
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
              onClick={() => window.dispatchEvent(new Event(OPEN_AI_ASSISTANT_EVENT))}
              className="flex items-center justify-center gap-2 rounded-xl border border-gold/40 bg-obsidian/40 px-5 py-3.5 text-sm font-semibold text-gold backdrop-blur-md transition-colors hover:bg-obsidian/60"
            >
              <Sparkles className="h-4 w-4" /> Ask AI Assistant
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-background/80 animate-fade-up">
          {[
            ["19+", "Years of Legacy"],
            ["20+", "Residential Projects"],
            ["2", "Commercial Projects"],
            ["5000+", "Happy Families"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <p className="font-display text-3xl font-bold text-gold">{n}</p>
              <p className="text-xs uppercase tracking-wider text-background/60">{l}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-bounce sm:block">
        <div className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>

    </section>
  );
}
