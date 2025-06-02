import { motion } from "framer-motion";
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BusinessIcon from "@mui/icons-material/Business";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useEffect, useRef, useState } from "react";

const languages = [
  { name: "JavaScript", icon: "/images/techicons/javascript.svg" },
  { name: "TypeScript", icon: "/images/techicons/typescript.svg" },
  { name: "Python", icon: "/images/techicons/python.svg" },
  { name: "Java", icon: "/images/techicons/java.svg" },
  { name: "Dart", icon: "/images/techicons/dart.svg" },
  { name: "PHP", icon: "/images/techicons/php.svg" },
  { name: "HTML5", icon: "/images/techicons/html.svg" },
  { name: "CSS3", icon: "/images/techicons/css.svg" },
];

const frameworks = [
  { name: "React", icon: "/images/techicons/react.svg" },
  { name: "Next.js", icon: "/images/techicons/nextjs.svg" },
  { name: "Flutter", icon: "/images/techicons/flutter.svg" },
  { name: "Node.js", icon: "/images/techicons/nodejs.svg" },
  { name: "Express", icon: "/images/techicons/express.svg" },
  { name: "SpringBoot", icon: "/images/techicons/springboot.svg" },
  { name: "Django", icon: "/images/techicons/django.svg" },
  { name: "Flask", icon: "/images/techicons/flask.svg" },
  { name: "Fast API", icon: "/images/techicons/fastapi.svg" },
  { name: "Socket IO", icon: "/images/techicons/socketio.svg" },
  { name: "Material UI", icon: "/images/techicons/mui.svg" },
  { name: "MySql", icon: "/images/techicons/mysql.svg" },
  { name: "MongoDb", icon: "/images/techicons/mongodb.svg" },
  { name: "AWS", icon: "/images/techicons/aws.svg" },
  { name: "Cloudfair", icon: "/images/techicons/cloudfair.svg" },
  { name: "Codeigniter", icon: "/images/techicons/codeigniter.svg" },
  { name: "Git", icon: "/images/techicons/git.svg" },
  { name: "GitHub", icon: "/images/techicons/github.svg" },
];

const Carousel = ({ items, doubledItems, width, carouselRef }) => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const matchDownMD = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Box sx={{ width: matchDownSM ? "400px" : matchDownMD ? "750px" : "100%" }}>
      <Box
        ref={carouselRef}
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          py: 2,
        }}
      >
        <motion.div
          animate={{
            x: [0, -width],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: items.length * 2, // Speed based on item count
                ease: "linear",
              },
            },
          }}
          style={{
            display: "flex",
            width: "max-content",
          }}
        >
          {doubledItems.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              whileHover={{ scale: 1.1 }}
              style={{
                width: "150px",
                height: "150px",
                margin: "0 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={tech.icon}
                //src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
                alt={tech.name}
                sx={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "scale(1.1)",
                    filter: "drop-shadow(0 0 8px rgba(138, 43, 226, 0.5))",
                  },
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: "white",
                  fontWeight: 500,
                }}
              >
                {tech.name}
              </Typography>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, rgba(10,10,42,1) 0%, rgba(10,10,42,0) 10%, rgba(10,10,42,0) 90%, rgba(10,10,42,1) 100%)",
            pointerEvents: "none",
          }}
        />
      </Box>
    </Box>
  );
};

export default function AboutSection() {
  const doubledLanguages = [...languages, ...languages];
  const doubledFrameworks = [...frameworks, ...frameworks];

  const langRef = useRef(null);
  const frameworkRef = useRef(null);
  const [langWidth, setLangWidth] = useState(0);
  const [frameworkWidth, setFrameworkWidth] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const leftCardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const rightContainerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  useEffect(() => {
    if (langRef.current) {
      setLangWidth(langRef.current.scrollWidth / 2);
    }
    if (frameworkRef.current) {
      setFrameworkWidth(frameworkRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <Box
      id="about"
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
      }}
    >
      <Container
        sx={{
          height: "100%",
          py: 8,
          px: { xs: 2, md: 6 },
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{ height: "100%", alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={3} sx={{ height: "100%" }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={leftCardVariants}
              >
                <Card
                  sx={{
                    p: 4,
                    background: "rgba(10, 10, 42, 0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(138, 43, 226, 0.3)",
                    boxShadow: "0 8px 32px rgba(138, 43, 226, 0.2)",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Stack spacing={1} alignItems="center">
                    <Typography
                      variant="h1"
                      sx={{
                        color: "white",
                        fontWeight: 700,
                        background: "linear-gradient(90deg, #8a2be2, #4b0082)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      2+
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      Years Of
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "white",
                        fontWeight: 600,
                        textAlign: "center",
                      }}
                    >
                      Experience
                    </Typography>
                  </Stack>
                </Card>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={leftCardVariants}
                transition={{ delay: 0.2 }}
              >
                <Card
                  sx={{
                    p: 3,
                    background: "rgba(10, 10, 42, 0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(138, 43, 226, 0.3)",
                    boxShadow: "0 8px 32px rgba(138, 43, 226, 0.2)",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <IconButton
                      sx={{
                        backgroundColor: "rgba(138, 43, 226, 0.2)",
                        color: "rgba(138, 43, 226, 0.8)",
                        "&:hover": {
                          backgroundColor: "rgba(138, 43, 226, 0.3)",
                        },
                      }}
                    >
                      <WorkOutlineIcon fontSize="large" />
                    </IconButton>
                    <Stack spacing={1}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "white",
                          fontWeight: 600,
                        }}
                      >
                        Fullstack Developer
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        10+ Projects Completed
                      </Typography>
                    </Stack>
                  </Stack>
                </Card>
              </motion.div>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={rightContainerVariants}
              transition={{ delay: 0.4 }}
              style={{ height: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "rgba(138, 43, 226, 0.8)",
                    letterSpacing: 2,
                    mb: 1,
                  }}
                >
                  About Me
                </Typography>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05 },
                    },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      mb: 3,
                      lineHeight: 1.2,
                    }}
                  >
                    {"Crafting Digital Excellence, Together"
                      .split(" ")
                      .map((word, i) => (
                        <motion.span
                          key={i}
                          style={{
                            display: "inline-block",
                            marginRight: "8px",
                          }}
                          variants={wordVariants}
                        >
                          {word}
                        </motion.span>
                      ))}
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <Typography
                    variant="body1"
                    fontStyle="italic"
                    textAlign="justify"
                    sx={{
                      color: "rgba(255,255,255,0.8)",
                      mb: 4,
                      maxWidth: "80%",
                    }}
                  >
                    "From initial concept to final deployment, I handle every
                    aspect of your digital transformation with precision and
                    innovation."
                  </Typography>
                </motion.div>

                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                    >
                      <Card
                        sx={{
                          p: 3,
                          height: "100%",
                          background: "rgba(10, 10, 42, 0.6)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(138, 43, 226, 0.3)",
                          boxShadow: "0 8px 32px rgba(138, 43, 226, 0.2)",
                        }}
                      >
                        <Box>
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                            mb={2}
                          >
                            <IconButton
                              sx={{
                                backgroundColor: "rgba(138, 43, 226, 0.2)",
                                color: "rgba(138, 43, 226, 0.8)",
                                "&:hover": {
                                  backgroundColor: "rgba(138, 43, 226, 0.3)",
                                },
                              }}
                            >
                              <BusinessIcon fontSize="large" />
                            </IconButton>
                            <Typography
                              variant="h6"
                              sx={{
                                color: "white",
                                fontWeight: 600,
                              }}
                            >
                              Business Solutions
                            </Typography>
                          </Stack>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "rgba(255,255,255,0.7)",
                            }}
                          >
                            Custom software solutions tailored to your business
                            needs, helping you streamline operations and
                            increase efficiency.
                          </Typography>
                        </Box>
                      </Card>
                    </motion.div>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 }}
                      style={{ height: "100%" }}
                    >
                      <Card
                        sx={{
                          p: 3,
                          height: "100%",
                          background: "rgba(10, 10, 42, 0.6)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(138, 43, 226, 0.3)",
                          boxShadow: "0 8px 32px rgba(138, 43, 226, 0.2)",
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          alignItems="center"
                          mb={2}
                        >
                          <IconButton
                            sx={{
                              backgroundColor: "rgba(138, 43, 226, 0.2)",
                              color: "rgba(138, 43, 226, 0.8)",
                              "&:hover": {
                                backgroundColor: "rgba(138, 43, 226, 0.3)",
                              },
                            }}
                          >
                            <CampaignIcon fontSize="large" />
                          </IconButton>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "white",
                              fontWeight: 600,
                            }}
                          >
                            Portfolios
                          </Typography>
                        </Stack>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "rgba(255,255,255,0.7)",
                          }}
                        >
                          Stunning portfolio websites that showcase your work
                          and help you stand out in your industry.
                        </Typography>
                      </Card>
                    </motion.div>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
          <Grid size={12}>
            <Carousel
              items={languages}
              doubledItems={doubledLanguages}
              width={langWidth}
              carouselRef={langRef}
            />
          </Grid>
          <Grid size={12}>
            <Carousel
              items={frameworks}
              doubledItems={doubledFrameworks}
              width={frameworkWidth}
              carouselRef={frameworkRef}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
