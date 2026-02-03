//react imports
import { useState } from "react";
import { Link } from "react-router";

//@mui imports
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

//local imports
import CartWidget from "./CartWidget";
import AppLogo from "./AppLogo";
import MobileDrawer from "./MobileDrawer";
import { navLinks } from "@/data/navLinks";

const StyledListHeader = styled(ListSubheader)({
  backgroundImage: "var(--Paper-overlay)",
});

export default function Navbar() {
  //manage toggle mobile menu state
  const [mobileOpen, setOpenMobile] = useState(false);
  const handleOpenMobile = () => setOpenMobile(true);
  const handleCloseMobile = () => setOpenMobile(false);

  //manage menu list open
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClickMenuList = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenuList = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          bgcolor: "white",
          color: "grey.800",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenMobile}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <AppLogo/>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {navLinks.map((link) => {
            //dropdown navbar button
            if (link.type === "dropdown") {
              return (
                <Box key={link.label}>
                  <Button
                    id="basic-button"
                    aria-controls={openMenu ? "grouped-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClickMenuList}
                    variant="navbar-button"
                  >
                    {link.label}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleCloseMenuList}
                  >
                    {link.subLinks.map((sublink) => {
                      return (
                        <MenuItem
                          component={Link}
                          to={`/${link.label}/${sublink}`}
                          onClick={handleCloseMenuList}
                          key={sublink}
                        >
                          {sublink}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Box>
              );
            }

            //simple navbar button
            return (
              <Button
                component={Link}
                to={`/category/${link.label}`}
                key={link.label}
                variant="navbar-button"
              >
                {link.label}
              </Button>
            );
          })}
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <CartWidget />
      </Toolbar>
      <MobileDrawer openMenu={mobileOpen} onCloseMenu={handleCloseMobile} />
    </AppBar>
  );
}
