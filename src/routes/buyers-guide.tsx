import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/buyers-guide")({
  head: () => ({
    meta: [
      { title: "Buyer's Guide — SLV Builders & Developers" },
      {
        name: "description",
        content:
          "Everything you need to know before buying a luxury home — from RERA and home loans to registration, due diligence, and possession.",
      },
      { property: "og:title", content: "Buyer's Guide — SLV Builders" },
      { property: "og:description", content: "A step-by-step guide to buying your luxury home with confidence." },
    ],
  }),
  component: BuyersGuide,
});

const steps = [
  {
    q: "1. Define Your Requirements",
    a: "Begin by clarifying your budget, preferred configuration, location, and timeline. Our relationship managers help you shortlist residences that match your lifestyle and investment goals.",
  },
  {
    q: "2. Verify RERA & Legal Titles",
    a: "Every SLV project is RERA-registered with clear, marketable titles. We provide complete documentation — approvals, encumbrance certificates, and sanction plans — for transparent due diligence.",
  },
  {
    q: "3. Arrange Home Financing",
    a: "Use our EMI Calculator to plan your finances, then choose from our network of partner banks offering pre-approved loans with competitive interest rates and fast disbursal.",
  },
  {
    q: "4. Booking & Agreement",
    a: "Reserve your residence with a booking amount. We execute a transparent sale agreement detailing payment schedules, specifications, and possession timelines — with no hidden clauses.",
  },
  {
    q: "5. Registration & Stamp Duty",
    a: "On completion of payments, the property is registered in your name. We guide you through stamp duty, registration charges, and statutory formalities end to end.",
  },
  {
    q: "6. Handover & Possession",
    a: "Receive your keys after a joint quality inspection. Our post-handover team supports you with move-in coordination, warranties, and ongoing community services.",
  },
];

function BuyersGuide() {
  const [open, setOpen] = useState(0);
  return (
    <div className="pt-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-card neu text-gold">
            <BookOpen className="h-7 w-7" />
          </span>
          <p className="section-label mt-6 text-gold">Buyer's Guide</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-6xl">
            Buy With Confidence
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A clear, six-step journey from first enquiry to the day you hold your keys.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {steps.map((s, i) => (
            <div key={s.q} className="overflow-hidden rounded-2xl bg-card neu-sm">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-display text-lg font-semibold text-foreground">{s.q}</span>
                <ChevronDown className={cn("h-5 w-5 text-gold transition-transform", open === i && "rotate-180")} />
              </button>
              <div className={cn("grid transition-all duration-300", open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{s.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
