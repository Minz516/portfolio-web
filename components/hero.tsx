"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { TrackingFrame } from "@/components/tracking-frame";

const socials = [
  { label: "GitHub", href: site.github.url, icon: Github },
  { label: "LinkedIn", href: site.linkedin.url, icon: Linkedin },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const stagger: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="lg:col-span-7"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.1em] text-primary sm:text-sm"
          >
            {site.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 max-w-2xl text-balance font-display text-5xl font-bold leading-[1.1] tracking-[-0.03em] text-on-surface sm:text-6xl lg:text-7xl"
          >
            {site.heroHeadline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-balance text-lg leading-[1.7] text-on-surface-variant"
          >
            {site.heroSubtext}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-on-primary transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded border border-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-primary transition-transform duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="text-on-surface-variant transition-colors hover:text-primary"
              >
                <Icon size={20} strokeWidth={1.75} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <div className="hidden items-center justify-center lg:col-span-5 lg:flex">
          <TrackingFrame />
        </div>
      </div>
    </section>
  );
}
