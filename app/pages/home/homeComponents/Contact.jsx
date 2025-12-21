import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="contact relative w-auto h-64 rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden">
      <Image
        src={"/CTA.svg"}
        width={100}
        height={60}
        className="w-full h-full"
        alt="img"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#044AFC]">Get in Touch</h2>
        <p className="mb-6">
          We would love to hear from you! Whether you have a question about
          features, trials, pricing, need a demo, or anything else, our team is
          ready to answer all your questions.
        </p>
        <button className="bg-blue-500 cursor-pointer text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact;
