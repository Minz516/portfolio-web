// Project data. Descriptions are condensed from docs/my_portfolio.pdf bullet points,
// plus one additional personal project (Floppy Bird) supplied directly by the user.
// `link` is a placeholder "#" where no real URL was supplied (flagged in NOTES.md).
// `image` files live in /public/projects (real screenshots supplied by the user).

export type Project = {
  slug: string;
  title: string;
  role: string;
  date: string;
  description: string;
  result?: string;
  resultHighlight?: boolean; // true = the single tertiary-amber "1st place" moment
  tags: string[];
  link: string;
  linkLabel: "GitHub Repo" | "Video";
  image: string;
  imageAlt: string;
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
    link: "https://youtu.be/2EutT3HtLUg?si=jvOO5W0gYZ9LL92a",
    linkLabel: "Video",
    image: "/projects/eventx.png",
    imageAlt: "EventX event listing screen showing scheduled events with search and status filters",
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
    image: "/projects/railway-management.png",
    imageAlt: "Railway Reservation Management System showing a searchable list of scheduled train trips",
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
    link: "https://youtu.be/eWKLo_T5JiQ?si=g8Q9NXiIdm6XAPfX",
    linkLabel: "Video",
    image: "/projects/flowguard.png",
    imageAlt: "FlowGuard mobile app mockups showing flood risk alerts overlaid on flooded street photography",
    layout: "feature",
  },
  {
    slug: "floppy-bird",
    title: "Floppy Bird",
    role: "Solo Developer",
    date: "2026",
    description:
      "A gesture-controlled reimagining of Flappy Bird, built with Python and Pygame. Real-time arm-tracking via webcam replaces the keyboard, using computer vision to read the player's arm position and translate physical movement directly into the bird's flight.",
    tags: ["Python", "Pygame", "Computer Vision"],
    link: "https://github.com/rmit-nct/neo-flappy-bird.git",
    linkLabel: "GitHub Repo",
    image: "/projects/floppy-bird.png",
    imageAlt: "Floppy Bird gameplay split-screen showing the Flappy Bird clone alongside a webcam feed tracking the player's raised arm",
    layout: "split-right",
  },
  {
    slug: "tictactoang",
    title: "TicTacToang",
    role: "Fullstack Developer",
    date: "2026",
    description:
      "Real-time multiplayer Tic-Tac-Toe built end-to-end with a React frontend and a Node.js backend. WebSocket-based communication powers live, synchronized matches between players, backed by a modular architecture designed for scalability and maintainability.",
    tags: ["React", "Node.js", "WebSocket"],
    link: "https://github.com/RMIT-Full-Stack-Development-2026A/Group1.git",
    linkLabel: "GitHub Repo",
    image: "/projects/tictactoang.png",
    imageAlt: "TicTacToang landing page showing the game arena hero, board size and AI difficulty features, and a live match visualizer",
    layout: "split-left",
  },
];
