import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>Redefining Possibility.</h2>
            <p className="lead">
              Oswald Stack isn't just a technology company. We are an innovation lab dedicated to solving the world's most complex problems through code, data, and robotics.
            </p>
            <p>
              Founded with a vision to transform how businesses leverage technology, we combine expertise in cutting-edge fields to deliver solutions that drive innovation and efficiency.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="values-wrapper">
            <div className="value-card">
              <div className="icon-box blue electric-arc-container">
                <div className="icon-electric-wrapper">
                  <i className="fas fa-lightbulb"></i>
                </div>
              </div>
              <h4>Innovation</h4>
              <p>Pushing boundaries to create new possibilities.</p>
            </div>
            <div className="value-card">
              <div className="icon-box purple electric-arc-container">
                <div className="icon-electric-wrapper">
                  <i className="fas fa-shield-alt"></i>
                </div>
              </div>
              <h4>Integrity</h4>
              <p>Building trust through honest practices.</p>
            </div>
            <div className="value-card">
              <div className="icon-box green electric-arc-container">
                <div className="icon-electric-wrapper">
                  <i className="fas fa-users"></i>
                </div>
              </div>
              <h4>Collaboration</h4>
              <p>Working together for extraordinary results.</p>
            </div>
            <div className="value-card">
              <div className="icon-box red electric-arc-container">
                <div className="icon-electric-wrapper">
                  <i className="fas fa-rocket"></i>
                </div>
              </div>
              <h4>Excellence</h4>
              <p>Delivering the highest quality in everything.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background-color: var(--bg-primary);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .about-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .about.visible .about-content {
          opacity: 1;
          transform: translateY(0);
        }

        h2 {
          font-size: 3.5rem;
          margin-bottom: 2rem;
          line-height: 1.1;
          font-weight: 800;
        }

        .lead {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .stats-grid {
          display: flex;
          gap: 4rem;
          margin-top: 4rem;
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
        }

        .stat-item h3 {
          font-size: 3rem;
          color: var(--neon-blue);
          margin-bottom: 0.5rem;
          font-weight: 800;
        }

        .stat-item p {
          font-size: 0.9rem;
          margin-bottom: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .values-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .value-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 2.5rem;
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
        }

        .value-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--text-primary);
          transform: translateY(-5px);
        }

        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }

        .icon-box.blue { background: rgba(66, 133, 244, 0.1); color: var(--neon-blue); }
        .icon-box.purple { background: rgba(161, 66, 244, 0.1); color: var(--neon-purple); }
        .icon-box.green { background: rgba(36, 193, 224, 0.1); color: var(--neon-green); }
        .icon-box.red { background: rgba(234, 67, 53, 0.1); color: var(--neon-red); }

        .value-card h4 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .value-card p {
          font-size: 0.95rem;
          margin-bottom: 0;
          line-height: 1.5;
        }

        /* Tablet Styles */
        @media (max-width: 968px) {
          .about-grid { 
            grid-template-columns: 1fr; 
            gap: 3rem; 
          }

          h2 {
            font-size: 2.5rem;
          }

          .values-wrapper {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }

          .stats-grid {
            gap: 2rem;
          }
        }

        /* Mobile Styles */
        @media (max-width: 640px) {
          .about-grid {
            gap: 2rem;
          }

          h2 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          .lead {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          p {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }

          .stats-grid {
            flex-direction: column;
            gap: 1.5rem;
            margin-top: 2rem;
          }

          .stat-item h3 {
            font-size: 2.5rem;
          }

          .stat-item p {
            font-size: 0.85rem;
          }

          .values-wrapper {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .value-card {
            padding: 2rem;
          }

          .value-card h4 {
            font-size: 1.15rem;
          }

          .value-card p {
            font-size: 0.9rem;
          }

          .icon-box {
            width: 45px;
            height: 45px;
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          h2 {
            font-size: 1.75rem;
          }

          .lead {
            font-size: 1rem;
          }

          .value-card {
            padding: 1.5rem;
          }

          .stat-item h3 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
