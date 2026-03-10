import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FunnelSection from "@/components/FunnelSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import InvestmentSection from "@/components/InvestmentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FunnelSection />
      <DifferentialsSection />
      <InvestmentSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
