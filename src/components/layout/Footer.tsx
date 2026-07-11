import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight, Crown, ChevronDown } from "lucide-react";
import slvLogo from "@/assets/slv-logo.png";

const ourStory = [
  { label: "About Us", to: "/about" },
  { label: "Management", to: "/about" },
  { label: "Gallery", to: "/projects" },
  { label: "Buyer's Guide", to: "/buyers-guide" },
] as const;

const workWithUs = [
  { label: "Careers", to: "/careers" },
  { label: "Architect & Consultant", to: "/careers" },
  { label: "Contractor Registration", to: "/careers" },
  { label: "Vendors & Suppliers", to: "/careers" },
  { label: "Land Proposals", to: "/contact" },
] as const;

const projectLinks = [
  { label: "Ongoing Projects", to: "/projects" },
  { label: "Upcoming Projects", to: "/projects" },
  { label: "Completed Projects", to: "/projects" },
] as const;

export function Footer() {
  const [ourStoryOpen, setOurStoryOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  return (
    <footer
      className="relative mt-24 overflow-hidden text-white"
      style={{ background: "var(--gradient-royal)" }}
    >
      {/* Top gold hairline */}
      <div className="absolute inset-x-0 top-0 h-px hairline-gold" />

      {/* Decorative glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full blur-[100px] opacity-15"
        style={{ background: "var(--color-gold)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full blur-[80px] opacity-8"
        style={{ background: "var(--color-gold)" }}
      />

      {/* Crown header bar */}
      <div className="relative border-b border-white/6 px-6 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4">
          <div className="h-px w-24 opacity-20" style={{ background: "var(--gradient-gold)" }} />
          <Crown className="h-5 w-5 text-gold opacity-70" />
          <p className="section-label text-gold/70 tracking-[0.35em]">Excellence In Every Detail</p>
          <Crown className="h-5 w-5 text-gold opacity-70" />
          <div className="h-px w-24 opacity-20" style={{ background: "var(--gradient-gold)" }} />
        </div>
      </div>

      <div className="w-full mx-auto max-w-[750px] p-6 flex flex-col items-center">
        {/* Brand column */}
        <span className="inline-flex rounded-2xl px-4 py-3 shadow-lg">
          <img src={slvLogo} alt="SLV Builders & Developers" className="h-10 w-auto" />
        </span>
        <p className="mt-6 max-w-2xl text-sm text-center leading-relaxed text-white/55">
          SLV strives to develop high-quality properties in prime locations at an affordable price.
          With a focus on functional, cutting-edge architecture and premium materials, we make
          luxurious urban living possible — masterpieces in their own right.
        </p>

        {/* Certification badges */}
        <div className="mt-7 flex flex-wrap gap-2">
          {["RERA", "CREDAI", "IGBC", "NAREDCO"].map((b) => (
            <span
              key={b}
              className="rounded-lg px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-widest text-white/60 transition-all duration-300 hover:text-gold"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full mx-auto grid max-w-[725px] gap-6 px-6 py-4 lg:grid-cols-[1fr_1fr_1fr]">
        {/* Our Story */}
        <div className="relative">
          <button
            onClick={() => setOurStoryOpen(!ourStoryOpen)}
            className="flex items-center gap-2 section-label text-gold tracking-[0.28em]"
          >
            Our Story
            <ChevronDown
              className={`h-3 w-3 transition-transform duration-300 ${
                ourStoryOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {ourStoryOpen && (
            <div className="mt-4 min-w-[210px] rounded-2xl backdrop-blur-xl">
              <ul className="space-y-3">
                {ourStory.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="group inline-flex items-center gap-1.5 text-sm text-white/55 transition-all duration-300 hover:text-gold"
                    >
                      <span className="hover-gold-line">{l.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Work With Us */}
        <div className="relative">
          <button
            onClick={() => setWorkOpen(!workOpen)}
            className="flex items-center gap-2 section-label text-gold tracking-[0.28em]"
          >
            Work With Us
            <ChevronDown
              className={`h-3 w-3 transition-transform duration-300 ${
                workOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {workOpen && (
            <div className="min-w-[210px] rounded-2xl backdrop-blur-xl">
              <ul className="mt-4 space-y-3">
                {workWithUs.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="group flex items-center justify-between rounded-lg py-1 text-sm text-white/60 transition-all duration-300 hover:bg-white/5 hover:text-gold"
                    >
                      <span>{l.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Projects */}  
        <div className="relative">
          <button
            onClick={() => setProjectsOpen(!projectsOpen)}
            className="flex items-center gap-2 section-label text-gold tracking-[0.28em]"
          >
            Projects
            <ChevronDown
              className={`h-3 w-3 transition-transform duration-300 ${
                projectsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {projectsOpen && (
            <div className="min-w-[210px] rounded-2xl backdrop-blur-xl">
              <ul className="mt-4 space-y-3">
                {projectLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="group flex items-center justify-between rounded-lg py-1 text-sm text-white/60 transition-all duration-300 hover:bg-white/5 hover:text-gold"
                    >
                      <span>{l.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="w-full mx-auto grid max-w-[725px] gap-8 px-6 py-4 lg:grid-cols-[1fr_1fr]">
        {/* Contact */}
        <div>
          <h4 className="section-label text-gold tracking-[0.28em]">Registered Office</h4>
          <div
            className="mt-2 h-px w-8 opacity-40"
            style={{ background: "var(--gradient-gold)" }}
          />
          <p className="mt-6 flex gap-3 text-sm leading-relaxed text-white/55">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>
              <span className="block font-semibold text-white/80">SLV Developers</span>
              8-56-68/5, Beside Tenali Flyover, Sri Saila Nagar, Ward No. 5, Mangalagiri, Guntur,
              Andhra Pradesh.
            </span>
          </p>
        </div>

        <div>
          <h4 className="section-label text-gold tracking-[0.28em]">Connect</h4>
          <div
            className="mt-2 h-px w-8 opacity-40"
            style={{ background: "var(--gradient-gold)" }}
          />
          <ul className="mt-6 space-y-4 text-sm text-white/55">
            <li>
              <a
                href="tel:+919859595939"
                className="group flex items-center gap-3 transition-all duration-300 hover:text-gold"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(212,175,55,0.12)",
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}
                >
                  <Phone className="h-3.5 w-3.5 text-gold" />
                </span>
                +91 98595 95939
              </a>
            </li>
            <li>
              <a
                href="mailto:slv.bvrm@gmail.com"
                className="group flex items-center gap-3 transition-all duration-300 hover:text-gold"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(212,175,55,0.12)",
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}
                >
                  <Mail className="h-3.5 w-3.5 text-gold" />
                </span>
                slv.bvrm@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919859595939"
                className="group flex items-center gap-3 transition-all duration-300 hover:text-gold"
              >
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(212,175,55,0.12)",
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}
                >
                  <MessageCircle className="h-3.5 w-3.5 text-gold" />
                </span>
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/35 sm:flex-row">
          <p>
            © {new Date().getFullYear()} SLV Builders & Developers Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-4 opacity-30" style={{ background: "var(--color-gold)" }} />
            <p>RERA Registered · Crafted for discerning homeowners.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
