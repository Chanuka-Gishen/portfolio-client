import React from "react";

import Drawer from "@mui/material/Drawer";
import SidebarItems from "./sideBarItems/sideBarItems";

const SideBar = ({ isOpen, toggleDrawer }) => {
  const drawerWidth = 280;

  // Navigation handlers
  const navigateToPage = (path) => {
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      variant="temporary"
      anchor="left"
      sx={{
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
    >
      <SidebarItems handleClickItem={navigateToPage} />
    </Drawer>
  );
};

export default SideBar;
