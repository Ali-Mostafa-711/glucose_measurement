import Contact from "./homeComponents/Contact";
import Faq from "./homeComponents/Faq";
import Hero from "./homeComponents/Hero";
import OurValues from "./homeComponents/OurValues";
import Products from "./homeComponents/Products";
import AboutUs from "./homeComponents/aboutUS";
import { WhyUs } from "./homeComponents/whyUs";

export default function HomePage() {
  return (
    <div className="home page flex flex-col items-center justify-center pt-22 ">
      <Hero />
      <AboutUs />
      <WhyUs/>
      <Products/>
      <OurValues/>
      <Faq/>
      <Contact/>
    </div>
  );
}