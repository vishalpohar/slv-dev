import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Maximize, BedDouble, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/useStore";
import { formatPrice, type Project } from "@/data/projects";

const statusStyles: Record<string, string> = {
  Ongoing: "bg-gold/20 text-gold-foreground border-gold/40",
  Completed: "bg-emerald-500/15 text-gold-foreground border-emerald-500/30",
  Upcoming: "bg-blue-500/15 text-gold-foreground border-blue-500/30",
};

export function PropertyCard({ project }: { project: Project }) {
  const { isWishlisted, toggleWishlist, isComparing, toggleCompare } = useStore();
  const wished = isWishlisted(project.id);
  const comparing = isComparing(project.id);

  return (
    <article className="group overflow-hidden rounded-3xl bg-card neu transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />

        <span
          className={cn(
            "absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md",
            statusStyles[project.status],
          )}
        >
          {project.status}
        </span>

        <button
          onClick={() => toggleWishlist(project.id)}
          aria-label="Toggle wishlist"
          className={cn(
            "absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full transition-all",
            wished ? "neu-pressed text-rose-500" : "glass text-foreground hover:text-rose-500",
          )}
        >
          <Heart className={cn("h-5 w-5", wished && "fill-rose-500")} />
        </button>

        <div className="absolute bottom-4 left-4 text-background">
          <p className="text-xs uppercase tracking-widest text-background/80">{project.category}</p>
          <p className="font-display text-2xl font-semibold">{formatPrice(project.priceFrom)}+</p>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-foreground">{project.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-gold" />
          {project.location}, {project.city}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-gold" /> {project.bedrooms}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-gold" /> {project.sqftFrom.toLocaleString()}+ sqft
          </span>
        </div>

        <div className="mt-5 flex gap-2">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="flex-1 rounded-xl bg-gradient-obsidian py-2.5 text-center text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
          >
            View Details
          </Link>
          <button
            onClick={() => toggleCompare(project.id)}
            aria-label="Add to compare"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl transition-all",
              comparing ? "neu-pressed text-gold-foreground" : "neu-sm text-muted-foreground hover:text-foreground",
            )}
          >
            <Scale className="h-5 w-5" />
          </button>
        </div>
      </div>
    </article>
  );
}
