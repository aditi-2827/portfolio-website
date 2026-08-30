"use client";

import { Icon } from "@iconify/react";
import AnimatedHeaderSection from "../AnimatedHeaderSection";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/data";

const Works = () => {
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  const text = `Explore my projects ranging from web applications and developer tools to AI/NLP-based applications, data dashboards, and system-oriented projects.`;

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
        subTitle={"Practical Projects • Modern Technologies"}
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
            className="relative flex flex-col gap-2 py-6 cursor-pointer group md:gap-1 border-b border-black/10"
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

            {/* title & category */}
            <div className="flex flex-col md:flex-row justify-between px-1 sm:px-1 md:px-3 lg:px-6 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white ultra-small-screen gap-2">
              <div>
                <span className="text-xs uppercase tracking-widest text-black/50 md:group-hover:text-white/60 block mb-1">
                  {project.index} — {project.category}
                </span>
                <h2 className="lg:text-[32px] text-[24px] font-normal leading-tight">
                  {project.title}
                </h2>
              </div>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5 self-start md:self-center" />
            </div>

            {/* description */}
            <div className="px-1 sm:px-1 md:px-3 lg:px-6 transition-all duration-500 md:group-hover:px-12 ultra-small-screen">
              <p className="text-sm md:text-base text-black/70 md:group-hover:text-white/80 max-w-4xl">
                {project.portfolioDescription}
              </p>
            </div>

            {/* divider */}
            <div className="w-full h-0.5 bg-black/10 my-1" />

            {/* framework tags */}
            <div className="flex flex-wrap px-1 sm:px-1 md:px-3 lg:px-6 text-xs uppercase transition-all duration-500 gap-2 md:group-hover:px-12 ultra-small-screen">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="text-black/80 bg-black/5 px-2 py-0.5 rounded md:group-hover:bg-white/10 md:group-hover:text-white transition-colors duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* preview image if available */}
            {project.previewImage && (
              <div className="relative flex items-center justify-center px-1 sm:px-1 md:px-3 lg:px-6 md:hidden h-[240px] ultra-small-screen mt-2">
                <img
                  src={project.previewImage}
                  alt={`${project.title}-preview`}
                  className="object-cover w-full h-full rounded-lg brightness-90 border border-black/10"
                />
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Works;
