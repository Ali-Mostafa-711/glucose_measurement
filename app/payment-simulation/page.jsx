"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button, TextField, Typography, Box, Card, CircularProgress, Alert } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaymentSimulationPage = () => {
  const { cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
      setTimeout(() => {
        router.push("/pages/home");
      }, 3000);
    }, 2000);
  };

  if (success) {
    return (
      <Box className="flex flex-col items-center justify-center min-h-screen pt-20">
        <Alert severity="success" sx={{ fontSize: "1.2rem", padding: "20px" }}>
          Payment Successful! Thank you for your purchase.
        </Alert>
        <Typography variant="h6" className="mt-4 text-gray-600">
          Redirecting to home...
        </Typography>
      </Box>
    );
  }

  return (
    <Box className="min-h-screen pt-28 pb-10 px-4 bg-gray-50 flex justify-center">
      <Card className="max-w-md w-full p-8 shadow-xl">
        <Typography variant="h4" className="text-[#0643DD] font-bold mb-6 text-center">
          Secure Payment
        </Typography>
        
        <div className="mb-6 flex justify-center">
             <Image src="/payment-methods.png" width={200} height={50} alt="Payment Methods" className="object-contain" />
             {/* Note: Ensure this image exists or use text/icons if not available. For now relying on alt text or placeholder if image missing */}
        </div>
        
        <Box className="mb-6 p-4 bg-blue-50 rounded-lg">
           <div className="flex justify-between">
              <Typography className="font-semibold">Total Amount:</Typography>
              <Typography className="font-bold text-[#0643DD] text-xl">
                ${(cartTotal * 1.1).toFixed(2)}
              </Typography>
           </div>
        </Box>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Cardholder Name"
            name="name"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Card Number"
            name="cardNumber"
            fullWidth
            required
            placeholder="0000 0000 0000 0000"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          <div className="flex gap-4">
            <TextField
              label="Expiry Date"
              name="expiry"
              fullWidth
              required
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
            />
            <TextField
              label="CVV"
              name="cvv"
              fullWidth
              required
              type="password"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            disabled={loading}
            sx={{ 
              backgroundColor: "#0643DD", 
              fontWeight: "bold",
              marginTop: 2,
              height: "50px"
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : `Pay $${(cartTotal * 1.1).toFixed(2)}`}
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default PaymentSimulationPage;
