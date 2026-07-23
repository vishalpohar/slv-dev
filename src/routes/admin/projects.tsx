import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { Tables } from "@/integrations/supabase/types";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Loader2,
  Building2,
  X,
  Upload,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/admin/projects")({
  component: ProjectsManagement,
});

type Project = Tables<"projects">;
type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";

const statusColors: Record<ProjectStatus, string> = {
  Ongoing: "bg-sky-500/15 text-sky-600 border-sky-500/20",
  Completed: "bg-emerald-500/15 text-emerald-600 border-emerald-500/20",
  Upcoming: "bg-amber-500/15 text-amber-600 border-amber-500/20",
};

type ProjectFormData = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  category: string;
  city: string;
  location: string;
  bedrooms: string;
  price_from: string;
  sqft_from: string;
  rera_number: string;
  cover_image: string;
  brochure_url: string;
  map_embed: string;
  amenities: string;
  is_featured: boolean;
  is_published: boolean;
  sort_order: string;
};

const defaultForm: ProjectFormData = {
  name: "",
  slug: "",
  tagline: "",
  description: "",
  status: "Ongoing",
  category: "",
  city: "",
  location: "",
  bedrooms: "",
  price_from: "",
  sqft_from: "",
  rera_number: "",
  cover_image: "",
  brochure_url: "",
  map_embed: "",
  amenities: "",
  is_featured: false,
  is_published: false,
  sort_order: "0",
};

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function ProjectsManagement() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [form, setForm] = useState<ProjectFormData>(defaultForm);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingBrochure, setUploadingBrochure] = useState(false);

  // Fetch projects
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["admin-projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data as Project[];
    },
  });

  // Create project
  const createMutation = useMutation({
    mutationFn: async (data: ProjectFormData) => {
      const { error } = await supabase.from("projects").insert({
        name: data.name,
        slug: data.slug || generateSlug(data.name),
        tagline: data.tagline || null,
        description: data.description || null,
        status: data.status,
        category: data.category || null,
        city: data.city || null,
        location: data.location || null,
        bedrooms: data.bedrooms || null,
        price_from: data.price_from ? Number(data.price_from) : null,
        sqft_from: data.sqft_from ? Number(data.sqft_from) : null,
        rera_number: data.rera_number || null,
        cover_image: data.cover_image || null,
        brochure_url: data.brochure_url || null,
        map_embed: data.map_embed || null,
        amenities: data.amenities ? data.amenities.split(",").map((s) => s.trim()).filter(Boolean) : [],
        is_featured: data.is_featured,
        is_published: data.is_published,
        sort_order: Number(data.sort_order) || 0,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      toast.success("Project created successfully");
      closeForm();
    },
    onError: (err: Error) => toast.error(err.message),
  });

  // Update project
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: ProjectFormData }) => {
      const { error } = await supabase
        .from("projects")
        .update({
          name: data.name,
          slug: data.slug || generateSlug(data.name),
          tagline: data.tagline || null,
          description: data.description || null,
          status: data.status,
          category: data.category || null,
          city: data.city || null,
          location: data.location || null,
          bedrooms: data.bedrooms || null,
          price_from: data.price_from ? Number(data.price_from) : null,
          sqft_from: data.sqft_from ? Number(data.sqft_from) : null,
          rera_number: data.rera_number || null,
          cover_image: data.cover_image || null,
          brochure_url: data.brochure_url || null,
          map_embed: data.map_embed || null,
          amenities: data.amenities ? data.amenities.split(",").map((s) => s.trim()).filter(Boolean) : [],
          is_featured: data.is_featured,
          is_published: data.is_published,
          sort_order: Number(data.sort_order) || 0,
        })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      toast.success("Project updated successfully");
      closeForm();
    },
    onError: (err: Error) => toast.error(err.message),
  });

  // Delete project
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-projects"] });
      toast.success("Project deleted");
      setDeletingId(null);
    },
    onError: (err: Error) => toast.error(err.message),
  });

  // Quick toggle (publish / feature)
  const toggleMutation = useMutation({
    mutationFn: async ({
      id,
      field,
      value,
    }: {
      id: string;
      field: "is_published" | "is_featured";
      value: boolean;
    }) => {
      const payload = field === "is_published" ? { is_published: value } : { is_featured: value };
      const { error } = await supabase.from("projects").update(payload).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admin-projects"] }),
    onError: (err: Error) => toast.error(err.message),
  });

  // Cover image upload
  const handleCoverUpload = async (file: File) => {
    if (!file) return;
    setUploadingCover(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `covers/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from("project-media")
        .upload(path, file, { upsert: true });
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from("project-media").getPublicUrl(path);
      setForm((f) => ({ ...f, cover_image: data.publicUrl }));
      toast.success("Image uploaded");
    } catch (err: any) {
      toast.error(err.message ?? "Upload failed");
    } finally {
      setUploadingCover(false);
    }
  };

  // Brochure upload
  const handleBrochureUpload = async (file: File) => {
    if (!file) return;
    setUploadingBrochure(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `brochures/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from("brochures")
        .upload(path, file, { upsert: true });
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from("brochures").getPublicUrl(path);
      setForm((f) => ({ ...f, brochure_url: data.publicUrl }));
      toast.success("Brochure uploaded");
    } catch (err: any) {
      toast.error(err.message ?? "Upload failed");
    } finally {
      setUploadingBrochure(false);
    }
  };

  const openCreate = () => {
    setEditingProject(null);
    setForm(defaultForm);
    setShowForm(true);
  };

  const openEdit = (p: Project) => {
    setEditingProject(p);
    setForm({
      name: p.name,
      slug: p.slug,
      tagline: p.tagline ?? "",
      description: p.description ?? "",
      status: p.status as ProjectStatus,
      category: p.category ?? "",
      city: p.city ?? "",
      location: p.location ?? "",
      bedrooms: p.bedrooms ?? "",
      price_from: p.price_from?.toString() ?? "",
      sqft_from: p.sqft_from?.toString() ?? "",
      rera_number: p.rera_number ?? "",
      cover_image: p.cover_image ?? "",
      brochure_url: p.brochure_url ?? "",
      map_embed: p.map_embed ?? "",
      amenities: Array.isArray(p.amenities) ? (p.amenities as string[]).join(", ") : "",
      is_featured: p.is_featured,
      is_published: p.is_published,
      sort_order: p.sort_order.toString(),
    });
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingProject(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Project name is required");
      return;
    }
    if (editingProject) {
      updateMutation.mutate({ id: editingProject.id, data: form });
    } else {
      createMutation.mutate(form);
    }
  };

  const isSaving = createMutation.isPending || updateMutation.isPending;

  // Filter
  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.city ?? "").toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search projects…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-36 h-9">
            <SelectValue placeholder="All status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Ongoing">Ongoing</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Upcoming">Upcoming</SelectItem>
          </SelectContent>
        </Select>
        <Button
          onClick={openCreate}
          className="bg-gradient-gold text-obsidian font-semibold hover:opacity-90 gap-2 h-9"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </Button>
      </div>

      {/* Table */}
      <div className="royal-card rounded-xl overflow-hidden">
        {isLoading ? (
          <div className="space-y-3 p-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-14 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center">
            <Building2 className="w-12 h-12 mx-auto mb-4 text-muted-foreground/30" />
            <p className="text-muted-foreground font-medium">
              {search || statusFilter !== "all" ? "No matching projects" : "No projects yet"}
            </p>
            {!search && statusFilter === "all" && (
              <Button onClick={openCreate} variant="outline" className="mt-4 gap-2">
                <Plus className="w-4 h-4" />
                Create your first project
              </Button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/30">
                  {["Project", "City", "Status", "Price", "Published", "Featured", "Actions"].map(
                    (h) => (
                      <th
                        key={h}
                        className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {filtered.map((project, i) => (
                  <tr
                    key={project.id}
                    className={cn(
                      "border-b border-border/40 hover:bg-muted/20 transition-colors",
                      i === filtered.length - 1 && "border-0",
                    )}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {project.cover_image ? (
                          <img
                            src={project.cover_image}
                            alt={project.name}
                            className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-5 h-5 text-muted-foreground/50" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="font-semibold text-foreground truncate max-w-[180px]">
                            {project.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate max-w-[180px]">
                            /{project.slug}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground text-xs">
                      {project.city ?? "—"}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        className={cn(
                          "text-xs border",
                          statusColors[project.status as ProjectStatus] ??
                            "bg-muted text-muted-foreground",
                        )}
                      >
                        {project.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                      {project.price_from
                        ? `₹${(project.price_from / 100000).toFixed(0)}L`
                        : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <Switch
                        checked={project.is_published}
                        onCheckedChange={(v) =>
                          toggleMutation.mutate({
                            id: project.id,
                            field: "is_published",
                            value: v,
                          })
                        }
                        className="data-[state=checked]:bg-emerald-500"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Switch
                        checked={project.is_featured}
                        onCheckedChange={(v) =>
                          toggleMutation.mutate({
                            id: project.id,
                            field: "is_featured",
                            value: v,
                          })
                        }
                        className="data-[state=checked]:bg-gold"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          onClick={() => openEdit(project)}
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        {project.slug && (
                          <a
                            href={`/projects/${project.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-sky-500"
                              title="View live"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </a>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => setDeletingId(project.id)}
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Summary */}
      {!isLoading && (
        <p className="text-xs text-muted-foreground text-right">
          Showing {filtered.length} of {projects.length} projects
        </p>
      )}

      {/* Create / Edit Dialog */}
      <Dialog open={showForm} onOpenChange={(o) => !o && closeForm()}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              {editingProject ? "Edit Project" : "New Project"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-0">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="media">Media</TabsTrigger>
              </TabsList>

              {/* Basic Info Tab */}
              <TabsContent value="basic" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 space-y-1.5">
                    <Label htmlFor="name">Project Name *</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          name: e.target.value,
                          slug: f.slug || generateSlug(e.target.value),
                        }))
                      }
                      placeholder="e.g. SLV Grandeur"
                      required
                    />
                  </div>

                  <div className="col-span-2 space-y-1.5">
                    <Label htmlFor="slug">URL Slug *</Label>
                    <Input
                      id="slug"
                      value={form.slug}
                      onChange={(e) => setForm((f) => ({ ...f, slug: generateSlug(e.target.value) }))}
                      placeholder="slv-grandeur"
                      required
                    />
                    <p className="text-xs text-muted-foreground">/projects/{form.slug || "…"}</p>
                  </div>

                  <div className="col-span-2 space-y-1.5">
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input
                      id="tagline"
                      value={form.tagline}
                      onChange={(e) => setForm((f) => ({ ...f, tagline: e.target.value }))}
                      placeholder="Where luxury meets serenity"
                    />
                  </div>

                  <div className="col-span-2 space-y-1.5">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={form.description}
                      onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                      placeholder="Describe the project…"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={form.status}
                      onValueChange={(v) => setForm((f) => ({ ...f, status: v as ProjectStatus }))}
                    >
                      <SelectTrigger id="status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ongoing">Ongoing</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        <SelectItem value="Upcoming">Upcoming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={form.category}
                      onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                      placeholder="Villa / Apartment / Penthouse"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={form.city}
                      onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                      placeholder="Vijayawada"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="location">Location / Area</Label>
                    <Input
                      id="location"
                      value={form.location}
                      onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                      placeholder="Benz Circle"
                    />
                  </div>

                  <div className="flex items-center gap-3 col-span-2 p-3 rounded-lg border border-border/60 bg-muted/20">
                    <div className="flex items-center gap-2 flex-1">
                      <Switch
                        id="is_published"
                        checked={form.is_published}
                        onCheckedChange={(v) => setForm((f) => ({ ...f, is_published: v }))}
                        className="data-[state=checked]:bg-emerald-500"
                      />
                      <Label htmlFor="is_published" className="cursor-pointer">
                        Published (visible on website)
                      </Label>
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <Switch
                        id="is_featured"
                        checked={form.is_featured}
                        onCheckedChange={(v) => setForm((f) => ({ ...f, is_featured: v }))}
                        className="data-[state=checked]:bg-gold"
                      />
                      <Label htmlFor="is_featured" className="cursor-pointer">
                        Featured (homepage highlight)
                      </Label>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Details Tab */}
              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Input
                      id="bedrooms"
                      value={form.bedrooms}
                      onChange={(e) => setForm((f) => ({ ...f, bedrooms: e.target.value }))}
                      placeholder="3BHK, 4BHK"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="price_from">Price From (₹)</Label>
                    <Input
                      id="price_from"
                      type="number"
                      value={form.price_from}
                      onChange={(e) => setForm((f) => ({ ...f, price_from: e.target.value }))}
                      placeholder="5000000"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="sqft_from">Area From (sq.ft)</Label>
                    <Input
                      id="sqft_from"
                      type="number"
                      value={form.sqft_from}
                      onChange={(e) => setForm((f) => ({ ...f, sqft_from: e.target.value }))}
                      placeholder="1200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="rera_number">RERA Number</Label>
                    <Input
                      id="rera_number"
                      value={form.rera_number}
                      onChange={(e) => setForm((f) => ({ ...f, rera_number: e.target.value }))}
                      placeholder="RERA-12345"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="sort_order">Sort Order</Label>
                    <Input
                      id="sort_order"
                      type="number"
                      value={form.sort_order}
                      onChange={(e) => setForm((f) => ({ ...f, sort_order: e.target.value }))}
                      placeholder="0"
                    />
                  </div>

                  <div className="col-span-2 space-y-1.5">
                    <Label htmlFor="amenities">Amenities (comma-separated)</Label>
                    <Textarea
                      id="amenities"
                      value={form.amenities}
                      onChange={(e) => setForm((f) => ({ ...f, amenities: e.target.value }))}
                      placeholder="Swimming Pool, Gym, Clubhouse, Garden…"
                      rows={3}
                    />
                  </div>

                  <div className="col-span-2 space-y-1.5">
                    <Label htmlFor="map_embed">Map Embed URL</Label>
                    <Input
                      id="map_embed"
                      value={form.map_embed}
                      onChange={(e) => setForm((f) => ({ ...f, map_embed: e.target.value }))}
                      placeholder="https://maps.google.com/maps?..."
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Media Tab */}
              <TabsContent value="media" className="space-y-6">
                {/* Cover Image */}
                <div className="space-y-3">
                  <Label>Cover Image</Label>
                  {form.cover_image && (
                    <div className="relative w-full h-40 rounded-xl overflow-hidden border border-border">
                      <img
                        src={form.cover_image}
                        alt="Cover"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, cover_image: "" }))}
                        className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                  <div className="flex gap-3">
                    <Input
                      value={form.cover_image}
                      onChange={(e) => setForm((f) => ({ ...f, cover_image: e.target.value }))}
                      placeholder="Paste image URL or upload below"
                      className="flex-1"
                    />
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleCoverUpload(file);
                        }}
                      />
                      <Button type="button" variant="outline" disabled={uploadingCover} className="gap-2 whitespace-nowrap" asChild>
                        <span>
                          {uploadingCover ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Upload className="w-4 h-4" />
                          )}
                          Upload
                        </span>
                      </Button>
                    </label>
                  </div>
                </div>

                {/* Brochure */}
                <div className="space-y-3">
                  <Label>Brochure (PDF)</Label>
                  {form.brochure_url && (
                    <div className="flex items-center gap-2 p-3 rounded-lg border border-border bg-muted/20">
                      <span className="text-sm text-muted-foreground flex-1 truncate">
                        {form.brochure_url}
                      </span>
                      <a href={form.brochure_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, brochure_url: "" }))}
                      >
                        <X className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                      </button>
                    </div>
                  )}
                  <div className="flex gap-3">
                    <Input
                      value={form.brochure_url}
                      onChange={(e) => setForm((f) => ({ ...f, brochure_url: e.target.value }))}
                      placeholder="Paste PDF URL or upload below"
                      className="flex-1"
                    />
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleBrochureUpload(file);
                        }}
                      />
                      <Button type="button" variant="outline" disabled={uploadingBrochure} className="gap-2 whitespace-nowrap" asChild>
                        <span>
                          {uploadingBrochure ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Upload className="w-4 h-4" />
                          )}
                          Upload
                        </span>
                      </Button>
                    </label>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <DialogFooter className="pt-6 mt-6 border-t border-border/60">
              <Button type="button" variant="outline" onClick={closeForm} disabled={isSaving}>
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSaving}
                className="bg-gradient-gold text-obsidian font-semibold hover:opacity-90 gap-2"
              >
                {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                {editingProject ? "Save Changes" : "Create Project"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deletingId} onOpenChange={(o) => !o && setDeletingId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Project?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The project and all its data will be permanently
              removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deletingId && deleteMutation.mutate(deletingId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleteMutation.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : null}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
