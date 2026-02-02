import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="about-us flex flex-col gap-14 items-center justify-center w-full py-30">
      <h1 className="text-5xl text-[#0643DD] font-bold">About Us</h1>
      <div className="content w-full flex items-center justify-between gap-10 px-20">
        <div className="left flex flex-col items-center justify-center flex-1">
          <Image src="/about.svg" alt="About Us" width={500} height={500} />
        </div>
        <div className="right flex flex-col gap-4 items-center justify-center flex-2">
          <p className="text-[#454545] text-[22px]">
            At Diabetes-care, we are building a comprehensive digital healthcare
            platform designed specifically to support individuals living with
            diabetes. Our mission is to empower users with the tools, knowledge,
            and resources they need to manage their condition confidently and
            effectively. The platform allows users to create a personal account
            where they can record and track their blood glucose readings over
            time. Using these readings, Diabetes-care provides clear insights
            into the user’s health status, helping them understand their
            condition and make informed daily decisions. In addition to glucose
            tracking, Diabetes-care offers personalized recommendations,
            including nutrition tips, lifestyle guidance, and alerts for
            abnormal readings. These insights are designed to support better
            habits and reduce health risks through early awareness and
            consistent monitoring. Our integrated pharmacy section enables users
            to explore trusted diabetes-related medications and supplies,
            complete with detailed information to ensure safe and informed
            usage. We also connect users with a curated list of healthcare
            professionals, allowing them to find doctors suited to their
            condition directly through the platform. To support long-term
            adherence, Diabetes-care includes a medication reminder system that
            helps users stay on schedule with their treatments through timely
            notifications and email reminders. By combining technology, medical
            insight, and user-focused design, Diabetes-care aims to simplify
            diabetes management and improve quality of life. We are committed to
            safety, accuracy, and innovation, ensuring that every user feels
            supported on their journey toward better health.
          </p>
        </div>
      </div>
    </div>
  );
}
