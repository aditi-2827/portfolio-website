"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import ProjectRow from "./ProjectRow";
import { projects } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Projects ─────────────────────────────────────────────────────────────────
// "Selected Work" section. Horizontal editorial row list — no cards.
// Data-driven from lib/data.ts.
//
// whileInView scroll reveal on the heading.
// Individual rows have a staggered delay via index offset.
// All motion respects useReducedMotion().
// ─────────────────────────────────────────────────────────────────────────────
export default function Projects() {
  const shouldReduce = useReducedMotion();

  const revealProps = (delay = 0) => ({
    initial: shouldReduce ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 as const },
    transition: { duration: 0.6, ease: EASE, delay },
  });

  return (
    <section
      id="work"
      aria-label="Selected work"
      className="projects-section"
    >
      <div className="container">

        {/* Section heading */}
        <motion.h2
          className="projects-heading"
          {...revealProps(0)}
        >
          Selected Work
        </motion.h2>

        {/* Project rows */}
        <div
          className="projects-list"
          role="list"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.index}
              role="listitem"
              {...revealProps(i * 0.07)}
            >
              <ProjectRow project={project} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
