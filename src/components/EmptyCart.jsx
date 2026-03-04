import { Container, Typography, Divider } from "@mui/material";

function EmptyCart() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, minHeight: "90vh" }}>
      <Typography variant="h4">Cart</Typography>
      <Divider sx={{ mb: 3 }} />

      <Typography variant="body1">Your cart is empty.</Typography>
    </Container>
  );
}

export default EmptyCart;
