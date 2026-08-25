"use client";

import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gold/25 bg-navy px-6 py-5 md:px-12">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          className="font-heading text-sm tracking-wide text-cream"
        >
          Barakat<span className="text-gold">.</span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex md:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-label={link.label}
                className="relative py-1 font-body text-xs text-muted transition-colors
                after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0
                after:bg-gold after:transition-[width] after:duration-300
                hover:text-cream hover:after:w-full md:text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-cream md:hidden"
          aria-label="Open menu"
        >
          <IoMenuOutline size={30} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-100 h-screen w-full bg-navy md:hidden">
          <div className="flex items-center justify-between px-6 py-5">
         <Link
              href="/"
              onClick={() => setOpen(false)}
              aria-label="Home"
              className="font-heading text-sm tracking-wide text-cream"
            >
              Barakat<span className="text-gold">.</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-cream"
              aria-label="Close menu"
            >
              <IoCloseOutline size={32} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <ul className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-label={link.label}
                  onClick={() => setOpen(false)}
                  className="font-body text-lg text-muted transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}