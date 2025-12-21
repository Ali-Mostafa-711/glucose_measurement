import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="about-us flex flex-col gap-14 items-center justify-center w-full py-30">
      <h1 className="text-5xl text-[#0643DD] font-bold">About Us</h1>
      <div className="content w-4/5 flex items-center justify-between ">
        <div className="left flex flex-col items-center justify-center flex-1">
          <Image src="/about.svg" alt="About Us" width={500} height={500} />
        </div>
        <div className="right flex flex-col gap-4 items-center justify-center flex-1">
          <p className="text-[#454545] text-[25px]">
            At NurturaRx, our mission is to empower individuals living with
            diabetes by providing reliable health tools, trusted medication
            access, and personalized guidance. We are dedicated to improving
            everyday health through accurate glucose tracking, expert-approved
            advice, and an integrated pharmacy that ensures safe and
            high-quality medications. Our commitment is to help every user live
            a healthier, more confident, and well-managed life.
          </p>
          <button className="self-start bg-[#0643DD] text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-500  hover:text-white hover:gap-4 duration-300 cursor-pointer">
            Learn More
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
