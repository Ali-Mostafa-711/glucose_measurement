"use client";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "context/CartContext";
import Box from "@mui/material/Box";

export default function DoctorsCard({ img, title, description, isDoctor }) {
  const { addToCart } = useCart();

  return (
    <Card
      sx={{
        maxWidth: 350,
        position: "relative",
        overflow: "hidden",
        boxShadow: 3,
        "&:hover .overlay": {
          transform: "translateY(0)",
          opacity: 1,
        },
        "&:hover img": {
          transform: "scale(1.1)",
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        height="-webkit-fill-available"
        image={img}
        alt={title}
        sx={{
          transition: "transform 0.4s ease",
          height: "-webkit-fill-available",
        }}
      />

      {/* Overlay Layer */}
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to top, rgba(6,67,221,0.85), rgba(6,67,221,0.15))",

          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 2,
          transform: "translateY(100%)",
          opacity: 0,
          transition: "all 0.4s ease",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {title || "Joint Support"}
        </Typography>

        <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
          {description ||
            "Supports joint health and mobility with essential nutrients."}
        </Typography>
      </Box>
    </Card>
  );
}
