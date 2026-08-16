// Central profile data. Sourced from docs/prompt.md and docs/my_portfolio.pdf.
// Do not invent facts here, every field traces back to those two documents.

export const site = {
  name: "Tran Hoang Minh",
  role: "Software Engineering Student",
  org: "RMIT University",
  eyebrow: "Software Engineering Student · RMIT University",
  heroHeadline: "Engineering the bridge to immersive reality.",
  heroSubtext:
    "Software Engineering student at RMIT building a foundation in OOP and algorithms, with eyes on AR/VR research ahead.",
  aboutParagraphs: [
    "Tran Hoang Minh believes technology is the catalyst for turning the impossible into reality. The current focus is building a robust technical foundation through Object-Oriented Programming and complex algorithms, with a growth mindset that stays eager for new technical challenges.",
    "The long-term vision reaches further: researching and developing AR/VR and immersive technologies that bridge the gap between virtual experiences and the physical world.",
  ],
  location: "Ho Chi Minh City, Vietnam",
  email: "hoangminhthbh@gmail.com",
  phone: "+84 981 197 605",
  phoneHref: "+84981197605",
  github: {
    label: "github.com/Minz516",
    url: "https://github.com/Minz516",
  },
  linkedin: {
    label: "linkedin.com/in/hoang-minh-897487307",
    url: "https://linkedin.com/in/hoang-minh-897487307",
  },
  education: {
    school: "RMIT University",
    degree: "Bachelor of Software Engineering",
    gpa: "GPA 3.3/4.0",
    period: "Oct 2024 - Oct 2028 (Expected)",
    location: "Ho Chi Minh City, Vietnam",
  },
  languages: [
    { name: "English", level: "IELTS 6.5 Overall" },
    { name: "Vietnamese", level: "Native" },
  ],
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Honors", href: "#honors" },
] as const;
