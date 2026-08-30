import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import ServiceSummary from "@/components/ServiceSummary";
import Services from "@/components/services/Services";
import Works from "@/components/projects/Works";
import ContactSummary from "@/components/ContactSummary";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero stays sticky — About card slides over it on scroll */}
      <div className="relative">
        <div className="sticky top-0 z-0 h-screen">
          <Hero />
        </div>
        <div className="relative z-10">
          <About />
        </div>
      </div>
      <ServiceSummary />
      <Services />
      <Works />
      <ContactSummary />
      <Contact />
    </main>
  );
}
