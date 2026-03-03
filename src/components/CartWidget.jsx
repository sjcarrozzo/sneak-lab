//mui imports
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router";

//react imports
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { getProductsQuantity } = useContext(CartContext);
  const quantity = getProductsQuantity();

  return (
    <Badge
      badgeContent={quantity}
      sx={{
        "& .MuiBadge-badge": {
          backgroundColor: "#e4793fff",
          color: "white",
        },
      }}
    >
      <IconButton component={Link} to={"/cart"} color="inherit" aria-label="cart">
        <ShoppingCartIcon  />
      </IconButton>
    </Badge>
  );
}

export default CartWidget;
