import { motion } from "framer-motion";

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function ContactSection() {
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
  return (
    <Box
      id="contact"
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      sx={{ width: "100%" }}
    >
      <Container sx={{ px: { xs: 2, md: 6 }, mb: "20px" }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid size={12}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Typography variant="h3" textAlign="center">
                Contact Me
              </Typography>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <form onSubmit={null}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <TextField
                    label="Name"
                    name="custName"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.1 } },
                  }}
                >
                  <TextField
                    label="Email"
                    name="custEmail"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.2 } },
                  }}
                >
                  <TextField
                    label="Mobile Number"
                    name="custMobile"
                    type="tel"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { delay: 0.3 } },
                  }}
                >
                  <TextField
                    label="Your Message"
                    name="custMessage"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
                  }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    sx={{ color: "white" }}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </motion.div>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
