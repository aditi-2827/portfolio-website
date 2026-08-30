"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ServiceSummary = () => {
  useGSAP(() => {
    // Row 1: starts centered, scrolls right
    gsap.fromTo(
      "#title-service-1",
      { xPercent: 0 },
      {
        xPercent: 4,
        scrollTrigger: {
          trigger: "#service-summary-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Row 2: starts centered, scrolls left
    gsap.fromTo(
      "#title-service-2",
      { xPercent: 0 },
      {
        xPercent: -4,
        scrollTrigger: {
          trigger: "#service-summary-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Row 3: starts centered, scrolls right
    gsap.fromTo(
      "#title-service-3",
      { xPercent: 0 },
      {
        xPercent: 3,
        scrollTrigger: {
          trigger: "#service-summary-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Row 4: starts centered, scrolls left
    gsap.fromTo(
      "#title-service-4",
      { xPercent: 0 },
      {
        xPercent: -3,
        scrollTrigger: {
          trigger: "#service-summary-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      id="service-summary-section"
      className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive"
    >
      <div id="title-service-1">
        <p>Architecture</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-[0.5em]"
      >
        <p className="font-normal">Development</p>
        <div className="w-[1.5em] h-[0.08em] bg-gold flex-shrink-0" />
        <p>Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-[0.5em]"
      >
        <p>APIs</p>
        <div className="w-[1.5em] h-[0.08em] bg-gold flex-shrink-0" />
        <p className="italic">Frontends</p>
        <div className="w-[1.5em] h-[0.08em] bg-gold flex-shrink-0" />
        <p>Scalability</p>
      </div>
      <div id="title-service-4">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
