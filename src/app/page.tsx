import Hero from "./components/Hero";
import Projects from "./components/Projects";
import EngineeringApproach from "./components/Approach";
import Skills from "./components/Skills";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Projects />
        <Skills />
        <EngineeringApproach />
      </Suspense>
    </main>
  );
}
