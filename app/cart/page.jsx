"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { Button, IconButton, Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import { IoAdd, IoRemove, IoTrashOutline } from "react-icons/io5";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Box className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Typography variant="h4" className="text-[#0643DD] font-bold">
          Your Cart is Empty
        </Typography>
        <Link href="/pages/products">
          <Button variant="contained" sx={{ backgroundColor: "#0643DD" }}>
            Browse Products
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box className="p-8 max-w-6xl mx-auto pt-28">
      <Typography variant="h4" className="text-[#0643DD] font-bold mb-8">
        Shopping Cart
      </Typography>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id} className="flex flex-col sm:flex-row items-center p-4 gap-4 shadow-md">
              <CardMedia
                component="img"
                image={item.img}
                alt={item.title}
                sx={{ width: 100, height: 100, objectFit: "contain" }}
              />
              <CardContent className="flex-grow w-full">
                <Typography variant="h6" className="font-bold text-[#0643DD]">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Unit Price: ${item.price}
                </Typography>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center border rounded-md">
                    <IconButton 
                      size="small" 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <IoRemove />
                    </IconButton>
                    <Typography className="px-3 font-semibold">{item.quantity}</Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <IoAdd />
                    </IconButton>
                  </div>
                  <IconButton 
                    color="error" 
                    onClick={() => removeFromCart(item.id)}
                  >
                    <IoTrashOutline />
                  </IconButton>
                </div>
              </CardContent>
              <Typography variant="h6" className="font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </Typography>
            </Card>
          ))}
          <Button color="error" onClick={clearCart}>Clear Cart</Button>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 shadow-lg sticky top-28">
            <Typography variant="h5" className="font-bold mb-4 text-[#0643DD]">
              Order Summary
            </Typography>
            <div className="flex justify-between mb-2">
              <Typography>Subtotal</Typography>
              <Typography>${cartTotal.toFixed(2)}</Typography>
            </div>
            <div className="flex justify-between mb-4">
              <Typography>Tax (10%)</Typography>
              <Typography>${(cartTotal * 0.1).toFixed(2)}</Typography>
            </div>
            <div className="border-t pt-4 flex justify-between mb-6">
              <Typography variant="h6" className="font-bold">Total</Typography>
              <Typography variant="h6" className="font-bold text-[#0643DD]">
                ${(cartTotal * 1.1).toFixed(2)}
              </Typography>
            </div>
            <Link href="/payment-simulation">
              <Button 
                variant="contained" 
                fullWidth 
                size="large"
                sx={{ backgroundColor: "#0643DD", fontWeight: "bold" }}
              >
                Proceed to Checkout
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </Box>
  );
};

export default CartPage;
