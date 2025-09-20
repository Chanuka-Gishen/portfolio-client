"use client";

import { Fragment } from "react";
import IntroductionSection from "./introduction-section";
import ServicesSection from "./services-section";
import AboutSection from "./about-section";
import ExperianceSection from "./experiance-section";
import ProjectSection from "./projects-section";
import ContactSection from "./contact-section";

const HomeView = () => {
  return (
    <Fragment>
      <IntroductionSection />
      <ServicesSection />
      <AboutSection />
      <ExperianceSection />
      <ProjectSection />
      <ContactSection />
    </Fragment>
  );
};

export default HomeView;
