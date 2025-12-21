import React from "react";
import { WhyUs } from "../home/homeComponents/whyUs";
import Contact from "../home/homeComponents/Contact";
import OurValues from "./aboutComponents/OurValues";
import Doctors from "./aboutComponents/Doctors";
import AboutUs from "./aboutComponents/AboutUs";

const AboutPage = () => {
  return (
    <div className="about flex flex-col items-center justify-center pt-18 ">
      <AboutUs />
      <WhyUs />
      <OurValues />
      <Doctors />
      <Contact />
    </div>
  );
};

export default AboutPage;
