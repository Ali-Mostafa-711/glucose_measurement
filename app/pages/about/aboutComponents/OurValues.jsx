import Image from "next/image";
import React from "react";

const OurValues = () => {
  return (
    <div className="values text-white flex flex-col items-center justify-center py-20 px-80 gap-10">
      <h1 className="text-5xl font-bold text-[#0643DD]">Our Values</h1>
      <div className="values-list grid grid-cols-2 gap-10">
        <div className="value-item  bg-[#F0F4FF] rounded-lg flex items-start justify-center text-center p-10 gap-4">
          <Image src={"/Vector.png"} width={70} height={60} alt="img"/>
          <div className="text flex flex-col items-start justify-center gap-4">
            <h2 className="text-2xl text-[#044AFC] font-semibold">Quality</h2>
            <p className="text-black text-left">
              We are relentless in our pursuit of the highest standards in
              pharmaceutical production and distribution.
            </p>
          </div>
        </div>
        <div className="value-item  bg-[#F0F4FF] rounded-lg flex items-start justify-center text-center p-10 gap-4">
          <Image src={"/Value Icon.png"} width={70} height={60} alt="img"/>
          <div className="text flex flex-col items-start justify-center gap-4">
            <h2 className="text-2xl text-[#044AFC] font-semibold">Integrity</h2>
            <p className="text-black text-left">
              Transparency and honesty guide every decision we make, from
              sourcing to delivering medicines to our clients.
            </p>
          </div>
        </div>
        <div className="value-item  bg-[#F0F4FF] rounded-lg flex items-start justify-center text-center p-10 gap-4">
          <Image src={"/fi_1342014.png"} width={70} height={60} alt="img"/>
          <div className="text flex flex-col items-start justify-center gap-4">
            <h2 className="text-2xl text-[#044AFC] font-semibold">
              Innovation
            </h2>
            <p className="text-black text-left">
              We continually evolve to meet the changing needs of the healthcare
              industry, staying ahead with cutting-edge solutions.
            </p>
          </div>
        </div>
        <div className="value-item  bg-[#F0F4FF] rounded-lg flex items-start justify-center text-center p-10 gap-4">
          <Image src={"/fi_11245130.png"} width={70} height={60} alt="img"/>
          <div className="text flex flex-col items-start justify-center gap-4">
            <h2 className="text-2xl text-[#044AFC] font-semibold">
              Customer-Centricity
            </h2>
            <p className="text-black text-left">
              Our clients and their patients are at the heart of everything we
              do, driving us to deliver exceptional service and reliable
              products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
