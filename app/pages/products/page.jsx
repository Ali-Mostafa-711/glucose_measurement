"use client";

import React, { useState } from "react";
import Contact from "../home/homeComponents/Contact";
import ProductCard from "../../items/cards/ProductCard";
import {
  StaggerContainer,
  StaggerItem,
} from "../../components/animations/StaggerContainer";
import SlideUp from "../../components/animations/SlideUp";
import FadeIn from "../../components/animations/FadeIn";
import { useCart } from "../../../context/CartContext";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showWarning, setShowWarning] = useState(false);
  const [warningAccepted, setWarningAccepted] = useState(false);
  const [pendingProductId, setPendingProductId] = useState(null);
  const { addToCart } = useCart();

  const products = [
    {
      img: "https://media.gettyimages.com/id/526612260/photo/diabetes-medcine-pills.webp?s=2048x2048&w=gi&k=20&c=7_5N85EtRWNvQjj261KSK2JyuszwiIi_3ptygJYMP14=",
      title: "Metformin",
      description:
        "Helps control blood sugar levels in type 2 diabetes by improving insulin sensitivity.",
      id: "metformin",
      category: "medicine",
      price: 50,
    },
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
      img: "https://media.gettyimages.com/id/2228094865/photo/portugal-regulates-prescription-of-glp-1-receptor-agonist-class-such-as-ozempic-as-demand.webp?s=2048x2048&w=gi&k=20&c=i0YSF4Rfp1DfpKQvwXZLtrX3OeL_9lbWAoaRo1JM9sU=",
      title: "Liraglutide (Victoza)",
      description:
        "A GLP-1 receptor agonist that helps lower blood sugar and supports weight loss.",
      id: "liraglutide",
      category: "medicine",
      price: 20,
    },
    {
      img: "https://www.clinicaltrialsarena.com/wp-content/uploads/sites/22/2014/01/Image-1-Forxiga-dapagliflozin-shutterstock_2401535759.jpg",
      title: "Dapagliflozin (Forxiga)",
      description:
        "SGLT2 inhibitor that helps the kidneys remove glucose from the bloodstream.",
      id: "dapagliflozin",
      category: "medicine",
      price: 150,
    },
    {
      img: "https://media.gettyimages.com/id/2150938026/photo/human-crowd-surrounding-an-injectable-insulin-bottle-on-purple-background.webp?s=2048x2048&w=gi&k=20&c=vkrLbbXPxtm48P0z7Q09GAhh66kAW4GoRbRiXWX11sc=",
      title: "Insulin",
      description:
        "Essential for type 1 diabetes and advanced type 2 diabetes to regulate blood glucose.",
      id: "insulin",
      category: "medicine",
      price: 50,
    },
    {
      img: "https://media.gettyimages.com/id/1432982374/photo/sitagliptin-pill-conceptual-image.webp?s=2048x2048&w=gi&k=20&c=BAu5DpylVlz0yE17njLiLCEpiG1rdUrQHTwWNpTL2nY=",
      title: "Sitagliptin (Januvia)",
      description:
        "DPP-4 inhibitor that helps increase insulin release and decrease glucagon levels.",
      id: "sitagliptin",
      category: "medicine",
      price: 45,
    },
    {
      img: "https://media.gettyimages.com/id/1360140245/photo/blood-glucose-test.webp?s=2048x2048&w=gi&k=20&c=xqTdms51DKImoh2QEj1a1RVIhAr3Ou80uEjDf4AxCoE=",
      title: "Blood Glucose Meter",
      description:
        "Device used to measure blood glucose levels accurately at home.",
      id: "glucose-meter",
      category: "device",
      price: 1250,
    },
    {
      img: "https://media.gettyimages.com/id/1481206082/photo/blood-sugar-finger-prick-test.webp?s=2048x2048&w=gi&k=20&c=Lzoe7AQonH4B5YdtWsXUx487BUE6Z97jpSkgwlwV3NM=",
      title: "Test Strips",
      description:
        "Disposable strips used with glucose meters to test blood sugar.",
      id: "test-strips",
      category: "device",
      price: 2350,
    },
    {
      img: "https://media.gettyimages.com/id/2198574872/photo/senior-man-preparing-lancing-device-at-home.webp?s=2048x2048&w=gi&k=20&c=QKtD_Q-YYnxUnbrYXkYXIDc3PdZ-_sH7N96N3xXWn1Y=",
      title: "Lancing Device",
      description: "Used to prick the finger safely to obtain a blood sample.",
      id: "lancing-device",
      category: "device",
      price: 1150,
    },
    {
      img: "https://media.gettyimages.com/id/1568137347/photo/monitoring-blood-pressure.webp?s=2048x2048&w=gi&k=20&c=HmfNziMRlGhL0tGWZWLlQuZCW51aCY7q7JZAz9QHLQs=",
      title: "Blood Pressure Monitor",
      description:
        "Digital device to monitor blood pressure for diabetic patients.",
      id: "bp-monitor",
      category: "device",
      price: 5000,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
  const handleBuy = (product) => {
    if (product.category === "medicine" && !warningAccepted) {
      setPendingProductId(product);
      setShowWarning(true);
      return;
    }

    addToCart(product);
  };

  const confirmWarning = () => {
    setWarningAccepted(true);
    setShowWarning(false);

    if (pendingProductId) {
      addToCart(pendingProductId);
      setPendingProductId(null);
    }
  };

  return (
    <div>
      <div className="products-page flex flex-col items-center gap-10 py-40 overflow-hidden">
        <SlideUp>
          <h1 className="text-[#0643DD] text-5xl font-bold">Products</h1>
        </SlideUp>

        {/* Category Filter */}
        <FadeIn delay={0.15}>
          <div className="flex gap-4">
            {["all", "medicine", "device"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl border transition ${
                  selectedCategory === cat
                    ? "bg-[#0643DD] text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {cat === "all"
                  ? "All"
                  : cat === "medicine"
                    ? "Medicines"
                    : "Devices"}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Search */}
        <FadeIn delay={0.2}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[400px] px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0643DD]"
          />
        </FadeIn>

        {/* Products */}
        <StaggerContainer
          key={`${selectedCategory}-${search}`}
          className="grid grid-cols-3 gap-20"
          staggerChildren={0.1}
        >
          {filteredProducts.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard
                img={product.img}
                title={product.title}
                description={product.description}
                id={product.id}
                price={product.price}
                category={product.category}
                onBuy={() => handleBuy(product)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Popup Warning */}
      {showWarning && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white max-w-md rounded-2xl p-6 text-center">
            <h3 className="text-red-600 text-xl font-bold mb-3">
              ⚠️ Medical Warning
            </h3>
            <p className="text-sm text-gray-700 mb-6">
              Do NOT purchase or use diabetes medications without consulting a
              qualified doctor. Misuse may cause serious health complications.
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowWarning(false)}
                className="px-4 py-2 rounded-xl border"
              >
                Cancel
              </button>
              <button
                onClick={confirmWarning}
                className="px-4 py-2 rounded-xl bg-red-600 text-white"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

      <FadeIn delay={0.2}>
        <Contact />
      </FadeIn>
    </div>
  );
};

export default Products;
