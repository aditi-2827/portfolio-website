"use client";

import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../AnimatedHeaderSection";
import Marquee from "../Marquee";
import gsap from "gsap";
import { contactInfo } from "@/lib/data";

const socials = [
  { name: "GitHub Profile", href: contactInfo.github },
];

const Contact = () => {
  const text = `Interested in software development, web applications, or collaboration? 
    Connect with me on GitHub or reach out!`;
  const items = [
    "Building Software",
    "Studying Systems",
    "Web Development",
    "Open Source",
    "Let's Connect",
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"Let's Connect & Collaborate"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-1 sm:px-1 md:px-3 lg:px-6 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10 ultra-small-screen">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>Location</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider uppercase md:text-2xl lg:text-3xl">
                {contactInfo.location}
              </p>
            </div>
            <div className="social-link">
              <h2>GitHub</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 underline underline-offset-4"
                >
                  {contactInfo.github}
                </a>
              </p>
            </div>
            <div className="social-link">
              <h2>LinkedIn</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 underline underline-offset-4"
                >
                  {contactInfo.linkedin}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
