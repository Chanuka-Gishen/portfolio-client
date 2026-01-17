// theme.js
import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { overridesDark, overridesLight } from "./overrides";

// Light Theme Configuration
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8a2be2", 
      dark: "#A60303",
      light: "#F20505",
    },
    secondary: {
      main: "#FFC107",
      dark: "#FFB300",
      light: "#FFD54F",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#616161",
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
      main: "#FF4C4C",
      dark: "#D32F2F",
      light: "#FF6B6B",
    },
    secondary: {
      main: "#FFC107",
      dark: "#FFB300",
      light: "#FFD54F",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0BEC5",
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
