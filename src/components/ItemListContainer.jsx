//@mui imports
import { Container, Grid, Typography } from "@mui/material";

//local imports
import ItemCard from "./ItemCard";

//extract to a js file
export const products = [
  { id: 1, name: "Zapatillas Urban Classic", price: 89.99 },
  { id: 2, name: "Remera Algodón Premium", price: 24.5 },
  { id: 3, name: "Campera Denim Azul", price: 119.0 },
  { id: 4, name: "Buzo Hoodie Oversize", price: 64.99 },
  { id: 5, name: "Pantalón Jogger Negro", price: 54.0 },
  { id: 6, name: "Gorra Snapback Logo", price: 19.99 },
  { id: 7, name: "Mochila Urbana Waterproof", price: 74.5 },
  { id: 8, name: "Medias Deportivas Pack x3", price: 12.99 },
  { id: 9, name: "Reloj Digital Sport", price: 49.9 },
  { id: 10, name: "Riñonera Street Wear", price: 29.99 },
];

function ItemListContainer() {
  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, pt: 5, textAlign: "center"}}>
        Hot Deals!🔥
      </Typography>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={5}>
          {products.map((product) => (
            <Grid
              size={{ xs: 6, sm: 4, md: 3 }}
              sx={{ display: "flex" }}
              key={product.id}
            >
              <ItemCard name={product.name} price={product.price} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default ItemListContainer;
