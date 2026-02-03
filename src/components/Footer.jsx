//@mui imports
import { Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box sx={{width:"100%", display: "flex", justifyContent:"center"}}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 300, py: 3, textAlign: "center", backgroundColor: "#F3F3F3",width:"100%" }}
      >
        © 2026 Sebastian Carrozzo. <br></br>
        Frontend & Backend Javascript Developer
      </Typography>
    </Box>
  );
}

export default Footer;
