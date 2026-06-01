import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { AboutSection } from './components/sections/AboutSection';
import { CofounderSection } from './components/sections/CofounderSection';
import { ContactSection } from './components/sections/ContactSection';
import { CtaStatsSection } from './components/sections/CtaStatsSection';
import { HeroSection } from './components/sections/HeroSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <CofounderSection />
        <ServicesSection />
        <CtaStatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
