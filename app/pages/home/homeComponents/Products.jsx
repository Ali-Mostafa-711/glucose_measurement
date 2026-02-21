import ProductCard from "../../../items/cards/ProductCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Products = () => {
  const products = [
{
      img: "https://media.gettyimages.com/id/1432982719/photo/glipizide-pill-bottle-conceptual-image.webp?s=2048x2048&w=gi&k=20&c=GFvBxio4lYCcJ1hAmUF343YeeRaqdj3l9GcE7BmhWQE=",
      title: "Glipizide",
      description:
        "Stimulates the pancreas to release more insulin, used for type 2 diabetes management.",
      id: "glipizide",
      category: "medicine",
      price: 70,
    },
    {
     img: "/med8.jpeg",
      title: "Victoza",
      description:
        "Active Ingredient: Liraglutide. Description: Helps control post-meal blood sugar and supports heart health",
      id: "liraglutide",
      category: "medicine",
      price: 1600,
    },
    {
      img: "https://www.clinicaltrialsarena.com/wp-content/uploads/sites/22/2014/01/Image-1-Forxiga-dapagliflozin-shutterstock_2401535759.jpg",
      title: "Forxiga",
      description:
        "Active Ingredient: Dapagliflozin. Description: Lowers blood sugar by removing excess glucose through urine",
      id: "dapagliflozin",
      category: "medicine",
      price: 600,
    },

    {
      img: "/dev2.jpeg",
      title: "Contour Plus",
      description:
        "Simple and easy-to-use blood glucose meter Clear screen and easy buttons  Good accuracy for daily use",
      id: "Contour",
      category: "device",
      price: 800,
    },
    {
      img: "/dev3.jpeg",
      title: "FreeStyle Libre reader",
      description:
        "Part of the FreeStyle Libre system, displays readings on a screen.",
      id: "FreeStyle",
      category: "device",
      price: 800,
    },
    {
      img: "/dev4.jpeg",
      title: "Continuous Glucose Monitoring (CGM) device",
      description:
        "small sensor under the skin readsglucose levels periodically without pricking.",
      id: "CGM",
      category: "device",
      price: 600,
    },
  ];
  return (
    <div className="products-page flex flex-col items-center justify-center -mt-25 gap-10 py-40">
      <h1 className="text-[#0643DD] text-5xl font-bold">
        Diabetes Medications
      </h1>
      <div className="product-list grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            img={product.img}
            title={product.title}
            description={product.description}
            isDoctor={false}
            id={product.id}
            price={product.price}
          />
        ))}
      </div>

      <Link
        href={"/pages/products"}
        className="bg-[#0643DD] text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white hover:gap-4 duration-300 cursor-pointer"
      >
        View More Products
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default Products;
