"use client";
import React, { useState } from "react";
import Contact from "../home/homeComponents/Contact";
import ProductCard from "@/app/items/cards/ProductCard";
import { FaArrowRight } from "react-icons/fa";

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
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="products-page flex flex-col items-center justify-center gap-10 py-40">
        <h1 className="text-[#0643DD] text-5xl font-bold">Products</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[400px] px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0643DD]"
        />

        <div className="product-list grid grid-cols-3 gap-20">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              title={product.title}
              description={product.description}
              isDoctor={false}
              id={product.id}
            />
          ))}
        </div>

        <button className="bg-[#0643DD] text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-500 hover:gap-4 duration-300">
          View More Products
          <FaArrowRight />
        </button>
      </div>

      <Contact />
    </div>
  );
};

export default Products;
