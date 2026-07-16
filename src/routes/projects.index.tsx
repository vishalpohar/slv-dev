import { useMemo, useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SlidersHorizontal } from "lucide-react";
import { PropertyCard } from "@/components/PropertyCard";
import { projects, type ProjectCategory, type ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — SLV Builders & Developers" },
      {
        name: "description",
        content:
          "Explore ongoing, completed, and upcoming luxury villas, penthouses, and apartments by SLV Builders & Developers.",
      },
      { property: "og:title", content: "Projects — SLV Builders & Developers" },
      { property: "og:description", content: "Browse our curated portfolio of luxury residences." },
    ],
  }),
  validateSearch: (search: Record<string, unknown>) => ({
    status: search.status as string | undefined,
  }),
  component: ProjectsPage,
});

const statusFilters: (ProjectStatus | "All")[] = ["All", "Ongoing", "Completed", "Upcoming"];
const categoryFilters: (ProjectCategory | "All")[] = [
  "All",
  "Apartment",
  "Villa",
  "Plots",
  "Commercial",
  "Educational",
];

function ProjectsPage() {
  const [status, setStatus] = useState<(typeof statusFilters)[number]>("All");
  const [category, setCategory] = useState<(typeof categoryFilters)[number]>("All");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc">("featured");

  const search = Route.useSearch();
  const navigate = Route.useNavigate();

  useEffect(() => {
    switch (search.status?.toLowerCase()) {
      case "ongoing":
        setStatus("Ongoing");
        break;

      case "completed":
        setStatus("Completed");
        break;

      case "upcoming":
        setStatus("Upcoming");
        break;

      default:
        setStatus("All");
    }
  }, [search.status]);

  const filtered = useMemo(() => {
    let list = projects.filter(
      (p) =>
        (status === "All" || p.status === status) &&
        (category === "All" || p.category === category),
    );
    if (sort === "price-asc") list = [...list].sort((a, b) => a.priceFrom - b.priceFrom);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.priceFrom - a.priceFrom);
    return list;
  }, [status, category, sort]);

  return (
    <div className="pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="section-label text-gold">Our Portfolio</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-6xl">
          Find Your Residence
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Refine by status, type, and price to discover the home that matches your aspirations.
        </p>

        {/* Filter bar */}
        <div className="mt-10 rounded-3xl bg-card p-5 neu">
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <p className="mb-2 text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                Status
              </p>
              <div className="flex flex-wrap gap-2">
                {statusFilters.map((s) => (
                  <FilterPill
                    key={s}
                    active={status === s}
                    onClick={() => {
                      navigate({
                        search: {
                          status: s === "All" ? undefined : s.toLowerCase(),
                        },
                      });
                    }}
                  >
                    {s}
                  </FilterPill>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                Type
              </p>
              <div className="flex flex-wrap gap-2">
                {categoryFilters.map((c) => (
                  <FilterPill key={c} active={category === c} onClick={() => setCategory(c)}>
                    {c}
                  </FilterPill>
                ))}
              </div>
            </div>
            <div className="ml-auto">
              <p className="mb-2 flex items-center gap-1.5 text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                <SlidersHorizontal className="h-3 w-3" /> Sort
              </p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="rounded-xl bg-background px-4 py-2.5 text-sm font-medium text-foreground neu-pressed focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
          residences
        </p>

        <div className="mt-6 grid gap-8 pb-12 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.id} project={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">
            No residences match these filters yet.
          </p>
        )}
      </div>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-xl px-4 py-2 text-sm font-medium transition-all",
        active
          ? "bg-gradient-obsidian text-background"
          : "text-muted-foreground neu-sm hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
