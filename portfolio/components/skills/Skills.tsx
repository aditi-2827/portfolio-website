"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import { skills } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Skills ───────────────────────────────────────────────────────────────────
// Text-only editorial skills list. No bubbles, bars, icons, or ratings.
// Two-column layout at desktop — label left, items right.
// Data-driven from lib/data.ts.
//
// Visual register: technical metadata, not a "skills card section".
// ─────────────────────────────────────────────────────────────────────────────
export default function Skills() {
  const shouldReduce = useReducedMotion();

  const revealProps = (delay = 0) => ({
    initial: shouldReduce ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 as const },
    transition: { duration: 0.6, ease: EASE, delay },
  });

  return (
    <section
      id="skills"
      aria-label="Technical skills"
      className="skills-section"
    >
      <div className="container">

        {/* Section heading */}
        <motion.h2
          className="skills-heading"
          {...revealProps(0)}
        >
          Stack
        </motion.h2>

        {/* Skill categories */}
        <div className="skills-grid">
          {skills.map((category, i) => (
            <motion.div
              key={category.label}
              className="skills-category"
              {...revealProps(i * 0.08)}
            >
              <span className="skills-label">{category.label}</span>
              <span className="skills-items">
                {category.items.join("  ·  ")}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
