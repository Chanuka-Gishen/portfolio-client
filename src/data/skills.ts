export type Skill = {
  name: string;
  icon?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, intuitive user interfaces.",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "MUI", icon: "mui" },
      { name: "Flutter", icon: "flutter" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Designing reliable APIs and scalable services.",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Express.js", icon: "express" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Java", icon: "openjdk" },
      { name: "Spring Boot", icon: "springboot" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Data modeling, persistence, and optimization.",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "Prisma", icon: "prisma" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    description: "Deploying and maintaining production applications.",
    skills: [
      { name: "AWS", icon: "amazonwebservices" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "Nginx", icon: "nginx" },
      { name: "Linux", icon: "linux" },
    ],
  },
  {
    id: "tools",
    title: "Development Tools",
    description: "Tools used throughout the software development lifecycle.",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "VS Code", icon: "visualstudiocode" },
      { name: "REST APIs" },
      { name: "CI/CD" },
    ],
  },
];
