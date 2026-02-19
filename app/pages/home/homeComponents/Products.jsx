import ProductCard from "../../../items/cards/ProductCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Products = () => {
  return (
    <div className="products-page flex flex-col items-center justify-center -mt-25 gap-10 py-40">
      <h1 className="text-[#0643DD] text-5xl font-bold">
        Diabetes Medications
      </h1>
      <div className="product-list grid grid-cols-1 md:grid-cols-3 gap-10">
        <ProductCard
          img={
            "https://media.gettyimages.com/id/526612260/photo/diabetes-medcine-pills.webp?s=2048x2048&w=gi&k=20&c=7_5N85EtRWNvQjj261KSK2JyuszwiIi_3ptygJYMP14="
          }
          title={"Metformin"}
          description={
            "Helps control blood sugar levels in type 2 diabetes by improving insulin sensitivity."
          }
          isDoctor={false}
          id={"metformin"}
        />
        <ProductCard
          img={
            "https://media.gettyimages.com/id/1432982719/photo/glipizide-pill-bottle-conceptual-image.webp?s=2048x2048&w=gi&k=20&c=GFvBxio4lYCcJ1hAmUF343YeeRaqdj3l9GcE7BmhWQE="
          }
          title={"Glipizide"}
          description={
            "Stimulates the pancreas to release more insulin, used for type 2 diabetes management."
          }
          isDoctor={false}
          id={"glipizide"}
        />
        <ProductCard
          img={"https://media.gettyimages.com/id/2228094865/photo/portugal-regulates-prescription-of-glp-1-receptor-agonist-class-such-as-ozempic-as-demand.webp?s=2048x2048&w=gi&k=20&c=i0YSF4Rfp1DfpKQvwXZLtrX3OeL_9lbWAoaRo1JM9sU="}
          title={"Liraglutide (Victoza)"}
          description={
            "A GLP-1 receptor agonist that helps lower blood sugar and supports weight loss."
          }
          isDoctor={false}
          id={"liraglutide"}
        />
        <ProductCard
          img={"https://www.clinicaltrialsarena.com/wp-content/uploads/sites/22/2014/01/Image-1-Forxiga-dapagliflozin-shutterstock_2401535759.jpg"}
          title={"Dapagliflozin (Forxiga)"}
          description={
            "SGLT2 inhibitor that helps the kidneys remove glucose from the bloodstream."
          }
          isDoctor={false}
          id={"dapagliflozin"}
        />
        <ProductCard
          img={"https://media.gettyimages.com/id/2150938026/photo/human-crowd-surrounding-an-injectable-insulin-bottle-on-purple-background.webp?s=2048x2048&w=gi&k=20&c=vkrLbbXPxtm48P0z7Q09GAhh66kAW4GoRbRiXWX11sc="}
          title={"Insulin"}
          description={
            "Essential for type 1 diabetes and advanced type 2 diabetes to regulate blood glucose."
          }
          isDoctor={false}
          id={"insulin"}
        />
        <ProductCard
          img={"https://media.gettyimages.com/id/1432982374/photo/sitagliptin-pill-conceptual-image.webp?s=2048x2048&w=gi&k=20&c=BAu5DpylVlz0yE17njLiLCEpiG1rdUrQHTwWNpTL2nY="}
          title={"Sitagliptin (Januvia)"}
          description={
            "DPP-4 inhibitor that helps increase insulin release and decrease glucagon levels."
          }
          isDoctor={false}
          id={"sitagliptin"}
        />
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
