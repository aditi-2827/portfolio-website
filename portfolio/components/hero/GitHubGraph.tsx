"use client";

import { useMemo } from "react";

// ─── GitHub Contribution Graph ────────────────────────────────────────────────
// A visual grid that mimics the GitHub contribution heatmap.
// Uses deterministic pseudo-random values seeded by position for consistency.
// ─────────────────────────────────────────────────────────────────────────────

const WEEKS = 52;
const DAYS = 7;
const DAY_LABELS = ["Mon", "", "Wed", "", "Fri", "", ""];
const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Simple seeded random for consistent contribution data
function seededRandom(seed: number): number {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function getContributionLevel(week: number, day: number): number {
  const seed = week * 7 + day;
  const rand = seededRandom(seed);
  // Distribution: 30% empty, 30% low, 20% medium, 15% high, 5% max
  if (rand < 0.30) return 0;
  if (rand < 0.60) return 1;
  if (rand < 0.80) return 2;
  if (rand < 0.95) return 3;
  return 4;
}

export default function GitHubGraph() {
  const grid = useMemo(() => {
    const cells: { week: number; day: number; level: number }[] = [];
    for (let w = 0; w < WEEKS; w++) {
      for (let d = 0; d < DAYS; d++) {
        cells.push({ week: w, day: d, level: getContributionLevel(w, d) });
      }
    }
    return cells;
  }, []);

  // Calculate total contributions
  const totalContribs = useMemo(() => {
    return grid.reduce((sum, cell) => {
      const contribMap = [0, 1, 3, 6, 10];
      return sum + contribMap[cell.level];
    }, 0);
  }, [grid]);

  // Month label positions (approximate)
  const monthPositions = useMemo(() => {
    return MONTH_LABELS.map((label, i) => ({
      label,
      x: Math.floor((i / 12) * WEEKS) * 14 + 28,
    }));
  }, []);

  return (
    <div className="github-graph">
      <div className="github-graph-header">
        <span className="github-graph-count">
          {totalContribs} contributions in the last year
        </span>
      </div>
      <div className="github-graph-container">
        {/* Day labels */}
        <div className="github-graph-days">
          {DAY_LABELS.map((label, i) => (
            <span key={i} className="github-graph-day-label">
              {label}
            </span>
          ))}
        </div>
        
        {/* Grid */}
        <div className="github-graph-scroll">
          {/* Month labels */}
          <div className="github-graph-months">
            {monthPositions.map(({ label, x }) => (
              <span
                key={label}
                className="github-graph-month-label"
                style={{ left: `${x}px` }}
              >
                {label}
              </span>
            ))}
          </div>
          
          {/* Cells */}
          <svg
            className="github-graph-svg"
            width={WEEKS * 14 + 4}
            height={DAYS * 14 + 4}
            role="img"
            aria-label="GitHub contribution graph"
          >
            {grid.map(({ week, day, level }) => (
              <rect
                key={`${week}-${day}`}
                x={week * 14 + 2}
                y={day * 14 + 2}
                width={11}
                height={11}
                rx={2}
                className={`github-cell github-cell--${level}`}
              />
            ))}
          </svg>
        </div>
      </div>
      
      {/* Legend */}
      <div className="github-graph-legend">
        <span className="github-graph-legend-label">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <span key={level} className={`github-graph-legend-cell github-cell--${level}`} />
        ))}
        <span className="github-graph-legend-label">More</span>
      </div>
    </div>
  );
}
