//react imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";

//@mui imports
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

//local imports
import ItemDetail from "./ItemDetail";
import { fetchProductById } from "../firebase/db"; 
import NotFoundProduct from "./NotFoundProduct";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    fetchProductById(productId).then((data) => {
      
      if(data){
        setProduct(data);
      } 
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
  return (
    product ? ( <ItemDetail product={product} />) : (<NotFoundProduct />)
  );
}

export default ItemDetailContainer;
