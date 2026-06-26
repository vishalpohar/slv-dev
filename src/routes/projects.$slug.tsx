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
      <Link to="/projects" className="text-gold underline">Back to projects</Link>
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

  const wished = isWishlisted(project.id);
  const comparing = isComparing(project.id);

  return (
    <div className="pt-24">
      {/* Gallery */}
      <div className="mx-auto max-w-7xl px-6">
        <Link to="/projects" className="inline-flex items-center gap-1.5 py-4 text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" /> Back to Projects
        </Link>
        <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
          <button
            onClick={() => setLightbox(project.gallery[activeImg])}
            className="group relative aspect-[16/10] overflow-hidden rounded-3xl"
          >
            <img src={project.gallery[activeImg]} alt={project.name} className="h-full w-full object-cover" />
            <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium">
              <Maximize className="h-3.5 w-3.5" /> View Fullscreen
            </span>
          </button>
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            {project.gallery.map((g: string, i: number) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "aspect-[16/10] overflow-hidden rounded-2xl transition-all",
                  activeImg === i ? "ring-2 ring-gold" : "opacity-70 hover:opacity-100",
                )}
              >
                <img src={g} alt={`${project.name} ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold-foreground">
                {project.status}
              </span>
              <span className="text-sm text-muted-foreground">{project.category}</span>
            </div>
            <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">{project.name}</h1>
            <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4 text-gold" /> {project.location}, {project.city}
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Starting from</p>
              <p className="font-display text-3xl font-bold text-foreground">{formatPrice(project.priceFrom)}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleWishlist(project.id)}
                aria-label="Wishlist"
                className={cn("flex h-12 w-12 items-center justify-center rounded-xl", wished ? "neu-pressed text-rose-500" : "neu-sm")}
              >
                <Heart className={cn("h-5 w-5", wished && "fill-rose-500")} />
              </button>
              <button
                onClick={() => toggleCompare(project.id)}
                aria-label="Compare"
                className={cn("flex h-12 w-12 items-center justify-center rounded-xl", comparing ? "neu-pressed text-gold-foreground" : "neu-sm")}
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
            ["Saleable Area", `${project.sqftFrom.toLocaleString()} - ${project.sqftTo.toLocaleString()} sqft`],
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

      {/* Tabs */}
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
          {tab === "Overview" && (
            <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground">Project Vision</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-8 rounded-3xl bg-card p-6 neu">
                  <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                    <Navigation className="h-5 w-5 text-gold" /> Geo-Spatial Insights
                  </h3>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {project.proximity.map((pr: { label: string; distance: string }) => (
                      <div key={pr.label} className="flex items-center justify-between rounded-xl bg-background px-4 py-3 neu-sm">
                        <span className="text-sm text-muted-foreground">{pr.label}</span>
                        <span className="font-display text-base font-semibold text-gold-foreground">{pr.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <aside className="h-fit rounded-3xl bg-gradient-obsidian p-7 text-background">
                <h3 className="font-display text-xl font-semibold">Request Details</h3>
                <p className="mt-2 text-sm text-background/65">Get the brochure, floor plans, and pricing.</p>
                <a
                  href="#"
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-gold py-3 text-sm font-semibold text-gold-foreground"
                >
                  <Download className="h-4 w-4" /> Download Brochure
                </a>
                <Link
                  to="/contact"
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/20 py-3 text-sm font-semibold text-background hover:bg-white/10"
                >
                  Enquire Now
                </Link>
              </aside>
            </div>
          )}

          {tab === "Amenities & Specs" && (
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground">Amenities</h2>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {project.amenities.map((a: string) => (
                    <div key={a} className="flex items-center gap-2 rounded-2xl glass p-4 text-sm">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {a}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground">Specifications</h2>
                <div className="mt-5 space-y-3">
                  {project.specifications.map((s: { label: string; value: string }) => (
                    <div key={s.label} className="rounded-2xl bg-card p-5 neu-sm">
                      <p className="text-xs uppercase tracking-wider text-gold-foreground">{s.label}</p>
                      <p className="mt-1 text-foreground">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "Floor Plans" && (
            <div>
              <div className="inline-flex gap-2 rounded-2xl bg-background p-2 neu-pressed">
                {project.floorPlans.map((fp: { type: string; sqft: number; image: string }, i: number) => (
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
                ))}
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
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Configuration</p>
                  <p className="font-display text-3xl font-bold text-foreground">{project.floorPlans[plan].type}</p>
                  <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">Saleable Area</p>
                  <p className="font-display text-2xl font-semibold text-gold-foreground">
                    {project.floorPlans[plan].sqft.toLocaleString()} sqft
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-2xl font-semibold text-foreground">More Residences</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {projects.filter((p) => p.id !== project.id).map((p) => (
            <Link
              key={p.id}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl bg-card neu-sm"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="font-display text-lg font-semibold text-foreground">{p.name}</p>
                <p className="text-sm text-muted-foreground">{p.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-obsidian/90 p-6"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute right-6 top-6 text-background/80 hover:text-background" aria-label="Close">
            <X className="h-8 w-8" />
          </button>
          <img src={lightbox} alt="Fullscreen" className="max-h-[90vh] max-w-full rounded-2xl object-contain" />
        </div>
      )}
    </div>
  );
}
