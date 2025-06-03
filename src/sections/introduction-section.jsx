import { useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Box,
  Stack,
  Grid,
  Container,
  IconButton,
} from "@mui/material";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function IntroductionSection() {
  const name = "I am Chanuka Gishen,";
  const title = "A Full-stack Software Engineer";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  // Animation for letter by letter effect
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, // Staggered delay for each letter
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.8, ease: "backOut" },
    },
  };

  // Split text into letters for animation
  const nameLetters = name.split("");
  const titleLetters = title.split("");
  return (
    <Grid
      id="home"
      container
      component={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: `
          linear-gradient(
            135deg,
            #0a0a2a 0%,
            #000000 30%,
            #1a0033 60%,
            #0a1a3a 100%
          )
        `,
        position: "relative",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        pt: '20px'
      }}
    >
      <Grid size={12}>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              position: "relative",
              zIndex: 1,
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            {/* Left Content - Text */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 2, md: 3 },
                }}
              >
                <Typography
                  variant="h2"
                  component={motion.div}
                  initial="hidden"
                  animate="visible"
                  sx={{
                    // fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2.2rem" },
                    // fontWeight: 400,
                    //mb: 2,
                    color: "white",
                    textShadow: "0 0 10px rgba(138, 43, 226, 0.7)",
                  }}
                >
                  {nameLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={letterAnimation}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </Typography>

                <Typography
                  variant="h2"
                  component={motion.div}
                  initial="hidden"
                  animate="visible"
                  sx={{
                    // fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2.2rem" },
                    // fontWeight: 400,
                    color: "rgba(148, 63, 228, 0.53)",
                    textShadow: "rgba(255, 255, 255, 0.9)",
                    //mb: { xs: 4, md: 0 },
                  }}
                >
                  {titleLetters.map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={name.length + index}
                      variants={letterAnimation}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </Typography>
                <Typography variant="h5" color="white" textAlign="justify">
                  Experienced full-stack software engineer passionate about
                  building scalable, user-centric applications with modern
                  technologies across the entire stack from intuitive front-end
                  interfaces to robust back-end systems.
                </Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  gap={2}
                  alignItems="center"
                >
                  <AlternateEmailIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                  <Typography color="white">
                    chanukagishen@hotmail.com
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  gap={2}
                  alignItems="center"
                >
                  <ContactPhoneIcon fontSize="large" sx={{ color: "white" }} />
                  <Typography color="white">+94 76 075 6482</Typography>
                </Box>
                <Typography color="white">More about me</Typography>
                <Stack
                  direction="row"
                  spacing={{ xs: 2, md: 3 }}
                  justifyContent={{ xs: "center", md: "left" }}
                  alignItems={{ xs: "center", md: "left" }}
                >
                  <IconButton
                    sx={{
                      color: "white",
                      border: "2px solid white",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                      transition: "all 0.3s ease",
                      p: 1.5,
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/chanuka-mendis-4488791b8",
                        "_blank"
                      )
                    }
                  >
                    <LinkedInIcon sx={{ fontSize: "1rem" }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: "white",
                      border: "2px solid white",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                      transition: "all 0.3s ease",
                      p: 1.5,
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/chanuka.gishen/",
                        "_blank"
                      )
                    }
                  >
                    <FacebookIcon sx={{ fontSize: "1rem" }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: "white",
                      border: "2px solid white",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                      transition: "all 0.3s ease",
                      p: 1.5,
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/_c.h.a.n.u_g.i.s.h.e.n_/",
                        "_blank"
                      )
                    }
                  >
                    <InstagramIcon sx={{ fontSize: "1rem" }} />
                  </IconButton>
                  <IconButton
                    sx={{
                      color: "white",
                      border: "2px solid white",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                      transition: "all 0.3s ease",
                      p: 1.5,
                    }}
                    onClick={() =>
                      window.open("https://github.com/Chanuka-Gishen", "_blank")
                    }
                  >
                    <GitHubIcon sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </Stack>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                component={motion.div}
                variants={imageVariants}
                sx={{
                  position: "relative",
                  width: { xs: 280, sm: 350, md: 400 },
                  height: { xs: 280, sm: 350, md: 400 },
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "8px solid rgba(138, 43, 226, 0.3)",
                  boxShadow: "0 0 30px rgba(138, 43, 226, 0.6)",
                  mt: { xs: 4, md: 0 },
                }}
              >
                <Box
                  component="img"
                  src="/images/background/profile-2.png"
                  alt="Chanuka Gishen"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  sx={{
                    position: "absolute",
                    bottom: 50,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      display: "inline-block",
                      color: "transparent",
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: 3,
                      WebkitTextStroke: "2px white",
                      textStroke: "2px white",
                      textShadow: `
      0 0 5px rgba(255, 255, 255, 0.5),
      0 0 15px rgba(255, 255, 255, 0.2)
    `,
                      px: 3,
                      py: 1,
                    }}
                  >
                    Developer
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
