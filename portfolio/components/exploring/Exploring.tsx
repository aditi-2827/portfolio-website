"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import { exploringItems } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Exploring ────────────────────────────────────────────────────────────────
// "Currently Exploring" section.
// Placed after Skills, before Contact.
// Format: ➔ [Topic] — [Note] with ➔ in Ember Orange accent.
// Data-driven from lib/data.ts.
// ─────────────────────────────────────────────────────────────────────────────
export default function Exploring() {
  const shouldReduce = useReducedMotion();

  const revealProps = (delay = 0) => ({
    initial: shouldReduce ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 as const },
    transition: { duration: 0.6, ease: EASE, delay },
  });

  return (
    <section
      id="exploring"
      aria-label="Currently exploring"
      className="exploring-section"
    >
      <div className="container">

        {/* Section heading */}
        <motion.h2
          className="exploring-heading"
          {...revealProps(0)}
        >
          Currently Exploring
        </motion.h2>

        {/* Items list */}
        <div className="exploring-list" role="list">
          {exploringItems.map((item, i) => (
            <motion.div
              key={item.topic}
              className="exploring-item"
              role="listitem"
              {...revealProps(i * 0.08)}
            >
              <span className="exploring-arrow" aria-hidden="true">
                ➔
              </span>
              <div className="exploring-body">
                <span className="exploring-topic">{item.topic}</span>
                <span className="exploring-sep" aria-hidden="true">
                  —
                </span>
                <span className="exploring-note">{item.note}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
