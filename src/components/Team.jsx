import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Allson',
      position: 'CEO & Founder',
      bio: "Visionary leader driving strategic direction.",
      img: '/john.jpeg', // User needs to ensure this file exists
      linkedin: 'https://www.linkedin.com/in/johnallson/'
    },
    {
      name: 'Alex Matthew',
      position: 'CTO',
      bio: 'Expert in AI and robotics innovation.',
      img: '/alex.jpg', // Placeholder for user upload
      linkedin: 'https://www.linkedin.com/in/alexmattyou/'
    },
    {
      name: 'Sam Davi',
      position: 'COO',
      bio: 'Operations and data analytics specialist.',
      img: '/sam.jpg', // Placeholder for user upload
      linkedin: 'https://www.linkedin.com/in/samdavi007/'
    },
    {
      name: 'Vishal Kumar',
      position: 'Lead Architect',
      bio: 'Scalable SaaS platform development.',
      img: '/vishal.jpg', // Placeholder for user upload
      linkedin: 'https://www.linkedin.com/in/vishal-kumar-563661215/'
    },
    {
      name: 'Balamurugan',
      position: 'Data Lead',
      bio: 'Advanced data modeling and insights.',
      img: '/bala.jpeg', // User needs to ensure this file exists
      linkedin: 'https://www.linkedin.com/in/balamurugan-m-32b205322/'
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-header">
          <h2>The Minds</h2>
          <div className="underline"></div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="member-avatar">
                {member.img ? (
                  <img
                    src={member.img}
                    alt={member.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="avatar-placeholder" style={{ display: member.img ? 'none' : 'flex' }}>
                  {member.name.charAt(0)}
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <span className="role">{member.position}</span>
                <p>{member.bio}</p>
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    <div className="icon-electric-wrapper">
                      <i className="fab fa-linkedin"></i>
                    </div>
                    Connect
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team {
          background-color: var(--bg-primary);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2.5rem;
        }

        .team-card {
          text-align: center;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          background: transparent;
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .team-card:hover {
          background: var(--bg-card);
          border-color: var(--border-color);
          transform: translateY(-5px);
        }

        .member-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          overflow: hidden;
          background: #111;
          border: 2px solid var(--border-color);
          transition: border-color 0.3s ease;
          position: relative;
        }

        .team-card:hover .member-avatar {
          border-color: var(--neon-blue);
        }

        .member-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .team-card:hover .member-avatar img {
          filter: grayscale(0%);
        }

        .avatar-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-secondary);
          background: #1a1a1a;
          position: absolute;
          top: 0;
          left: 0;
        }

        h3 {
          font-size: 1.4rem;
          margin-bottom: 0.4rem;
          font-weight: 700;
        }

        .role {
          display: block;
          font-size: 0.85rem;
          color: var(--neon-blue);
          margin-bottom: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .linkedin-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .linkedin-link:hover {
          color: #0077b5; /* LinkedIn Blue */
        }
      `}</style>
    </section>
  );
};

export default Team;
