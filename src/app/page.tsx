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
      <EngineeringApproach />
    </>
  );
}
