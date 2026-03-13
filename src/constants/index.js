export const PERSONAL = {
    name: "Shanmukh Pudi",
    title: "Full-Stack Developer & Automation Engineer",
    tagline: "Building enterprise-grade systems that turn workflows into products.",
    email: "Outlook.com",
    location: "Visakhapatnam, Andhra Pradesh, India",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    resume: "/src/assets/Shanmukh_Pudi_Resume.pdf",
    available: true,
}

export const TYPED_STRINGS = [
    "Full-Stack Developer",
    "Automation Engineer",
    "Enterprise Systems Builder",
    "Workflow Architect",
]

export const ABOUT = {
    bio: "I'm Shanmukh, a Software Engineer based in Visakhapatnam, India. I specialize in building automation systems, enterprise workflows, and full-stack web application that actually solve real problems. Over the past couple of years I've gone from Google sheets and App Scripts to full production-grade systems - and I'm just getting started. I enjoy turning messy, manual processes into clean, scalable products that teams love using.",
    strengths: [
        {
            id: 1,
            icon: "⚡",
            title: "Automation Engineering",
            description: "Building bots, dispatch systems and workflow tools that cut manual work by up to 70%.",
        },
        {
            id: 2,
            icon: "🧱",
            title: "Full-Stack Development",
            description: "React on the frontend, Python and JavaScript on the backend, SQL and Firestore for data."
        },
        {
            id: 3,
            icon: "📊",
            title: "Data & Business Intelligence",
            description: "ETL pipelines, KPI dashboards and Looker Studio reports that help leadership make better decisions."
        },
        {
            id: 4,
            icon: "🔧",
            title: "Systems Architecture",
            description: "Designing and owning end-to-end internal tools - from concept to deployment to maintenance."
        },
    ],
}

export const TECH_STACK = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "Proficient" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "Proficient" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: "Comfortable" },
      { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg", level: "Learning" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: "Learning" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: "Comfortable" },
      { name: "Firestore", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: "Comfortable" },
    ],
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: "Comfortable" },
      { name: "Google Apps Script", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", level: "Proficient" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: "Comfortable" },
      { name: "Looker Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", level: "Comfortable" },
      { name: "Power Apps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", level: "Learning" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg", level: "Learning" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "UAT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", level: "Comfortable" },
      { name: "Regression Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", level: "Comfortable" },
      { name: "Unit Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", level: "Comfortable" },
    ],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: "Hotel Booking App",
    description: "A full-stack hotel booking platfoem with user authentication, hotel listings, room booking flow, and an admin panel for hotel management.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: "https://github.com/ShanmukhPudi/glowing-adventure",
    demo: "https://shanmukhpudi.github.io/glowing-adventure/",
    status: "live",
    featured: true,
    image: null,
  },
  {
    id: 2,
    title: "Dispatch Management System",
    description: "An enterprise-grage dispatch and Whatsapp automation system built to eliminate manual communication effort and streamline field operations.",
    tags: ["React", "Node.js", "PostgreSQL", "WhatsApp API"],
    github: null,
    demo: null,
    status: "In-development",
    featured: false,
    image: null,
  },
  {
    id: 3,
    title: "Flow Management System",
    description: "A production-grade FMS to orchestrate and streamline sales, purchase processes and inventory tracking across teams in real time.",
    tags: ["React", "Python", "Firestore", "REST API"],
    github: null,
    demo: null,
    status: "In-development",
    featured: false,
    image: null,
  },
]

export const EXPERIENCE = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Mohan Marketing Vizag Private Limited",
    location: "Visakhapatnam, India",
    duration: "Oct 2023 - Present",
    current: true,
    summary: "Building automation systems, internal tools and enterprise workflows that streamline operations and reduce manual workload across teams.",
  },
  {
    id: 2,
    role: "Research Analyst",
    company: "Mind Brink",
    location: "Vijayawada, India",
    duration: "July 2022 - Feb 2023",
    current: false,
    summary: "Conducted data research and analysis, managed a team of 10, and delivered actionable insights to senior management.",
  },
]

export const EDUCATION = "Computer Science Engineering Graduate - JNTU, 2022."