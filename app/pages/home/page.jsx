import Contact from "./homeComponents/Contact";
import Faq from "./homeComponents/Faq";
import Hero from "./homeComponents/Hero";
import OurValues from "./homeComponents/OurValues";
import Products from "./homeComponents/Products";
import AboutUs from "./homeComponents/aboutUS";
import { WhyUs } from "./homeComponents/whyUs";
import FadeIn from "@/app/components/animations/FadeIn";
import SlideUp from "@/app/components/animations/SlideUp";
import ScaleIn from "@/app/components/animations/ScaleIn";
import {
  StaggerContainer,
  StaggerItem,
} from "@/app/components/animations/StaggerContainer";

export default function HomePage() {
  return (
    <div className="home page flex flex-col items-center justify-center pt-22 overflow-hidden">
      <FadeIn className="w-full">
        <Hero />
      </FadeIn>
      <SlideUp className="w-full" delay={0.2}>
        <AboutUs />
      </SlideUp>

      <StaggerContainer className="w-full" staggerChildren={0.2}>
        <StaggerItem>
          <WhyUs />
        </StaggerItem>
        <StaggerItem>
          <Products />
        </StaggerItem>
      </StaggerContainer>

      <ScaleIn className="w-full" duration={0.6}>
        <OurValues />
      </ScaleIn>
      <SlideUp className="w-full">
        <Faq />
      </SlideUp>
      <FadeIn className="w-full" delay={0.2}>
        <Contact />
      </FadeIn>
    </div>
  );
}
