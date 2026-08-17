"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";

// ─── Motion variants ──────────────────────────────────────────────────────────
// Entrance easing from DESIGN.md: [0.16, 1, 0.3, 1] — a strong ease-out that
// decelerates sharply. Feels deliberate, not springy.
const EASE = [0.16, 1, 0.3, 1] as const;
const DURATION = 0.5;

function useVariant(delay: number) {
  const shouldReduce = useReducedMotion();
  return {
    initial: shouldReduce ? { opacity: 1 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DURATION, ease: EASE, delay },
  };
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
// Left-aligned, min-h-[100dvh]. Content vertically centered slightly above
// midpoint via padding-top on the section.
//
// Cursor: a small `|` character next to the name. CSS keyframes blink exactly
// 3 times then stop — animation-iteration-count: 3. Never infinite.
// ─────────────────────────────────────────────────────────────────────────────
export default function Hero() {
  const roleProps = useVariant(0.1);
  const nameProps = useVariant(0.22);
  const subtextProps = useVariant(0.38);
  const linksProps = useVariant(0.5);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="hero-section"
    >
      <div className="container hero-inner">
        {/* Left column — 8 of 12 cols on desktop */}
        <div className="hero-content">

          {/* 1. Role label */}
          <motion.p
            className="hero-role"
            {...roleProps}
          >
            Building software. Studying systems.
          </motion.p>

          {/* 2. Name + cursor */}
          <motion.h1
            className="hero-name"
            {...nameProps}
          >
            Aditi Prajapati
            <span className="hero-cursor" aria-hidden="true" />
          </motion.h1>

          {/* 3. Subtext */}
          <motion.p
            className="hero-subtext"
            {...subtextProps}
          >
            I build web experiences that are fast, intentional, and easy to
            understand. Currently a B.Sc. IT student exploring systems, frontend
            craft, and what makes software feel right.
          </motion.p>

          {/* 4. Links */}
          <motion.div
            className="hero-links"
            {...linksProps}
          >
            <a href="#work" className="hero-link hero-link--primary">
              View work
              <span className="hero-link-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a href="#contact" className="hero-link hero-link--secondary">
              Get in touch
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
