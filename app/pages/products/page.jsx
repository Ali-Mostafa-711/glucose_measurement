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

const Products = () => {
  const [search, setSearch] = useState("");
  const products = [
    {
      img: "https://media.gettyimages.com/id/526612260/photo/diabetes-medcine-pills.webp?s=2048x2048&w=gi&k=20&c=7_5N85EtRWNvQjj261KSK2JyuszwiIi_3ptygJYMP14=",
      title: "Metformin",
      description:
        "Helps control blood sugar levels in type 2 diabetes by improving insulin sensitivity.",
      id: "metformin",
    },
    {
      img: "https://media.gettyimages.com/id/1432982719/photo/glipizide-pill-bottle-conceptual-image.webp?s=2048x2048&w=gi&k=20&c=GFvBxio4lYCcJ1hAmUF343YeeRaqdj3l9GcE7BmhWQE=",
      title: "Glipizide",
      description:
        "Stimulates the pancreas to release more insulin, used for type 2 diabetes management.",
      id: "glipizide",
    },
    {
      img: "https://media.gettyimages.com/id/2228094865/photo/portugal-regulates-prescription-of-glp-1-receptor-agonist-class-such-as-ozempic-as-demand.webp?s=2048x2048&w=gi&k=20&c=i0YSF4Rfp1DfpKQvwXZLtrX3OeL_9lbWAoaRo1JM9sU=",
      title: "Liraglutide (Victoza)",
      description:
        "A GLP-1 receptor agonist that helps lower blood sugar and supports weight loss.",
      id: "liraglutide",
    },
    {
      img: "https://www.clinicaltrialsarena.com/wp-content/uploads/sites/22/2014/01/Image-1-Forxiga-dapagliflozin-shutterstock_2401535759.jpg",
      title: "Dapagliflozin (Forxiga)",
      description:
        "SGLT2 inhibitor that helps the kidneys remove glucose from the bloodstream.",
      id: "dapagliflozin",
    },
    {
      img: "https://media.gettyimages.com/id/2150938026/photo/human-crowd-surrounding-an-injectable-insulin-bottle-on-purple-background.webp?s=2048x2048&w=gi&k=20&c=vkrLbbXPxtm48P0z7Q09GAhh66kAW4GoRbRiXWX11sc=",
      title: "Insulin",
      description:
        "Essential for type 1 diabetes and advanced type 2 diabetes to regulate blood glucose.",
      id: "insulin",
    },
    {
      img: "https://media.gettyimages.com/id/1432982374/photo/sitagliptin-pill-conceptual-image.webp?s=2048x2048&w=gi&k=20&c=BAu5DpylVlz0yE17njLiLCEpiG1rdUrQHTwWNpTL2nY=",
      title: "Sitagliptin (Januvia)",
      description:
        "DPP-4 inhibitor that helps increase insulin release and decrease glucagon levels.",
      id: "sitagliptin",
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

        {/* <ScaleIn delay={0.4}>
          <button className="bg-[#0643DD] text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-500 hover:gap-4 duration-300">
            View More Products
            <FaArrowRight />
          </button>
        </ScaleIn> */}
      </div>

      <FadeIn delay={0.2}>
        <Contact />
      </FadeIn>
    </div>
  );
};

export default Products;
