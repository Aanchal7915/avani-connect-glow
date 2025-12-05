import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Handle hash navigation from other pages
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Avani Enterprises | Digital Marketing & Web Development Services</title>
        <meta 
          name="description" 
          content="Transform your brand with Avani Enterprises. We offer web development, SEO, social media marketing, AI solutions, and digital consulting services. Get your free consultation today." 
        />
        <meta name="keywords" content="digital marketing, web development, SEO, social media marketing, AI solutions, brand transformation, India" />
        <link rel="canonical" href="https://avani-enterprises.vercel.app" />
      </Helmet>

      <div className="min-h-screen">
        {/* <Navbar /> */}
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <RegistrationForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
