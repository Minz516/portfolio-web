import { Ticket, TrainFront, Waves, type LucideIcon } from "lucide-react";
import type { Project } from "@/data/projects";

const icons: Record<Project["icon"], LucideIcon> = {
  Ticket,
  TrainFront,
  Waves,
};

// Placeholder visual for projects without a real screenshot (flagged in NOTES.md).
// Abstract dot-grid + domain icon, desaturated at rest, brightening on hover, with a
// Tracking Frame corner-bracket echo (see DESIGN.md Section 6) instead of a fake UI mockup.
export function ProjectVisual({ project }: { project: Project }) {
  const Icon = icons[project.icon];

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-outline-variant/50 bg-surface-low sm:aspect-video lg:aspect-[4/3]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(133,148,147,0.28) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(83,235,232,0.14), transparent 65%)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Icon
          size={72}
          strokeWidth={1.25}
          className="text-on-surface-variant/40 transition-colors duration-500 group-hover:text-primary"
        />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l-[1.5px] border-t-[1.5px] border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r-[1.5px] border-t-[1.5px] border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b-[1.5px] border-l-[1.5px] border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b-[1.5px] border-r-[1.5px] border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
