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
    id: "codeoscope",
    title: "Codeoscope",
    category: "Web Application • Developer Tool • Code Analysis",
    description:
      "A web-based code analysis and visualization platform designed to help users understand code execution, program flow, dry runs, and algorithmic complexity through an interactive development environment.",
    portfolioDescription:
      "An interactive developer tool that makes code execution easier to understand by combining code execution, dry-run visualization, program-state tracking, and complexity analysis in one platform.",
    keyFeatures: [
      "Online code editor",
      "Code execution",
      "Dry-run visualization",
      "Step-by-step program execution",
      "Variable and state tracking",
      "Algorithm visualization",
      "Time and space complexity analysis",
      "Execution history",
      "Support for multiple programming languages",
    ],
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Judge0",
      "Docker",
      "Python",
      "JavaScript",
      "Java",
      "C",
      "C++",
    ],
    technicalDetails: [
      "Uses Supabase for authentication and database functionality",
      "Uses PostgreSQL for persistent application data",
      "Uses Judge0 CE for code execution (self-hosted using Docker)",
      "Includes an interactive execution tracer visualising program state and variable changes",
      "Includes heuristic-based complexity estimation with step limits",
    ],
    href: "https://github.com/aditi-2827",
    previewImage: "/images/projects/codeoscope.png",
  },
  {
    index: "02",
    id: "mindspark",
    title: "MindSpark",
    category: "Knowledge Platform • Web Application",
    description:
      "A knowledge and content platform designed to provide curated information through organized content, searchable knowledge, quizzes, and external content aggregation.",
    portfolioDescription:
      "A knowledge-focused web platform that combines curated information, searchable content, external content aggregation, and interactive quizzes into a single learning experience.",
    keyFeatures: [
      "Curated knowledge content",
      "Searchable information",
      "News/content aggregation",
      "Knowledge categories",
      "Quiz functionality",
      "Educational content",
      "Content organization",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    href: "https://github.com/aditi-2827",
    previewImage: "/images/projects/mindspark.png",
  },
  {
    index: "03",
    id: "pixel-assistant",
    title: "Pixel Assistant / Tara",
    category: "Desktop Application • AI Assistant • NLP • Voice",
    description:
      "A Python-based desktop assistant that combines voice interaction, automation, and natural language processing to perform useful desktop and web-based tasks.",
    portfolioDescription:
      "A Python desktop assistant exploring voice interaction, NLP, and automation to make common computer tasks accessible through natural language commands.",
    keyFeatures: [
      "Voice interaction",
      "Desktop automation",
      "Natural language interaction",
      "Web search",
      "Command execution",
      "Utility commands",
      "Reminders and task-related functionality",
      "Interaction with desktop applications",
    ],
    tags: ["Python", "NLP", "Voice processing", "Tkinter", "Desktop Automation", "APIs"],
    href: "https://github.com/aditi-2827",
    previewImage: "/images/projects/pixel.png",
  },
  {
    index: "04",
    id: "civicreport",
    title: "CleanNearMe / CivicReport",
    category: "Civic Technology • Web Application",
    description:
      "A civic complaint and community reporting application designed to help users report local issues and provide information about problems in their surroundings.",
    portfolioDescription:
      "A civic-focused application that helps users report local issues and organize community complaints through a structured digital platform.",
    keyFeatures: [
      "Complaint submission",
      "Issue descriptions",
      "Location information",
      "Image upload",
      "Complaint tracking",
      "Reports",
      "Community-focused functionality",
    ],
    tags: ["React", "JavaScript", "Web Development", "Database Integration", "Authentication", "APIs"],
    href: "https://github.com/aditi-2827",
    previewImage: "/images/projects/civicreport.png",
  },
  {
    index: "05",
    id: "cropsense",
    title: "CropSense AI",
    category: "AI • Agriculture • Web Application",
    description:
      "An AI-powered agricultural application focused on helping users identify crop and plant-related problems and access useful information for crop care.",
    portfolioDescription:
      "An agriculture-focused application exploring how AI can be used to provide accessible crop disease analysis and useful information for farmers.",
    keyFeatures: [
      "Crop disease diagnosis",
      "AI-assisted analysis",
      "Farmer-focused interface",
      "Agricultural information",
      "Dashboard functionality",
    ],
    tags: ["AI/ML Concepts", "Web Development", "React", "JavaScript", "API Integration"],
    href: "https://github.com/aditi-2827",
    previewImage: "/images/projects/cropsense.png",
  },
  {
    index: "06",
    id: "photobooth",
    title: "The Photobooth",
    category: "Web Application • Creative Tool",
    description:
      "A browser-based virtual photobooth that lets users capture photos and create a classic photo-strip style output directly through the web interface.",
    portfolioDescription:
      "A lightweight creative web application that turns a browser camera into a virtual photobooth, capturing multiple photos and generating a downloadable photo strip.",
    keyFeatures: [
      "Camera interaction",
      "Photo capture",
      "Multiple-photo sequence",
      "Photobooth-style photo strip",
      "Browser-based processing",
      "Downloadable output",
      "Privacy-focused processing",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Browser Camera APIs", "Web APIs"],
    href: "https://github.com/aditi-2827",
    previewImage: "/images/projects/photobooth.png",
  },
  {
    index: "07",
    id: "dfs",
    title: "Distributed File Management System",
    category: "Big Data • Distributed Systems • Backend",
    description:
      "A distributed file management project exploring file upload, download, storage, and distributed file-system concepts.",
    portfolioDescription:
      "A system-oriented project exploring distributed file upload, download, and storage concepts using HDFS and containerized infrastructure.",
    keyFeatures: [
      "File upload and download",
      "Distributed storage concepts",
      "HDFS integration",
      "Backend APIs",
      "Containerized deployment",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "Hadoop", "HDFS"],
    href: "https://github.com/aditi-2827",
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
  github: string;
  linkedin: string;
  location: string;
};

export const contactInfo: ContactInfo = {
  name: "Aditi Prajapati",
  github: "https://github.com/aditi-2827",
  linkedin: "https://www.linkedin.com/in/aditi-prajapati-406394372",
  location: "Mumbai, India",
};


