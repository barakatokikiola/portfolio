"use client";

import { motion, type Variants } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const contactInfo = [
  {
    label: "Email",
    value: "barakattajudeen2018@gmail.com",
    href: "mailto:barakattajudeen2018@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/barakatokikiola",
    href: "https://linkedin.com/in/barakatokikiola",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-t-navy-light px-6 md:px-12 py-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16"
      >
        {/* LEFT */}
        <div>
          <motion.div variants={item} className="flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-gold inline-block" />

            <span className="font-body text-xs tracking-widest text-gold uppercase">
              Contact
            </span>
          </motion.div>

          <motion.h2
            variants={item}
            className="font-heading text-3xl md:text-5xl leading-tight text-cream"
          >
            Let&apos;s build something{" "}
            <span className="italic text-gold">useful.</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="font-body text-sm text-muted mt-5 max-w-md leading-relaxed"
          >
            I&apos;m currently open to frontend developer roles and selected
            freelance projects.
          </motion.p>

          <motion.p
            variants={item}
            className="font-body text-sm text-muted mt-4 max-w-md leading-relaxed"
          >
            If you&apos;re building a product, growing a team, or have a project
            where my skills could be useful, I&apos;d love to hear from you.
          </motion.p>

          <motion.a
            variants={item}
            href="mailto:barakattajudeen2018@gmail.com"
            className="inline-block mt-7 bg-gold text-navy font-body text-sm font-medium px-6 py-3 rounded-xs hover:bg-gold/90 transition-colors"
          >
            Get in touch
          </motion.a>

          <motion.p
            variants={item}
            className="font-body text-xs text-muted mt-4"
          >
            Open to frontend opportunities and selected projects
          </motion.p>
        </div>

        {/* RIGHT */}
        <div>
          {contactInfo.map((row, i) => (
            <motion.div
              key={row.label}
              variants={item}
              className={`py-4 ${i > 0 ? "border-t border-gold/10" : ""}`}
            >
              <div className="font-body text-xs tracking-widest text-muted/70 uppercase">
                {row.label}
              </div>

              <a
                href={row.href}
                target={row.label === "LinkedIn" ? "_blank" : undefined}
                rel={row.label === "LinkedIn" ? "noreferrer" : undefined}
                className="font-body text-sm text-cream mt-1 inline-block hover:text-gold transition-colors"
              >
                {row.value}
              </a>
            </motion.div>
          ))}

          {/* AVAILABILITY */}
          <motion.div variants={item} className="py-4 border-t border-gold/10">
            <div className="font-body text-xs tracking-widest text-muted/70 uppercase">
              Availability
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />

              <span className="font-body text-sm text-cream">
                Open to frontend roles
              </span>
            </div>

            <p className="font-body text-xs text-muted mt-2 max-w-xs leading-relaxed">
              Available for frontend developer positions and selected freelance
              projects.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
