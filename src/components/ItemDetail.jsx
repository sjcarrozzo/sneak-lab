//@mui imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import CardActions from "@mui/material/CardActions";
import { Box, Rating, Container } from "@mui/material";

//local imports
import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  
  return (
    <Container maxWidth="lg" sx={{ mt: 4, minHeight: "100vh" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          p: 2,
        }}
      >
        <CardMedia
          component="img"
          image={product.url}
          alt={product.name}
          sx={{
            width: { xs: "100%", md: "50%" },
            maxHeight: 400,
            objectFit: "contain",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: { xs: "100%", md: "50%" },
            p: { xs: 2, md: 4 },
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {product.description}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              ¿Te ha gustado este producto? ¡Califícalo!
            </Typography>

            <Rating defaultValue={4} sx={{ mb: 2 }} />

            <Typography variant="h4" sx={{ mt: 2 }} >
              ${product.price}
            </Typography>
          </CardContent>

          <CardActions>
            <ItemCount product={product} />
          </CardActions>
        </Box>
      </Card>
    </Container>
  );
}

export default ItemDetail;