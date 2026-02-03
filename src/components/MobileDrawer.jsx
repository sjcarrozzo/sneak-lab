//react imports
import { useState } from "react";
import { Link } from "react-router";

//@mui imports
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

//local imports
import { navLinks } from "@/data/navLinks";

function MobileDrawer({ openMenu, onCloseMenu }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <Drawer anchor="left" open={openMenu} onClose={onCloseMenu}>
      <Box sx={{ width: 250 }}>
        <List>
          {navLinks.map((link) => {
            // DROPDOWN
            if (link.type === "dropdown") {
              const isOpen = openDropdown === link.label;

              return (
                <Box key={link.label}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleToggle(link.label)}>
                      <ListItemText primary={link.label} />
                      {isOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>

                  <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {link.subLinks.map((sublink) => (
                        <ListItemButton
                          component={Link}
                          to={`/${link.label}/${sublink}`}
                          key={sublink}
                          sx={{ pl: 4 }}
                          onClick={onCloseMenu}
                        >
                          <ListItemText primary={sublink} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              );
            }

            // LINK NORMAL
            return (
              <ListItem
                component={Link}
                to={`/category/${link.label}`}
                key={link.label}
                disablePadding
              >
                <ListItemButton onClick={onCloseMenu}>
                  <ListItemText sx={{color: "black"}}primary={link.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}

export default MobileDrawer;
