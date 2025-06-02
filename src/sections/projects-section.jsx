import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Container,
  Chip,
  Button,
  Collapse,
  IconButton,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform - Vitalian Fashion",
    shortDesc:
      "Developed a full-featured e-commerce platform comprising both a public-facing storefront and a dedicated admin dashboard.",
    fullDesc:
      "I developed a full-featured e-commerce website that includes both a public storefront and an admin dashboard. The public site allows users to browse products, view detailed information, and add items to a shopping cart, with Cash-on-Delivery (COD) currently supported and online payment integration coming soon. The admin panel enables product management (add, update), displays sales statistics, and integrates with Koombiyo for delivery handling.",
    siteLiveUrl: "https://vitalianfashion.com/",
    gitUrl: null,
    technologies: ["NextJs", "Node.js", "ExpressJs", "MongoDB", "MUI"],
    images: [
      "images/projects/image-1.jpg",
      "images/projects/image-2.png",
      "images/projects/image-3.jpg",
    ],
  },
  {
    id: 2,
    title: "Vehicle Service Center Management System",
    shortDesc:
      "A complete management system designed for vehicle service centers",
    fullDesc:
      "I developed a comprehensive system for a vehicle service center that includes work order management, invoice creation, client and employee management, salary calculations, financial tracking, and automated report generation to streamline daily operations and improve overall efficiency.",
    technologies: ["ViteJs", "NodeJs", "ExpressJs", "MongoDb", "MUI"],
    images: [
      "images/projects/image-1.jpg",
      "images/projects/image-2.png",
      "images/projects/image-3.jpg",
    ],
  },
  {
    id: 3,
    title: "Delivery Driver Mobile App",
    shortDesc:
      "A mobile application developed for a delivery company to help drivers.",
    fullDesc:
      "I developed a mobile application tailored for delivery drivers, enabling them to streamline their day-to-day operations. The app allows drivers to view and manage packages allocated to them, update the real-time status of each package during the delivery process, and collect digital customer signatures upon successful delivery. This system improves accountability, reduces manual paperwork, and ensures timely status updates for the company and customers alike. The app is built with a focus on usability, reliability, and efficient field operation support.",
    technologies: ["Flutter"],
    images: [
      "images/projects/image-1.jpg",
      "images/projects/image-2.png",
      "images/projects/image-3.jpg",
    ],
  },
  {
    id: 4,
    title: "Air Conditioning Service Management System - EREngineers",
    shortDesc:
      "A complete digital solution for an air conditioning service company, enabling staff to manage work orders, invoices, customer information, technician points, and unit service history, with image upload capabilities.",
    fullDesc:
      "I developed an end-to-end service management system for an air conditioning company to streamline its operational processes. The system allows staff to create, track, and update work orders; generate and download invoices; and manage detailed customer profiles. It also includes functionality to monitor each air conditioning unit’s work history, manage a technician points-based performance system, and store images of completed work for reference and verification. This solution enhances service tracking, transparency, and overall business efficiency.",
    technologies: [
      "ViteJs",
      "NodeJs",
      "ExpressJs",
      "MongoDb",
      "MUI",
      "Google APIs",
    ],
    images: [
      "images/projects/image-1.jpg",
      "images/projects/image-2.png",
      "images/projects/image-3.jpg",
    ],
  },
  {
    id: 5,
    title: "Visa Appointment Bot",
    shortDesc:
      "An automation tool built for a visa consultancy company in Dubai to detect and book available visa interview slots in real-time.",
    fullDesc:
      "I developed an automation system for a visa consultancy company based in Dubai that monitors visa appointment portals to detect available interview slots in real-time. Once a free slot is identified, the system automatically fills in applicant details and applies for the visa appointment without manual intervention. This tool significantly reduces the time and effort required by staff, increases the success rate of securing appointments, and enhances the overall efficiency of the consultancy's visa processing workflow.",
    technologies: ["Python", "Selenium", "Seleinumbase", "Pyqt", "Fast API"],
    images: [
      "images/projects/image-1.jpg",
      "images/projects/image-2.png",
      "images/projects/image-3.jpg",
    ],
  },
  {
    id: 6,
    title: "Bookkeeping Management System",
    shortDesc:
      "A tailored invoicing and bookkeeping system designed for a hardware store to manage sales, expenses, payments, and financial records efficiently.",
    fullDesc:
      "I developed a custom invoice and bookkeeping management system for a hardware store to streamline its financial operations. The system allows users to create and manage invoices, track income and expenses, handle partial payments, and monitor outstanding balances from creditors. It also supports setting and managing opening balances for accurate financial reporting. This solution improves day-to-day financial tracking, reduces manual accounting errors, and provides a clear overview of the store’s financial health.",
    technologies: ["React", "NodeJs", "ExpressJs", "MongoDb"],
    images: [
      "images/projects/image-1.jpg",
      "images/projects/image-2.png",
      "images/projects/image-3.jpg",
    ],
  },
  {
    id: 7,
    title: "Emotic - Final Year Project",
    shortDesc:
      "A mobile music streaming app that uses a hybrid recommendation system to suggest songs based on the user’s current mood valence score.",
    fullDesc:
      "I developed a mobile music application that delivers a personalized listening experience by combining traditional recommendation techniques with mood-based analysis. The app uses a hybrid recommendation approach, factoring in the user’s listening history alongside their current mood valence score to suggest songs that align with their emotional state. This intelligent system enhances user engagement by adapting playback to mood variations, offering a unique and immersive music experience tailored to individual preferences in real time.",
    technologies: ["Flutter", "Flask", "Machine Learning"],
    images: [
      "images/projects/image-1.jpg",
      "images/projects/image-2.png",
      "images/projects/image-3.jpg",
    ],
  },
];

export default function ProjectSection() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const nextImage = (projectId) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]:
        ((prev[projectId] || 0) + 1) %
        projects.find((p) => p.id === projectId).images.length,
    }));
  };

  const prevImage = (projectId) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]:
        ((prev[projectId] || 0) -
          1 +
          projects.find((p) => p.id === projectId).images.length) %
        projects.find((p) => p.id === projectId).images.length,
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
      id="projects"
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
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
      }}
    >
      <Container>
        <Typography
          variant="h3"
          component={motion.div}
          variants={cardVariants}
          sx={{
            color: "white",
            textAlign: "center",
            mb: 6,
          }}
        >
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <motion.div variants={cardVariants} custom={index}>
                <Card
                  component={motion.div}
                  whileHover={{
                    boxShadow: "0 10px 25px rgba(138, 43, 226, 0.3)",
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.3s",
                    "&:hover": {
                      boxShadow: 6,
                    },
                  }}
                >
                  {/* Image Slider */}
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    sx={{
                      height: 200, // Fixed height
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      bgcolor: "#f5f5f5", // Fallback background
                    }}
                  >
                    {/* Single visible image at a time */}
                    {project.images.map((image, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          opacity:
                            (currentImageIndex[project.id] || 0) === idx
                              ? 1
                              : 0,
                          transition: "opacity 0.5s ease",
                          bgcolor: "#f5f5f5",
                        }}
                      >
                        <Box
                          component="img"
                          src={image}
                          sx={{
                            height: "100%",
                            width: "auto",
                            maxWidth: "100%",
                            objectFit: "contain",
                          }}
                          alt={`Project ${project.title} screenshot ${idx + 1}`}
                        />
                      </Box>
                    ))}

                    {/* Navigation Arrows */}
                    {project.images.length > 1 && (
                      <>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage(project.id);
                          }}
                          sx={{
                            position: "absolute",
                            left: 10,
                            top: "50%",
                            transform: "translateY(-50%)",
                            bgcolor: "rgba(0,0,0,0.5)",
                            color: "white",
                            "&:hover": {
                              bgcolor: "rgba(0,0,0,0.7)",
                            },
                          }}
                        >
                          <ChevronLeftIcon />
                        </IconButton>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(project.id);
                          }}
                          sx={{
                            position: "absolute",
                            right: 10,
                            top: "50%",
                            transform: "translateY(-50%)",
                            bgcolor: "rgba(0,0,0,0.5)",
                            color: "white",
                            "&:hover": {
                              bgcolor: "rgba(0,0,0,0.7)",
                            },
                          }}
                        >
                          <ChevronRightIcon />
                        </IconButton>
                      </>
                    )}

                    {/* Dots Indicator */}
                    {project.images.length > 1 && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 10,
                          left: "50%",
                          transform: "translateX(-50%)",
                          display: "flex",
                          gap: 1,
                        }}
                      >
                        {project.images.map((_, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              bgcolor:
                                (currentImageIndex[project.id] || 0) === idx
                                  ? "primary.main"
                                  : "rgba(255,255,255,0.5)",
                              transition: "background-color 0.3s",
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  </Box>

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      component={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      sx={{ mb: 1, fontWeight: 600 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      component={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      sx={{ mb: 2 }}
                      textAlign="justify"
                    >
                      {project.shortDesc}
                    </Typography>

                    {/* Technology Chips */}
                    <Box
                      component={motion.div}
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 1 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.4,
                          },
                        },
                      }}
                      sx={{ mb: 2 }}
                    >
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          variants={{
                            hidden: { y: 10, opacity: 0 },
                            visible: {
                              y: 0,
                              opacity: 1,
                              transition: { type: "spring" },
                            },
                          }}
                        >
                          <Chip
                            key={index}
                            label={tech}
                            size="small"
                            sx={{
                              mr: 1,
                              mb: 1,
                              bgcolor: "rgba(138, 43, 226)",
                              color: "common.white",
                            }}
                          />
                        </motion.span>
                      ))}
                    </Box>

                    <Collapse
                      in={expandedProject === project.id}
                      component={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: expandedProject === project.id ? 1 : 0,
                        height: expandedProject === project.id ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ mb: 2 }}
                        textAlign="justify"
                      >
                        {project.fullDesc}
                      </Typography>
                      {/* <Box sx={{ display: "flex", gap: 2 }}>
                        <Button variant="outlined" size="small">
                          View Code
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "rgba(138, 43, 226)",
                            color: "white",
                          }}
                          size="small"
                        >
                          Live Demo
                        </Button>
                      </Box> */}
                    </Collapse>
                  </CardContent>

                  <Box
                    sx={{ display: "flex", justifyContent: "center", pb: 2 }}
                  >
                    <Button
                      onClick={() => toggleExpand(project.id)}
                      endIcon={
                        expandedProject === project.id ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      }
                      sx={{
                        color: "rgba(138, 43, 226)",
                        fontWeight: 500,
                      }}
                    >
                      {expandedProject === project.id
                        ? "Show Less"
                        : "Show More"}
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
