import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="about-us flex flex-col items-center justify-center w-full py-20 bg-gradient-to-b from-[#e0f0ff] via-[#f0f4ff] to-[#ffffff]">
      <h1 className="text-5xl text-[#0643DD] font-bold mb-14">About Us</h1>

      <div className="content flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 w-full">
        {/* Left - Image with gradient overlay */}
        <div className="left relative w-full md:w-1/2 h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Gradient overlay */}
          <div className="absolute rounded-xl z-10"></div>
          <Image
            src="/about.svg"
            alt="About Us"
            fill
            className="object-contain rounded-xl z-0"
          />
        </div>

        {/* Right - Text card */}
        <div className="right w-full md:w-1/2 bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg flex flex-col gap-6 hover:scale-105 duration-300 cursor-pointer">
          <p className="text-[#454545] text-base md:text-lg leading-relaxed ">
            At{" "}
            <span className="font-semibold text-[#0643DD]">Diabetes-care</span>,
            we are building a comprehensive digital healthcare platform designed
            specifically to support individuals living with diabetes. Our
            mission is to empower users with the tools, knowledge, and resources
            they need to manage their condition confidently and effectively. The
            platform allows users to create a personal account where they can
            record and track their blood glucose readings over time. Using these
            readings, Diabetes-care provides clear insights into the user’s
            health status, helping them understand their condition and make
            informed daily decisions. In addition to glucose tracking,
            Diabetes-care offers personalized recommendations, including
            nutrition tips, lifestyle guidance, and alerts for abnormal
            readings. These insights are designed to support better habits and
            reduce health risks through early awareness and consistent
            monitoring. Our integrated pharmacy section enables users to explore
            trusted diabetes-related medications and supplies, complete with
            detailed information to ensure safe and informed usage. We also
            connect users with a curated list of healthcare professionals,
            allowing them to find doctors suited to their condition directly
            through the platform. To support long-term adherence, Diabetes-care
            includes a medication reminder system that helps users stay on
            schedule with their treatments through timely notifications and
            email reminders. By combining technology, medical insight, and
            user-focused design, Diabetes-care aims to simplify diabetes
            management and improve quality of life. We are committed to safety,
            accuracy, and innovation, ensuring that every user feels supported
            on their journey toward better health.
          </p>
        </div>
      </div>
    </div>
  );
}
