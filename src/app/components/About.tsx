"use client";

import { motion, type Variants } from "motion/react";
import image from "@/assets/barakat.webp";
import Image from "next/image";
import Link from "next/link";

type AboutPoint = {
  index: string;
  title: string;
  description: string;
};

const aboutPoints: AboutPoint[] = [
  {
    index: "01",
    title: "A different starting point",
    description:
      "My background is in Cell Biology & Genetics, where I learned to approach complex problems systematically, pay attention to detail, and stay curious about how things work.",
  },
  {
    index: "02",
    title: "From science to software",
    description:
      "That same curiosity led me into software development. I discovered that I enjoyed turning problems into interfaces and building things people can actually use.",
  },
  {
    index: "03",
    title: "Frontend is where I thrive",
    description:
      "Today, I work primarily with Angular, React, TypeScript, and modern frontend technologies to build responsive, accessible, and thoughtful web experiences.",
  },
  {
    index: "04",
    title: "I also teach",
    description:
      "I teach frontend development through practical projects, helping students understand HTML, CSS, JavaScript, React, and modern web development. Teaching has also strengthened my ability to break complex technical ideas into simple, understandable steps.",
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
    y: 20,
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

export default function About() {
  return (
    <>
      {/* ABOUT  */}
      <section
        id="about"
        className="bg-navy-light px-6 md:px-12 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-gold inline-block" />

              <span className="font-body text-xs tracking-widest text-gold uppercase">
                About Me
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl text-cream leading-tight max-w-lg">
              From studying{" "}
              <span className="italic text-gold">life sciences</span> to
              building software.
            </h2>

            <p className="font-body text-sm text-muted mt-5 max-w-md leading-relaxed">
              I&apos;m Barakat Okikiola, a frontend developer who enjoys turning
              complex problems into simple, useful digital experiences.
            </p>

            <p className="font-body text-sm text-muted mt-4 max-w-md leading-relaxed">
              My journey into technology started from an unexpected place: Cell
              Biology &amp; Genetics. Today, I bring that same curiosity,
              attention to detail, and problem-solving mindset into software
              development.
            </p>

            <blockquote className="border-l-2 border-gold pl-4 mt-8 max-w-md">
              <p className="font-heading italic text-cream text-base leading-relaxed">
                &quot;I&apos;m interested in understanding how things work —
                then finding a better way to build them.&quot;
              </p>
            </blockquote>

            {/* PROFILE */}
            <div className="flex items-center gap-3 mt-10">
              <div className="relative w-11 h-11 rounded-full bg-navy-light flex items-center justify-center overflow-hidden">
                <Image
                  src={image}
                  alt="Barakat Okikiola"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>

              <div>
                <div className="font-body text-sm text-cream">
                  Barakat Okikiola
                </div>

                <div className="font-body text-xs text-muted">
                  Frontend Developer
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="#work"
                className="bg-gold text-navy font-body text-sm font-medium px-5 py-2.5 rounded-xs hover:bg-gold/90 transition-colors"
              >
                View my work
              </Link>

              <Link
                href="#contact"
                className="border border-cream/20 text-cream font-body text-sm font-medium px-5 py-2.5 rounded-xs hover:bg-cream/5 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {aboutPoints.map((point, i) => (
              <motion.div
                key={point.index}
                variants={item}
                className={`grid grid-cols-[3rem_1fr] gap-4 py-7 ${
                  i > 0 ? "border-t border-gold/15" : "pt-0"
                }`}
              >
                <span className="font-heading text-sm text-muted">
                  {point.index}
                </span>

                <div>
                  <h3 className="font-heading text-lg md:text-xl text-cream">
                    {point.title}
                  </h3>

                  <p className="font-body text-sm text-muted mt-2 max-w-md leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* FREELANCE */}
            <motion.div
              variants={item}
              className="border-t border-gold/15 pt-7 mt-1"
            >
              <div className="grid grid-cols-[3rem_1fr] gap-4">
                <span className="font-heading text-sm text-muted">05</span>

                <div>
                  <h3 className="font-heading text-lg md:text-xl text-cream">
                    Open to selected freelance work
                  </h3>

                  <p className="font-body text-sm text-muted mt-2 max-w-md leading-relaxed">
                    Alongside full-time opportunities, I&apos;m open to selected
                    freelance projects where I can help businesses and
                    individuals build or improve useful digital experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CURRENTLY */}
      <section id="currently" className="bg-navy px-6 md:px-12 py-16">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-gold inline-block" />

              <span className="font-body text-xs tracking-widest text-gold uppercase">
                Currently
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl text-cream max-w-xl">
              Building, learning, and looking for the next opportunity.
            </h2>

            <p className="font-body text-sm text-muted mt-4 max-w-xl leading-relaxed">
              I&apos;m continuously improving my frontend engineering skills
              while exploring how software development and artificial
              intelligence can work together.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 mt-12"
          >
            {/* CURRENTLY ITEM 1 */}
            <motion.div
              variants={item}
              className="py-7 md:pr-8 md:border-r border-gold/15"
            >
              <span className="font-heading text-sm text-muted">01</span>

              <h3 className="font-heading text-lg text-cream mt-4">
                Open to opportunities
              </h3>

              <p className="font-body text-sm text-muted mt-2 leading-relaxed">
                Open to frontend developer roles, internships, and PPA
                opportunities where I can contribute and grow with a team.
              </p>
            </motion.div>

            {/* CURRENTLY ITEM 2 */}
            <motion.div
              variants={item}
              className="py-7 md:px-8 md:border-r border-gold/15"
            >
              <span className="font-heading text-sm text-muted">02</span>

              <h3 className="font-heading text-lg text-cream mt-4">
                Building with modern tools
              </h3>

              <p className="font-body text-sm text-muted mt-2 leading-relaxed">
                Working with Angular, React, TypeScript, Next.js, and modern
                frontend tooling to build better web experiences.
              </p>
            </motion.div>

            {/* CURRENTLY ITEM 3 */}
            <motion.div variants={item} className="py-7 md:pl-8">
              <span className="font-heading text-sm text-muted">03</span>

              <h3 className="font-heading text-lg text-cream mt-4">
                Exploring AI
              </h3>

              <p className="font-body text-sm text-muted mt-2 leading-relaxed">
                Exploring artificial intelligence and machine learning while
                looking for meaningful ways to combine AI with my software
                development skills.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
