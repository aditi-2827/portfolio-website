"use client";

import { useRef } from "react";
import AnimatedHeaderSection from "../AnimatedHeaderSection";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const servicesData = [
  {
    title: "Web Development",
    description: "Custom websites and web applications",
    items: [
      { title: "Portfolio sites", description: "" },
      { title: "Business websites", description: "" },
      { title: "Web apps with React/TypeScript", description: "" },
      { title: "Landing pages", description: "" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Server-side development and database work",
    items: [
      { title: "REST APIs", description: "" },
      { title: "Database design", description: "" },
      { title: "Authentication systems", description: "" },
      { title: "Data processing scripts", description: "" },
    ],
  },
  {
    title: "Data & Automation",
    description: "Scripts and tools to make your life easier",
    items: [
      { title: "Data analysis scripts", description: "" },
      { title: "Automation tools", description: "" },
      { title: "File processing", description: "" },
      { title: "API integrations", description: "" },
    ],
  },
  {
    title: "Technical Consulting",
    description: "Help with your tech decisions and implementation",
    items: [
      { title: "Tech stack recommendations", description: "" },
      { title: "Architecture planning", description: "" },
      { title: "Code review", description: "" },
      { title: "Performance optimization", description: "" },
    ],
  },
];

const Services = () => {
  const text = `Based on my background in CS and experience building things. 
    Here's what I'm comfortable tackling:`;
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
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Services"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => { serviceRefs.current[index] = el; }}
          key={index}
          className="sticky px-1 sm:px-1 md:px-3 lg:px-6 pt-6 pb-12 text-white bg-black border-t-2 border-white/30 ultra-small-screen"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 text-2xl lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`} className="w-full">
                    <h3 className="flex w-full">
                      <span className="mr-12 text-lg text-white/30 flex-shrink-0">
                        0{itemIndex + 1}
                      </span>
                      <span className="flex-1">{item.title}</span>
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
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
