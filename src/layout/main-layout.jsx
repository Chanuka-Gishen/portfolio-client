"use client";

import { useEffect, useState } from "react";

import Header from "./header/header";
import { Box, styled } from "@mui/material";
import SideBar from "./sidebar/sidebar";
import { AnimatePresence } from "framer-motion";
import Footer from "./footer/footer";
import { InitialSection } from "@/app/home/initial-section";

const MainWrapper = styled(Box)(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled(Box)(() => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
}));

export default function MainLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const toggleDrawer = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust this threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MainWrapper>
      <AnimatePresence>
        {isLoading && <InitialSection onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {showContent && (
        <>
          <SideBar isOpen={isSidebarOpen} toggleDrawer={toggleDrawer} />
          <PageWrapper>
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1100,
                transition: "all 0.3s ease-in-out",
                backgroundColor: isScrolled ? "white" : "transparent",
              }}
            >
              <Header
                toggleMobileSidebar={toggleDrawer}
                isScrolled={isScrolled}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              {children}
            </Box>
            <Footer />
          </PageWrapper>
        </>
      )}
    </MainWrapper>
  );
}
