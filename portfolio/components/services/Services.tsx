"use client";

import { useRef } from "react";
import AnimatedHeaderSection from "../AnimatedHeaderSection";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { skills } from "@/lib/data";

const Services = () => {
  const text = `A breakdown of my technical stack, development capabilities, and system specializations.`;
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);

  return (
    <section id="skills" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Capabilities • Stack • Technical Domains"}
        title={"Skills"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {skills.map((category, index) => (
        <div
          ref={(el) => { serviceRefs.current[index] = el; }}
          key={index}
          className="sticky px-1 sm:px-1 md:px-3 lg:px-6 pt-6 pb-12 text-white bg-black border-t-2 border-white/30 ultra-small-screen"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 3}em)`,
                  marginBottom: `${(skills.length - index - 1) * 3}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-full">
              <h2 className="text-3xl lg:text-4xl">{category.label}</h2>
              <div className="flex flex-wrap gap-3 text-lg lg:text-xl text-white/80">
                {category.items.map((item, itemIndex) => (
                  <span
                    key={`item-${index}-${itemIndex}`}
                    className="border border-white/20 px-3 py-1 rounded-lg bg-white/5 text-white/90 text-sm md:text-base"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
