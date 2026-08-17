"use client";

import { useReducedMotion } from "motion/react";
import { motion, AnimatePresence } from "motion/react";
import { useDevMode } from "@/components/DevModeContext";
import GitHubGraph from "./GitHubGraph";
import Image from "next/image";

// ─── Motion variants ──────────────────────────────────────────────────────────
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

// ─── Dev Mode Stats ───────────────────────────────────────────────────────────
const DEV_STATS = [
  { value: "6+", label: "Projects Built" },
  { value: "5+", label: "Languages" },
  { value: "10+", label: "Technologies" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const { devMode, toggleDevMode } = useDevMode();
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
      {/* Dev mode background overlay */}
      <div className="hero-bg-watermark" aria-hidden="true">
        DEVELOPER
      </div>

      <div className="container hero-inner">
        {/* Two-column layout for dev mode: content left, image right */}
        <div className="hero-layout">

          {/* Left column — content */}
          <div className="hero-content">

            {/* Role label */}
            <motion.p
              className="hero-role"
              {...roleProps}
            >
              {devMode
                ? "// developer mode activated"
                : "Building software. Studying systems."}
            </motion.p>

            {/* Name + cursor */}
            <motion.h1
              className="hero-name"
              {...nameProps}
            >
              Aditi Prajapati
              <span className="hero-cursor" aria-hidden="true" />
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="hero-subtext"
              {...subtextProps}
            >
              {devMode
                ? "Full-stack developer crafting performant, accessible web applications with React, TypeScript, and Node.js — driven by systems thinking and clean architecture."
                : "I build web experiences that are fast, intentional, and easy to understand. Currently a B.Sc. IT student exploring systems, frontend craft, and what makes software feel right."}
            </motion.p>

            {/* Links + Dev Mode Toggle */}
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

              {/* Dev Mode Toggle Button */}
              <button
                onClick={toggleDevMode}
                className="dev-mode-toggle"
                aria-label={devMode ? "Exit developer mode" : "Enter developer mode"}
                type="button"
              >
                <span className="dev-mode-toggle-icon" aria-hidden="true">
                  {devMode ? "⚡" : "⌨"}
                </span>
                <span className="dev-mode-toggle-text">
                  {devMode ? "Exit Dev Mode" : "Enter Dev Mode"}
                </span>
                <span className="dev-mode-toggle-dot" aria-hidden="true" />
              </button>
            </motion.div>

            {/* Dev Mode Stats — only visible in dev mode */}
            <AnimatePresence>
              {devMode && (
                <motion.div
                  className="hero-stats"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  {DEV_STATS.map((stat) => (
                    <div key={stat.label} className="hero-stat">
                      <span className="hero-stat-value">{stat.value}</span>
                      <span className="hero-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right column — hero image (always visible, styled differently in dev mode) */}
          <motion.div
            className="hero-image-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          >
            <div className="hero-image-wrapper">
              <Image
                src="/images/hero.png"
                alt="Aditi Prajapati"
                width={600}
                height={750}
                className="hero-image"
                priority
              />
              {/* Red glow behind image in dev mode */}
              <div className="hero-image-glow" aria-hidden="true" />
            </div>
          </motion.div>
        </div>

        {/* GitHub Graph — only visible in dev mode */}
        <AnimatePresence>
          {devMode && (
            <motion.div
              className="hero-github-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
            >
              <GitHubGraph />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
