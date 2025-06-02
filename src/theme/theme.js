// theme.js
import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { overridesDark, overridesLight } from "./overrides";

// Light Theme Configuration
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D90416", // Main red color
      dark: "#A60303", // Darker red for hover
      light: "#F20505", // Lighter variant
    },
    secondary: {
      main: "#FFC107", // Amber for secondary accents
      dark: "#FFB300", // Darker amber for hover
      light: "#FFD54F", // Lighter amber
    },
    background: {
      default: "#ffffff", // Light background
      paper: "#ffffff", // Elevated surfaces
    },
    text: {
      primary: "#000000", // Dark text for light background
      secondary: "#616161", // Subtle dark gray for secondary text
    },
    success: {
      main: "#13DEB9",
      light: "#E6FFFA",
      dark: "#02b3a9",
      contrastText: "#ffffff",
    },
    info: {
      main: "#539BFF",
      light: "#EBF3FE",
      dark: "#1682d4",
      contrastText: "#ffffff",
    },
    error: {
      main: "#FA896B",
      light: "#FDEDE8",
      dark: "#f3704d",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#FFAE1F",
      light: "#FEF5E5",
      dark: "#ae8e59",
      contrastText: "#ffffff",
    },
  },
  typography: typography,
});

lightTheme.components = overridesLight(lightTheme);

// Dark Theme Configuration
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF4C4C", // Main red color
      dark: "#D32F2F", // Darker red for hover
      light: "#FF6B6B", // Lighter variant
    },
    secondary: {
      main: "#FFC107", // Amber for secondary accents
      dark: "#FFB300", // Darker amber for hover
      light: "#FFD54F", // Lighter amber
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e", // Elevated surfaces
    },
    text: {
      primary: "#FFFFFF", // White text for contrast
      secondary: "#B0BEC5", // Subtle gray for secondary text
    },
    divider: "#37474F",
    success: {
      main: "#13DEB9",
      light: "#E6FFFA",
      dark: "#02b3a9",
      contrastText: "#ffffff",
    },
    info: {
      main: "#539BFF",
      light: "#EBF3FE",
      dark: "#1682d4",
      contrastText: "#ffffff",
    },
    error: {
      main: "#FA896B",
      light: "#FDEDE8",
      dark: "#f3704d",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#FFAE1F",
      light: "#FEF5E5",
      dark: "#ae8e59",
      contrastText: "#ffffff",
    },
  },
  typography: typography,
});

darkTheme.components = overridesDark(darkTheme);

export { lightTheme, darkTheme };
