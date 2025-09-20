"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Your Name is required"),
  contactNo: Yup.string().required("Contact Number is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required")
    .test("is-valid-domain", "Email domain is not valid", (value) => {
      if (!value) return false;
      const domain = value.split("@")[1];
      // Add any domain validation logic here if needed
      return true;
    }),
  message: Yup.string().required("Message is required"),
});

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);

  const handleConfirm = async (values) => {
    setIsLoading(true);

    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Client-IP": data.ip,
        "X-Forwarded-For": data.ip,
      },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      setIsSuccess(true);
    }

    setIsOpenSnackBar(true);
    setIsLoading(false);
  };

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
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {!isLoading && isOpenSnackBar && (
            <Grid size={{ xs: 12, md: 6 }}>
              <Alert
                severity={isSuccess ? "success" : "error"}
                onClose={() => setIsOpenSnackBar(false)}
              >
                {isSuccess
                  ? "We received your message, and will get back to you soon...!"
                  : "Message sent failed, try again later...!"}
              </Alert>
            </Grid>
          )}
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
            <Formik
              initialValues={{
                name: "",
                contactNo: "",
                email: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                handleConfirm(values);
                resetForm();
              }}
            >
              {({
                errors,
                touched,
                resetForm,
                handleSubmit,
                getFieldProps,
              }) => (
                <form onSubmit={handleSubmit} onReset={resetForm}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        required
                        autoComplete="off"
                        {...getFieldProps("name")}
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.1 },
                        },
                      }}
                    >
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                        autoComplete="off"
                        {...getFieldProps("email")}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.2 },
                        },
                      }}
                    >
                      <TextField
                        label="Mobile Number"
                        name="contactNo"
                        type="tel"
                        variant="outlined"
                        fullWidth
                        required
                        autoComplete="off"
                        {...getFieldProps("contactNo")}
                        error={Boolean(touched.contactNo && errors.contactNo)}
                        helperText={touched.contactNo && errors.contactNo}
                      />
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.3 },
                        },
                      }}
                    >
                      <TextField
                        label="Your Message"
                        name="message"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        required
                        autoComplete="off"
                        {...getFieldProps("message")}
                        error={Boolean(touched.message && errors.message)}
                        helperText={touched.message && errors.message}
                      />
                    </motion.div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.4 },
                        },
                      }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        sx={{ color: "white" }}
                        fullWidth
                        disabled={isLoading}
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </Box>
                </form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
