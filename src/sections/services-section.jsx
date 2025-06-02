import { motion } from "framer-motion";
import { Box, Container, Grid, Typography } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import CloudIcon from "@mui/icons-material/Cloud";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import StorageIcon from "@mui/icons-material/Storage";

const servicesList = [
  {
    title: "Custom Software Development",
    icon: <CodeIcon fontSize="large" />,
    content:
      "Tailored, scalable applications designed to solve your unique business needs from planning to deployment using modern architectures and frameworks.",
  },
  {
    title: "Web Design & Development",
    icon: <LanguageIcon fontSize="large" />,
    content:
      "Fast, responsive, and visually stunning websites with intuitive UX/UI, built with React, Next.js, or other cutting-edge front-end technologies.",
  },
  {
    title: "Mobile App Development",
    icon: <AppShortcutIcon fontSize="large" />,
    content:
      "Cross-platform (React Native/Flutter) mobile apps for iOS and Android, delivering seamless performance and engaging user experiences.",
  },
  {
    title: "API Development & Integration",
    icon: <SettingsEthernetIcon fontSize="large" />,
    content:
      "Robust RESTful APIs and microservices to connect systems, enable third-party integrations, and streamline data workflows.",
  },
  {
    title: "Deployment & Hosting Solutions",
    icon: <CloudIcon fontSize="large" />,
    content:
      "Seamless app deployments, domain setup, and managed hosting (VPS, Serverless, or platforms like Vercel/Netlify) for hassle-free launches.",
  },
  {
    title: "Database Design & Optimization",
    icon: <StorageIcon fontSize="large" />,
    content:
      "High-performance SQL/NoSQL database solutions, optimized for speed, security, and scalability to power your applications.",
  },
];

export default function ServicesSection() {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <Box
      id="services"
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        width: "100%",
        py: 8,
        px: { xs: 2, md: 6 },
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
            >
              Services I Offer
            </Typography>
          </Grid>
          {servicesList.map((service, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Box
                  sx={{
                    p: 4,
                    height: "100%",
                    minHeight: "350px", // Fixed height for all cards
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    background: `
          linear-gradient(
            135deg,
            #0a0a2a 0%,
            #000000 30%,
            #1a0033 60%,
            #0a1a3a 100%
          )
        `,
                    border: "1px solid rgba(138, 43, 226, 0.3)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 25px rgba(138, 43, 226, 0.4)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      background: "rgba(138, 43, 226, 0.2)",
                      border: "1px solid rgba(138, 43, 226, 0.5)",
                      color: "white",
                      mb: 3,
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                    textAlign="justify"
                  >
                    {service.content}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
