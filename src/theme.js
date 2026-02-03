import { createTheme } from "@mui/material/styles";
import { keyframes } from "@mui/system";

export const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

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
