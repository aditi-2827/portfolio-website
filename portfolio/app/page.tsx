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
      <Hero />
      <About />
      <ServiceSummary />
      <Services />
      <Works />
      <ContactSummary />
      <Contact />
    </main>
  );
}
