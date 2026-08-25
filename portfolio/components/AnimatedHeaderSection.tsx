"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedHeaderSectionProps {
  subTitle: string;
  title: string;         // supports \n for line breaks
  body?: string;
  light?: boolean;       // true on dark backgrounds
  titleClass?: string;   // extra size class e.g. "hero-title-size"
  triggerOnScroll?: boolean;
}

export default function AnimatedHeaderSection({
  subTitle,
  title,
  body,
  light = false,
  titleClass = "section-title-size",
  triggerOnScroll = false,
}: AnimatedHeaderSectionProps) {
  const rootRef   = useRef<HTMLDivElement>(null);
  const subRef    = useRef<HTMLSpanElement>(null);
  const wordsRef  = useRef<HTMLSpanElement[]>([]);
  const bodyRef   = useRef<HTMLSpanElement>(null);

  const titleLines = title.split("\n");

  useEffect(() => {
    if (!rootRef.current) return;

    const els = [
      subRef.current,
      ...wordsRef.current.filter(Boolean),
      bodyRef.current,
    ].filter(Boolean) as HTMLElement[];

    // Set clip-path start state
    gsap.set(els, { y: "110%", opacity: 0 });

    const anim = gsap.to(els, {
      y: "0%",
      opacity: 1,
      duration: 1.0,
      stagger: 0.12,
      ease: "power4.out",
      ...(triggerOnScroll
        ? {
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 80%",
            },
          }
        : { delay: 0.2 }),
    });

    return () => { anim.kill(); };
  }, [triggerOnScroll]);

  return (
    <div ref={rootRef} className="animated-header">
      {/* Subtitle */}
      <span className="animated-header-subtitle">
        <span ref={subRef}>{subTitle}</span>
      </span>

      {/* Title — each line is independently clipped */}
      <h2
        className={`animated-header-title ${titleClass} ${light ? "animated-header-title--light" : ""}`}
      >
        {titleLines.map((line, i) => (
          <span key={i} className="animated-header-title-word">
            <span ref={el => { if (el) wordsRef.current[i] = el; }}>
              {line}
            </span>
          </span>
        ))}
      </h2>

      {/* Body */}
      {body && (
        <p className={`animated-header-body ${light ? "animated-header-body--light" : ""}`}>
          <span ref={bodyRef}>{body}</span>
        </p>
      )}
    </div>
  );
}
