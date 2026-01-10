import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

function CartWidget() {
  return (
    <Badge
      badgeContent={3}
      sx={{
        "& .MuiBadge-badge": {
          backgroundColor: "#e4793fff",
          color: "white",
        },
      }}
    >
      <IconButton color="inherit" aria-label="cart">
        <ShoppingCartIcon />
      </IconButton>
    </Badge>
  );
}

export default CartWidget;
