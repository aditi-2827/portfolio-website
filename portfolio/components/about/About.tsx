"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── About ────────────────────────────────────────────────────────────────────
// No photo — ghost monogram "AP" provides visual weight as a purely decorative
// element. Col-span-8 col-start-3 layout at desktop — same generous inset as
// other body sections. aria-hidden="true" on the monogram.
//
// Scroll reveals: heading + each paragraph enters with whileInView.
// viewport={{ once: true }} — only animates on first reveal.
// ─────────────────────────────────────────────────────────────────────────────
export default function About() {
  const shouldReduce = useReducedMotion();

  const revealProps = (delay = 0) => ({
    initial: shouldReduce ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 as const },
    transition: { duration: 0.6, ease: EASE, delay },
  });

  return (
    <section
      id="about"
      aria-label="About Aditi"
      className="about-section"
    >
      <div className="container">
        <div className="about-inner">

          {/* Ghost monogram — decorative, hidden on mobile */}
          <span
            className="about-monogram"
            aria-hidden="true"
            role="presentation"
          >
            AP
          </span>

          {/* Content column */}
          <div className="about-content">

            {/* Section headline */}
            <motion.h2
              className="about-heading"
              {...revealProps(0)}
            >
              About
            </motion.h2>

            {/* Body paragraphs — each reveals sequentially */}
            <motion.p
              className="about-body"
              {...revealProps(0.08)}
            >
              I&rsquo;m Aditi — a software developer and B.Sc. Information
              Technology student based in Mumbai, India. I care about writing
              code that solves real problems and building interfaces that feel
              natural to use.
            </motion.p>

            <motion.p
              className="about-body"
              {...revealProps(0.16)}
            >
              My work spans web development, system-level thinking, and the
              intersection of design and engineering. I find the most
              interesting problems sit at the edges of disciplines — where
              frontend meets infrastructure, or where UX decisions have
              architectural consequences.
            </motion.p>

            <motion.p
              className="about-body"
              {...revealProps(0.22)}
            >
              When I&rsquo;m not building things, I&rsquo;m reading about
              distributed systems, exploring how software ages, and learning
              what separates tools people actually use from ones they
              abandon.
            </motion.p>

            {/* Metadata line */}
            <motion.p
              className="about-meta"
              {...revealProps(0.28)}
            >
              Mumbai, India&nbsp;&nbsp;·&nbsp;&nbsp;B.Sc. Information Technology
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}
