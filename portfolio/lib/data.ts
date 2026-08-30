// ─────────────────────────────────────────────────────────────────────────────
// lib/data.ts — Single source of truth for Aditi Prajapati's portfolio.
// Structured data for personal info, experience, education, skills, projects, and learning.
// ─────────────────────────────────────────────────────────────────────────────

export type PersonalInfo = {
  name: string;
  role: string;
  shortPositioning: string;
  aboutParagraphs: string[];
  careerFocus: string[];
};

export const personalInfo: PersonalInfo = {
  name: "Aditi Prajapati",
  role: "B.Sc. IT Student • Software Developer • Web Developer",
  shortPositioning: "Building software. Studying systems.",
  aboutParagraphs: [
    "I am a B.Sc. Information Technology student interested in software development, web technologies, and the systems that make software work. I enjoy turning ideas into useful applications and exploring how different technologies can work together to solve practical problems.",
    "My primary interest is web development, with experience building applications using modern frontend and backend technologies. I also explore programming, databases, APIs, data analysis, and system-oriented technologies such as Hadoop and distributed file systems.",
    "I learn by building projects and experimenting with different technologies rather than limiting myself to a single stack. My projects range from web applications and developer tools to AI/NLP-based applications, data dashboards, and system-oriented projects.",
  ],
  careerFocus: [
    "Web Development",
    "Software Development",
    "Python Development",
    "Data and Analytics",
    "Backend Development",
    "Systems and Distributed Technologies",
  ],
};

// ─── Project ──────────────────────────────────────────────────────────────────
export type Project = {
  index: string;
  id: string;
  title: string;
  category: string;
  description: string;
  portfolioDescription: string;
  keyFeatures: string[];
  tags: string[];
  technicalDetails?: string[];
  href: string;
  liveUrl?: string;
  previewImage?: string;
};

export const projects: Project[] = [
  {
    index: "01",
    id: "shipcheck",
    title: "ShipCheck",
    category: "Developer Tool • Deployment Readiness CLI • System Analysis",
    description:
      "A local-first deployment readiness CLI that scans your project before you ship. It checks environment variables, Git status, dependencies, tests, builds, Docker configuration, and exposed secrets, then generates a clear Ship Score.",
    portfolioDescription:
      "A local-first CLI tool that analyzes project deployment readiness before shipping, detecting secret leaks, missing env variables, uncommitted Git state, and build risks.",
    keyFeatures: [
      "Local-first automated project scanning",
      "Deployment readiness Ship Score",
      "Environment variable validation",
      "Git repository status auditing",
      "Dependency vulnerability & secret leak checks",
      "Docker container configuration inspection",
      "Actionable CLI delta reporting",
    ],
    tags: [
      "TypeScript",
      "Node.js",
      "CLI Engine",
      "Git API",
      "Docker Inspection",
      "Local-first Storage",
    ],
    href: "https://github.com/aditi-2827/ShipCheck",
    previewImage: "/images/projects/codeoscope.png",
  },
  {
    index: "02",
    id: "codeoscope",
    title: "Codeoscope",
    category: "Web Application • Developer Tool • Code Analysis",
    description:
      "An integrated web-based code analysis and visualization platform designed to help users understand code execution, program flow, dry runs, and algorithmic complexity through an interactive development environment.",
    portfolioDescription:
      "An interactive developer tool that makes code execution easier to understand by combining code execution, dry-run visualization, program-state tracking, and complexity analysis in one platform.",
    keyFeatures: [
      "Online code editor",
      "Code execution engine",
      "Dry-run visualization",
      "Step-by-step program execution",
      "Variable and state tracking",
      "Time and space complexity analysis",
      "Judge0 code execution runner",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Judge0",
      "Docker",
      "Python",
      "JavaScript",
      "Java",
      "C",
    ],
    technicalDetails: [
      "Uses Supabase for authentication and database functionality",
      "Uses PostgreSQL for persistent application data",
      "Uses Judge0 CE for code execution (self-hosted using Docker)",
      "Includes an interactive execution tracer visualising program state and variable changes",
      "Includes heuristic-based complexity estimation with step limits",
    ],
    href: "https://github.com/aditi-2827/Codeoscope",
    previewImage: "/images/projects/codeoscope.png",
  },
  {
    index: "03",
    id: "cloudhive",
    title: "CloudHive",
    category: "Big Data • Distributed Systems • Backend",
    description:
      "A learning-focused distributed file management system built with React, Node.js, PostgreSQL, Docker, and Hadoop HDFS to explore distributed storage, file replication, fault tolerance, and cluster management.",
    portfolioDescription:
      "A system-oriented distributed storage platform exploring HDFS integration, file replication, fault tolerance, and containerized cluster infrastructure.",
    keyFeatures: [
      "Distributed file upload and download",
      "File replication and fault tolerance",
      "Hadoop HDFS cluster integration",
      "Containerized cluster deployment",
      "RESTful backend API",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "Hadoop HDFS", "REST APIs"],
    href: "https://github.com/aditi-2827/CloudHive",
  },
  {
    index: "04",
    id: "mindspark",
    title: "MindSpark",
    category: "Knowledge Platform • Web Application",
    description:
      "A calm, ad-free platform for news, general knowledge, Indian polity, and mythology — built for the naturally curious.",
    portfolioDescription:
      "A knowledge-focused web platform that combines curated information, searchable content, external content aggregation, and interactive quizzes into a single learning experience.",
    keyFeatures: [
      "Curated knowledge content",
      "Searchable information base",
      "News and content aggregation",
      "Indian polity and mythology topics",
      "Interactive quiz functionality",
    ],
    tags: ["Astro", "TypeScript", "Tailwind CSS", "Content Aggregation"],
    href: "https://github.com/aditi-2827/MindSpark-",
    previewImage: "/images/projects/mindspark.png",
  },
  {
    index: "05",
    id: "pixel-assistant",
    title: "Pixel Assistant / Tara",
    category: "Desktop Application • AI Assistant • Voice & NLP",
    description:
      "A pixel-art desktop buddy that runs onto your Windows desktop, listens to your voice, performs tasks, and responds.",
    portfolioDescription:
      "A Python desktop assistant exploring voice interaction, NLP, and automation to make common computer tasks accessible through natural language commands.",
    keyFeatures: [
      "Voice interaction and speech recognition",
      "Desktop automation",
      "Natural language command execution",
      "Reminders and system utility triggers",
    ],
    tags: ["Python", "NLP", "Voice Processing", "Tkinter", "Desktop Automation"],
    href: "https://github.com/aditi-2827/pixel-assistant",
    previewImage: "/images/projects/pixel.png",
  },
  {
    index: "06",
    id: "photobooth",
    title: "The Photobooth",
    category: "Web Application • Creative Tool",
    description:
      "A vintage-style photobooth website that captures webcam photos and generates a classic downloadable photo strip.",
    portfolioDescription:
      "A lightweight creative web application that turns a browser camera into a virtual photobooth, capturing multiple photos and generating a downloadable photo strip.",
    keyFeatures: [
      "Webcam interaction",
      "Multi-photo capture sequence",
      "Photobooth photo-strip generator",
      "Downloadable output",
    ],
    tags: ["Python", "HTML", "CSS", "JavaScript", "Browser Camera APIs"],
    href: "https://github.com/aditi-2827/Photobooth",
    previewImage: "/images/projects/photobooth.png",
  },
];

// ─── Skill Categories ─────────────────────────────────────────────────────────
export type SkillCategory = {
  label: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    label: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "HTML", "CSS", "SQL"],
  },
  {
    label: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Web Development",
    ],
  },
  {
    label: "Backend Development",
    items: [
      "Node.js",
      "REST APIs",
      "API Integration",
      "Authentication",
      "Server-side Development",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Supabase"],
  },
  {
    label: "Python Stack",
    items: [
      "Python Application Development",
      "Tkinter",
      "Data Processing",
      "NLP",
      "API Integration",
    ],
  },
  {
    label: "Java Stack",
    items: [
      "Java",
      "Java Swing",
      "Object-Oriented Programming",
      "GUI Application Development",
    ],
  },
  {
    label: "Data & Analytics",
    items: [
      "Power BI",
      "Microsoft Excel",
      "Data Visualization",
      "Reporting",
      "Data Analysis",
    ],
  },
  {
    label: "Big Data & Distributed Systems",
    items: [
      "Hadoop",
      "HDFS",
      "Big Data Concepts",
      "Distributed File Systems",
      "Distributed Data Storage",
    ],
  },
  {
    label: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "GitHub Desktop",
      "npm",
      "Docker",
      "VS Code",
      "Jupyter Notebook",
      "Vercel",
    ],
  },
  {
    label: "Other Technologies & Concepts",
    items: [
      "Prisma",
      "bcrypt",
      "Supabase Authentication",
      "Judge0",
      "RapidAPI",
      "Anthropic Claude API",
      "REST APIs",
      "CI/CD Concepts",
      "Algorithm Visualization",
      "Code Execution Systems",
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export type ExperienceItem = {
  role: string;
  company: string;
  client?: string;
  duration: string;
  description: string;
  experienceDescription: string;
  tools: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: "ORM Executive Intern",
    company: "SPAN Communications",
    client: "BPCL",
    duration: "April 2026 – May 2026",
    description:
      "Worked in the Online Reputation Management division on a client account, supporting digital monitoring, reporting, and data-related tasks.",
    experienceDescription:
      "Worked with digital monitoring and reporting workflows, created reports and dashboards, and used Power BI and Excel to organize and present data.",
    tools: [
      "Locobuzz",
      "Microsoft Excel",
      "Power BI",
      "Data Reporting",
      "Dashboard Creation",
      "Online Reputation Monitoring",
    ],
  },
];

// ─── Academic Background ──────────────────────────────────────────────────────
export type AcademicInfo = {
  degree: string;
  college: string;
  expectedGraduation: string;
  academicInterests: string[];
};

export const academicInfo: AcademicInfo = {
  degree: "B.Sc. Information Technology",
  college: "Jai Hind College (Autonomous), Mumbai",
  expectedGraduation: "2027",
  academicInterests: [
    "Software Development",
    "Web Development",
    "Data Analytics",
    "Databases",
    "Big Data",
    "Distributed Systems",
    "Algorithms",
    "Artificial Intelligence",
    "Natural Language Processing",
  ],
};

// ─── Current Exploration / Learning ──────────────────────────────────────────
export type ExploringItem = {
  topic: string;
  note?: string;
};

export const exploringItems: ExploringItem[] = [
  { topic: "Advanced React and Next.js development" },
  { topic: "Backend development" },
  { topic: "Python development" },
  { topic: "Data structures and algorithms" },
  { topic: "AI and NLP" },
  { topic: "Big Data technologies" },
  { topic: "Hadoop and HDFS" },
  { topic: "Distributed systems" },
  { topic: "Database systems" },
  { topic: "System design concepts" },
];

// ─── Personal Interests ──────────────────────────────────────────────────────
export const interests = {
  technical: [
    "Building practical software",
    "Web application development",
    "Developer tools",
    "AI-assisted applications",
    "Algorithms and visualization",
    "Databases",
    "Big Data",
    "Distributed systems",
    "NLP",
    "Data analytics",
  ],
  general: [
    "Technology",
    "Systems",
    "History",
    "Geography",
    "Learning through projects",
  ],
};

// ─── Contact Info ────────────────────────────────────────────────────────────
export type ContactInfo = {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
};

export const contactInfo: ContactInfo = {
  name: "Aditi Prajapati",
  email: "aditiprajapati2827@gmail.com",
  github: "https://github.com/aditi-2827",
  linkedin: "https://www.linkedin.com/in/aditi-prajapati-406394372",
  location: "Mumbai, India",
};


