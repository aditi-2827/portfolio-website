"use client";

import { useDevMode } from "@/components/DevModeContext";

// ─── DevTransition ────────────────────────────────────────────────────────────
// A fullscreen overlay that plays during the dev mode toggle.
// Covers the screen with a dark techy curtain while the theme flips underneath.
// Shows a brief "INITIALIZING DEV MODE" / "RETURNING TO PORTFOLIO" text.
// ─────────────────────────────────────────────────────────────────────────────
export default function DevTransition() {
  const { transitioning, devMode } = useDevMode();

  return (
    <div
      className={`dev-transition ${transitioning ? "dev-transition--active" : ""}`}
      aria-hidden="true"
    >
      <div className="dev-transition-inner">
        {/* Scanline effect */}
        <div className="dev-transition-scanlines" />

        {/* Text content */}
        <div className="dev-transition-content">
          <span className="dev-transition-bracket">{`{`}</span>
          <span className="dev-transition-text">
            {devMode ? "RETURNING TO PORTFOLIO" : "INITIALIZING DEV MODE"}
          </span>
          <span className="dev-transition-bracket">{`}`}</span>
        </div>

        {/* Loading dots */}
        <div className="dev-transition-dots">
          <span className="dev-transition-dot" />
          <span className="dev-transition-dot" />
          <span className="dev-transition-dot" />
        </div>
      </div>
    </div>
  );
}
