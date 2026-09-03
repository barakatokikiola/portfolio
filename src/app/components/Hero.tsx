"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const technologies = ["Angular", "React", "Next.js", "TypeScript"];

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-20 max-w-4xl"
    >
      {/* Availability */}
      <motion.div variants={item} className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-green-400" />

        <span className="font-body text-xs md:text-sm text-muted">
          Open to frontend roles
        </span>
      </motion.div>

      {/* Eyebrow */}
      <motion.p
        variants={item}
        className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-gold mb-4"
      >
        Frontend Developer
      </motion.p>

      {/* Main heading */}
      <motion.h1
        variants={item}
        className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-cream max-w-4xl"
      >
        I build web experiences that are{" "}
        <span className="text-gold italic">fast, intuitive,</span> and built to
        last.
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={item}
        className="font-body text-sm md:text-base text-muted mt-6 max-w-2xl leading-relaxed"
      >
        I&#39;m Barakat Okikiola, a frontend developer specializing in Angular,
        React, TypeScript, and modern web technologies. I turn ideas and complex
        problems into responsive, accessible, and user-focused web applications.
      </motion.p>

      {/* CTA buttons */}
      <motion.div variants={item} className="flex flex-wrap gap-3 mt-8">
        <Link
          href="#work"
          className="bg-gold text-navy font-body text-sm font-medium px-6 py-3 rounded-xs hover:bg-gold/90 transition-colors"
        >
          View my work
        </Link>

        <Link
          href="/Barakat_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cream/20 text-cream font-body text-sm font-medium px-6 py-3 rounded-xs hover:bg-cream/5 transition-colors"
        >
          Download CV
        </Link>
      </motion.div>

      {/* Tech stack */}
      <motion.div
        variants={item}
        className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-12"
      >
        {technologies.map((technology, index) => (
          <div key={technology} className="flex items-center gap-5">
            <span className="font-body text-xs md:text-sm text-muted">
              {technology}
            </span>

            {index < technologies.length - 1 && (
              <span className="text-gold/30">•</span>
            )}
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
