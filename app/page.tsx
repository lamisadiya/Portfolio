import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Awards />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}