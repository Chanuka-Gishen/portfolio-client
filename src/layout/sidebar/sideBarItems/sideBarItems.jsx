import React from "react";

import {
  Box,
  keyframes,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import Menuitems from "../../menu-items";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SidebarItems = ({ handleClickItem }) => {
  const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%); 
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

  const AnimatedBox = styled(Box)({
    animation: `${fadeIn} 1.1s ease-out`,
  });
  return (
    <AnimatedBox sx={{ px: 3, mt: "80px" }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item, index) => (
          <ListItemButton
            key={index}
            onClick={() => handleClickItem(item.path)}
          >
            <ListItemText primary={item.title} />
            <ArrowForwardIosIcon />
          </ListItemButton>
        ))}
      </List>
    </AnimatedBox>
  );
};
export default SidebarItems;
