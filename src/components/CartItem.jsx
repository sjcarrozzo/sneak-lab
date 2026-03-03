import { Typography, Card, CardContent, CardMedia } from "@mui/material";

//local imports
import CartItemCount from "./CartItemCount";

function CartItem({ product }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        mb: 2,
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        image={product.url}
        alt={product.name}
        sx={{
          width: { xs: "70%", sm: "50%" },
          objectFit: "contain",
        }}
      />

      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">{product.name}</Typography>

        <Typography variant="body2">Cantidad: {product.count}</Typography>

        <Typography variant="body2">Precio unidad: ${product.price}</Typography>

        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          Sub total: ${product.price * product.count}
        </Typography>
        <CartItemCount product={product}></CartItemCount>
      </CardContent>
    </Card>
  );
}

export default CartItem;
