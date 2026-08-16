// Certificates data. `image` files live in /public/certificates (real certificate scans
// supplied by the user). `aspect` is an approximate width/height ratio of the source scan,
// used so each card frames its document without cropping any text (see components/certificates.tsx).

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  imageAlt: string;
  aspect: string;
};

export const certificates: Certificate[] = [
  {
    title: "BIG-O Blue: Algorithms & Interview Patterns",
    issuer: "Big-O Coding",
    date: "May 2026",
    image: "/certificates/bigo-certificate.png",
    imageAlt: "Certificate of Completion for BIG-O Blue: Algorithms and Interview Patterns, awarded to Tran Hoang Minh by Big-O Coding",
    aspect: "4/3",
  },
  {
    title: "RMIT Hackathon 2025 - Certificate of Participation",
    issuer: "RMIT University, School of Science, Engineering and Technology",
    date: "2025",
    image: "/certificates/rmit_genai_cert.png",
    imageAlt: "RMIT Hackathon 2025 certificate of participation awarded to Tran Hoang Minh",
    aspect: "5/6",
  },
  {
    title: "Top 10 Most Outstanding Teams, RMIT Hack-A-Venture 2025",
    issuer: "RMIT Hack-A-Venture 2025",
    date: "2025",
    image: "/certificates/rmit-hack-a-venture-certificate.jpg",
    imageAlt: "Certificate of Achievement recognizing Tran Hoang Minh's team as a Top 10 Most Outstanding Team at RMIT Hack-A-Venture 2025",
    aspect: "3/2",
  },
  {
    title: "Mastering Skills for University Success",
    issuer: "Dedication for Kindness, Happiness and Peace (Your Mind Journey)",
    date: "Sep - Oct 2022",
    image: "/certificates/university-management-skill.jpg",
    imageAlt: "Certificate of Achievement for Mastering Skills for University Success, awarded to Tran Hoang Minh",
    aspect: "4/3",
  },
];
