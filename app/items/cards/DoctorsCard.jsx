"use client";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function DoctorsCard({
  img,
  title,
  description,
  name,
  address,
  mobile,
}) {
  return (
    <Card
      sx={{
        width: 400,
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 4,
        "&:hover .overlay": {
          transform: "translateY(0)",
          opacity: 1,
        },
        "&:hover img": {
          transform: "scale(1.08)",
        },
      }}
    >
      {/* Image Wrapper */}
      <Box
        sx={{
          position: "relative",
          height: 260,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={img}
          alt={title}
          sx={{
            height: "100%",
            transition: "transform 0.4s ease",
            objectFit: "fill",
          }}
        />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(6,67,221,0.9), rgba(6,67,221,0.2))",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            p: 2,
            transform: "translateY(100%)",
            opacity: 0,
            transition: "all 0.4s ease",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {title || "Dr. Ahmed Hassan"}
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {description ||
              "Specialist in internal medicine and diabetes care."}
          </Typography>
        </Box>
      </Box>

      {/* Static Bottom Info */}
      <CardContent sx={{ textAlign: "center", py: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Dr. {name}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          📍 {address}
        </Typography>

        <Divider sx={{ my: 1.5 }} />

        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "#0643DD",
          }}
        >
          📞 {mobile}
        </Typography>
      </CardContent>
    </Card>
  );
}
