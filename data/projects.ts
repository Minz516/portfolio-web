// Project data. Descriptions are condensed from docs/my_portfolio.pdf bullet points.
// `link` is a placeholder "#" where no real URL was supplied (flagged in NOTES.md).

export type Project = {
  slug: string;
  title: string;
  role: string;
  date: string;
  description: string;
  result: string;
  resultHighlight?: boolean; // true = the single tertiary-amber "1st place" moment
  tags: string[];
  link: string;
  linkLabel: "GitHub Repo" | "Video";
  icon: "Ticket" | "TrainFront" | "Waves";
  layout: "split-right" | "split-left" | "feature";
};

export const projects: Project[] = [
  {
    slug: "eventx",
    title: "EventX",
    role: "Backend Specialist",
    date: "Dec 2025",
    description:
      "End-to-end event management platform supporting four user types: system admins, event organizers, presenters, and attendees. Backend designed with PostgreSQL, Java, and JPA, with automated batch ticket generation, real-time QR check-ins, and automated email notifications.",
    result: "High Distinction (81/100)",
    tags: ["Java", "PostgreSQL", "JPA"],
    link: "#",
    linkLabel: "GitHub Repo",
    icon: "Ticket",
    layout: "split-right",
  },
  {
    slug: "railway-management-system",
    title: "Railway Management System",
    role: "Database & Application Developer",
    date: "Dec 2025",
    description:
      "Relational database architected from scratch with sample data via Oracle APEX. End-to-end passenger booking flow with real-time trip search, a dynamic visual seat mapper, and instant booking history, plus an admin suite with real-time fleet monitoring and revenue dashboards.",
    result: "Highest score in the course (80/100)",
    tags: ["Oracle APEX", "SQL", "Database Design"],
    link: "#",
    linkLabel: "Video",
    icon: "TrainFront",
    layout: "split-left",
  },
  {
    slug: "flowguard",
    title: "FlowGuard",
    role: "Lead Developer",
    date: "2025",
    description:
      "Real-time flood early-warning platform integrating IoT sensors, weather APIs, and tidal data to give communities advance notice ahead of rising water.",
    result: "1st place among 100+ teams nationwide",
    resultHighlight: true,
    tags: ["Next.js", "Python", "Supabase"],
    link: "#",
    linkLabel: "GitHub Repo",
    icon: "Waves",
    layout: "feature",
  },
];
