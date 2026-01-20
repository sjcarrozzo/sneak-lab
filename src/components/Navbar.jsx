//react imports
import { useState } from "react";

//@mui imports
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

//local imports
import CartWidget from "./CartWidget";
import AppLogo from "./AppLogo";
import MobileDrawer from "./MobileDrawer";
import { navLinks } from "@/data/navLinks";

export default function Navbar() {
  //manage toggle menu state
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          onClick={handleOpen}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <AppLogo />

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {navLinks.map((link) => {
            return <Button variant="navbar-button">{link}</Button>;
          })}
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <CartWidget />
      </Toolbar>
      <MobileDrawer open={open} onClose={handleClose} />
    </AppBar>
  );
}
