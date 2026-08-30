"use client";

import Image from "next/image";
import { motion } from "motion/react";

const pointers = [
  {
    label: "01 — ACADEMIC FOUNDATION",
    text: "B.Sc. Information Technology · Jai Hind College (Autonomous), Mumbai",
  },
  {
    label: "02 — WHAT I BUILD",
    text: "Full-stack web applications · Distributed infrastructure · Developer tooling",
  },
  {
    label: "03 — ANALYTICS EXPERIENCE",
    text: "Data Analyst · ORM Division · SPAN Communications",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white px-6 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-24 md:py-28 overflow-hidden flex flex-col justify-center rounded-t-4xl rounded-b-4xl"
    >
      {/* Subtle Ghost Monogram */}
      <div
        aria-hidden="true"
        className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 font-extrabold text-[clamp(8rem,20vw,18rem)] text-white/[0.03] select-none pointer-events-none hidden md:block leading-none tracking-tighter"
      >
        AP
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col justify-center">
        {/* Top Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-14"
        >
          {/* Top Tagline */}
          <p className="text-[clamp(0.65rem,0.9vw,0.8rem)] font-mono uppercase tracking-[0.25em] text-white/50 mb-2">
            INNOVATING WITH CODE, GROWING THROUGH TECHNOLOGY
          </p>

          {/* Main Title */}
          <h2 className="text-[clamp(3.5rem,7.5vw,6.5rem)] font-extrabold tracking-tight text-white leading-none uppercase">
            ABOUT
          </h2>

          {/* Full-width Line directly under ABOUT */}
          <div className="w-full border-b border-white/20 mt-4 mb-6" />

          {/* Right-aligned Uppercase Technical Statement below the line */}
          <div className="flex justify-end">
            <p className="text-[clamp(1rem,1.5vw,1.4rem)] uppercase font-mono text-white/90 tracking-wider leading-relaxed text-right max-w-2xl font-medium">
              CURIOUS ABOUT HOW SOFTWARE WORKS
              <br />
              BUILDING USEFUL SYSTEMS, NOT JUST INTERFACES
              <br />
              FROM IDEAS TO WORKING SOFTWARE
            </p>
          </div>
        </motion.div>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Card */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src="/images/herosection.png"
                alt="Aditi Prajapati"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </motion.div>
          </div>

          {/* Right Column: Engaging & Personal Bio Content */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-8 py-2">
            {/* Main Statement & Bio */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <p className="text-[clamp(1.2rem,1.8vw,1.5rem)] text-white font-medium leading-snug">
                I build software driven by genuine curiosity—turning complex problems into practical, well-structured systems.
              </p>
              <p className="text-[clamp(0.95rem,1.3vw,1.1rem)] text-white/75 leading-relaxed font-light">
                Currently pursuing my B.Sc. in Information Technology at Jai Hind College, Mumbai, I work across full-stack development, distributed systems, and developer tooling. From building a local-first deployment auditor like <span className="text-white font-normal underline underline-offset-4 decoration-white/30">ShipCheck</span> to an interactive code analysis platform like <span className="text-white font-normal underline underline-offset-4 decoration-white/30">Codeoscope</span>, I enjoy creating tools that are thoughtful on the surface and reliable underneath.
              </p>
            </motion.div>

            {/* Pointers List */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 pt-6 border-t border-white/10"
            >
              {pointers.map((pointer, index) => (
                <div key={index} className="space-y-1">
                  <span className="text-[clamp(0.7rem,0.9vw,0.8rem)] font-mono text-white/40 tracking-wider uppercase block">
                    {pointer.label}
                  </span>
                  <p className="text-[clamp(0.9rem,1.15vw,1.05rem)] text-white/85 font-light">
                    {pointer.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
