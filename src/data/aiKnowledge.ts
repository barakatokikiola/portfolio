// src/data/aiKnowledge.ts

export const aiKnowledge = {
  profile: {
    name: "Barakat Okikiola",
    role: "Frontend Engineer & Web Designer",
    location: "Lagos, Nigeria",

    introduction:
      "Barakat is a frontend engineer who treats every website as a brand communication tool, combining thoughtful design with solid engineering.",

    approach: [
      {
        title: "A website is a first conversation",
        description:
          "Every design decision communicates something about a brand. Barakat approaches typography, spacing, colour, and visual hierarchy deliberately to create trust.",
      },
      {
        title: "Design earns trust, engineering keeps it",
        description:
          "Barakat believes a beautiful website must also be fast, reliable, accessible, and well engineered.",
      },
      {
        title: "Outcomes, not outputs",
        description:
          "The goal is not simply to deliver files, but to create something that produces a meaningful result for the business.",
      },
    ],
  },

  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
    ],

    stateAndData: [
      "TanStack Query",
      "Zustand",
      "Context API",
      "REST APIs",
      "WebSocket",
      "Supabase",
    ],

    stylingAndUI: [
      "Tailwind CSS",
      "shadcn/ui",
      "Bootstrap",
      "DaisyUI",
      "Responsive Design",
      "Mobile-First Development",
      "Figma",
    ],

    testing: [
      "Vitest",
      "React Testing Library",
      "Unit Testing",
      "Component Testing",
    ],

    development: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Reusable Components",
      "Custom Hooks",
      "API Integration",
      "Agile/Scrum",
      "Debugging",
    ],

    performanceAndAccessibility: [
      "Core Web Vitals",
      "Accessibility",
      "Responsive Web Development",
    ],

    additionalTechnologies: [
      "Zod",
      "React Hook Form",
      "Recharts",
      "Vite",
      "Turbopack",
      "Three.js",
      "Motion",
    ],
  },

  services: [
    {
      name: "Business Websites",
      description:
        "Responsive, brand-focused websites designed to establish credibility and communicate a business clearly.",
    },
    {
      name: "Landing Pages",
      description:
        "Conversion-focused landing pages for businesses, products, campaigns, and personal brands.",
    },
    {
      name: "Web Applications",
      description:
        "Interactive web applications with modern frontend architecture, responsive interfaces, and API integration.",
    },
    {
      name: "Dashboards",
      description:
        "Data-driven dashboards and application interfaces with reusable components and thoughtful user experiences.",
    },
    {
      name: "Portfolio Websites",
      description:
        "Personal and professional portfolio websites designed to showcase work, skills, and personal brands.",
    },
    {
      name: "API Integration",
      description:
        "Connecting frontend applications to REST APIs and other backend services to create dynamic experiences.",
    },
    {
      name: "AI-Powered Interfaces",
      description:
        "Frontend interfaces for AI-powered products, including conversational interfaces and streaming AI experiences.",
    },
  ],

  experience: [
    {
      company: "Opportuna",
      role: "Freelance Frontend Developer",
      period: "May 2026 – Present",
      description:
        "Worked on an AI-powered B2B career intelligence platform using Next.js.",
      highlights: [
        "Architected and built a production-grade Next.js platform end-to-end.",
        "Translated Figma designs into responsive and accessible interfaces.",
        "Built an AI assistant chat interface with real-time streaming responses and markdown rendering.",
        "Worked on a LiveKit-powered video interview platform supporting human- and AI-led interview modes.",
        "Implemented authentication, email OTP verification, middleware-based route protection, and token refresh.",
        "Built reusable components and custom hooks for complex product workflows.",
        "Built timezone-aware scheduling and assessment features.",
        "Used TanStack Query and Zustand for state management.",
      ],
    },

    {
      company: "Rubies Code School",
      role: "Frontend Development Tutor",
      period: "August 2025 – Present",
      description:
        "Teaches hands-on frontend development and mentors learners.",
      highlights: [
        "Teaches HTML, CSS, JavaScript, React, and Tailwind CSS.",
        "Guides learners through responsive and maintainable web applications.",
        "Provides code reviews and debugging support.",
        "Teaches component-based architecture and responsive UI patterns.",
      ],
    },

    {
      company: "Revent Technologies (Flowmono Inc.)",
      role: "Frontend Engineer",
      period: "January 2025 – May 2026",
      description:
        "Worked on a growing B2B SaaS platform using Angular.",
      highlights: [
        "Built and maintained reusable Angular UI components.",
        "Collaborated with UI/UX designers and backend engineers.",
        "Built responsive and accessible interfaces.",
        "Improved Core Web Vitals and frontend performance.",
        "Participated in code reviews and Agile Scrum workflows.",
      ],
    },

    {
      company: "StormCell",
      role: "Frontend Developer Intern",
      period: "2022 – October 2022",
      description:
        "Developed the organization's academy portal using React.",
      highlights: [
        "Built responsive React interfaces.",
        "Integrated REST API endpoints.",
        "Worked on page-loading performance.",
      ],
    },
  ],

  projects: [
    {
      id: "03",
      name: "Job Application Tracker",
      shortName: "JobTrack",
      type: "Full-stack Web Application",

      description:
        "A full-stack job application tracking platform for managing applications, statuses, and application details in one place.",

      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "TanStack Query",
        "Zustand",
        "Vitest",
        "React Testing Library",
        "GitHub Actions",
      ],

      features: [
        "Authentication",
        "Database-backed application workflows",
        "Application tracking",
        "Status management",
        "Reusable components",
        "Form validation",
        "Responsive design",
        "Accessible UI",
        "Component testing",
        "CI/CD",
      ],

      liveUrl: "https://jobdoor.netlify.app",
      githubUrl: "https://github.com/barakatokikiola/jobtrack",

      recommendationKeywords: [
        "dashboard",
        "web application",
        "SaaS",
        "authentication",
        "database",
        "job tracker",
        "application",
        "complex application",
      ],
    },

    {
      id: "02",
      name: "Film-maker Portfolio Website",
      type: "Marketing / Portfolio Website",

      description:
        "A responsive marketing website for a wedding videography studio, designed with a cinematic visual direction that matches the brand's storytelling.",

      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
      ],

      features: [
        "Responsive design",
        "Custom animated hero",
        "Cinematic visual direction",
        "Refined typography",
        "Mobile-first design",
      ],

      liveUrl: "https://tarafilms.netlify.app",
      githubUrl:
        "https://github.com/barakatokikiola/filmmaker-website",

      recommendationKeywords: [
        "portfolio",
        "creative website",
        "videography",
        "photography",
        "personal brand",
        "marketing website",
        "creative business",
      ],
    },

    {
      id: "01",
      name: "Revent Web",
      type: "Business Website",

      description:
        "A responsive website built with Angular, TypeScript, and Tailwind CSS, focused on clean and accessible design.",

      technologies: [
        "Angular",
        "TypeScript",
        "Tailwind CSS",
      ],

      features: [
        "Responsive design",
        "Accessible interface",
        "Clean visual design",
      ],

      liveUrl: "https://reventbyb.netlify.app",
      githubUrl:
        "https://github.com/barakatokikiola/Revent-Website",

      recommendationKeywords: [
        "business website",
        "company website",
        "corporate website",
        "professional website",
      ],
    },

    {
      id: "04",
      name: "Creative Next.js Portfolio",
      type: "Creative Portfolio",

      description:
        "A responsive creative portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Three.js.",

      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Three.js",
      ],

      features: [
        "Responsive design",
        "Creative interactions",
        "Three.js",
        "Performance-focused Next.js architecture",
      ],

      liveUrl:
        "https://nextjs-portfolio-pink-pi.vercel.app/",
      githubUrl:
        "https://github.com/barakatokikiola/Nextjs-Portfolio",

      recommendationKeywords: [
        "creative",
        "portfolio",
        "personal brand",
        "interactive website",
        "3D website",
      ],
    },

    {
      id: "05",
      name: "Next.js Todo App",
      type: "Web Application",

      description:
        "A task management application built with Next.js, React, TypeScript, and Tailwind CSS.",

      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],

      features: [
        "Task management",
        "Responsive interface",
        "Type-safe development",
      ],

      liveUrl:
        "https://nextjs-todo-e32142e33-barakatokikiolas-projects.vercel.app/",
      githubUrl:
        "https://github.com/barakatokikiola/Nextjs-Todo-App",

      recommendationKeywords: [
        "web application",
        "task management",
        "Next.js",
        "React application",
      ],
    },

    {
      id: "06",
      name: "Movie Search App",
      type: "Web Application",

      description:
        "A React application for searching and exploring movies with a clean Bootstrap-powered interface.",

      technologies: [
        "React",
        "JavaScript",
        "Bootstrap",
      ],

      features: [
        "Movie search",
        "API integration",
        "Responsive interface",
      ],

      liveUrl:
        "https://barakatokikiola.github.io/Movie-App/",
      githubUrl:
        "https://github.com/barakatokikiola/Movie-App",

      recommendationKeywords: [
        "API integration",
        "React",
        "search",
        "dynamic data",
        "web application",
      ],
    },
  ],

  education: {
    institution: "University of Lagos",
    degree: "Bachelor of Science – Cell Biology and Genetics",
    graduation: "November 2024",
    cgpa: "4.62 / 5.00",
  },

  certifications: [
    "Front-End Web Development with React – The Hong Kong University of Science and Technology / Coursera",
    "Meta Front-End Developer Professional Certificate – Meta / Coursera",
    "Tech4Dev × Microsoft DSFE Software Development Certificate",
    "Machine Learning Specialization – DeepLearning.AI / Stanford Online / Coursera",
  ],

  websiteBrief: {
    supportedProjectTypes: [
      "Business website",
      "Landing page",
      "Portfolio website",
      "E-commerce website",
      "Web application",
      "Dashboard",
      "SaaS application",
      "API-integrated application",
      "AI-powered web application",
    ],

    questionsToAsk: [
      "What type of business or organization is this for?",
      "What is the main goal of the website?",
      "Who is the target audience?",
      "What should visitors be able to do?",
      "What pages do you need?",
      "Do you already have branding, images, or content?",
      "Do you need payments?",
      "Do you need WhatsApp integration?",
      "Do you need authentication or user accounts?",
      "Do you need an admin dashboard?",
      "Do you need any external API integrations?",
      "Do you have a preferred timeline?",
      "Do you have a budget range?",
    ],
  },
} as const;