"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";


const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stats = [
  { value: "3+", label: "years" },
  { value: "20+", label: "projects" },
  { value: "100%", label: "retention" },
];

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="px-6 pt-24 pb-12 md:px-12 md:pb-16 max-w-3xl"
    >
     
      <motion.h1
        variants={item}
        className="font-heading text-3xl md:text-5xl leading-tight text-cream"
      >
        Design-led engineering 
        <span className="text-gold italic"> for brands</span> that want to stand
        apart.
      </motion.h1>

      <motion.p
        variants={item}
        className="font-body text-sm md:text-base text-muted mt-5 max-w-md leading-relaxed"
      >
        I design and build websites that turn first impressions into business
        decisions.
      </motion.p>

      <motion.button
        variants={item}
        className="mt-7 bg-gold text-navy font-body text-sm font-medium px-6 py-3 rounded-xs hover:bg-gold/90 transition-colors"
      >
        <Link aria-label="Send a mail" href="mailto:barakattajudeen2018@gmail.com"> Start a project</Link>
      </motion.button>

      <motion.div variants={item} className="flex items-center gap-6 mt-12">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-6">
            <div>
              <div className="font-heading text-3xl text-cream">
                {stat.value}
              </div>
              <div className="font-body text-xs text-muted">{stat.label}</div>
            </div>
            {i < stats.length - 1 && <div className="w-px h-7 bg-gold/30" />}
          </div>
        ))}
      </motion.div>

      
    </motion.section>
  );
}
