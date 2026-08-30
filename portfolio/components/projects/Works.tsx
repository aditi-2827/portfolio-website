"use client";

import { Icon } from "@iconify/react";
import AnimatedHeaderSection from "../AnimatedHeaderSection";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/data";

const Works = () => {
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  const text = `Featured projects meticulously crafted to showcase practical software development and technical problem solving.`;

  useGSAP(() => {
    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth < 768) return;

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );
  };

  const handleMouseLeave = (index: number) => {
    if (window.innerWidth < 768) return;

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* overlay */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            />

            {/* title */}
            <div className="flex justify-between items-center px-1 sm:px-1 md:px-3 lg:px-6 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white ultra-small-screen">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.title}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>

            {/* divider */}
            <div className="w-full h-0.5 bg-black/80 my-2" />

            {/* framework tags */}
            <div className="flex flex-wrap px-1 sm:px-1 md:px-3 lg:px-6 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12 ultra-small-screen">
              {project.tags.map((tag, tagIdx) => (
                <p
                  key={tagIdx}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {tag}
                </p>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Works;
