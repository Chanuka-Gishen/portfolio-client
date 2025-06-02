import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./theme/theme";

import MainLayout from "./layout/main-layout";
import IntroductionSection from "./sections/introduction-section";
import ServicesSection from "./sections/services-section";
import ExperianceSection from "./sections/experiance-section";
import AboutSection from "./sections/about-section";
import ProjectSection from "./sections/projects-section";
import ContactSection from "./sections/contact-section";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <MainLayout>
        <IntroductionSection />
        <ServicesSection />
        <AboutSection />
        <ExperianceSection />
        <ProjectSection />
        <ContactSection />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
