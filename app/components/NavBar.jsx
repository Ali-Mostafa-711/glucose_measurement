import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="NavBar py-4 text-[#0643DD] flex justify-evenly items-center fixed top-0 left-0 w-full z-50 border-b border-black/10 backdrop-blur-md">
      {/* Logo */}
      <div className="logo flex items-center gap-2 font-bold text-2xl">
        <Image src={"/logo.svg"} alt="logo" width={40} height={70} />
        NurturaRx
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

      <Link href={"/auth/login"} className=" text-[#0643DD] px-6 py-4 rounded-md flex items-center justify-center gap-2 hover:bg-[#0643DD] hover:text-white hover:gap-4 duration-300 cursor-pointer">
       Start Glucose Measurement
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default NavBar;
