import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import RevealOnScroll from './components/RevealOnScroll';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#d71921] selection:text-white pb-20">
      <div className="fixed inset-0 pointer-events-none bg-dots opacity-20 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main className="container-custom pt-24 space-y-32">
          <RevealOnScroll>
            <Hero />
          </RevealOnScroll>

          <RevealOnScroll>
            <Projects />
          </RevealOnScroll>

          <RevealOnScroll>
            <Certifications />
          </RevealOnScroll>

          <RevealOnScroll>
            <About />
          </RevealOnScroll>

          <RevealOnScroll>
            <Contact />
          </RevealOnScroll>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
