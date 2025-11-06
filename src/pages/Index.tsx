import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import Leadership from "@/components/Leadership";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("location:", location);

    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Pricing />
        <Leadership />
        <FAQ />
        <Newsletter />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

