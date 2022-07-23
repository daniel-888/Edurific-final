import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import Blog from "../element/blog";
import SEO from '../element/seo';
import Alumni from "../element/alumni";
import Counter from "../element/counter";
import Features from "../element/our-features";
import Pricing from "../element/pricing";
import Faq from "../element/faq";
import Quote from "../element/quote-2";
import Course from "../element/course";
import Slider1 from "../element/slider-1";
import Team from "../element/team";
import Testimonial from "../element/testimonial";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Portfolio from "../component/portfolio";



function Home() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <>
       <SEO
          title="Edurific - Coding and Future-tech Classes For kids"
          description="Edurific is a trend setter of Edtech Industry, we launched World's first Artificial Intelligence course for kids. We are pioneer and well known for shaping the future-tech for kids."
        />
      <Header />
      <div className="page-content bg-white" id="top">
        <Slider1 />
        <Alumni />
        <Course />
        {/*   <Portfolio /> */}
        <Pricing />
        
        <Counter />
        <Features />
        
        <Team />
        
      
        <Testimonial />
     {/*   <Blog /> 
        <Quote /> */}
        <AboutUs />
        <Faq />
      </div>
      <Footer />
    </>
  );
}

export default Home;
