import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "EMI Calculator", to: "/emi-calculator" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
] as const;

const offices = [
  { city: "Vijayawada (Head Office)", line: "Ramavarappadu Ring, Vijayawada" },
  { city: "Bhimavaram", line: "Where the SLV journey began" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-obsidian text-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-60" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold font-display text-lg font-bold text-gold-foreground">
              S
            </span>
            <div className="leading-tight">
              <p className="font-display text-xl font-bold">SLV Builders</p>
              <p className="text-xs uppercase tracking-[0.25em] text-background/60">& Developers</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/65">
            Crafting landmark residences where architecture, craftsmanship, and lifestyle converge.
          </p>
        </div>

        <div>
          <h4 className="section-label text-gold">Quick Links</h4>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-background/70 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="section-label text-gold">Our Locations</h4>
          <ul className="mt-5 space-y-4">
            {offices.map((o) => (
              <li key={o.city} className="flex gap-3 text-sm text-background/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="block font-medium text-background">{o.city}</span>
                  {o.line}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="section-label text-gold">Get in Touch</h4>
          <ul className="mt-5 space-y-4 text-sm text-background/70">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <a href="tel:+919000000000" className="hover:text-gold">+91 90000 00000</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:hello@slvbuilders.com" className="hover:text-gold">hello@slvbuilders.com</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-gold" />
              <a href="https://wa.me/919000000000" className="hover:text-gold">WhatsApp Us</a>
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
