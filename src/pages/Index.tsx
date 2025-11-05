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

