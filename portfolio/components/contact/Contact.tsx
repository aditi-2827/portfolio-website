"use client";

import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import { contactInfo } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Contact ──────────────────────────────────────────────────────────────────
// Editorial contact section.
// Large display headline + email mailto link + social links.
// No form, no map, no extra widgets.
// ─────────────────────────────────────────────────────────────────────────────
export default function Contact() {
  const shouldReduce = useReducedMotion();

  const revealProps = (delay = 0) => ({
    initial: shouldReduce ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 as const },
    transition: { duration: 0.6, ease: EASE, delay },
  });

  return (
    <section
      id="contact"
      aria-label="Contact Aditi"
      className="contact-section"
    >
      <div className="container">
        <div className="contact-inner">

          {/* Section index headline */}
          <motion.h2
            className="contact-heading"
            {...revealProps(0)}
          >
            Contact
          </motion.h2>

          {/* Main display callout */}
          <motion.h3
            className="contact-display"
            {...revealProps(0.08)}
          >
            Let&rsquo;s work together.
          </motion.h3>

          {/* Supporting subtext */}
          <motion.p
            className="contact-subtext"
            {...revealProps(0.16)}
          >
            Have a project in mind, a question about my work, or an opportunity
            to discuss? My inbox is always open.
          </motion.p>

          {/* Large mailto link */}
          <motion.div
            className="contact-email-wrapper"
            {...revealProps(0.24)}
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="contact-email-link"
              aria-label={`Send email to ${contactInfo.email}`}
            >
              <span className="contact-email-text">{contactInfo.email}</span>
              <span className="contact-email-arrow" aria-hidden="true">
                ↗
              </span>
              <span className="contact-email-underline" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Social links row */}
          <motion.div
            className="contact-socials"
            {...revealProps(0.32)}
          >
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <span className="contact-social-sep" aria-hidden="true">
              ·
            </span>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <span className="contact-social-sep" aria-hidden="true">
              ·
            </span>
            <span className="contact-location">
              {contactInfo.location}
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
