"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeaderSection from "@/components/AnimatedHeaderSection";
import { Icon } from "@iconify/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INTERESTS = [
  { icon: "lucide:code",      label: "Open-sourcing experiments — rising tides lift all ships" },
  { icon: "lucide:cpu",       label: "Exploring systems programming & compiler fundamentals" },
  { icon: "lucide:sparkles",  label: "Frontend craft, micro-interactions & web aesthetics" },
  { icon: "lucide:mountain",  label: "Hiking & outdoor exploration" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef     = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imgRef.current) return;

    // Scale section down slightly on scroll (depth effect)
    const scaleAnim = gsap.to(sectionRef.current, {
      scale: 0.96,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom 85%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    // Image reveal animation
    const imgAnim = gsap.fromTo(
      imgRef.current,
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
        },
      }
    );

    return () => {
      scaleAnim.kill();
      imgAnim.kill();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-section"
      aria-label="About Aditi"
    >
      <AnimatedHeaderSection
        subTitle="Innovating with code · Growing through systems"
        title={"About\nMe"}
        body="Passionate about clean architecture. I build scalable, high-performance solutions from prototype to production."
        light={true}
        triggerOnScroll={true}
      />

      <div className="about-content-row">
        {/* Profile Image */}
        <div className="about-img-wrap">
          <img
            ref={imgRef}
            src="/images/hero.png"
            alt="Aditi Prajapati portrait"
            className="about-img"
          />
        </div>

        {/* Text column */}
        <div className="about-text-col">
          <p className="about-body-text">
            Committed to continuous growth in tech — from web development to system architecture.
            Every challenge is an opportunity to expand my skills and contribute to meaningful,
            high-impact projects.
          </p>

          <div className="about-interests">
            {INTERESTS.map((item, idx) => (
              <div key={idx} className="about-interest-item">
                <Icon icon={item.icon} className="about-interest-icon" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
