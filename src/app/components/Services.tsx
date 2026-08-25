"use client"
import { motion, type Variants } from "motion/react"

type Service = {
  index: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
};

const services: Service[] = [
  {
    index: "01",
    title: "Website Design from Scratch",
    tagline: "For brands that need a home worth arriving at.",
    description:
      "You get more than a website. You get a considered digital presence, built around your business goals, audience psychology, and the impression you need to make.",
    includes: [
      "Discovery & strategy workshop",
      "Custom UI/UX design",
      "Full-stack Next.js build",
      "Launch & performance audit",
    ],
  },
  {
    index: "02",
    title: "Website Redesign",
    tagline: "For brands whose site no longer tells the right story.",
    description:
      "Your product has grown. Your audience has shifted. Your website hasn't kept up. I diagnose what's broken, redesign with intention, and rebuild for where you're going.",
    includes: [
      "Conversion & UX audit",
      "Redesign with retained equity",
      "Improved site architecture",
      "Faster, cleaner codebase",
    ],
  },
  {
    index: "03",
    title: "Landing Page Design",
    tagline: "For campaigns that need to earn their traffic.",
    description:
      "A single page that does one job: convert. Designed around your offer, your audience's hesitations, and the one action you need them to take.",
    includes: [
      "Offer & audience analysis",
      "Persuasion-led copywriting",
      "High-conversion UI design",
      "A/B testable structure",
    ],
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="bg-navy-light px-6 md:px-12 py-16 md:py-24">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-6 h-px bg-gold inline-block" />
        <span className="font-body text-xs tracking-widest text-gold uppercase">Services</span>
      </div>

      <h2 className="font-heading text-3xl md:text-4xl text-cream max-w-lg">
        What working with me looks like
      </h2>
      <p className="font-body text-sm text-muted mt-4 max-w-md leading-relaxed">
        Every engagement is scoped around the outcome you need, not a deliverable checklist. Here&apos;s how I typically come in.
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-14"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.index}
            variants={item}
            className={`grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-4 py-10 ${
              i > 0 ? "border-t border-gold/10" : ""
            }`}
          >
            <span className="font-heading text-sm text-muted">{service.index}</span>
            <div>
              <h3 className="font-heading text-lg md:text-xl text-cream">{service.title}</h3>
              <p className="font-body text-sm text-gold italic mt-1">{service.tagline}</p>
              <p className="font-body text-sm text-muted mt-4 max-w-xl leading-relaxed">{service.description}</p>
              <div className="mt-5">
                <span className="font-body text-xs tracking-widest text-muted uppercase">Includes</span>
                <ul className="mt-2 space-y-1.5">
                  {service.includes.map((point) => (
                    <li key={point} className="font-body text-xs text-muted flex gap-2">
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