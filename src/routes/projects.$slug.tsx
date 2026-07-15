import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  MapPin,
  Heart,
  Scale,
  Download,
  Check,
  X,
  ChevronLeft,
  Maximize,
  Navigation,
  Building2,
  Ruler,
  Star,
  Home,
  Eye,
} from "lucide-react";
import { getProject, projects, formatPrice } from "@/data/projects";
import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: [
        { title: p ? `${p.name} — SLV Builders` : "Project — SLV Builders" },
        { name: "description", content: p?.tagline ?? "Luxury residence by SLV Builders." },
        { property: "og:title", content: p?.name ?? "Project" },
        { property: "og:description", content: p?.tagline ?? "" },
        { property: "og:image", content: p?.image ?? "" },
        { name: "twitter:image", content: p?.image ?? "" },
      ],
    };
  },
  component: ProjectDetails,
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="font-display text-3xl font-bold">Project not found</h1>
      <Link to="/projects" search={{ status: undefined }} className="text-gold underline">
        Back to projects
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Something went wrong loading this project.</p>
    </div>
  ),
});

const tabs = ["Overview", "Amenities & Specs", "Floor Plans"] as const;

function ProjectDetails() {
  const { project } = Route.useLoaderData();
  const { isWishlisted, toggleWishlist, isComparing, toggleCompare } = useStore();
  const [tab, setTab] = useState<(typeof tabs)[number]>("Overview");
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [plan, setPlan] = useState(0);
  const [showBrochure, setShowBrochure] = useState(false);

  const wished = isWishlisted(project.id);
  const comparing = isComparing(project.id);

  // Stat cards shown on the hero panel
  const statCards = [
    { Icon: Building2, val: project.status, sub: "Status" },
    { Icon: Ruler, val: `${project.sqftFrom.toLocaleString()}+`, sub: "Sqft" },
    { Icon: Home, val: project.bedrooms, sub: "Config" },
    { Icon: Star, val: project.category, sub: "Type" },
  ];

  return (
    <div className="pt-24">
      {/* ════════════════════════════════════════════════
          GALLERY — Cinematic Hero + Thumbnail Strip
      ════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-7xl px-6">
        <Link
          to="/projects"
          search={{ status: undefined }}
          className="inline-flex items-center gap-1.5 py-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Projects
        </Link>

        <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
          {/* ═══════════════════════════════════
              LEFT — Cinematic Hero Image Panel
          ═══════════════════════════════════ */}
          {/* wrapper gives height via aspect ratio — images fill it */}
          <div className="relative w-full" style={{ paddingBottom: "62.5%" /* 16:10 ratio */ }}>
            <div
              className="absolute inset-0 group cursor-pointer overflow-hidden rounded-3xl"
              onClick={() => setLightbox(project.gallery[activeImg])}
            >
              {/* ── Background: crossfading project images ── */}
              {project.gallery.map((g: string, i: number) => (
                <img
                  key={i}
                  src={g}
                  alt={`${project.name} view ${i + 1}`}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover",
                    "transition-[opacity,transform] duration-700 ease-in-out",
                    activeImg === i ? "opacity-100 scale-100 z-[1]" : "opacity-0 scale-105 z-0",
                  )}
                />
              ))}

              {/* ── Cinematic gradient overlays ── */}
              <div
                className="absolute inset-0 z-[2] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,10,18,0.93) 0%, rgba(10,10,18,0.25) 50%, transparent 100%)",
                }}
              />
              <div
                className="absolute inset-0 z-[2] pointer-events-none"
                style={{
                  background: "linear-gradient(to right, rgba(10,10,18,0.65) 0%, transparent 55%)",
                }}
              />

              {/* ── TOP BAR ── */}
              <div className="absolute top-0 left-0 right-0 z-[10] flex items-center justify-between p-5 pointer-events-none">
                {/* SLV Premium brand badge */}
                <div
                  className="flex items-center gap-2 rounded-full px-4 py-2 border border-white/15"
                  style={{ background: "rgba(8,8,14,0.6)", backdropFilter: "blur(12px)" }}
                >
                  <span
                    className="h-2 w-2 rounded-full flex-shrink-0 animate-pulse-gold"
                    style={{
                      background: "linear-gradient(135deg,oklch(0.84 0.1 90),oklch(0.7 0.14 78))",
                    }}
                  />
                  <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/90">
                    SLV Premium
                  </span>
                </div>
                {/* Image counter */}
                <div
                  className="rounded-full px-3.5 py-1.5 text-xs font-bold tabular-nums text-white/80 border border-white/15"
                  style={{ background: "rgba(8,8,14,0.6)", backdropFilter: "blur(12px)" }}
                >
                  {String(activeImg + 1).padStart(2, "0")} /{" "}
                  {String(project.gallery.length).padStart(2, "0")}
                </div>
              </div>

              {/* ── FLOATING STAT BADGES (visible on hover) ── */}
              <div
                className="absolute right-5 top-1/2 -translate-y-1/2 z-[10] flex flex-col gap-3
                              opacity-0 translate-x-8 pointer-events-none
                              group-hover:opacity-100 group-hover:translate-x-0
                              transition-all duration-500 ease-out"
              >
                {statCards.map(({ Icon, val, sub }) => (
                  <div
                    key={sub}
                    className="flex flex-col items-center gap-0.5 rounded-2xl text-center border border-white/15"
                    style={{
                      background: "rgba(8,8,14,0.65)",
                      backdropFilter: "blur(14px)",
                      padding: "10px 14px",
                      minWidth: 82,
                    }}
                  >
                    <Icon className="h-4 w-4 mb-0.5" style={{ color: "oklch(0.78 0.11 85)" }} />
                    <span className="text-[11px] font-bold leading-snug text-white">{val}</span>
                    <span
                      className="text-[9px] uppercase tracking-wider"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {sub}
                    </span>
                  </div>
                ))}
              </div>

              {/* ── BOTTOM OVERLAY — project name + tags ── */}
              <div className="absolute bottom-0 left-0 right-0 z-[10] p-6 pointer-events-none">
                {/* gold rule + city */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div
                    className="h-px w-12 flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(to right, oklch(0.72 0.13 82), oklch(0.84 0.1 88))",
                    }}
                  />
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.28em]"
                    style={{ color: "oklch(0.78 0.11 85 / 0.8)" }}
                  >
                    {project.city}
                  </span>
                </div>

                {/* Project name */}
                <h2
                  className="font-display font-bold leading-tight mb-4"
                  style={{
                    color: "white",
                    fontSize: "clamp(1.4rem, 2.8vw, 2.25rem)",
                    textShadow: "0 2px 20px rgba(0,0,0,0.7)",
                  }}
                >
                  {project.name}
                </h2>

                {/* Pill tags */}
                <div className="flex flex-wrap items-center gap-2.5 pointer-events-auto">
                  <span
                    className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium border border-white/10"
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(8px)",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    <MapPin
                      className="h-3 w-3 flex-shrink-0"
                      style={{ color: "oklch(0.72 0.13 82)" }}
                    />
                    {project.location}
                  </span>
                  <span
                    className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg,oklch(0.84 0.1 90),oklch(0.7 0.14 78),oklch(0.78 0.11 85))",
                      color: "oklch(0.13 0.005 265)",
                    }}
                  >
                    <Eye className="h-3 w-3 flex-shrink-0" />
                    View Fullscreen
                  </span>
                  <span
                    className="rounded-full px-3.5 py-1.5 text-xs font-semibold border border-white/10"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(8px)",
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Hover ring glow */}
              <div className="absolute inset-0 z-[11] rounded-3xl pointer-events-none ring-1 ring-inset ring-white/5 group-hover:ring-[oklch(0.72_0.13_82)/0.4] transition-all duration-500" />
            </div>
          </div>

          {/* ═══════════════════════════════
              RIGHT — Synced Thumbnail Strip
          ═══════════════════════════════ */}
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            {project.gallery.map((g: string, i: number) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                aria-label={`View image ${i + 1}`}
                className={cn(
                  "group relative aspect-[16/10] overflow-hidden rounded-2xl transition-all duration-300",
                  activeImg === i
                    ? "scale-[1.03] ring-2 ring-gold"
                    : "opacity-55 hover:opacity-100 hover:scale-[1.015]",
                )}
                style={
                  activeImg === i ? { boxShadow: "0 8px 32px -4px rgba(180,145,50,0.45)" } : {}
                }
              >
                <img
                  src={g}
                  alt={`${project.name} ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Active gold tint */}
                {activeImg === i && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(180,140,45,0.3), transparent 60%)",
                    }}
                  />
                )}

                {/* Active bottom accent line */}
                {activeImg === i && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{
                      background:
                        "linear-gradient(to right, oklch(0.72 0.13 82), oklch(0.84 0.1 88))",
                    }}
                  />
                )}

                {/* Number badge */}
                <div
                  className="absolute bottom-2 right-2 rounded-full text-[10px] font-bold px-2 py-0.5 leading-tight transition-all duration-300"
                  style={
                    activeImg === i
                      ? {
                          background:
                            "linear-gradient(135deg,oklch(0.84 0.1 90),oklch(0.7 0.14 78))",
                          color: "oklch(0.13 0.005 265)",
                        }
                      : {
                          background: "rgba(0,0,0,0.6)",
                          color: "rgba(255,255,255,0.75)",
                          backdropFilter: "blur(4px)",
                        }
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════
          HEADER — title, price, wishlist
      ═══════════════════════════════════ */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold-foreground">
                {project.status}
              </span>
              <span className="text-sm text-muted-foreground">{project.category}</span>
            </div>
            <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4 text-gold" /> {project.location}, {project.city}
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Starting from
              </p>
              <p className="font-display text-3xl font-bold text-foreground">
                {formatPrice(project.priceFrom)}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleWishlist(project.id)}
                aria-label="Wishlist"
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl",
                  wished ? "neu-pressed text-rose-500" : "neu-sm",
                )}
              >
                <Heart className={cn("h-5 w-5", wished && "fill-rose-500")} />
              </button>
              <button
                onClick={() => toggleCompare(project.id)}
                aria-label="Compare"
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl",
                  comparing ? "neu-pressed text-gold-foreground" : "neu-sm",
                )}
              >
                <Scale className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["Configurations", project.bedrooms],
            [
              "Saleable Area",
              `${project.sqftFrom.toLocaleString()} - ${project.sqftTo.toLocaleString()} sqft`,
            ],
            ["Launch", project.launchDate],
            ["Category", project.category],
          ].map(([l, v]) => (
            <div key={l} className="rounded-2xl bg-card p-5 neu-sm">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
              <p className="mt-1 font-display text-lg font-semibold text-foreground">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════ Tabs ═══════ */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="inline-flex gap-2 rounded-2xl bg-background p-2 neu-pressed">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "rounded-xl px-5 py-2.5 text-sm font-medium transition-all",
                tab === t ? "neu text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 min-h-[300px]">
          {/* Overview */}
          {tab === "Overview" && (
            <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Project Vision
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-8 rounded-3xl bg-card p-6 neu">
                  <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                    <Navigation className="h-5 w-5 text-gold" /> Geo-Spatial Insights
                  </h3>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {project.proximity.map((pr: { label: string; distance: string }) => (
                      <div
                        key={pr.label}
                        className="flex items-center justify-between rounded-xl bg-background px-4 py-3 neu-sm"
                      >
                        <span className="text-sm text-muted-foreground">{pr.label}</span>
                        <span className="font-display text-base font-semibold text-gold-foreground">
                          {pr.distance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <aside className="h-fit rounded-3xl bg-gradient-obsidian p-7 text-background">
                <h3 className="font-display text-xl font-semibold">Request Details</h3>
                <p className="mt-2 text-sm text-background/65">
                  Get the brochure, floor plans, and pricing.
                </p>
                {project.brochureUrl && (
                  <button
                    type="button"
                    onClick={() => setShowBrochure(true)}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold py-3 text-sm font-semibold text-gold-foreground"
                  >
                    <Download className="h-4 w-4" /> Download Brochure
                  </button>
                )}
                <Link
                  to="/contact"
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/20 py-3 text-sm font-semibold text-background hover:bg-white/10"
                >
                  Enquire Now
                </Link>
              </aside>
            </div>
          )}

          {/* Amenities & Specs */}
          {tab === "Amenities & Specs" && (
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground">Amenities</h2>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {project.amenities.map((a: string) => (
                    <div key={a} className="flex items-center gap-2 rounded-2xl glass p-4 text-sm">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground flex-shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {a}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  Specifications
                </h2>
                <div className="mt-5 space-y-3">
                  {project.specifications.map((s: { label: string; value: string }) => (
                    <div key={s.label} className="rounded-2xl bg-card p-5 neu-sm">
                      <p className="text-xs uppercase tracking-wider text-gold-foreground">
                        {s.label}
                      </p>
                      <p className="mt-1 text-foreground">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Floor Plans */}
          {tab === "Floor Plans" && (
            <div>
              <div className="inline-flex gap-2 rounded-2xl bg-background p-2 neu-pressed">
                {project.floorPlans.map(
                  (fp: { type: string; sqft: number; image: string }, i: number) => (
                    <button
                      key={fp.type}
                      onClick={() => setPlan(i)}
                      className={cn(
                        "rounded-xl px-5 py-2.5 text-sm font-medium transition-all",
                        plan === i ? "neu text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {fp.type}
                    </button>
                  ),
                )}
              </div>
              <div className="mt-6 grid gap-6 lg:grid-cols-[2fr_1fr]">
                <button
                  onClick={() => setLightbox(project.floorPlans[plan].image)}
                  className="group relative aspect-[16/10] overflow-hidden rounded-3xl bg-card neu"
                >
                  <img
                    src={project.floorPlans[plan].image}
                    alt={`${project.floorPlans[plan].type} floor plan`}
                    className="h-full w-full object-cover opacity-90"
                  />
                  <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium">
                    <Maximize className="h-3.5 w-3.5" /> Zoom Plan
                  </span>
                </button>
                <div className="rounded-3xl bg-card p-7 neu">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Configuration
                  </p>
                  <p className="font-display text-3xl font-bold text-foreground">
                    {project.floorPlans[plan].type}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                    Saleable Area
                  </p>
                  <p className="font-display text-2xl font-semibold text-gold-foreground">
                    {project.floorPlans[plan].sqft.toLocaleString()} sqft
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ═══════ Related ═══════ */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-2xl font-semibold text-foreground">More Residences</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {projects
            .filter((p) => p.id !== project.id)
            .map((p) => (
              <Link
                key={p.id}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group overflow-hidden rounded-2xl bg-card neu-sm"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-display text-lg font-semibold text-foreground">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{p.location}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* ═══════ Lightbox ═══════ */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-obsidian/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-6 top-6 text-background/80 hover:text-background"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightbox}
            alt="Fullscreen"
            className="max-h-[90vh] max-w-full rounded-2xl object-contain"
          />
        </div>
      )}

      {/* ═══════ Brochure viewer ═══════ */}
      {showBrochure && project.brochureUrl && (
        <div className="fixed inset-0 z-[80] flex flex-col bg-obsidian">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <p className="font-display text-lg font-semibold text-background">
              {project.name} — Brochure
            </p>
            <button
              onClick={() => setShowBrochure(false)}
              className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-background hover:bg-white/20"
              aria-label="Close brochure"
            >
              <X className="h-5 w-5" /> Close
            </button>
          </div>
          <iframe
            src={project.brochureUrl.replace("/view", "/preview")}
            title={`${project.name} Brochure`}
            className="h-full w-full flex-1 border-0"
            allow="autoplay; encrypted-media"
          />
        </div>
      )}
    </div>
  );
}
