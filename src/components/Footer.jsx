import React from 'react';

const Footer = ({ onNavigate }) => {
  const handleLegalClick = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Oswald Stack</h2>
            <p>Innovating the Future.</p>
          </div>

          <div className="footer-nav">
            <div className="nav-col">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="nav-col">
              <h4>Services</h4>
              <a href="#services">Robotics</a>
              <a href="#services">AI</a>
            </div>
            <div className="nav-col">
              <h4>Legal</h4>
              <a href="#privacy" onClick={(e) => handleLegalClick(e, 'privacy')}>Privacy</a>
              <a href="#terms" onClick={(e) => handleLegalClick(e, 'terms')}>Terms</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Oswald Stack. All Rights Reserved.</p>
        </div>
      </div>

      <style jsx>{`
        footer {
          background-color: var(--bg-primary);
          padding: 6rem 0 3rem;
          border-top: 1px solid var(--border-color);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 4rem;
          margin-bottom: 5rem;
        }

        .footer-brand h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          letter-spacing: -0.03em;
        }

        .footer-brand p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .footer-nav {
          display: flex;
          gap: 5rem;
          flex-wrap: wrap;
        }

        .nav-col {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          color: var(--text-tertiary);
          margin-bottom: 0.5rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        a {
          color: var(--text-secondary);
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        a:hover {
          color: var(--text-primary);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 3rem;
          border-top: 1px solid var(--border-color);
          color: var(--text-tertiary);
          font-size: 0.9rem;
        }
      `}</style>
    </footer >
  );
};

export default Footer;
