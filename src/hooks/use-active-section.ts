"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const sectionIds = [
  "about",
  "experience",
  "skills",
  "projects",
  "github",
  "contact",
];

export function useActiveSection() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") return;

    let frame = 0;

    const updateActive = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => Boolean(element));

      const marker = window.innerHeight * 0.35;
      let current = "";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };

    const observer = new IntersectionObserver(scheduleUpdate, {
      rootMargin: "-25% 0px -55% 0px",
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", scheduleUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    scheduleUpdate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [pathname]);

  if (pathname !== "/") return "";

  return activeSection;
}
