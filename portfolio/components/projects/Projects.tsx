"use client";

import { useState } from "react";
import AnimatedHeaderSection from "@/components/AnimatedHeaderSection";
import { Icon } from "@iconify/react";

interface Project {
  title: string;
  tags: string[];
  image: string;
  link?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Codeoscope",
    tags: ["React", "Python", "Compiler Tracing", "Node.js"],
    image: "/images/hero.png",
    link: "https://github.com/aditi-prajapati",
  },
  {
    title: "PDF Maker Engine",
    tags: ["Next.js", "TypeScript", "PDF Generation", "Tailwind"],
    image: "/images/hero.png",
    link: "https://github.com/aditi-prajapati",
  },
  {
    title: "System Metrics Visualizer",
    tags: ["TypeScript", "WebSockets", "D3.js", "System Architecture"],
    image: "/images/hero.png",
    link: "https://github.com/aditi-prajapati",
  },
  {
    title: "Cinematic Portfolio",
    tags: ["Next.js 16", "GSAP", "Tailwind v4", "Aesthetics"],
    image: "/images/hero.png",
    link: "https://github.com/aditi-prajapati",
  },
];

export default function Projects() {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [pos, setPos]           = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="work"
      className="works-section"
      onMouseMove={handleMouseMove}
      aria-label="Featured Works"
    >
      <AnimatedHeaderSection
        subTitle="Selected Works & Case Studies"
        title={"Featured\nProjects"}
        body="A curation of web applications, dev tools, and experimental projects built with clean code and high performance."
        triggerOnScroll={true}
      />

      <div className="works-list">
        {PROJECTS.map((project, idx) => (
          <a
            key={project.title}
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="work-row"
            onMouseEnter={() => setActiveImg(project.image)}
            onMouseLeave={() => setActiveImg(null)}
          >
            <div className="work-row-left">
              <span className="work-index">0{idx + 1}</span>
              <h3 className="work-title">{project.title}</h3>
            </div>

            <div className="work-row-right">
              <div className="work-tags">
                {project.tags.map(t => (
                  <span key={t} className="work-tag">{t}</span>
                ))}
              </div>
              <Icon icon="lucide:arrow-up-right" className="work-arrow" />
            </div>
          </a>
        ))}
      </div>

      {/* Floating Image Preview on Hover */}
      <div
        className={`work-preview ${activeImg ? "work-preview--visible" : ""}`}
        style={{
          left: `${pos.x + 20}px`,
          top: `${pos.y - 90}px`,
        }}
      >
        {activeImg && (
          <img src={activeImg} alt="Project preview" />
        )}
      </div>
    </section>
  );
}
