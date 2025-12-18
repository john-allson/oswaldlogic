import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

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
            <Projects />
            <Team />
            <Contact />
            <Footer onNavigate={handleNavigate} />
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
