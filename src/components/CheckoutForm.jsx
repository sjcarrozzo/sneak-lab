import {Container,Paper,Typography,TextField,Button,Stack} from "@mui/material";

function CheckoutForm({ handleSubmit }) {
  return (
    <>
      <Container sx={{ height: "80vh" }} maxWidth="sm">
        <Paper elevation={1} sx={{ p: 4, mt: 6 }}>
          <Typography
            sx={{ mb: 3 }}
            variant="h5"
            textAlign="center"
            gutterBottom
          >
            Complete your order details! 🚀
          </Typography>

          <Stack component="form" spacing={2} onSubmit={handleSubmit}>
            <TextField name="name" label="Name" placeholder="e.g., Juan" fullWidth required />
            <TextField name="surname" label="Surname" placeholder="e.g., Perez" fullWidth required />
            <TextField name="phone" label="Phone number" type="tel" fullWidth required />
            <TextField name="email" label="Email" type="email" fullWidth required />
            <TextField name="address" label="Address" multiline rows={1} fullWidth required/>

            <Button type="submit" variant="contained" size="large" fullWidth>
              Place your order
            </Button>
          </Stack>
        </Paper>
      </Container>
    </>
  );
}

export default CheckoutForm
