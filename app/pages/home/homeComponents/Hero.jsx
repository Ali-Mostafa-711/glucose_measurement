import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      className="hero relative flex flex-col items-center justify-center text-white min-h-[calc(100vh-80px)]  w-full"
      style={{
        backgroundImage: `url(/HeroImg.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[50%] z-10 text-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-7xl font-bold">“A NEW ERA IN MEDICINE”</h1>
        <p className="text-2xl text-zinc-200">
          Innovative medical solutions that transform patient care.
        </p>
        <div className="btn flex items-center justify-center gap-8 mt-4 text-lg">
          <button className="bg-white text-[#0643DD] px-6 py-4 rounded-md flex items-center justify-center gap-2 hover:bg-[#0643DD] hover:text-white hover:gap-4 duration-300 cursor-pointer">
            Explore Products
            <FaArrowRight />
          </button>
          <button className="bg-blue-500 text-white px-8 py-4 rounded-md flex items-center justify-center gap-2 hover:bg-[#0643DD] hover:text-white hover:gap-4 duration-300 cursor-pointer">
            Contact Us
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full">
        <Image
          src="/HeroAbs.svg"
          alt="Hero"
          width={1500}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
