import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll('.service-card');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: 'fa-brain',
      title: 'AI & ML',
      desc: 'Custom AI solutions that automate and innovate.',
      color: 'var(--neon-blue)'
    },
    {
      icon: 'fa-chart-pie',
      title: 'Analytics',
      desc: 'Transforming raw data into actionable insights.',
      color: 'var(--neon-purple)'
    },
    {
      icon: 'fa-cloud',
      title: 'SaaS',
      desc: 'Scalable cloud platforms for modern businesses.',
      color: 'var(--neon-green)'
    },
    {
      icon: 'fa-robot',
      title: 'Robotics',
      desc: 'Advanced robotics solutions for automation and precision.',
      color: 'var(--neon-red)'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Expertise</h2>
          <div className="underline"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index} style={{ '--accent-color': service.color }}>
              <div className="card-inner">
                <div className="icon-container electric-arc-container">
                  <div className="icon-glow"></div>
                  <div className="icon-electric-wrapper">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="card-footer">
                  <span className="learn-text">Explore</span>
                  <i className="fas fa-arrow-right arrow-icon"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services {
          background-color: var(--bg-primary);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2px; /* For potential gradient border */
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .service-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card-inner {
          background: var(--bg-secondary);
          border-radius: calc(var(--radius-lg) - 2px);
          padding: 2.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: background 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-color);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .service-card:hover .card-inner {
          background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%);
        }

        .icon-container {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 2rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .icon-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--accent-color);
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover .icon-glow {
          opacity: 0.4;
        }

        .service-card:hover .icon-container {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }

        .icon-container i {
          font-size: 1.8rem;
          color: var(--text-primary);
          z-index: 1;
          transition: color 0.3s ease;
        }

        .service-card:hover .icon-container i {
          color: var(--accent-color);
        }

        h3 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        p {
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
          line-height: 1.6;
          flex-grow: 1;
        }

        .card-footer {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-top: auto;
        }

        .learn-text {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .arrow-icon {
          font-size: 0.9rem;
          color: var(--accent-color);
          transition: transform 0.3s ease;
        }

        .service-card:hover .arrow-icon {
          transform: translateX(5px);
        }
      `}</style>
    </section>
  );
};

export default Services;
