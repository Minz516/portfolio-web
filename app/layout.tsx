import type { Metadata } from "next";
import { Lexend, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://tranhoangminh.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tran Hoang Minh | Software Engineering Student, RMIT University",
  description:
    "Portfolio of Tran Hoang Minh, a Software Engineering student at RMIT University building a foundation in OOP and algorithms, with a long-term focus on AR/VR and immersive technologies.",
  keywords: [
    "Tran Hoang Minh",
    "Software Engineer",
    "RMIT University",
    "AR/VR",
    "Immersive Technology",
    "Portfolio",
  ],
  authors: [{ name: "Tran Hoang Minh" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Tran Hoang Minh | Software Engineering Student, RMIT University",
    description:
      "Building a foundation in OOP and algorithms today, researching AR/VR and immersive technology tomorrow.",
    url: siteUrl,
    siteName: "Tran Hoang Minh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tran Hoang Minh | Software Engineering Student, RMIT University",
    description:
      "Building a foundation in OOP and algorithms today, researching AR/VR and immersive technology tomorrow.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
