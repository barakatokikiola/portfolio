"use client";

import { motion, type Variants } from "motion/react";

type Approach = {
  index: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
};

const approaches: Approach[] = [
  {
    index: "01",
    title: "Understand",
    tagline: "Before I write code, I understand the problem.",
    description:
      "I start by understanding the users, the goals, and the problem the product needs to solve. This helps me make better technical and design decisions from the beginning.",
    points: [
      "Understand the product and its users",
      "Break complex problems into smaller pieces",
      "Define clear goals and requirements",
    ],
  },
  {
    index: "02",
    title: "Build",
    tagline: "Turning ideas into thoughtful, responsive interfaces.",
    description:
      "I translate ideas and designs into responsive web experiences using reusable components, clean code, and modern frontend technologies.",
    points: [
      "Reusable and maintainable components",
      "Responsive, mobile-first interfaces",
      "Angular, React, Next.js & TypeScript",
    ],
  },
  {
    index: "03",
    title: "Refine",
    tagline: "The details matter.",
    description:
      "I pay attention to the details that make an interface feel intuitive and polished, from accessibility and responsive behavior to performance and interaction.",
    points: [
      "Accessibility and semantic HTML",
      "Responsive behavior across devices",
      "Performance and user experience",
    ],
  },
  {
    index: "04",
    title: "Test",
    tagline: "Confidence comes from testing.",
    description:
      "I test features and interactions to catch problems early and make sure the application behaves as expected as it evolves.",
    points: [
      "Component and integration testing",
      "Vitest & React Testing Library",
      "Continuous improvement and debugging",
    ],
  },
  {
    index: "05",
    title: "Ship",
    tagline: "Good software should make it into the hands of users.",
    description:
      "I use modern development and deployment workflows to move projects from local development to production reliably.",
    points: [
      "Git & GitHub workflows",
      "CI/CD with GitHub Actions",
      "Production deployment and monitoring",
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function EngineeringApproach() {
  return (
    <section id="approach" className="bg-navy px-6 md:px-12 py-16">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-6 h-px bg-gold inline-block" />

        <span className="font-body text-xs tracking-widest text-gold uppercase">
          Engineering Approach
        </span>
      </div>

      <h2 className="font-heading text-3xl md:text-4xl text-cream max-w-lg">
        I care about what happens beneath the interface.
      </h2>

      <p className="font-body text-sm text-muted mt-4 max-w-xl leading-relaxed">
        Good frontend development isn&#39;t just about making a page look good.
        It&#39;s about building experiences that are useful, accessible,
        performant, and maintainable.
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-6"
      >
        {approaches.map((approach, i) => (
          <motion.div
            key={approach.index}
            variants={item}
            className={`grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-4 py-8 ${
              i > 0 ? "border-t border-gold/10" : ""
            }`}
          >
            <span className="font-heading text-sm text-muted">
              {approach.index}
            </span>

            <div>
              <h3 className="font-heading text-lg md:text-xl text-cream">
                {approach.title}
              </h3>

              <p className="font-body text-sm text-gold italic mt-1">
                {approach.tagline}
              </p>

              <p className="font-body text-sm text-muted mt-4 max-w-xl leading-relaxed">
                {approach.description}
              </p>

              <div className="mt-5">
                <span className="font-body text-xs tracking-widest text-muted uppercase">
                  Focus
                </span>

                <ul className="mt-2 space-y-1.5">
                  {approach.points.map((point) => (
                    <li
                      key={point}
                      className="font-body text-xs text-muted flex gap-2"
                    >
                      <span className="text-gold">·</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
