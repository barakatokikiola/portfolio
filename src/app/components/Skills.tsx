"use client";

import { motion, type Variants } from "motion/react";

type SkillGroup = {
  index: string;
  category: string;
  description: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    index: "01",
    category: "Frontend",
    description:
      "The tools I use to build interactive, responsive web applications.",
    skills: ["Angular", "React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    index: "02",
    category: "Styling & UI",
    description:
      "Creating interfaces that feel consistent, responsive, and intentional.",
    skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "Accessibility"],
  },
  {
    index: "03",
    category: "Data & APIs",
    description:
      "Connecting interfaces to data and building reliable application flows.",
    skills: ["REST APIs", "Supabase", "TanStack Query", "Async JavaScript"],
  },
  {
    index: "04",
    category: "Forms & Validation",
    description:
      "Building forms that are structured, validated, and pleasant to use.",
    skills: ["React Hook Form", "Zod", "Form Validation"],
  },
  {
    index: "05",
    category: "Testing & Quality",
    description: "Making sure applications work reliably and perform well.",
    skills: ["Vitest", "React Testing Library", "Lighthouse", "Performance"],
  },
  {
    index: "06",
    category: "Tools & Workflow",
    description: "The tools I use to collaborate, test, and ship software.",
    skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "VS Code"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-navy-light px-6 md:px-12 py-8 md:py-16">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-6 h-px bg-gold inline-block" />

        <span className="font-body text-xs tracking-widest text-gold uppercase">
          What I Work With
        </span>
      </div>

      {/* Heading */}
      <h2 className="font-heading text-3xl md:text-4xl text-cream max-w-lg">
        Tools for turning ideas into working software.
      </h2>

      <p className="font-body text-sm text-muted mt-4 max-w-xl leading-relaxed">
        I choose tools based on the problem I&#39;m solving, with a focus on
        maintainable code, thoughtful interfaces, and reliable user experiences.
      </p>

      {/* Skills */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-6 grid md:grid-cols-2"
      >
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.index}
            variants={item}
            className={`py-8 md:px-6 ${i % 2 === 0 ? "md:pl-0" : ""} ${
              i < skillGroups.length - 2 ? "border-b border-gold/10" : ""
            } ${i % 2 === 0 ? "md:border-r md:border-gold/10" : ""} ${
              i >= skillGroups.length - 2 ? "md:border-b-0" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Number */}
              <span className="font-heading text-sm text-muted shrink-0">
                {group.index}
              </span>

              <div className="flex-1">
                {/* Category */}
                <h3 className="font-heading text-lg md:text-xl text-cream">
                  {group.category}
                </h3>

                {/* Description */}
                <p className="font-body text-xs md:text-sm text-muted mt-2 max-w-sm leading-relaxed">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-body text-xs text-cream/80 border border-gold/15 px-3 py-1.5 rounded-xs hover:border-gold/40 hover:text-cream transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
