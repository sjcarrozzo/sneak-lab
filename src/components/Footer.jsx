//@mui imports
import { Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Container>
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 2, pt: 10, textAlign: "center" }}
      >
        SC Design 2026
      </Typography>
    </Container>
  );
}

export default Footer;
