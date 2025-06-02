import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./theme/theme";

import MainLayout from "./layout/main-layout";
import IntroductionSection from "./sections/introduction-section";
import ServicesSection from "./sections/services-section";
import ExperianceSection from "./sections/experiance-section";
import AboutSection from "./sections/about-section";
import ProjectSection from "./sections/projects-section";

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
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
