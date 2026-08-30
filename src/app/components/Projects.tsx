"use client";

import type { StaticImageData } from "next/image";

import revent from "@/assets/revent.webp";
import film from "@/assets/filmpage.webp";
import jobdoor from "@/assets/jobdoor.webp";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight, Minus} from "lucide-react";

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
  isPriority
}: {
  project: Project;
  className: string;
  isPriority?: boolean
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
          priority = {isPriority}
          fetchPriority= {isPriority ? "high" : "auto"}
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
  tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  description:
    "A full-stack job application tracker built with Next.js, Supabase, React Query, Zod, and TypeScript, tracking applications, statuses, and details in one place.",
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
    "A responsive marketing site for a wedding videography studio, designed and built solo with a cinematic feel matching the brand's storytelling, custom animated hero, refined typography, mobile-first throughout.",
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
    "A responsive website built with Angular, TypeScript, and Tailwind CSS, focused on clean, accessible design.",
  category: "Website Design",
};

export default function Projects() {
  return (
    <section id="work" className="px-8 md:px-20 py-16 md:py-24">
      <div className="space-y-6">
        <p className="font-body text-xs tracking-widest text-gold uppercase flex items-center gap-2">
          <Minus className="text-xl" />
          SELECTED WORK
        </p>
        <p className="text-cream text-3xl font-heading mb-6">
          Projects I&#39;ve built
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
