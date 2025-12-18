import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      category: 'robotics',
      title: 'Gracemo - Conversational Robot',
      desc: 'AI-powered counseling robot for college students, fine-tuned for mental health support and guidance.',
      tags: ['Robotics', 'AI', 'Counseling']
    },
    {
      category: 'saas',
      title: 'Business Management App',
      desc: 'Flutter-based comprehensive management solution for car consultancy operations and client tracking.',
      tags: ['Flutter', 'SaaS', 'Mobile']
    },
    {
      category: 'saas',
      title: 'Shop Management Software',
      desc: 'Custom CRM solution with advanced features including pending money tracker and client-specific requirements.',
      tags: ['SaaS', 'CRM', 'Custom']
    },
    {
      category: 'data',
      title: 'Santhom Car Consultancy Analytics',
      desc: 'Data-driven solution to identify and shortlist the best car deals using advanced analytics.',
      tags: ['Analytics', 'Data Science']
    },
    {
      category: 'ai',
      title: 'AI Casefile Generator',
      desc: 'Intelligent document automation tool that streamlines casefile creation for legal advocates.',
      tags: ['AI', 'Legal Tech', 'Automation']
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Selected Work</h2>
          <div className="underline"></div>
        </div>

        <div className="filter-bar">
          {['all', 'robotics', 'ai', 'saas', 'data'].map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'data' ? 'Analytics' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-top">
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <div className="arrow-icon electric-arc-container">
                  <div className="icon-electric-wrapper">
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects {
          background-color: var(--bg-primary);
        }

        .filter-bar {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 4rem;
          justify-content: center;
        }

        .filter-pill {
          padding: 0.8rem 2rem;
          border-radius: 100px;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .filter-pill:hover,
        .filter-pill.active {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 320px;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .project-card:hover {
          border-color: var(--text-primary);
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.05);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 3rem;
        }

        .project-tags {
          display: flex;
          gap: 0.6rem;
        }

        .tag {
          font-size: 0.8rem;
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .arrow-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
          color: var(--text-primary);
        }

        .project-card:hover .arrow-icon {
          background: var(--text-primary);
          color: var(--bg-primary);
          transform: rotate(45deg);
        }

        h3 {
          font-size: 1.75rem;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Projects;
