import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { GithubSection } from "@/components/sections/github-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack Software Engineer",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <GithubSection />
      <ContactSection />
    </main>
  );
}
