import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import Rating from "@mui/material/Rating";

const TrendingBookCard = ({ book }) => {
  return (
    <Card sx={{ margin: "1rem" }}>
      <CardMedia
        component="img"
        height="200"
        image="https://via.placeholder.com/200x300"
        alt="Book cover"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.publisher}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Rating name="read-only" value={4.3} precision={0.01} readOnly />
          <Typography variant="body2" color="text.secondary">
            4.3 (120 reviews)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrendingBookCard;
