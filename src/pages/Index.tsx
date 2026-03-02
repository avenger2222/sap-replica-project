import SAPHeader from "@/components/SAPHeader";
import HeroSection from "@/components/HeroSection";
import InnovationSection from "@/components/InnovationSection";
import TeamsSection from "@/components/TeamsSection";
import CustomersSection from "@/components/CustomersSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import SAPFooter from "@/components/SAPFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SAPHeader />
      <main>
        <HeroSection />
        <InnovationSection />
        <TeamsSection />
        <PartnersSection />
        <CustomersSection />
        <TestimonialsSection />
        <NewsSection />
      </main>
      <SAPFooter />
    </div>
  );
};

export default Index;
