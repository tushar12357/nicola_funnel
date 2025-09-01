import Header from './components/Header';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Hero from './components/Hero';
import SolutionsSection from './components/SolutionsSections';
import CaseStudySection from './components/CaseStudySection';
import TestimonialsSection from './components/TestimonialsSection';
import RiskFreeSection from './components/RiskFreeSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';
// import DemoVideo from './components/DemoVIdeo';
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#001a33] to-[#003366] overflow-visible">
      <Header />
      <Hero />
      {/* <DemoVideo/> */}
      <Features />
      <HowItWorks />
      <Pricing />
      <SolutionsSection />
      <CaseStudySection />
      <TestimonialsSection />
      <RiskFreeSection/>
      <FAQSection/>
      <FooterSection/>
    </div>
  );
}

export default Home;