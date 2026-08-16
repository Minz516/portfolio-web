import {
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  Users,
  Binary,
  Bot,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql,
  SiMongodb,
  SiGit,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaFileExcel, FaFileWord, FaFilePowerpoint } from "react-icons/fa6";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { Reveal } from "@/components/reveal";

const icons: Record<SkillCategory["icon"], LucideIcon> = {
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  Users,
  Binary,
  Bot,
};

// Per-item brand marks for Languages, Frameworks & Libraries, Databases, and Tools.
// Sourced across Simple Icons / Devicon / Tabler / Codicons / Font Awesome (all bundled
// in react-icons) since no single set covers every brand here (Java, VS Code, and the
// Microsoft Office apps have no official mark in Simple Icons for trademark reasons).
const techIcons: Record<string, IconType> = {
  Python: SiPython,
  Java: DiJava,
  "C/C++": TbBrandCpp,
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  React: SiReact,
  Supabase: SiSupabase,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Git: SiGit,
  "VS Code": VscVscode,
  Excel: FaFileExcel,
  Word: FaFileWord,
  PowerPoint: FaFilePowerpoint,
};

const spanClass: Record<SkillCategory["span"], string> = {
  1: "lg:col-span-1",
  2: "sm:col-span-2 lg:col-span-2",
  4: "sm:col-span-2 lg:col-span-4",
};

export function Skills() {
  return (
    <section id="skills" className="border-t border-outline-variant/30 pt-20 lg:pt-40">
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
                    {category.items.map((item) => {
                      const TechIcon = techIcons[item];
                      return (
                        <li
                          key={item}
                          className="flex items-center gap-1.5 rounded bg-surface-high px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-secondary"
                        >
                          {TechIcon && <TechIcon className="shrink-0" size={12} />}
                          {item}
                        </li>
                      );
                    })}
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
