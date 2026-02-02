"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ img, title, description, isDoctor }) {
  const { addToCart } = useCart();
  return (
    <Card sx={{ maxWidth: 350, boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="#0643DD"
            fontWeight="bold"
          >
            {title || "Joint Support"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description ||
              "Supports joint health and mobility with essential nutrients."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {!isDoctor && (
        <Button
            size="small"
            color="primary"
            onClick={() => addToCart({ img, title, description, price: 50, id: title })} // Mocking price and id for now
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
        )}
      </CardActions>
    </Card>
  );
}
