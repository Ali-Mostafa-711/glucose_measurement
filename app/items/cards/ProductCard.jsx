"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { IoCartOutline } from "react-icons/io5";

export default function ProductCard({
  img,
  title,
  description,
  price,
  id,
  category,
  onBuy,
}) {
  return (
    <Card sx={{ maxWidth: 350, boxShadow: 3 }}>
      <CardActionArea>
        <div style={{ overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt={title}
            sx={{
              width: "30rem",
              height: "15rem",
              objectFit: "cover",
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </div>

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="#0643DD"
            fontWeight="bold"
          >
            {title}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            {description}
          </Typography>

          {/* 💰 Price */}
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            {price} EGP
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          size="small"
          onClick={onBuy}
          sx={{
            color: "#0643DD",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          Add to Cart
          <IoCartOutline className="text-2xl" />
        </Button>
      </CardActions>
    </Card>
  );
}
