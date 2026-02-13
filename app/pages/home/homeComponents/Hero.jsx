import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import TextReveal from "@/app/components/animations/TextReveal";
import FadeIn from "@/app/components/animations/FadeIn";
import SlideUp from "@/app/components/animations/SlideUp";

export default function Hero() {
  return (
    <div
      className="hero relative flex flex-col items-center justify-center text-white min-h-[calc(100vh-80px)]  w-full"
      style={{
        backgroundImage: `url(/hero2.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[50%] z-10 text-white flex flex-col items-center justify-center gap-4">
        <TextReveal
          text="“A NEW ERA IN MEDICINE”"
          className="text-7xl font-bold"
        />
        <FadeIn delay={0.8}>
          <p className="text-2xl text-zinc-200">
            Innovative medical solutions that transform patient care.
          </p>
        </FadeIn>
        <SlideUp
          delay={1.0}
          className="btn flex items-center justify-center gap-8 mt-4 text-lg"
        >
          <Link
            href={"/pages/products"}
            className="bg-white text-[#0643DD] px-6 py-4 rounded-md flex items-center justify-center gap-2 hover:bg-[#0643DD] hover:text-white hover:gap-4 duration-300 cursor-pointer"
          >
            Explore Products
            <FaArrowRight />
          </Link>
          <Link
            href={"https://wa.me/+201228099652"}
            target="_blank"
            className="bg-blue-500 text-white px-8 py-4 rounded-md flex items-center justify-center gap-2 hover:bg-[#0643DD] hover:text-white hover:gap-4 duration-300 cursor-pointer"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </SlideUp>
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
