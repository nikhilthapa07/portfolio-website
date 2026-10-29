export const profile = {
  name: "Nikhil Thapa",
  firstName: "Nikhil",
  lastName: "Thapa",
  role: "Full-Stack Developer",
  email: "nikhilthapa.ts@gmail.com",
  phone: "+971 569405164",
  phoneHref: "tel:+971569405164",
  location: "Dubai, UAE",
  website: "https://nikhilthapa.vercel.app",
  websiteLabel: "nikhilthapa.vercel.app",
  github: "https://github.com/nikhilthapa07",
  githubLabel: "github.com/nikhilthapa07",
  linkedin: "https://www.linkedin.com/in/nikhilthapa07/",
  linkedinLabel: "in/nikhilthapa07",
  resume: "/Nikhil-Thapa-Resume.pdf",
  summary:
    "Experienced Full-Stack and Generative AI Developer with 6+ years of experience building scalable web platforms and intelligent AI systems. Skilled in designing RAG pipelines, AI agents, and knowledge-driven applications, with a strong focus on integrating modern LLM capabilities with reliable backend engineering. Passionate about building practical, production-ready AI products that solve real-world problems.",
};

export const mailto = (subject: string) =>
  `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;

export type ProjectTheme = "grape" | "blue" | "butter" | "peri";
export type PreviewVariant = "magnite" | "nismo" | "patrol" | "rag";

export type ProjectLink = {
  label: string;
  href: string;
  variant: "solid" | "line";
};

export type Project = {
  slug: string;
  tab: string;
  title: string;
  desc: string;
  learn: string;
  tools: string[];
  theme: ProjectTheme;
  preview: PreviewVariant;
  previewAlt: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "nissan-magnite",
    tab: "Vehicle launch",
    title: "Nissan Magnite VLP",
    desc: "Vehicle landing page for the new Nissan Magnite in Saudi Arabia, built for a fast, responsive launch across every screen.",
    learn:
      "Shipped a market-specific launch page with performance tuning, responsive layouts, and Core Web Vitals in mind.",
    tools: ["NuxtJS", "Vue 3", "TypeScript", "Tailwind", "GSAP"],
    theme: "grape",
    preview: "magnite",
    previewAlt:
      "Stylized Nissan Magnite landing page with a warm desert gradient and vehicle silhouette",
    links: [
      {
        label: "Visit live site",
        href: "https://en.allnewmagnite.nissan-saudiarabia.com/",
        variant: "solid",
      },
      {
        label: "Ask about the build",
        href: mailto("Question about the Nissan Magnite VLP"),
        variant: "line",
      },
    ],
  },
  {
    slug: "nissan-patrol-nismo",
    tab: "Performance launch",
    title: "Nissan Patrol Nismo VLP",
    desc: "A high-impact landing page for the Nissan Patrol Nismo, tuned for speed, bold visuals, and a performance-first story.",
    learn:
      "Balanced heavy visual treatment with fast delivery, keeping the launch page responsive and sharp under pressure.",
    tools: ["NuxtJS", "Vue 3", "TypeScript", "Tailwind", "GSAP"],
    theme: "blue",
    preview: "nismo",
    previewAlt:
      "Stylized Nissan Patrol Nismo landing page with a black and red performance theme",
    links: [
      {
        label: "Visit live site",
        href: "https://en.patrolnismo.nissan-dubai.com/",
        variant: "solid",
      },
      {
        label: "Ask about the build",
        href: mailto("Question about the Nissan Patrol Nismo VLP"),
        variant: "line",
      },
    ],
  },
  {
    slug: "nissan-patrol",
    tab: "Flagship launch",
    title: "Nissan Patrol VLP",
    desc: "The launch page for the new Nissan Patrol in Dubai, combining cinematic product storytelling with a fully responsive build.",
    learn:
      "Delivered a flagship vehicle experience with careful asset delivery through S3 and CloudFront for fast global loads.",
    tools: ["NuxtJS", "Vue 3", "TypeScript", "Tailwind", "AWS"],
    theme: "butter",
    preview: "patrol",
    previewAlt:
      "Stylized Nissan Patrol landing page with a dusk desert gradient and vehicle silhouette",
    links: [
      {
        label: "Visit live site",
        href: "https://en.allnewpatrol.nissan-dubai.com/",
        variant: "solid",
      },
      {
        label: "Ask about the build",
        href: mailto("Question about the Nissan Patrol VLP"),
        variant: "line",
      },
    ],
  },
  {
    slug: "enterprise-rag",
    tab: "Gen-AI platform",
    title: "Enterprise RAG Platform",
    desc: "A multi-router, context-aware retrieval system over internal knowledge bases, built with LangChain and LangGraph.",
    learn:
      "Designed hybrid search, query expansion and HyDE, re-ranking, and contextual routing to improve answer relevance and quality.",
    tools: [
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Qdrant",
      "TypeScript",
      "Python",
    ],
    theme: "peri",
    preview: "rag",
    previewAlt:
      "Stylized diagram of a retrieval-augmented generation pipeline with router, vector search, and LLM nodes",
    links: [
      {
        label: "Ask about it",
        href: mailto("Question about the Enterprise RAG Platform"),
        variant: "solid",
      },
      { label: "View my toolkit", href: "#toolkit", variant: "line" },
    ],
  },
];

export type Experience = {
  role: string;
  org: string;
  location: string;
  when: string;
  color: string;
  current?: boolean;
  open?: boolean;
  changes: string[];
  tools: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    org: "Alternative Agency",
    location: "Dubai, UAE",
    when: "Oct 2024 – Present",
    color: "blue",
    current: true,
    open: true,
    changes: [
      "Architected and developed a custom CMS powering official Nissan Middle East and Ford Naghi.",
      "Delivered high-performance product websites for Nissan Dubai, Saudi Arabia, Ghana, Bahrain, and Egypt (Patrol, Patrol Nismo, Z Nismo, Magnite), optimizing Core Web Vitals and responsive performance across markets.",
      "Architected enterprise RAG systems with LangChain and LangGraph, building multi-router, context-aware retrieval pipelines across internal knowledge bases.",
      "Optimized retrieval with hybrid search, query expansion and HyDE, re-ranking, and contextual routing to improve relevance and answer quality.",
      "Led development of a Ford Naghi PWA, increasing user re-engagement by 150% and improving mobile performance metrics.",
      "Built Nissan Pathfinder VLP, Smart Guided Test Drive, and Nissan Parts Ghana; optimized asset delivery with AWS S3 and CloudFront.",
    ],
    tools: [
      "Vue 3",
      "NuxtJS",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Qdrant",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "S3",
      "CloudFront",
      "GSAP",
    ],
  },
  {
    role: "Software Engineer",
    org: "WPA",
    location: "Dubai, UAE",
    when: "Dec 2022 – May 2024",
    color: "peri",
    open: true,
    changes: [
      "Designed scalable data models and MongoDB aggregation pipelines to power analytics dashboards and feedback tracking systems.",
      "Built a custom CMS for events and news, reducing content update time by 40%.",
      "Achieved 95% test coverage across core modules using unit and integration testing strategies.",
      "Reduced page load times by 60% through caching strategies, query optimization, and performance tuning.",
    ],
    tools: [
      "Next.js",
      "TypeScript",
      "React Query",
      "MongoDB",
      "Node.js",
      "Express",
      "Vitest",
      "AWS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
    ],
  },
  {
    role: "Assistant IT Software Development Executive",
    org: "Batas Organization",
    location: "Pokhara, Nepal",
    when: "Jan 2020 – Nov 2022",
    color: "butter",
    changes: [
      "Developed internal ERP-style systems for inventory, CRM, and sales management in the automotive sector.",
      "Built automation scripts to eliminate manual data entry errors, improving operational efficiency.",
      "Implemented a ticketing system that reduced IT request resolution time by 50%.",
    ],
    tools: [
      "Next.js",
      "TypeScript",
      "React Query",
      "MongoDB",
      "Express",
      "BullMQ",
      "OAuth",
      "PostgreSQL",
      "Redis",
    ],
  },
];

export const education = {
  role: "BSc Computing (Hons)",
  org: "London Metropolitan University",
  location: "London, United Kingdom",
  when: "Aug 2019 – Nov 2022",
  color: "grape",
};

export const caring = [
  "Production-ready AI",
  "Performance & Core Web Vitals",
  "Reliable backend engineering",
  "Interactive experiences",
  "Attention to detail",
];

export const chips = [
  "6+ years",
  "Dubai, UAE",
  "AWS & React certified",
  "GenAI with Python",
];

export type SkillGroup = {
  label: string;
  tone: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    tone: "lang",
    items: ["JavaScript", "TypeScript", "Python", "C", "Lua"],
  },
  {
    label: "Frontend",
    tone: "front",
    items: ["React", "Next.js", "NuxtJS", "Vue 3", "Tailwind CSS"],
  },
  {
    label: "Backend",
    tone: "back",
    items: ["Node.js", "NestJS", "FastAPI", "Express"],
  },
  {
    label: "AI",
    tone: "ai",
    items: [
      "OpenAI",
      "Gemini",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Qdrant",
      "MCP",
    ],
  },
  {
    label: "Databases",
    tone: "db",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    label: "Tools",
    tone: "tools",
    items: ["Git", "Docker", "AWS S3", "CloudFront", "Firebase", "Vitest"],
  },
];

export const socials = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    label: "Website",
    value: profile.websiteLabel,
    href: profile.website,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
];
