//mui imports
import { Box, CardActions, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

//local imports
import ItemCount from "./ItemCount";
import { useCart } from "../context/useCart";

function CartItemCount({ product }) {
  const { removeFromCart } = useCart();

  const handleClickRemove = () => {
    removeFromCart(product);
  };

  return (
    <CardActions>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: "100%",
        }}
      >
        <ItemCount product={product}></ItemCount>
        <Button variant="contained" onClick={handleClickRemove} sx={{ width: { xs: "100%", sm: "50%" }}}>
          <DeleteIcon></DeleteIcon>
        </Button>
      </Box>
    </CardActions>
  );
}

export default CartItemCount;
