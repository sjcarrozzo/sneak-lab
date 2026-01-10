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

export default function Navbar() {
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
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <AppLogo />

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="navbar-button">Hot Deals!🔥</Button>
          <Button variant="navbar-button">Genre</Button>
          <Button variant="navbar-button">Casual</Button>
          <Button variant="navbar-button">Running</Button>
          <Button variant="navbar-button">Training</Button>
          <Button variant="navbar-button">Brands</Button>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <CartWidget />
      </Toolbar>
    </AppBar>
  );
}
