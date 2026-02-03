// react imports
import { useParams } from "react-router";

// @mui imports
import { Typography, Grid } from "@mui/material";

// local imports
import ItemCard from "./ItemCard";

function ItemList({ productsList }) {
  const { filter } = useParams();

  return (
    <>
      <Typography
        variant="h3"
        sx={{ fontWeight: 500, mb: 2, pt: 5}}
      >
        {filter}
      </Typography>

      <Grid container spacing={2}>
        {productsList.map((product) => (
          <Grid
            size={{ xs: 6, sm: 4, md: 3 }}
            sx={{ display: "flex" }}
            key={product.id}
          >
            <ItemCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ItemList;
