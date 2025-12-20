import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AnimatedStats from './components/AnimatedStats';
import Projects from './components/Projects';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import ExitIntentPopup from './components/ExitIntentPopup';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return (
          <>
            <Navbar onLogoClick={() => handleNavigate('home')} />
            <Privacy />
            <Footer onNavigate={handleNavigate} />
          </>
        );
      case 'terms':
        return (
          <>
            <Navbar onLogoClick={() => handleNavigate('home')} />
            <Terms />
            <Footer onNavigate={handleNavigate} />
          </>
        );
      default:
        return (
          <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <AnimatedStats />
            <Projects />
            <Team />
            <FAQ />
            <Contact />
            <Newsletter />
            <Footer onNavigate={handleNavigate} />
            <ExitIntentPopup />
          </>
        );
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

export default App;
