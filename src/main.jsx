import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//@mui imports
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

//local imports
import App from "./App.jsx";

//mui imports
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
