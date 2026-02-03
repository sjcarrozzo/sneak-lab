//@mui imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Box, Rating } from "@mui/material";

//local imports
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <CardMedia
        component="img"
        image={product.img}
        alt={product.name}
        sx={{
           width: "40%",
          objectFit: "contain",
          ml: 10,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "30%",
          ml: 3,
        }}
      >
        <CardContent>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            ¿Te ha gustado este producto? ¡Calificalo!
          </Typography>
          <Rating name="half-rating-read" defaultValue={4} sx={{ mb: 2 }} />
          <Typography variant="h4">${product.price}</Typography>
        </CardContent>
        <ItemCount/>
        <CardActions>
          <Button variant="contained">Add to Cart</Button>
        </CardActions>
      </Box>
    </Card>



  )
}

export default ItemDetail;
