//mui imports
// import { Container, Typography, Divider, Button, Box } from "@mui/material";

//react imports
import { useCart } from "../context/useCart";

//local imports
 import CartList from "./CartList";
// import { Link } from "react-router";

function CartContainer() {
  const { cart } = useCart();

  const totalCart = cart.reduce(
    (acc, product) => acc + product.price * product.count,
    0,
  );

  return (
    <CartList cart={cart} total={totalCart} />
  );
}

export default CartContainer;
