// Honors & Awards timeline data, resume order (2025 entries first, then 2016).

export type Honor = {
  title: string;
  year: string;
  description: string;
  featured?: boolean; // true = the single tertiary-amber "champion" moment
};

export const honors: Honor[] = [
  {
    title: "RMIT Hack-A-Venture 2025 - Champion",
    year: "2025",
    description:
      "Championed an innovation hackathon by developing practical solutions addressing UN SDGs 6, 11, 12, and 13 for environmental conservation.",
    featured: true,
  },
  {
    title: "Naver AI Hackathon 2025 - Top 10%",
    year: "2025",
    description:
      "Ranked in the top 10% of a talent-acquisition hackathon by building AI-driven applications to streamline daily tasks and planning.",
  },
  {
    title: "IC3 Spark Competition 2016 - Consolation Award #99",
    year: "2016",
    description:
      "Earned an international Certiport certification for foundational computing skills, an early marker of a lasting passion for technology.",
  },
];
