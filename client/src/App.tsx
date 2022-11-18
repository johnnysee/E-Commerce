import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import data from "./data/products.json";

export const App = () => {
  return (
    <>
      {data &&
        data.map((d) => (
          <Card
            key={d.id}
            sx={{ maxWidth: 345, display: "flex", flexDirection: "row" }}
          >
            <CardMedia component="img" height="140" alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {d.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
    </>
  );
};
