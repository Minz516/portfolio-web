import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";

export function ProjectCard({ project }: { project: Project }) {
  const isFeature = project.layout === "feature";
  const isImageFirst = project.layout === "split-left";

  return (
    <Reveal>
      <article
        className={`group grid grid-cols-1 gap-8 rounded-lg border border-outline-variant/40 bg-surface-low/40 p-6 sm:p-8 lg:gap-12 ${
          isFeature ? "" : "lg:grid-cols-2 lg:items-center"
        }`}
      >
        <div
          className={
            isFeature
              ? "order-1"
              : isImageFirst
                ? "order-1 lg:order-1"
                : "order-1 lg:order-2"
          }
        >
          <ProjectVisual project={project} />
        </div>

        <div
          className={
            isFeature
              ? "order-2 mx-auto max-w-2xl text-center"
              : isImageFirst
                ? "order-2 lg:order-2"
                : "order-2 lg:order-1"
          }
        >
          <div
            className={`flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-on-surface-variant ${
              isFeature ? "justify-center" : ""
            }`}
          >
            <span>{project.role}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{project.date}</span>
          </div>

          <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.01em] text-on-surface sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 max-w-[65ch] text-base leading-[1.7] text-on-surface-variant">
            {project.description}
          </p>

          {project.result && (
            <p
              className={`mt-4 font-mono text-xs uppercase tracking-[0.08em] ${
                project.resultHighlight ? "text-tertiary" : "text-secondary"
              }`}
            >
              {project.result}
            </p>
          )}

          <ul className={`mt-5 flex flex-wrap gap-2 ${isFeature ? "justify-center" : ""}`}>
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded bg-surface-high px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-secondary"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div
            className={`mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 ${
              isFeature ? "justify-center" : ""
            }`}
          >
            <a
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel={project.link !== "#" ? "noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-primary transition-colors hover:text-primary-container"
            >
              {project.linkLabel}
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>

            {project.secondaryLink && (
              <a
                href={project.secondaryLink}
                target={project.secondaryLink !== "#" ? "_blank" : undefined}
                rel={project.secondaryLink !== "#" ? "noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-primary transition-colors hover:text-primary-container"
              >
                {project.secondaryLinkLabel}
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
