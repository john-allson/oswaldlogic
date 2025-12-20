import React, { useState, useEffect, useRef } from 'react';

const AnimatedStats = () => {
    const [counts, setCounts] = useState({
        projects: 0,
        clients: 0,
        satisfaction: 0,
        success: 0
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        { id: 'projects', end: 100000, suffix: '+', prefix: '₹', label: 'Projects Value', duration: 2000 },
        { id: 'clients', end: 5, suffix: '+', prefix: '', label: 'Happy Clients', duration: 1500 },
        { id: 'satisfaction', end: 100, suffix: '%', prefix: '', label: 'Client Satisfaction', duration: 1800 },
        { id: 'success', end: 95, suffix: '%', prefix: '', label: 'Success Rate', duration: 1800 }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounters = () => {
        stats.forEach((stat) => {
            const increment = stat.end / (stat.duration / 16); // 60fps
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.end) {
                    current = stat.end;
                    clearInterval(timer);
                }

                setCounts((prev) => ({
                    ...prev,
                    [stat.id]: Math.floor(current)
                }));
            }, 16);
        });
    };

    const formatNumber = (num, stat) => {
        if (stat.id === 'projects') {
            // Format as currency (₹1L, ₹1.5L, etc.)
            if (num >= 100000) {
                return `${stat.prefix}${(num / 100000).toFixed(num % 100000 === 0 ? 0 : 1)}L`;
            }
            return `${stat.prefix}${num.toLocaleString('en-IN')}`;
        }
        return stat.prefix + num + stat.suffix;
    };

    return (
        <section ref={sectionRef} className="animated-stats">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat) => (
                        <div key={stat.id} className="stat-card">
                            <div className="stat-icon">
                                <i className={`fas ${stat.id === 'projects' ? 'fa-chart-line' :
                                        stat.id === 'clients' ? 'fa-users' :
                                            stat.id === 'satisfaction' ? 'fa-smile' :
                                                'fa-trophy'
                                    }`}></i>
                            </div>
                            <div className="stat-number">{formatNumber(counts[stat.id], stat)}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .animated-stats {
          background: linear-gradient(135deg, rgba(66, 133, 244, 0.05), rgba(161, 66, 244, 0.05));
          padding: 6rem 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          text-align: center;
          padding: 3rem 2rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: var(--neon-blue);
          box-shadow: 0 10px 30px rgba(66, 133, 244, 0.2);
        }

        .stat-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          animation: pulse 2s infinite;
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(66, 133, 244, 0.7);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(66, 133, 244, 0);
          }
        }

        @media (max-width: 768px) {
          .animated-stats {
            padding: 4rem 0;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .stat-card {
            padding: 2rem 1rem;
          }

          .stat-icon {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .stat-label {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default AnimatedStats;
