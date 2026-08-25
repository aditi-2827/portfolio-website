"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedHeaderSection from "@/components/AnimatedHeaderSection";

const HERO_BODY = `I help brands and developers ship premium,
results-driven web experiences. Currently a B.Sc. IT student
exploring systems, frontend craft, and clean architecture.`;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle parallax on the gradient orbs
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const { innerWidth: w, innerHeight: h } = window;
      const dx = (x / w - 0.5) * 30;
      const dy = (y / h - 0.5) * 30;
      const orb = section.querySelector(".hero-orb") as HTMLElement | null;
      if (orb) gsap.to(orb, { x: dx, y: dy, duration: 1.2, ease: "power2.out" });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-section"
      aria-label="Introduction"
    >
      {/* Decorative orb — gives depth without 3D library overhead */}
      <div className="hero-orb" aria-hidden="true" />

      {/* Content pinned to the bottom */}
      <AnimatedHeaderSection
        subTitle="404 — No Bugs Found"
        title={"Aditi\nPrajapati"}
        body={HERO_BODY}
        titleClass="hero-title-size"
        triggerOnScroll={false}
      />

      {/* Scroll cue */}
      <div className="hero-scroll-cue" aria-hidden="true">
        <span className="hero-scroll-label">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
