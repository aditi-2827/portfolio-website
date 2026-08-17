import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Exploring from "@/components/exploring/Exploring";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

// ─── Page ─────────────────────────────────────────────────────────────────────
// All portfolio sections assembled in order:
// Nav (fixed layout) -> Hero -> About -> Work -> Skills -> Exploring -> Contact -> Footer
// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <hr className="section-divider" />
      <About />
      <hr className="section-divider" />
      <Projects />
      <hr className="section-divider" />
      <Skills />
      <hr className="section-divider" />
      <Exploring />
      <hr className="section-divider" />
      <Contact />
      <Footer />
    </>
  );
}

