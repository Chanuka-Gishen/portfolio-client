"use client";

import { motion } from "framer-motion";
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import StarsIcon from "@mui/icons-material/Stars";

const educationalExperiance = [
  {
    year: "2019 - 2023",
    title: "BEng (Hons) Software Engineering",
    from: "University Of Westminster, UK",
  },
  {
    year: "2018",
    title: "Web Application Development - Certificate Course",
    from: "NIBM, Colombo",
  },
  {
    year: "2018",
    title: "Graphic Design & Advertising - Certificate Course",
    from: "NIBM, Colombo",
  },
  {
    year: "2017",
    title: "Advanced Level Exam",
    from: "St. Benedicts College, Colombo",
  },
  {
    year: "2014",
    title: "Ordinary Level Exam",
    from: "St. Sebastians College, Moratuwa",
  },
];

const workExperiance = [
  {
    year: "2025 Jan - Present",
    title: "Fullstack Software Engineer (Freelance)",
    from: "ZenXbyte, Panadura",
  },
  {
    year: "2024 Jan - 2025 Dec",
    title: "Fullstack Software Engineer (Contract Basis)",
    from: "360Tech, Bandaragama",
  },
  {
    year: "2021 - 2022",
    title: "Fullstack Developer Intern",
    from: "BeGood Solutions, Colombo",
  },
];

const ExperienceCard = ({ data, ...props }) => (
  <Card
    component={motion.div}
    {...props}
    sx={{
      p: 3,
      height: "100%",
      background: "linear-gradient(to right, #000000, #0a0a2a)",
      transition: "all 0.4s ease",
      "&:hover": {
        background:
          "linear-gradient(to right, #000000, rgba(138, 43, 226, 0.8))",
        transform: "translateY(-5px)",
      },
    }}
  >
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          sx={{
            borderRadius: "50%",
            background: "rgba(138, 43, 226, 0.8)",
            display: "flex",
          }}
        >
          <StarsIcon fontSize="large" />
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            color: "rgba(138, 43, 226, 0.8)",
            fontWeight: 600,
          }}
        >
          {data.year}
        </Typography>
      </Stack>

      <Typography
        variant="h5"
        sx={{
          color: "white",
          fontWeight: 700,
          lineHeight: 1.3,
        }}
      >
        {data.title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "rgba(255,255,255,0.7)",
          mb: 1.5,
        }}
      >
        {data.from}
      </Typography>
    </Stack>
  </Card>
);

export default function ExperianceSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  return (
    <Box
      id="experiance"
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      sx={{ width: "100%" }}
    >
      <Container sx={{ px: { xs: 2, md: 6 } }}>
        <Grid container rowSpacing={4} columnSpacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div variants={itemVariants}>
              <Stack spacing={4}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  component={motion.div}
                  variants={itemVariants}
                >
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(138, 43, 226)",
                      "&:hover": {
                        backgroundColor: "rgba(138, 43, 226, 0.2)",
                      },
                    }}
                  >
                    <SchoolIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h3" gutterBottom>
                    Educational Qualifications
                  </Typography>
                </Stack>
                {educationalExperiance.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                  >
                    <ExperienceCard data={exp} />
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div variants={itemVariants}>
              <Stack spacing={4}>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  component={motion.div}
                  variants={itemVariants}
                >
                  <IconButton
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(138, 43, 226)",
                      "&:hover": {
                        backgroundColor: "rgba(138, 43, 226, 0.2)",
                      },
                    }}
                  >
                    <WorkHistoryIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h3">Work Experience</Typography>
                </Stack>
                {workExperiance.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index + educationalExperiance.length}
                  >
                    <ExperienceCard data={exp} />
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
