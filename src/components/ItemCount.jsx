import { Box, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { useState } from "react";

function ItemCount() {
  const [itemCount, setItemCount] = useState(1);

  const handleClickPlus = () => {
    setItemCount(itemCount + 1);
  };

  const handleClickMinus = () => {
    itemCount > 1 ? setItemCount(itemCount - 1) : null;
  };

  return (
    <CardActions sx={{ mb: 5 }}>
      <Button
        size="small"
        sx={{
          padding: "4px 8px",
          minWidth: "50px",
        }}
        variant="contained"
        onClick={handleClickMinus}
      >
        -
      </Button>
      <Typography variant="h5">{itemCount}</Typography>
      <Button
        size="small"
        sx={{
          padding: "4px 8px",
          minWidth: "50px",
        }}
        variant="contained"
        onClick={handleClickPlus}
      >
        +
      </Button>
    </CardActions>
  );
}

export default ItemCount;
