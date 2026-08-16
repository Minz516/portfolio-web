// Skill categories. `icon` keys map to lucide-react components in components/skills.tsx.
// `span` controls the bento cell width on the lg (4-col) breakpoint.

export type SkillCategory = {
  title: string;
  icon: "Code2" | "Layers" | "Server" | "Database" | "Wrench" | "Users";
  items: string[];
  span: 1 | 2 | 4;
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    items: ["Python", "Java", "C/C++", "HTML", "CSS", "JavaScript"],
    span: 2,
  },
  {
    title: "Frameworks & Libraries",
    icon: "Layers",
    items: ["React", "Supabase", "Tailwind", "Bootstrap"],
    span: 2,
  },
  {
    title: "Backend & Deployment",
    icon: "Server",
    items: ["WebSocket", "FastAPI", "REST API"],
    span: 1,
  },
  {
    title: "Databases",
    icon: "Database",
    items: ["PostgreSQL", "MongoDB"],
    span: 1,
  },
  {
    title: "Tools",
    icon: "Wrench",
    items: ["Git", "VS Code", "Excel", "Word", "PowerPoint"],
    span: 2,
  },
  {
    title: "Soft Skills",
    icon: "Users",
    items: [
      "Critical Thinking",
      "Problem Solving",
      "Algorithm Solving",
      "Team Collaboration",
      "Time Management",
      "Project Leadership",
    ],
    span: 4,
  },
];
