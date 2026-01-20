//@mui imports
import {
  Card,
  CardContent,
  Typography,
  Rating,
  CardMedia,
} from "@mui/material";

//local imports
import { assets } from '@/assets';

function ItemCard({ name, price }) {
  return (
    <Card>
      <CardContent>
        <CardMedia
          component="img"
          image={assets.itemNike}
          alt="sneaker description"/>
        <Typography variant="h6">{name}</Typography>
        <Rating name="half-rating-read" defaultValue={4} readOnly />
        <Typography color="text.secondary">${price}</Typography>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
