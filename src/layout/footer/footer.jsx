import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
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
        p: '10px 0 10px 0'
      }}
    >
      <Typography textAlign="center" color="white">
        Copyright © {new Date().getFullYear()}, @ChanukaGishen. All rights
        reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
