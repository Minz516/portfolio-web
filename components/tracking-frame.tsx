"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

// Signature motif: a cluster of rotated wireframe squares, evoking an AR spatial-anchor
// / object-tracking marker. Drifts a few px on pointer move for a subtle depth-layer read.
// Used once, deliberately, in the hero only (see DESIGN.md Section 6).
export function TrackingFrame() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
    mouseX.set(relativeX);
    mouseY.set(relativeY);
  }

  function handlePointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const springConfig = { stiffness: 60, damping: 20, mass: 0.6 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const layerA_x = useTransform(springX, (v) => v * 18);
  const layerA_y = useTransform(springY, (v) => v * 18);
  const layerB_x = useTransform(springX, (v) => v * -12);
  const layerB_y = useTransform(springY, (v) => v * -12);
  const layerC_x = useTransform(springX, (v) => v * 8);
  const layerC_y = useTransform(springY, (v) => v * -8);

  const entrance = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : 0.5 + i * 0.12,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative aspect-square w-full max-w-md select-none"
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <motion.rect
          custom={0}
          initial="hidden"
          animate="visible"
          variants={entrance}
          style={{ x: layerA_x, y: layerA_y }}
          x="70"
          y="70"
          width="220"
          height="220"
          rx="2"
          transform="rotate(12 180 180)"
          fill="none"
          stroke="var(--color-outline-variant)"
          strokeWidth="1"
        />
        <motion.rect
          custom={1}
          initial="hidden"
          animate="visible"
          variants={entrance}
          style={{ x: layerB_x, y: layerB_y }}
          x="110"
          y="110"
          width="220"
          height="220"
          rx="2"
          transform="rotate(-8 220 220)"
          fill="none"
          stroke="var(--color-primary)"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <motion.rect
          custom={2}
          initial="hidden"
          animate="visible"
          variants={entrance}
          style={{ x: layerC_x, y: layerC_y }}
          x="150"
          y="40"
          width="150"
          height="150"
          rx="2"
          transform="rotate(24 225 115)"
          fill="none"
          stroke="var(--color-outline-variant)"
          strokeWidth="1"
        />
        <motion.circle
          custom={1.5}
          initial="hidden"
          animate="visible"
          variants={entrance}
          style={{ x: layerB_x, y: layerB_y }}
          cx="220"
          cy="220"
          r="3"
          fill="var(--color-primary)"
        />
      </motion.svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, rgba(83,235,232,0.10), transparent 60%)",
        }}
      />
    </div>
  );
}
