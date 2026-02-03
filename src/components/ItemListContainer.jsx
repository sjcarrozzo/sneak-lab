//react imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";

//@mui imports
import { Box, Container, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

//local imports
import ItemList from "./ItemList";
import { fetchAllProducts, fetchWithParams } from "@/data/fakeApi";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const { filterType, filter } = useParams();

  useEffect(() => {
    const fetchedProducts = filterType
      ? fetchWithParams(filterType, filter)
      : fetchAllProducts();

    fetchedProducts.then(setProductsList);
  }, [filterType, filter]);

  return (
    <>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={5}>
          {productsList.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyItems: "center",
                width: "100%",
                minHeight: "100vh",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <ItemList productsList={productsList} />
          )}
        </Grid>
      </Container>
    </>
  );
}

export default ItemListContainer;
