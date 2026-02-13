"use client";
import React, { useState } from "react";
import Contact from "../home/homeComponents/Contact";
import ProductCard from "@/app/items/cards/ProductCard";
import { FaArrowRight } from "react-icons/fa";
import {
  StaggerContainer,
  StaggerItem,
} from "@/app/components/animations/StaggerContainer";
import SlideUp from "@/app/components/animations/SlideUp";
import FadeIn from "@/app/components/animations/FadeIn";
import ScaleIn from "@/app/components/animations/ScaleIn";

const Products = () => {
  const [search, setSearch] = useState("");

  const products = [
    {
      img: "/pr1.svg",
      title: "RESPIREFAST",
      description:
        "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)",
      id: "one",
    },
    {
      img: "/pr2.svg",
      title: "ENERGYBOOST",
      description:
        "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)",
      id: "two",
    },
    {
      img: "/pr3.svg",
      title: "ReliefPro",
      description:
        "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)",
      id: "three",
    },
    {
      img: "/pr2.svg",
      title: "ReliefPro",
      description:
        "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)",
      id: "four",
    },
    {
      img: "/pr3.svg",
      title: "RESPIREFAST",
      description:
        "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)",
      id: "five",
    },
    {
      img: "/pr1.svg",
      title: "ENERGYBOOST",
      description:
        "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)",
      id: "six",
    },
    {
      img: "/pr2.svg",
      title: "ENERGYBOOST",
      description:
        "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)",
      id: "two",
    },
    {
      img: "/pr3.svg",
      title: "ReliefPro",
      description:
        "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)",
      id: "three",
    },
    {
      img: "/pr2.svg",
      title: "ReliefPro",
      description:
        "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)",
      id: "four",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="products-page flex flex-col items-center justify-center gap-10 py-40 overflow-hidden">
        <SlideUp>
          <h1 className="text-[#0643DD] text-5xl font-bold">Products</h1>
        </SlideUp>

        {/* Search Bar */}
        <FadeIn delay={0.2}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[400px] px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0643DD]"
          />
        </FadeIn>

        <StaggerContainer
          className="product-list grid grid-cols-3 gap-20"
          staggerChildren={0.1}
        >
          {filteredProducts.map((product, index) => (
            <StaggerItem key={index}>
              <ProductCard
                img={product.img}
                title={product.title}
                description={product.description}
                isDoctor={false}
                id={product.id}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScaleIn delay={0.4}>
          <button className="bg-[#0643DD] text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-500 hover:gap-4 duration-300">
            View More Products
            <FaArrowRight />
          </button>
        </ScaleIn>
      </div>

      <FadeIn delay={0.2}>
        <Contact />
      </FadeIn>
    </div>
  );
};

export default Products;
