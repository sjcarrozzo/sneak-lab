import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "navbar-button" },
          style: {
            backgroundColor: "#fff",
            color: "inherit",
            "&:hover": {
              backgroundColor: "#e4793fff",
            },
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid #ccc",
        },
      },
    },
  },
});

export default theme;
