"use client";

import { motion, Variants } from "motion/react";
import image from "@/assets/barakat.jpg";
import Image from "next/image";
import Link from "next/link";

type Principle = {
  title: string;
  description: string;
};

const principles: Principle[] = [
  {
    title: "A website is a first conversation",
    description:
      "Before you say a word, your site already has. Typography, spacing, colour, every decision signals whether a visitor should trust you. I make those decisions deliberately.",
  },
  {
    title: "Design earns trust, engineering keeps it",
    description:
      "Beautiful sites that are slow or unreliable destroy credibility. I hold both disciplines equally, the design must be persuasive, the code must be impeccable.",
  },
  {
    title: "Outcomes, not outputs",
    description:
      "I'm not here to hand you files. I'm here to make sure something measurably better happens for your business as a result of working together.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-gold inline-block" />
            <span className="font-body text-xs tracking-widest text-gold uppercase">
              Approach
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-cream leading-tight">
            Design as <span className="italic text-gold">brand</span>{" "}
            storytelling.
          </h2>
          <p className="font-body text-sm text-muted mt-5 max-w-sm leading-relaxed">
            I&apos;m Barakat, a frontend engineer who treats every website as a
            brand communication tool, not just a technical build.
          </p>
          <blockquote className="border-l-2 border-gold pl-4 mt-8 max-w-sm">
            <p className="font-heading italic text-cream text-base leading-relaxed">
              &quot;The best sites aren&apos;t the most complex ones.
              They&apos;re the most intentional.&quot;
            </p>
          </blockquote>
          <div className="flex items-center gap-3 mt-10">
            <div className="relative w-11 h-11 rounded-full bg-navy-light flex items-center justify-center overflow-hidden">
              <Image
                src={image}
                alt="Barakat Headshot"
                fill
                sizes="(min-width: 60px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-body text-sm text-cream">
                Barakat Okikiola
              </div>
              <div className="font-body text-xs text-muted">
                Frontend Engineer & Web Designer
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-12">
            <p className="font-heading">Satisfied with the service I offered?</p>
            <Link
              href="/coffee"
              className="w-fit inline-block mt-4 bg-gold text-navy font-body text-sm font-medium px-6 py-3 rounded-xs hover:bg-gold/90 transition-colors"
            >
              Buy me a coffee
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              variants={item}
              className={`py-6 ${i > 0 ? "border-t border-gold/15" : "pt-0"}`}
            >
              <h3 className="font-heading text-lg text-cream">
                {principle.title}
              </h3>
              <p className="font-body text-sm text-muted mt-2 max-w-md leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
