"use client";

import { useEffect, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type NavLink = {
  label: string;
  href: string;
};

// ─── Nav links — content lives in one place ───────────────────────────────────
const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ─── Nav ──────────────────────────────────────────────────────────────────────
// Fixed top navigation. Scroll-aware: adds a subtle separator once the user
// scrolls past the fold. Hover underlines are pure CSS — no JS state for hover
// (Emil principle: hover runs tens of times/day; keep it in CSS).
//
// Mobile menu is kept minimal at Phase 1 — will be extended in later phases
// if a fullscreen overlay is needed. For now: wordmark + links stack cleanly
// on small screens via flex-wrap.
// ─────────────────────────────────────────────────────────────────────────────
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  // Mark nav as scrolled once user passes initial viewport
  useEffect(() => {
    const threshold = 40;

    const handler = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Initial check
    handler();

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="nav-root"
      data-scrolled={scrolled}
      aria-label="Site header"
    >
      <div className="nav-inner container">
        {/* Wordmark */}
        <a
          href="/"
          className="nav-wordmark"
          aria-label="Aditi Prajapati — home"
        >
          Aditi Prajapati
        </a>

        {/* Primary navigation */}
        <nav aria-label="Primary">
          <ul className="nav-links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="nav-link">
                  <span className="nav-link-text">{label}</span>
                  {/* Underline element — animated via clip-path in CSS */}
                  <span className="nav-link-underline" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
