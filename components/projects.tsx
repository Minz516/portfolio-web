import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section id="projects" className="border-t border-outline-variant/30 py-20 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-primary">
            Selected Work
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-on-surface sm:text-4xl">
            Three projects, three problem spaces.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
