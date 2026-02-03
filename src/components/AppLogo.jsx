import { Button } from "@mui/material";
import { Link } from "react-router";

function AppLogo() {
  return (
    <Button component={Link} to="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 50" width="150">
        <text
          x="0"
          y="35"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="40"
        >
          <tspan fill="#595653ff" fontWeight="300">
            Sneak
          </tspan>
          <tspan fill="#e4793fff" fontWeight="700">
            Lab
          </tspan>
        </text>
      </svg>
    </Button>
  );
}

export default AppLogo;
