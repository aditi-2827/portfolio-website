"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextLinesProps {
  text: string;
  className?: string;
}

export const AnimatedTextLines = ({ text, className }: AnimatedTextLinesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  useGSAP(() => {
    if (lineRefs.current.length > 0 && containerRef.current) {
      gsap.from(lineRefs.current.filter(Boolean), {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-col items-end w-full ${className || ""}`}>
      {lines.map((line, index) => {
        // Step alignment for 3-step staircase format
        let stepClass = "w-full text-right";
        if (lines.length === 3) {
          if (index === 1) stepClass = "w-full text-right md:max-w-[85%] lg:max-w-[78%] ml-auto";
          if (index === 2) stepClass = "w-full text-right md:max-w-[70%] lg:max-w-[60%] ml-auto";
        }

        return (
          <span
            key={index}
            ref={(el) => { lineRefs.current[index] = el; }}
            className={`block leading-relaxed tracking-wider text-pretty ${stepClass}`}
          >
            {line}
          </span>
        );
      })}
    </div>
  );
};
