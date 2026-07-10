import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import slvLogo from "@/assets/slv-logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Buyer's Guide", to: "/buyers-guide" },
  { label: "EMI Calculator", to: "/emi-calculator" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      {/* Ambient top glow when scrolled */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-32 transition-opacity duration-700",
          scrolled ? "opacity-0" : "opacity-100",
        )}
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 100%)",
        }}
        aria-hidden
      />

      <nav
        className={cn(
          "relative overflow-hidden mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3.5 transition-all duration-700 sm:px-7",
          scrolled
            ? "navbar-light border border-white/25 bg-white/[0.10] backdrop-blur-[28px] shadow-[0_8px_40px_rgba(0,0,0,0.22)]"
            : "navbar-dark border border-white/10 bg-transparent backdrop-blur-[30px] shadow-[0_8px_40px_rgba(0,0,0,0.25)]",
        )}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[28px] pointer-events-none">
          <div className="navbar-shine absolute top-0 left-0 h-full w-56" />
        </div>

        {/* Thin gold hairline border glow at bottom of nav */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-6 bottom-0 h-px transition-opacity duration-700",
            scrolled ? "opacity-100" : "opacity-40",
          )}
          style={{
            background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
          }}
          aria-hidden
        />

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5 outline-none">
          <span
            className={
              "flex items-center justify-center rounded-xl p-1.5 transition-all duration-300"
            }
          >
            <img
              src={slvLogo}
              alt="SLV Builders & Developers"
              className="h-8 w-auto sm:h-9 transition-transform duration-300 group-hover:scale-105"
            />
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-[0.82rem] font-medium transition-all duration-300",
                  scrolled
                    ? active
                      ? "text-foreground"
                      : "text-black/50 hover:text-foreground"
                    : active
                      ? "text-white"
                      : "text-white/70 hover:text-white",
                )}
              >
                {l.label}
                {active && (
                  <span
                    className="absolute inset-x-3 -bottom-0.5 h-px rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
                    }}
                  />
                )}
                <span
                  className="absolute inset-x-3 -bottom-0.5 h-px rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--color-gold-light), transparent)",
                  }}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+919859595939"
            className="group hidden items-center gap-2 overflow-hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-gold-foreground shadow-lg transition-all duration-300 hover:scale-[1.04] hover:shadow-xl sm:flex"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Enquire Now</span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 lg:hidden",
              scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/15",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-7xl animate-slide-down rounded-2xl bg-transparent backdrop-blur-xl border border-white/40 p-3 lg:hidden shadow-2xl">
          {/* Crown accent */}
          <div className="mb-2 flex items-center gap-2 px-3 py-1.5 border-b border-border/50">
            <Crown className="h-3.5 w-3.5 text-gold" />
            <span className="section-label text-black">Navigation</span>
          </div>
          <div className="flex flex-col gap-0.5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                  pathname === l.to
                    ? "bg-gradient-gold text-gold-foreground shadow-sm"
                    : "text-black/70 hover:bg-gold/50 hover:text-foreground",
                )}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+919859595939"
              className="mt-1 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-gold-foreground"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Phone className="h-4 w-4" /> Call Us: +91 98595 95939
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
