import ProductCard from "@/app/items/cards/ProductCard";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Products = () => {
  return (
    <div className=" products-page flex flex-col items-center justify-center gap-10 py-40 ">
      <h1 className="text-[#0643DD] text-5xl font-bold">Products</h1>
      <div className="product-list grid grid-cols-3 gap-20">
        <ProductCard
          img={"/pr1.svg"}
          title={"RESPIREFAST"}
          description={
            "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)"
          }
          isDoctor={false}
          id={"one"}
        />
        <ProductCard
          img={"/pr2.svg"}
          title={"ENERGYBOOST"}
          description={
            "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)"
          }
          isDoctor={false}
          id={"two"}
        />
        <ProductCard
          img={"/pr3.svg"}
          title={"ReliefPro"}
          description={
            "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)"
          }
          isDoctor={false}
          id={"three"}
        />
        <ProductCard
          img={"/pr2.svg"}
          title={"ReliefPro"}
          description={
            "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)"
          }
          isDoctor={false}
          id={"four"}
        />
        <ProductCard
          img={"/pr3.svg"}
          title={"RESPIREFAST"}
          description={
            "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)"
          }
          isDoctor={false}
          id={"five"}
        />
        <ProductCard
          img={"/pr1.svg"}
          title={"ENERGYBOOST"}
          description={
            "(Glucosamine, Methyl sulfonyl methane, Chondroitin sulphate, Collagen Peptide, Hyaluronic acid)"
          }
          isDoctor={false}
          id={"six"}
        />
      </div>
      <button className="bg-[#0643DD] text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-500  hover:text-white hover:gap-4 duration-300 cursor-pointer">
        View More Products
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Products;
