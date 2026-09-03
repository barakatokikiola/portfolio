"use client";

import type { StaticImageData } from "next/image";

import revent from "@/assets/revent.webp";
import film from "@/assets/filmpage.webp";
import jobdoor from "@/assets/jobdoor.webp";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight, Minus } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  img: StaticImageData;
  live: string;
  github: string;
  tags: string[];
  description: string;
};

function ProjectTile({
  project,
  className,
  isPriority,
}: {
  project: Project;
  className: string;
  isPriority?: boolean;
}) {
  return (
    <div
      className={`flex flex-col border p-4 rounded-md border-gold/20 ${className}`}
    >
      <div className={`relative h-64 overflow-hidden bg-navy-light`}>
        <Image
          src={project.img}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 40vw, 90vw"
          className="object-cover"
          priority={isPriority}
          fetchPriority={isPriority ? "high" : "auto"}
        />
        <span className="absolute top-3 left-3 bg-navy/80 text-gold text-xs font-body px-2 py-1 rounded-xs z-10">
          {project.category}
        </span>
      </div>

      <div className="pt-3 flex-1">
        <div className="flex items-center justify-between py-3">
          <span className="font-ibm text-base text-gold">{project.id}</span>
          <Link
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit webpage"
            className="font-body px-1.5 text-cream hover:text-gold"
          >
            <MoveUpRight className="w-4 h-4" />
          </Link>
        </div>
        <h1 className="font-heading text-cream text-base mt-1">
          {project.title}
        </h1>
        <p className="font-body text-xs text-muted mt-2 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-body text-muted border border-gold/25 rounded-full px-2.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

const featured: Project = {
  id: "03",
  img: jobdoor,
  title: "Job Application Tracker",
  live: "https://jobdoor.netlify.app",
  github: "https://github.com/barakatokikiola/jobtrack",
  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "TanStack Query",
    "Zod",
  ],
  description:
    "A job application management platform that helps job seekers organize applications, track progress, and manage important job details from one place.I built the application with a focus on type safety, form validation, server-state management, authentication, and a responsive user experience.",
  category: "Website Design",
};
const secondaryA: Project = {
  id: "02",
  img: film,
  title: "Film-maker Portfolio Website",
  live: "https://tarafilms.netlify.app",
  github: "https://github.com/barakatokikiola/filmmaker-website",
  tags: ["React", "Tailwind CSS", "JavaScript"],
  description:
    "A cinematic portfolio website designed and built for a wedding videography studio. I translated the brand's visual identity into a responsive React experience with custom animations, intentional typography, and mobile-first layouts.",
  category: "Website Design",
};
const smallA: Project = {
  id: "01",
  img: revent,
  title: "Revent Web",
  live: "https://reventbyb.netlify.app",
  github: "https://github.com/barakatokikiola/Revent-Website",
  tags: ["Angular", "TypeScript", "Tailwind CSS"],
  description:
    "A responsive business website built with Angular and TypeScript, with a focus on reusable components, responsive layouts, accessibility, and a clean user experience.",
  category: "Website Design",
};

export default function Projects() {
  return (
    <section id="work" className="border-t border-navy-light/50 px-8 md:px-16 py-8 ">
      <div className="space-y-6">
        <p className="font-body text-xs tracking-widest text-gold uppercase flex items-center gap-2">
          <Minus className="text-xl" />
          SELECTED WORK
        </p>
        <p className="text-cream text-3xl font-heading mb-6">
          A few things I&#39;ve developed and shipped.
        </p>
      </div>

      <div className="flex flex-col gap-16 mb-8 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectTile project={smallA} className="" isPriority />
          <ProjectTile project={secondaryA} className="" />
          <ProjectTile project={featured} className="" />
        </div>
      </div>
    </section>
  );
}
