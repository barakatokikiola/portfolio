"use client";

import { motion } from "motion/react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/barakatokikiola" },
  { label: "GitHub", href: "https://github.com/barakatokikiola" },
  { label: "Twitter", href: "https://twitter.com/barakatokikiola" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="px-6 md:px-12 pt-8 border-t border-gold/15"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8">
        <div className="font-heading text-lg text-cream">
          Barakat<span className="text-gold">.</span>
        </div>

        <ul className="flex flex-wrap items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="font-body text-sm text-muted hover:text-cream transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-body text-sm text-muted hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gold/10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <p className="font-body text-xs text-muted">
          © {new Date().getFullYear()} Barakat Okikiola. All rights reserved.
        </p>
        <p className="font-body text-xs text-muted">
          Design-led engineering for brands that want to stand apart.
        </p>
      </div>
    </motion.footer>
  );
}