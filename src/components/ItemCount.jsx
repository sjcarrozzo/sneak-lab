//hot toast import
import toast from 'react-hot-toast';

//mui imports
import { Box, Typography, CardActions, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

//react imports
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemCount({ product }) {
  const [itemCount, setItemCount] = useState(product.count ? product.count : 1);
  const { addToCart } = useContext(CartContext);

  const handleClickPlus = () => {
    setItemCount(itemCount + 1);
  };

  const handleClickMinus = () => {
    itemCount > 1 ? setItemCount(itemCount - 1) : toast.error('Quantity cant be less than 1',{duration: 1000, style: {background: "#f7b1b1fb"}});
  };

  const handleClickAddToCart = () => {
    addToCart({ ...product, count: itemCount });
    toast.success('Producto added to cart',{duration: 1000, style: {background: "#e7e2e2fb"}})
  };

  return (
    <CardActions >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mb: 2,
          }}
        >
          <Button
            size="small"
            sx={{
              padding: "4px 8px",
              minWidth: "50px",
            }}
            variant="contained"
            onClick={handleClickMinus}
          >
            <RemoveIcon></RemoveIcon>
          </Button>
          <Typography
            variant="h5"
            sx={{ minWidth: "50px", textAlign: "center" }}
          >
            {itemCount}
          </Typography>
          <Button
            size="small"
            sx={{
              padding: "4px 8px",
              minWidth: "50px",
            }}
            variant="contained"
            onClick={handleClickPlus}
          >
            <AddIcon></AddIcon>
          </Button>
        </Box>
        <Button variant="contained" onClick={handleClickAddToCart}>
          Add to Cart
        </Button>
      </Box>
    </CardActions>
  );
}

export default ItemCount;
