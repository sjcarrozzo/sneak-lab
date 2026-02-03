//@mui imports
import {
  Card,
  CardContent,
  Typography,
  Rating,
  CardMedia,
  Button,
  Box,
} from "@mui/material";

import {Link} from "react-router";

// function ItemCard({ id, name, price, image }) {
function ItemCard({product}) {

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          height: "100%",
        }}
      >
        <CardMedia
          sx={{ mb: 4 }}
          component="img"
          image={product.img}
          alt="sneaker description"
        />
        <Box>
          <Typography variant="h6">{product.name}</Typography>
          <Rating name="half-rating-read" defaultValue={4} readOnly />
          <Typography color="text.secondary" variant="h6">
            ${product.price}
          </Typography>
          <Button component={Link} to={`/product/${product.id}`} variant="outlined">Ver Mas</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
