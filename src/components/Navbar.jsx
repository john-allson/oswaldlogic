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
          <svg width="200" height="60" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
            <defs>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="gradient-stop-1" />
                <stop offset="50%" className="gradient-stop-2" />
                <stop offset="100%" className="gradient-stop-3" />
              </linearGradient>
            </defs>

            {/* Oswald text */}
            <text x="10" y="38" fontFamily="'Arial Black', sans-serif" fontSize="36" fontWeight="900" fill="url(#textGradient)" letterSpacing="-1">Oswald</text>

            {/* Growth Arrow on O */}
            <g transform="translate(18, 12)">
              {/* Arrow shaft */}
              <path d="M 0,8 L 12,0" stroke="url(#textGradient)" strokeWidth="3" strokeLinecap="round" className="arrow-shaft" />
              {/* Arrow head */}
              <path d="M 8,-2 L 12,0 L 10,4" stroke="url(#textGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" className="arrow-head" />
            </g>

            {/* Stack text with integrated cubes */}
            <text x="10" y="72" fontFamily="'Arial Black', sans-serif" fontSize="36" fontWeight="900" fill="url(#textGradient)" letterSpacing="-1">St</text>

            {/* 3D Stacked Cubes (replacing 'a' in Stack) */}
            <g transform="translate(70, 48)">
              {/* Bottom cube */}
              <path d="M 0,12 L 10,6 L 10,16 L 0,22 Z" className="cube-left" />
              <path d="M 10,6 L 20,12 L 20,22 L 10,16 Z" className="cube-right" />
              <path d="M 0,12 L 10,6 L 20,12 L 10,18 Z" className="cube-top" />

              {/* Top cube */}
              <path d="M 0,0 L 10,-6 L 10,4 L 0,10 Z" className="cube-left" />
              <path d="M 10,-6 L 20,0 L 20,10 L 10,4 Z" className="cube-right" />
              <path d="M 0,0 L 10,-6 L 20,0 L 10,6 Z" className="cube-top" />
            </g>

            {/* Continue 'ck' after cubes */}
            <text x="100" y="72" fontFamily="'Arial Black', sans-serif" fontSize="36" fontWeight="900" fill="url(#textGradient)" letterSpacing="-1">ck</text>
          </svg>
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

        .logo-svg {
          height: 50px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .logo:hover .logo-svg {
          transform: scale(1.05);
        }

        .header.scrolled .logo-svg {
          height: 42px;
        }

        /* Dynamic color animation for gradient stops */
        @keyframes colorShift {
          0% {
            stop-color: #ff1cf7;
          }
          25% {
            stop-color: #4285f4;
          }
          50% {
            stop-color: #24c1e0;
          }
          75% {
            stop-color: #a142f4;
          }
          100% {
            stop-color: #ff1cf7;
          }
        }

        .gradient-stop-1 {
          stop-color: #ff1cf7;
          stop-opacity: 1;
          animation: colorShift 8s ease-in-out infinite;
        }

        .gradient-stop-2 {
          stop-color: #b249f8;
          stop-opacity: 1;
          animation: colorShift 8s ease-in-out infinite 2.6s;
        }

        .gradient-stop-3 {
          stop-color: #a142f4;
          stop-opacity: 1;
          animation: colorShift 8s ease-in-out infinite 5.2s;
        }

        /* Cube faces with dynamic colors - matching original design */
        .cube-left {
          fill: #ff1cf7;
          opacity: 0.7;
          animation: colorShift 8s ease-in-out infinite;
        }

        .cube-right {
          fill: #b249f8;
          opacity: 0.85;
          animation: colorShift 8s ease-in-out infinite 2.6s;
        }

        .cube-top {
          fill: #a142f4;
          opacity: 1;
          animation: colorShift 8s ease-in-out infinite 5.2s;
        }

        /* Growth Arrow with dynamic colors */
        .arrow-shaft,
        .arrow-head {
          stroke: #ff1cf7;
          animation: arrowColorShift 8s ease-in-out infinite;
        }

        @keyframes arrowColorShift {
          0% {
            stroke: #ff1cf7;
          }
          25% {
            stroke: #4285f4;
          }
          50% {
            stroke: #24c1e0;
          }
          75% {
            stroke: #a142f4;
          }
          100% {
            stroke: #ff1cf7;
          }
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
