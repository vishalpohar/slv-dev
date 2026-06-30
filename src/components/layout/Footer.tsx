import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
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
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-obsidian text-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <span className="inline-flex rounded-2xl bg-background/95 px-4 py-3">
            <img src={slvLogo} alt="SLV Builders & Developers" className="h-10 w-auto" />
          </span>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/65">
            SLV strives to develop high-quality properties in prime locations at an affordable
            price. With a focus on functional, cutting-edge architecture and premium materials, we
            make luxurious urban living possible — masterpieces in their own right.
          </p>
          <div className="mt-6 flex gap-3">
            {["RERA", "CREDAI", "IGBC", "NAREDCO"].map((b) => (
              <span
                key={b}
                className="rounded-lg border border-background/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-background/70"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div>
          <h4 className="section-label text-gold">Our Story</h4>
          <ul className="mt-5 space-y-3">
            {ourStory.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-1 text-sm text-background/70 transition-colors hover:text-gold"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Work With Us */}
        <div>
          <h4 className="section-label text-gold">Work With Us</h4>
          <ul className="mt-5 space-y-3">
            {workWithUs.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-1 text-sm text-background/70 transition-colors hover:text-gold"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="section-label mt-8 text-gold">Projects</h4>
          <ul className="mt-5 space-y-3">
            {projectLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-background/70 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Registered Office + Connect */}
        <div>
          <h4 className="section-label text-gold">Registered Office</h4>
          <p className="mt-5 flex gap-3 text-sm leading-relaxed text-background/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>
              <span className="block font-medium text-background">SLV Developers</span>
              8-56-68/5, Beside Tenali Flyover, Sri Saila Nagar, Ward No. 5, Mangalagiri, Guntur,
              Andhra Pradesh.
            </span>
          </p>
          <h4 className="section-label mt-8 text-gold">Connect</h4>
          <ul className="mt-5 space-y-4 text-sm text-background/70">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <a href="tel:+919859595939" className="hover:text-gold">
                +91 98595 95939
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:slv.bvrm@gmail.com" className="hover:text-gold">
                slv.bvrm@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-gold" />
              <a href="https://wa.me/919859595939" className="hover:text-gold">
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-background/50 sm:flex-row">
          <p>© {new Date().getFullYear()} SLV Builders & Developers Pvt Ltd. All rights reserved.</p>
          <p>RERA Registered · Crafted for discerning homeowners.</p>
        </div>
      </div>
    </footer>
  );
}
