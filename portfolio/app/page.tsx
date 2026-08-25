import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Marquee from "@/components/marquee/Marquee";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";

const MARQUEE_ITEMS_1 = [
  "Frontend Craft",
  "Clean Architecture",
  "Web Performance",
  "React 19 & Next.js 16",
  "System Design",
];

const MARQUEE_ITEMS_2 = [
  "Available for Work",
  "Let's Build Together",
  "Open Source",
  "Continuous Learning",
  "Full Stack Development",
];

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Marquee items={MARQUEE_ITEMS_1} />
      <Projects />
      <Marquee items={MARQUEE_ITEMS_2} light={true} reverse={true} />
      <Skills />
      <Contact />
    </>
  );
}
