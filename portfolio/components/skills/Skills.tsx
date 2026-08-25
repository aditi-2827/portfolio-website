"use client";

import { useState } from "react";
import AnimatedHeaderSection from "@/components/AnimatedHeaderSection";
import { Icon } from "@iconify/react";

interface SkillCategory {
  number: string;
  title: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: "01",
    title: "Frontend Engineering",
    skills: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS v4", "GSAP", "HTML5/CSS3", "JavaScript (ES6+)"],
  },
  {
    number: "02",
    title: "Backend & Systems",
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL", "PostgreSQL", "C / C++"],
  },
  {
    number: "03",
    title: "Developer Tools & Workflow",
    skills: ["Git & GitHub", "Vite", "Turbopack", "ESLint", "Docker", "VS Code", "Postman"],
  },
  {
    number: "04",
    title: "Architecture & Design",
    skills: ["Component Architecture", "State Management", "Responsive UI", "Web Performance", "Accessibility (a11y)"],
  },
];

export default function Skills() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First open by default

  const toggle = (idx: number) => {
    setOpenIdx(current => (current === idx ? null : idx));
  };

  return (
    <section id="skills" className="skills-section" aria-label="Technical Skills">
      <AnimatedHeaderSection
        subTitle="Capabilities & Technical Stack"
        title={"Skills &\nServices"}
        body="Tools, languages, and frameworks I use to bring digital products from concept to execution."
        triggerOnScroll={true}
      />

      <div className="skills-list">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={cat.title}
              className={`skill-row ${isOpen ? "skill-row--open" : ""}`}
            >
              <div
                className="skill-row-header"
                onClick={() => toggle(idx)}
                role="button"
                aria-expanded={isOpen}
                tabIndex={0}
                onKeyDown={e => { if (e.key === "Enter" || e.key === " ") toggle(idx); }}
              >
                <span className="skill-number">{cat.number}</span>
                <h3 className="skill-title">{cat.title}</h3>
                <span className="skill-toggle">
                  <Icon icon="lucide:plus" />
                </span>
              </div>

              <div className="skill-items">
                {cat.skills.map(s => (
                  <span key={s} className="skill-chip">{s}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
