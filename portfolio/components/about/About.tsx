"use client";

import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-[60vh] bg-black text-white px-6 sm:px-12 md:px-16 lg:px-24 py-24 sm:py-32 md:py-40 overflow-hidden flex flex-col justify-center rounded-b-4xl"
    >
      {/* Subtle Ghost AP Monogram - Decorative Background */}
      <div
        aria-hidden="true"
        className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 font-extrabold text-[clamp(12rem,28vw,26rem)] text-white/[0.03] select-none pointer-events-none hidden md:block leading-none tracking-tighter"
      >
        AP
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        {/* Visual Anchor Heading */}
        <div className="md:col-span-4 lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold tracking-tight text-white leading-none uppercase"
          >
            ABOUT
          </motion.h2>
        </div>

        {/* Content Column */}
        <div className="md:col-span-8 lg:col-span-7 flex flex-col justify-between pt-2 md:pt-4 space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 md:space-y-8 max-w-2xl"
          >
            <p className="text-[clamp(1.125rem,1.75vw,1.45rem)] text-white/85 leading-relaxed font-light">
              I&apos;m a B.Sc. IT student focused on building useful software
              for the web and exploring how systems work underneath. I enjoy
              turning ideas into practical, well-structured applications while
              continuously learning new technologies.
            </p>

            <p className="text-[clamp(0.8rem,1.1vw,0.95rem)] font-mono text-white/50 tracking-wide uppercase pt-6 border-t border-white/10">
              Currently exploring: web development · systems · data · AI
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
