//react imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";

//@mui imports
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

//local imports
import ItemDetail from "./ItemDetail";
import { fetchProductById } from "@/data/fakeApi";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    fetchProductById(productId).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [productId]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
        }}
      >
        <CircularProgress/>
      </Box>
    );
  }

  if (!product) {
    return <Typography sx={{minHeight: "100vh", py:10, textAlign:"center"}} variant="h5">Producto no encontrado</Typography>;
  }

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
