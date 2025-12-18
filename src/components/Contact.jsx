import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear status when user starts typing again
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Using FormSubmit.co - Replace 'YOUR_EMAIL' with your actual email
      const response = await fetch('https://formsubmit.co/ajax/oswald.info.com@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: '✓ Message sent successfully! We\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: '✗ Failed to send message. Please try again or email us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-text">
            <h2>Let's Build the Future.</h2>
            <p>Ready to start your next project? Get in touch with us.</p>

            <div className="contact-details">
              <div className="detail-item">
                <div className="icon-circle electric-arc-container">
                  <div className="icon-electric-wrapper">
                    <i className="fas fa-envelope"></i>
                  </div>
                </div>
                <span>oswald.info.com@gmail.com</span>
              </div>
              <div className="detail-item">
                <div className="icon-circle electric-arc-container">
                  <div className="icon-electric-wrapper">
                    <i className="fas fa-phone"></i>
                  </div>
                </div>
                <span>+91 8637 620660</span>
              </div>
              <div className="detail-item">
                <div className="icon-circle electric-arc-container">
                  <div className="icon-electric-wrapper">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                </div>
                <span>House Of God, Sathankulam, Tuticorin</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn primary-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background-color: var(--bg-primary);
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          background: var(--bg-card);
          padding: 5rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
        }

        h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 800;
        }

        p {
          color: var(--text-secondary);
          margin-bottom: 3.5rem;
          font-size: 1.1rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--neon-blue);
          font-size: 1.2rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        input, textarea {
          width: 100%;
          padding: 1.2rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-main);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: var(--neon-blue);
          box-shadow: 0 0 0 4px rgba(66, 133, 244, 0.1);
        }

        textarea {
          min-height: 180px;
          resize: vertical;
        }

        .status-message {
          padding: 1rem 1.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.95rem;
          font-weight: 500;
          animation: slideIn 0.3s ease;
        }

        .status-message.success {
          background: rgba(36, 193, 224, 0.1);
          border: 1px solid var(--neon-green);
          color: var(--neon-green);
        }

        .status-message.error {
          background: rgba(234, 67, 53, 0.1);
          border: 1px solid var(--neon-red);
          color: var(--neon-red);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        button:disabled:hover {
          box-shadow: 0 4px 15px rgba(66, 133, 244, 0.3);
        }

        @media (max-width: 968px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            padding: 3rem;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
