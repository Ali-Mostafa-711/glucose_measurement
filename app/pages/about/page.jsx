import React from "react";
import { WhyUs } from "../home/homeComponents/whyUs";
import Contact from "../home/homeComponents/Contact";
import OurValues from "./aboutComponents/OurValues";
import Doctors from "./aboutComponents/Doctors";
import AboutUs from "./aboutComponents/AboutUs";
import {
  StaggerContainer,
  StaggerItem,
} from "../../components/animations/StaggerContainer";

const AboutPage = () => {
  return (
    <StaggerContainer
      className="about flex flex-col items-center justify-center pt-18 "
      staggerChildren={0.15}
    >
      <StaggerItem className="w-full">
        <AboutUs />
      </StaggerItem>
      <StaggerItem className="w-full">
        <WhyUs />
      </StaggerItem>
      <StaggerItem className="w-full">
        <OurValues />
      </StaggerItem>
      <StaggerItem className="w-full">
        <Doctors />
      </StaggerItem>
      <StaggerItem className="w-full">
        <Contact />
      </StaggerItem>
    </StaggerContainer>
  );
};

export default AboutPage;
