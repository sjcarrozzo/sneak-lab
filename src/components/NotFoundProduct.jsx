import { Container, Typography} from "@mui/material";

function NotFoundProduct() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, minHeight: "90vh" }}>
      <Typography variant="h4">Oops, product not found😵‍💫</Typography>
      
    </Container>
  );
}

export default NotFoundProduct;
