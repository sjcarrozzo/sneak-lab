//react imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";

//@mui imports
import { Box, Container, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

//local imports
import ItemList from "./ItemList";
import { fetchAllProducts, fetchWithParams } from "../firebase/db";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const { filterType, filter } = useParams();

  useEffect(() => {

    const fetchedProducts = filterType
       ? fetchWithParams(filterType, filter)
       : fetchAllProducts();

    fetchedProducts.then(products => setProductsList(products));
  
  }, [filterType, filter]);

  return (
    <>
      <Container sx={{ py: 10,    minHeight: "100vh", }}>
        <Grid container spacing={5}>
          {productsList.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyItems: "center",
                width: "100%",
             
              }}
            >
              <CircularProgress/>
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
