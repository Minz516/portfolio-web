"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";

// Hero portrait: a real photo with a soft teal ambient glow behind it and a gentle
// fade-and-scale entrance. Used once, deliberately, in the hero only.
export function HeroPortrait() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-[3/4] w-full max-w-sm select-none" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, rgba(83,235,232,0.14), transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.9,
          delay: shouldReduceMotion ? 0 : 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src={site.avatar.hero.src}
          alt={site.avatar.hero.alt}
          fill
          sizes="(min-width: 1024px) 30vw, 60vw"
          className="object-contain object-bottom"
          priority
        />
      </motion.div>
    </div>
  );
}
