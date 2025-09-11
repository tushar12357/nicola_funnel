import Header from './components/Header';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Hero from './components/Hero';
import SolutionsSection from './components/SolutionsSection';
import CaseStudySection from './components/CaseStudySection';
import TestimonialsSection from './components/TestimonialsSection';
import RiskFreeSection from './components/RiskFreeSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';
import DemoVideo from './components/DemoVideo';

function Home({ focusedSection, onNavigate }) {
  const sections = [
    { id: 'hero', el: <Hero /> },
    { id: 'demo-video', el: <DemoVideo /> },
    { id: 'features', el: <Features /> },
    { id: 'how-it-works', el: <HowItWorks /> },
    { id: 'pricing', el: <Pricing /> },
    { id: 'solutions', el: <SolutionsSection /> },
    { id: 'case-study', el: <CaseStudySection /> },
    { id: 'testimonials', el: <TestimonialsSection /> },
    { id: 'risk-free', el: <RiskFreeSection /> },
    { id: 'faq', el: <FAQSection /> },
    { id: 'footer', el: <FooterSection /> },
  ];

  const focusedIndex = focusedSection ? sections.findIndex(s => s.id === focusedSection) : -1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#001a33] to-[#003366] overflow-visible">
      <Header onNavigate={onNavigate} />
      {sections.map((s, idx) => (
        <section
          id={s.id}
          key={s.id}
          style={{ display: focusedSection && idx < focusedIndex ? 'none' : undefined }}
        >
          {s.el}
        </section>
      ))}
    </div>
  );
}

export default Home;