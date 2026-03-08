import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PortfolioAssistant from '@/components/PortfolioAssistant';


export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-violet-500/30">
      <Header />
      <main aria-label="Portfolio Content">
        <Hero />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
      <PortfolioAssistant />
    </div>
  );
}
