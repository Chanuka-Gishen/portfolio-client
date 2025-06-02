function overridesLight(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#B0BEC5",
            },
            "&:hover fieldset": {
              borderColor: "#FF4C4C",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF4C4C",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
        },
        containedInherit: {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.grey[800],
          "&:hover": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.grey[800],
          },
        },
        sizeLarge: {
          minHeight: 48,
        },
      },
    },
  };
}

function overridesDark(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow:
            "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "7px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#37474F",
            },
            "&:hover fieldset": {
              borderColor: "#FF4C4C",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF4C4C",
            },
          },
          input: {
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: theme.palette.text.primary,
        },
        containedInherit: {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.grey[800],
          "&:hover": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.grey[800],
          },
        },
        sizeLarge: {
          minHeight: 48,
        },
      },
    },
  };
}

export { overridesLight, overridesDark };
