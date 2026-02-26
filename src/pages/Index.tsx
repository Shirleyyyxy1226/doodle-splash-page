import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Explore } from "@/components/landing/Explore";
import { JourneyShowcase } from "@/components/landing/JourneyShowcase";
import { CallToAction } from "@/components/landing/CallToAction";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <JourneyShowcase />
        <Explore />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
