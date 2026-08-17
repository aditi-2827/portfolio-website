// ─────────────────────────────────────────────────────────────────────────────
// lib/data.ts — Single source of truth for all portfolio content.
// Components must not hardcode strings. All content lives here.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Project ──────────────────────────────────────────────────────────────────
export type Project = {
  /** Zero-padded index string: "01", "02", etc. */
  index: string;
  title: string;
  description: string;
  /** Short tag list rendered in JetBrains Mono */
  tags: string[];
  /** Primary destination — GitHub repo or live site */
  href: string;
  /** Live deployment URL if known and real */
  liveUrl?: string;
  /**
   * Path relative to /public — only when a real screenshot exists.
   * Leave undefined until screenshots are placed in public/images/projects/
   */
  previewImage?: string;
};

// ─── Skill category ───────────────────────────────────────────────────────────
export type SkillCategory = {
  label: string;
  items: string[];
};

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS — SELECTED WORK
//
// Descriptions and tags match what is actually present in each repository.
// No invented metrics, user counts, awards, or fake production claims.
//
// previewImage paths point to public/images/projects/.
// Set to undefined until real screenshots are placed there.
// Once screenshots are added, uncomment the previewImage lines.
//
// GitHub hrefs: placeholder profile URL — update with exact repo URLs
// when confirmed.
// ─────────────────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    index: "01",
    title: "Codeoscope",
    description:
      "An interactive platform for analyzing, visualizing, and understanding code execution through dry runs, complexity insights, and execution flow.",
    tags: ["React", "TypeScript", "Node.js", "Supabase", "Judge0"],
    href: "https://github.com/aditi-prajapati",
    previewImage: "/images/projects/codeoscope.png",
  },
  {
    index: "02",
    title: "MindSpark",
    description:
      "A knowledge platform that brings together curated news, learning resources, Indian polity, and mythology in a clean reading experience.",
    tags: ["Astro", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/aditi-prajapati",
    previewImage: "/images/projects/mindspark.png",
  },
  {
    index: "03",
    title: "Pixel Assistant / Tara",
    description:
      "A pixel-art desktop voice assistant that performs everyday tasks through natural voice interaction and automation.",
    tags: ["Python", "Speech Recognition", "Automation"],
    href: "https://github.com/aditi-prajapati",
    previewImage: "/images/projects/pixel.png",
  },
  {
    index: "04",
    title: "Photobooth",
    description:
      "A browser-based vintage photobooth that captures webcam photos and generates downloadable photo strips with customizable layouts.",
    tags: ["JavaScript", "HTML", "CSS", "Webcam API"],
    href: "https://github.com/aditi-prajapati",
    previewImage: "/images/projects/photobooth.png",
  },
  {
    index: "05",
    title: "CropSense AI",
    description:
      "An AI-assisted crop disease diagnosis application that helps identify plant diseases and provides treatment recommendations.",
    tags: ["React", "AI", "Image Analysis"],
    href: "https://github.com/aditi-prajapati",
    previewImage: "/images/projects/cropsense.png",
  },
  {
    index: "06",
    title: "CivicReport",
    description:
      "A civic issue reporting platform that enables citizens to submit, track, and manage local complaints through an intuitive web interface.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    href: "https://github.com/aditi-prajapati",
    previewImage: "/images/projects/civicreport.png",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS
// Categories match actual technologies present in the portfolio projects.
// No invented skills. No progress levels. No icons.
// ─────────────────────────────────────────────────────────────────────────────
export const skills: SkillCategory[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Astro", "Flutter", "Tailwind CSS"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "PostgreSQL", "MySQL", "MongoDB", "Supabase", "Prisma"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "REST APIs", "Power BI"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// EXPLORING
// ─────────────────────────────────────────────────────────────────────────────
export type ExploringItem = {
  topic: string;
  note: string;
};

export const exploringItems: ExploringItem[] = [
  {
    topic: "Distributed Systems & Consensus",
    note: "Studying Paxos, Raft, and fault-tolerant state machine replication in distributed storage.",
  },
  {
    topic: "WebAssembly & Performance Engineering",
    note: "Exploring low-level bytecode execution environments and high-performance browser runtimes.",
  },
  {
    topic: "Design System Engineering",
    note: "Crafting fluid responsive scaling algorithms, micro-interactions, and accessible UI patterns.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT INFO
// ─────────────────────────────────────────────────────────────────────────────
export type ContactInfo = {
  email: string;
  github: string;
  linkedin: string;
  location: string;
};

export const contactInfo: ContactInfo = {
  email: "aditi.prajapati.dev@gmail.com",
  github: "https://github.com/aditi-prajapati",
  linkedin: "https://linkedin.com/in/aditi-prajapati",
  location: "Mumbai, India",
};

