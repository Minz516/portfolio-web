import { Code2, Layers, Server, Database, Wrench, Users, type LucideIcon } from "lucide-react";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { Reveal } from "@/components/reveal";

const icons: Record<SkillCategory["icon"], LucideIcon> = {
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  Users,
};

const spanClass: Record<SkillCategory["span"], string> = {
  1: "lg:col-span-1",
  2: "sm:col-span-2 lg:col-span-2",
  4: "sm:col-span-2 lg:col-span-4",
};

export function Skills() {
  return (
    <section id="skills" className="border-t border-outline-variant/30 py-20 lg:py-40">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-on-surface sm:text-4xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => {
            const Icon = icons[category.icon];
            return (
              <Reveal
                key={category.title}
                delay={index * 0.06}
                className={spanClass[category.span]}
              >
                <div className="h-full rounded-lg border border-outline-variant/50 bg-surface-low p-6 transition-colors hover:border-primary/40">
                  <Icon className="text-primary" size={22} strokeWidth={1.75} />
                  <h3 className="mt-4 font-display text-base font-medium text-on-surface">
                    {category.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded bg-surface-high px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-secondary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
