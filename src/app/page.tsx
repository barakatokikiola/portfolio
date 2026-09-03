import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import EngineeringApproach from "./components/Approach";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <EngineeringApproach/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}
