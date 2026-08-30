"use client";

import Image from "next/image";
import { motion } from "motion/react";

const pointers = [
  {
    label: "01 — EDUCATION",
    text: "B.Sc. Information Technology · Jai Hind College (Autonomous), Mumbai",
  },
  {
    label: "02 — BUILDING",
    text: "Web development · software systems · data-driven applications",
  },
  {
    label: "03 — EXPERIENCE",
    text: "Data Analyst · ORM Division · SPAN Communications",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white px-6 sm:px-12 md:px-16 lg:px-24 py-24 sm:py-32 md:py-40 overflow-hidden flex flex-col justify-center rounded-t-4xl rounded-b-4xl"
    >
      {/* Subtle Ghost AP Monogram - Decorative Background */}
      <div
        aria-hidden="true"
        className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 font-extrabold text-[clamp(8rem,20vw,18rem)] text-white/[0.03] select-none pointer-events-none hidden md:block leading-none tracking-tighter"
      >
        AP
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        {/* Visual Anchor Heading & Image Column */}
        <div className="md:col-span-5 flex flex-col gap-6 md:gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold tracking-tight text-white leading-none uppercase"
          >
            ABOUT
          </motion.h2>

          {/* Profile / Hero Illustration Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/5] max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image
              src="/images/herosection.png"
              alt="Aditi Prajapati"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </motion.div>
        </div>

        {/* Content Column */}
        <div className="md:col-span-7 flex flex-col justify-between pt-2 md:pt-4 space-y-10 md:space-y-12">
          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 max-w-2xl"
          >
            <p className="text-[clamp(1.25rem,2vw,1.65rem)] text-white font-medium leading-relaxed">
              I like understanding how things work—and then building them better.
            </p>
            <p className="text-[clamp(1.05rem,1.5vw,1.25rem)] text-white/80 leading-relaxed font-light">
              I&apos;m a B.Sc. IT student who builds software across web development, data, and systems, turning ideas into practical applications while constantly experimenting with what technology can do.
            </p>
          </motion.div>

          {/* Pointers List */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 pt-6 border-t border-white/10 max-w-2xl"
          >
            {pointers.map((pointer, index) => (
              <div key={index} className="space-y-1">
                <span className="text-[clamp(0.75rem,1vw,0.875rem)] font-mono text-white/40 tracking-wider uppercase block">
                  {pointer.label}
                </span>
                <p className="text-[clamp(0.95rem,1.3vw,1.125rem)] text-white/90 font-light">
                  {pointer.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
