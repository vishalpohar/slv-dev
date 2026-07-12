import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const message = encodeURIComponent(`Hello SLV Builders & Developers,

I am interested in your projects and would like more information regarding available properties, pricing, and site visits.              
Please share the details.

Thank you.`);

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SLV Builders & Developers" },
      {
        name: "description",
        content:
          "Get in touch with SLV Builders & Developers. Book a site visit, call us, or message us on WhatsApp. Office in Vijayawada, Andhra Pradesh.",
      },
      { property: "og:title", content: "Contact SLV Builders & Developers" },
      {
        property: "og:description",
        content: "Book a private viewing or reach our relationship team.",
      },
    ],
  }),
  component: ContactPage,
});

const info = [
  {
    icon: MapPin,
    label: "Visit Us",
    value:
      "8-56-68/5, Beside Tenali Flyover, Sri Saila Nagar, Ward No.5, Mangalgiri, Guntur, Andhra Pradesh.",
  },
  { icon: Phone, label: "Call Us", value: "+91 98595 95939", href: "tel:+919859595939" },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@slvdevelopers.in",
    href: "mailto:info@slvdevelopers.in",
  },
  { icon: Clock, label: "Office Hours", value: "Mon – Sat · 9:30 AM to 7:00 PM" },
];

function ContactPage() {
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="section-label text-gold">Get in Touch</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-6xl">
            Let's Find Your Home
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Share your details and our relationship team will reach out to schedule a private
            viewing.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info + map */}
          <div className="space-y-4">
            {info.map((i) => (
              <div key={i.label} className="flex items-start gap-4 rounded-2xl bg-card p-5 neu-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-gold-foreground">
                  <i.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {i.label}
                  </p>
                  {i.href ? (
                    <a
                      href={i.href}
                      className="font-medium text-foreground hover:text-gold-foreground"
                    >
                      {i.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{i.value}</p>
                  )}
                </div>
              </div>
            ))}
            <a
              href={`https://wa.me/919859595939?text=${message}`}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <div className="overflow-hidden rounded-3xl neu-sm">
              <iframe
                title="SLV Builders Office Location"
                src="https://www.google.com/maps?q=Ramavarappadu,Vijayawada&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-card p-8 neu">
            <h2 className="font-display text-2xl font-semibold text-foreground">Send an Enquiry</h2>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Thank you! Our team will contact you shortly.");
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Full Name"
                  className="rounded-xl bg-background px-4 py-3 text-sm neu-pressed focus:outline-none"
                />
                <input
                  required
                  placeholder="Phone Number"
                  className="rounded-xl bg-background px-4 py-3 text-sm neu-pressed focus:outline-none"
                />
              </div>
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl bg-background px-4 py-3 text-sm neu-pressed focus:outline-none"
              />
              <select className="w-full rounded-xl bg-background px-4 py-3 text-sm text-foreground neu-pressed focus:outline-none">
                <option>I'm interested in… (select)</option>
                <option>The Obsidian Residences</option>
                <option>Alabaster Villas</option>
                <option>Celeste Towers</option>
                <option>General Enquiry</option>
              </select>
              <textarea
                rows={5}
                placeholder="Tell us what you're looking for…"
                className="w-full resize-none rounded-xl bg-background px-4 py-3 text-sm neu-pressed focus:outline-none"
              />
              <button className="w-full rounded-xl bg-gradient-gold py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.01]">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
