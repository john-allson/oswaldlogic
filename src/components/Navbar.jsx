import React, { useState, useEffect } from 'react';

const Navbar = ({ onLogoClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogoClick = (e) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#services' },
    { name: 'Work', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    setIsOpen(false);

    // If we're on a legal page (Privacy/Terms), navigate home first
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick(); // Navigate to home

      // Wait for page to render, then scroll to section
      setTimeout(() => {
        const targetId = href.substring(1); // Remove the #
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="logo" onClick={handleLogoClick} style={{ cursor: onLogoClick ? 'pointer' : 'default' }}>
          <span className="logo-text">Oswald Stack</span>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <i className="fas fa-times close-menu" onClick={toggleMenu}></i>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={activeLink === link.href.substring(1) ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <i className="fas fa-bars open-menu" onClick={toggleMenu}></i>
      </nav>


      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 2rem 0;
          transition: all 0.3s ease;
        }
        
        .header.scrolled {
          padding: 1rem 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5%;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .logo {
          display: flex;
          align-items: center;
        }

        .logo-text {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.5px;
          transition: transform 0.3s ease;
        }

        .logo:hover .logo-text {
          transform: scale(1.05);
        }

        .header.scrolled .logo-text {
          font-size: 1.5rem;
        }
        
        .nav-links ul {
          display: flex;
          gap: 2.5rem;
        }
        
        .nav-links a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.3s ease;
          position: relative;
        }
        
        .nav-links a:hover,
        .nav-links a.active {
          color: var(--text-primary);
        }
        
        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--neon-blue);
          border-radius: 2px;
        }
        
        .open-menu, .close-menu {
          display: none;
          font-size: 1.5rem;
          color: var(--text-primary);
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .open-menu { display: block; }
          
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: var(--bg-primary);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          
          .nav-links.active { right: 0; }
          .nav-links ul { flex-direction: column; text-align: center; gap: 2rem; }
          .close-menu { display: block; position: absolute; top: 2rem; right: 2rem; }
          .nav-links a { font-size: 1.5rem; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
