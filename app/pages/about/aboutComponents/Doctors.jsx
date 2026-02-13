import DoctorsCard from "@/app/items/cards/DoctorsCard";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Doctors = () => {
  return (
    <div className=" Doctors-page flex flex-col items-center justify-center gap-10 pb-40 pt-20 ">
      <h1 className="text-[#0643DD] text-5xl font-bold">Doctors</h1>
      <div className="product-list grid grid-cols-3 gap-20">
        <DoctorsCard
          img={"/d1.jpeg"}
          title={"Mr. Mina wasef"}
          description={
            "Mr. Mina wasef, an accomplished engineer, brings a unique blend of technical expertise and entrepreneurial spirit to the team. His insight and dedication to excellence have been instrumental in shaping the company's direction and success."
          }
          id={"one"}
        />
        <DoctorsCard
          img={"/d2.jpeg"}
          title={"Dr. Ahmed elshorbagy"}
          description={
            "Dr. Ahmed elshorbagy, a Ph.D. holder, serves as the Medical, Pharmaceutical, and Technical Executive for the company. With an impressive experience of 30 years, he brings a wealth of knowledge and expertise to the team."
          }
          id={"two"}
        />
        <DoctorsCard
          img={'/d3.jpeg'}
          title={"Mr. Mohamed Fathy"}
          description={
            "Mr. Mohamed Fathy, an experienced engineer, comes with a sharp focus on operational excellence. His strong background ensures that the company's operations are streamlined and aligned with the highest standards of quality."
          }
          id={"three"}
        />
      </div>
      {/* <button className="bg-[#0643DD] text-white px-6 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-500  hover:text-white hover:gap-4 duration-300 cursor-pointer">
        View More Doctors
        <FaArrowRight />
      </button> */}
    </div>
  );
};

export default Doctors;
