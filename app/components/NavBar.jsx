"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";

const NavBar = () => {
  const { cartCount } = useCart();
  return (
    <div className="NavBar py-3 text-[#0643DD] flex justify-evenly items-center fixed top-0 left-0 w-full z-50 border-b border-black/10 backdrop-blur-md">
      {/* Logo */}
      <div className="logo flex items-center gap-2 font-bold text-2xl">
        <Image src={"/logo2.png"} alt="logo" width={70} height={70} />
        {/* Diabetes-care */}
      </div>

      {/* Links */}
      <div className="links flex gap-6 items-center justify-center">
        <Link
          href={"/pages/home"}
          className="hover:text-[#0643dda2] text-[20px] font-semibold duration-300 cursor-pointer hover:mx-1.5"
        >
          Home
        </Link>
        <Link
          href={"/pages/about"}
          className="hover:text-[#0643dda2] text-[20px] font-semibold duration-300 cursor-pointer hover:mx-1.5"
        >
          About
        </Link>
        <Link
          href={"/pages/products"}
          className="hover:text-[#0643dda2] text-[20px] font-semibold duration-300 cursor-pointer hover:mx-1.5"
        >
          Products
        </Link>
        <Link
          href={"https://wa.me/+201228099652"}
          target="_blank"
          className="hover:text-[#0643dda2] text-[20px] font-semibold duration-300 cursor-pointer hover:mx-1.5"
        >
          Contact
        </Link>
      </div>

      {/* Resume Button */}

      <Link
        href={"/auth/login"}
        className=" text-[#0643DD] px-6 py-4 rounded-md flex items-center justify-center gap-2 hover:bg-[#0643DD] hover:text-white hover:gap-4 duration-300 cursor-pointer"
      >
        Start Glucose Measurement
        <FaArrowRight />
      </Link>

      <Link
        href={"/cart"}
        className="relative text-[#0643DD] text-2xl hover:text-[#0643dda2] duration-300 cursor-pointer flex items-center"
      >
        <IoCartOutline />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default NavBar;
