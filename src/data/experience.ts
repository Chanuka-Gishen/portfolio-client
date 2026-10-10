export type Experience = {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: "360tech",
    role: "Software Engineer (Full-Stack)",
    company: "360Tech",
    employmentType: "Full-time (Contract Basis)",
    period: "Jan 2024 — Aug 2026",
    location: "Sri Lanka",
    description:
      "Developed and maintained full-stack business applications, REST APIs, and cloud-based solutions, focusing on scalability, security, performance, and maintainability.",
    highlights: [
      "Designed, developed, and integrated REST APIs across business applications and third-party services.",
      "Developed scalable frontend and backend features using React, Next.js, Flutter, Node.js, Express.js, NestJS, and FastAPI.",
      "Designed and optimized relational database schemas and queries to improve application performance and reliability.",
      "Implemented authentication, authorization, and secure API integrations across business applications.",
      "Managed AWS cloud deployments and CI/CD pipelines to support reliable application delivery.",
      "Collaborated with stakeholders to gather requirements, define technical specifications, and deliver maintainable software solutions.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Flutter",
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "MUI",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    id: "freelance",
    role: "Full-Stack Software Engineer",
    company: "Self-Employed",
    employmentType: "Freelance",
    period: "Jul 2023 — Present",
    location: "Remote",
    description:
      "Providing end-to-end software development services, including custom web applications, e-commerce platforms, business management systems, API development, and production infrastructure management.",
    highlights: [
      "Designed and developed full-stack e-commerce platforms, business management systems, and custom web applications.",
      "Built REST APIs, authentication systems, and third-party integrations using Node.js, Express.js, NestJS, and FastAPI.",
      "Designed database schemas and implemented data management solutions using PostgreSQL and MongoDB.",
      "Developed responsive, reusable frontend components using React, Next.js, and modern UI frameworks.",
      "Managed application deployments, hosting environments, SSL, domain configurations, and cloud infrastructure.",
      "Handled testing, debugging, performance improvements, and ongoing production support.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "Nginx",
      "Tailwind CSS",
    ],
  },
  {
    id: "begood-solutions",
    role: "Full-Stack Developer (Intern)",
    company: "BeGood Solutions",
    employmentType: "Internship",
    period: "Jul 2021 — Jul 2022",
    location: "Sri Lanka",
    description:
      "Contributed to full-stack e-commerce and cloud-based application development, gaining hands-on experience with REST APIs, frontend interfaces, databases, integrations, and cloud deployment workflows.",
    highlights: [
      "Developed full-stack e-commerce and cloud-based applications using MERN technologies and Spring Boot.",
      "Built REST APIs and integrated authentication systems, payment gateways, and third-party services.",
      "Worked with MySQL and MongoDB databases to support application functionality and data management.",
      "Assisted with AWS deployments, Git-based workflows, debugging, and backend optimization.",
      "Collaborated within Agile development teams while independently handling assigned development tasks.",
    ],
    technologies: [
      "React.js",
      "Flutter",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "MySQL",
      "MongoDB",
      "AWS",
      "MUI",
    ],
  },
];
