import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Track event in analytics
        if (window.gtag) {
            window.gtag('event', 'newsletter_signup', {
                method: 'mailto'
            });
        }

        // Open email client with pre-filled subject and body
        const subject = encodeURIComponent('Newsletter Subscription Request');
        const body = encodeURIComponent(`I would like to subscribe to Oswald Stack's weekly tech insights.\n\nEmail: ${email}`);
        window.location.href = `mailto:oswald.info.com@gmail.com?subject=${subject}&body=${body}`;

        // Clear the form
        setEmail('');
        alert('Your email client will open. Please send the email to complete your subscription!');
    };

    return (
        <section className="newsletter">
            <div className="container">
                <div className="newsletter-content">
                    <div className="newsletter-text">
                        <h2>Stay Updated with Tech Insights</h2>
                        <p>Get weekly updates on AI, Robotics, Data Analytics, and industry trends delivered to your inbox.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="newsletter-input"
                        />
                        <button type="submit" className="btn primary-btn">
                            <i className="fas fa-paper-plane"></i> Subscribe
                        </button>
                    </form>

                    <p className="newsletter-note">
                        <i className="fas fa-lock"></i> We respect your privacy. Unsubscribe anytime.
                    </p>
                </div>
            </div>

            <style jsx>{`
        .newsletter {
          background: linear-gradient(135deg, rgba(66, 133, 244, 0.1), rgba(161, 66, 244, 0.1));
          padding: 5rem 0;
        }

        .newsletter-content {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 4rem 3rem;
          text-align: center;
        }

        .newsletter-text h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 800;
        }

        .newsletter-text p {
          color: var(--text-secondary);
          font-size: 1.15rem;
          margin-bottom: 2.5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          max-width: 600px;
          margin: 0 auto 1.5rem;
        }

        .newsletter-input {
          flex: 1;
          padding: 1rem 1.5rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-main);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--neon-blue);
          box-shadow: 0 0 0 4px rgba(66, 133, 244, 0.1);
        }

        .newsletter-form button {
          white-space: nowrap;
        }

        .newsletter-form button i {
          margin-right: 0.5rem;
        }

        .newsletter-note {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0;
        }

        .newsletter-note i {
          color: var(--neon-green);
          margin-right: 0.5rem;
        }

        @media (max-width: 768px) {
          .newsletter {
            padding: 4rem 0;
          }

          .newsletter-content {
            padding: 3rem 2rem;
          }

          .newsletter-text h2 {
            font-size: 2rem;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-form button {
            width: 100%;
          }
        }
      `}</style>
        </section>
    );
};

export default Newsletter;
