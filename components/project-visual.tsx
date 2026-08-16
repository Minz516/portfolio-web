import Image from "next/image";
import type { Project } from "@/data/projects";

// Real project screenshot, grayscale at rest and full color on hover (per DESIGN.md /
// .claude/THEME.md component spec), with a Tracking Frame corner-bracket echo (Section 6)
// standing in for the "object detected" feedback that motif represents elsewhere.
export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-outline-variant/50 bg-surface-low sm:aspect-video lg:aspect-[4/3]">
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="project-thumb object-cover object-top transition-all duration-500"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(83,235,232,0.14), transparent 65%)",
        }}
      />

      <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l-[1.5px] border-t-[1.5px] border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r-[1.5px] border-t-[1.5px] border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-4 left-4 h-4 w-4 border-b-[1.5px] border-l-[1.5px] border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b-[1.5px] border-r-[1.5px] border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
