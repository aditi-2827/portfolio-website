"use client";

import { useRef } from "react";
import AnimatedHeaderSection from "../AnimatedHeaderSection";
import { AnimatedTextLines } from "../AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react";
import { personalInfo, academicInfo, experiences, interests } from "@/lib/data";

const About = () => {
  const text = personalInfo.aboutParagraphs[0];
  const aboutText = personalInfo.aboutParagraphs[1] + "\n" + personalInfo.aboutParagraphs[2];
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });

    if (imgRef.current) {
      gsap.set(imgRef.current, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
      });
      gsap.to(imgRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 2,
        ease: "power4.out",
        scrollTrigger: { trigger: imgRef.current },
      });
    }
  }, []);

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Building software • Studying systems"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-1 sm:px-1 md:px-3 lg:px-6 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60 ultra-small-screen">
        <img
          ref={imgRef}
          src="/images/pfp.png"
          alt="Aditi Prajapati"
          className="w-md rounded-3xl object-cover"
        />
        <div className="w-full space-y-6">
          <AnimatedTextLines text={aboutText} className={"w-full"} />
          
          {/* Academic Background */}
          <div className="mt-6 border-t border-white/20 pt-6">
            <h3 className="text-white text-2xl font-normal mb-2 flex items-center gap-3">
              <Icon icon="lucide:graduation-cap" className="text-white/80" />
              Academic Background
            </h3>
            <p className="text-lg text-white/80">
              <strong className="text-white">{academicInfo.degree}</strong> — {academicInfo.college}
            </p>
            <p className="text-sm text-white/50">Expected Graduation: {academicInfo.expectedGraduation}</p>
          </div>

          {/* Practical Experience */}
          <div className="border-t border-white/20 pt-6">
            <h3 className="text-white text-2xl font-normal mb-2 flex items-center gap-3">
              <Icon icon="lucide:briefcase" className="text-white/80" />
              Experience
            </h3>
            {experiences.map((exp, idx) => (
              <div key={idx} className="text-lg text-white/80 space-y-1">
                <p>
                  <strong className="text-white">{exp.role}</strong> at {exp.company} {exp.client && `(Client: ${exp.client})`}
                </p>
                <p className="text-sm text-white/50">{exp.duration}</p>
                <p className="text-base text-white/70">{exp.experienceDescription}</p>
              </div>
            ))}
          </div>

          {/* Career Focus */}
          <div className="border-t border-white/20 pt-6">
            <h3 className="text-white text-2xl font-normal mb-3 flex items-center gap-3">
              <Icon icon="lucide:target" className="text-white/80" />
              Career Focus
            </h3>
            <div className="grid grid-cols-2 gap-2 text-base text-white/80">
              {personalInfo.careerFocus.map((focus, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Icon icon="lucide:check-circle-2" className="text-white/60 size-4" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* General Interests */}
          <div className="border-t border-white/20 pt-6">
            <h3 className="text-white text-2xl font-normal mb-3 flex items-center gap-3">
              <Icon icon="lucide:sparkles" className="text-white/80" />
              Interests
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-white/70">
              {interests.general.map((item, idx) => (
                <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
