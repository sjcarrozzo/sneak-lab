//mui imports
import { Container, Typography, Divider, Button, Box } from "@mui/material";

//local imports
import CartItem from "./CartItem";
import { Link } from "react-router";

function CartList({ cart, total, resetCart }) {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, minHeight: "90vh" }}>
      <Typography variant="h4">Cart</Typography>
      <Divider sx={{ mb: 3 }} />

      <>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            mb: 5,
          }}
        >
          <Button
            component={Link}
            to="/cart/checkout"
            align="left"
            size="small"
            sx={{
              padding: "20px 12px",
              minWidth: "50px",
            }}
            variant="contained"
          >
            Checkout
          </Button>
          <Button
            align="left"
            size="small"
            sx={{
              padding: "20px 12px",
              minWidth: "50px",
            }}
            variant="contained"
            onClick={resetCart}
            color="error"
          >
            Delete Cart
          </Button>

          <Typography variant="h5" align="right">
            Total del carrito: ${total}
          </Typography>
        </Box>
      </>
    </Container>
  );
}

export default CartList;
