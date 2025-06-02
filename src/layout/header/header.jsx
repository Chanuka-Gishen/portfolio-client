import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  Typography,
  Stack,
  Container,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import Menuitems from "../menu-items";

const Header = ({ toggleMobileSidebar, isScrolled }) => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleNavigate = (path) => {
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <AppBar
      position="static"
      elevation={isScrolled ? 0 : 0}
      sx={{
        backgroundColor: "transparent",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: isScrolled ? "black" : "white",
              transition: "color 0.3s ease-in-out",
              letterSpacing: 5,
            }}
          >
            CHANUKA GISHEN
          </Typography>

          <IconButton
            edge="end"
            color={isScrolled ? "default" : "inherit"}
            aria-label="menu"
            onClick={toggleMobileSidebar}
            sx={{
              display: {
                sm: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          {!matchDownSM && (
            <Stack direction="row" spacing={2}>
              {Menuitems.map((item, index) => (
                <Typography
                  key={index}
                  variant="button"
                  sx={{
                    cursor: "pointer",
                    color: isScrolled ? "black" : "white",
                    transition: "color 0.3s ease-in-out",
                    "&:hover": {
                      color: "grey.400",
                    },
                    userSelect: "none",
                    letterSpacing: 2,
                  }}
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.title}
                </Typography>
              ))}
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
