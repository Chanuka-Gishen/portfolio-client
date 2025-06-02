import { useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Typography } from "@mui/material";

export const InitialSection = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 3000); // 3 seconds loading
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <Container>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
          zIndex: 9999,
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 700,
              letterSpacing: 4,
              textAlign: "center",
            }}
          >
            Welcome To My Portfolio
          </Typography>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            style={{
              height: 4,
              background: "linear-gradient(90deg, #FF008C 0%, #FFCD1E 100%)",
              marginTop: 16,
            }}
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};
