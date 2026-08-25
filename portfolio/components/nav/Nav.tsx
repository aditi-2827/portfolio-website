"use client";

import { useState, useEffect } from "react";

const SOCIALS = [
  { name: "GitHub",   href: "https://github.com/aditi-prajapati" },
  { name: "LinkedIn", href: "https://linkedin.com/in/aditi-prajapati" },
  { name: "Twitter",  href: "https://twitter.com/aditi_codes" },
];

const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Work",     href: "#work" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Track when hero ends so logo/btn colour flips
  useEffect(() => {
    const onScroll = () => setDark(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when overlay open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const logoLight = open || (!dark);
  const btnLight  = open || dark;

  return (
    <>
      <nav className="nav-root" aria-label="Main navigation">
        {/* Logo */}
        <a
          href="#home"
          className={`nav-logo ${open ? "nav-logo--light" : dark ? "" : ""}`}
          style={{ color: open ? "var(--color-white)" : "var(--color-ink)" }}
          onClick={() => setOpen(false)}
        >
          AP.
        </a>

        {/* Hamburger */}
        <button
          className={`nav-menu-btn ${open ? "nav-menu-btn--open" : ""}`}
          style={{ "--bar-color": open || dark ? "var(--color-white)" : "var(--color-ink)" } as React.CSSProperties}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span style={{ backgroundColor: open || dark ? "var(--color-white)" : "var(--color-ink)" }} />
          <span style={{ backgroundColor: open || dark ? "var(--color-white)" : "var(--color-ink)" }} />
          <span style={{ backgroundColor: open || dark ? "var(--color-white)" : "var(--color-ink)" }} />
        </button>
      </nav>

      {/* Full-screen overlay */}
      <div
        className={`nav-overlay ${open ? "nav-overlay--open" : ""}`}
        aria-hidden={!open}
      >
        {/* Email */}
        <span className="nav-overlay-email-label">E-mail</span>
        <a
          href="mailto:aditi@example.com"
          className="nav-overlay-email"
          onClick={() => setOpen(false)}
        >
          aditi@example.com
        </a>

        {/* Socials */}
        <span className="nav-overlay-social-label">Social Media</span>
        <div className="nav-overlay-socials">
          {SOCIALS.map(s => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-overlay-social"
            >
              {s.name}
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div className="nav-overlay-bottom">
          <nav className="nav-overlay-nav-links" aria-label="Section links">
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="nav-overlay-nav-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <span className="nav-overlay-tagline">Building the web, one line at a time.</span>
        </div>
      </div>
    </>
  );
}
