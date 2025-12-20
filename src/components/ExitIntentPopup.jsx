import React, { useState, useEffect } from 'react';

const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const seen = localStorage.getItem('exitPopupSeen');
    if (seen) {
      setHasSeenPopup(true);
      return;
    }

    // Timeout to show popup after 1 minute
    const timeout = setTimeout(() => {
      if (!hasSeenPopup) {
        setShowPopup(true);
      }
    }, 60000); // 60 seconds = 1 minute

    // Exit intent detection
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasSeenPopup) {
        setShowPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasSeenPopup]);

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem('exitPopupSeen', 'true');
    setHasSeenPopup(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track event in analytics
    if (window.gtag) {
      window.gtag('event', 'lead_capture', {
        method: 'exit_intent_popup'
      });
    }

    // Open email client with pre-filled consultation request
    const subject = encodeURIComponent('Free 30-Minute Consultation Request');
    const body = encodeURIComponent(`Hi,\n\nI would like to schedule a FREE 30-minute consultation to discuss how AI, Robotics, or Data Analytics can transform my business.\n\nEmail: ${email}\n\nPlease send me available time slots.\n\nThank you!`);
    window.location.href = `mailto:oswald.info.com@gmail.com?subject=${subject}&body=${body}`;

    // Show success message
    setTimeout(() => {
      alert('Your email client will open. Please send the email to complete your consultation request!');
      handleClose();
      setIsSubmitting(false);
    }, 500);
  };

  if (!showPopup) return null;

  return (
    <>
      <div className="popup-overlay" onClick={handleClose}></div>
      <div className="popup-container">
        <button className="popup-close" onClick={handleClose} aria-label="Close popup">
          <i className="fas fa-times"></i>
        </button>

        <div className="popup-content">
          <div className="popup-icon">
            <i className="fas fa-rocket"></i>
          </div>

          <h2>Wait! Before You Go...</h2>
          <p>Get a <strong>FREE 30-Minute Consultation</strong> to discuss how AI, Robotics, or Data Analytics can transform your business.</p>

          <form onSubmit={handleSubmit} className="popup-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="popup-input"
            />
            <button
              type="submit"
              className="popup-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
            </button>
          </form>

          <p className="popup-note">
            <i className="fas fa-check-circle"></i> No credit card required
            <span className="popup-separator">•</span>
            <i className="fas fa-check-circle"></i> 100% Free
          </p>
        </div>

        <style jsx>{`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
            z-index: 9998;
            animation: fadeIn 0.3s ease;
          }

          .popup-container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 500px;
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-lg);
            padding: 3rem 2rem;
            z-index: 9999;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            animation: slideUp 0.4s ease;
          }

          .popup-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            color: var(--text-primary);
            font-size: 1.2rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .popup-close:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: rotate(90deg);
          }

          .popup-content {
            text-align: center;
          }

          .popup-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            animation: pulse 2s infinite;
          }

          .popup-content h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: 800;
          }

          .popup-content p {
            color: var(--text-secondary);
            margin-bottom: 2rem;
            font-size: 1.1rem;
            line-height: 1.6;
          }

          .popup-content p strong {
            color: var(--neon-blue);
          }

          .popup-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .popup-input {
            padding: 1rem 1.5rem;
            background: var(--bg-primary);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            color: var(--text-primary);
            font-family: var(--font-main);
            font-size: 1rem;
            transition: all 0.3s ease;
          }

          .popup-input:focus {
            outline: none;
            border-color: var(--neon-blue);
            box-shadow: 0 0 0 4px rgba(66, 133, 244, 0.1);
          }

          .popup-button {
            padding: 1rem 2rem;
            background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
            color: white;
            border: none;
            border-radius: var(--radius-sm);
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .popup-button:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(66, 133, 244, 0.4);
          }

          .popup-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .popup-note {
            font-size: 0.9rem;
            color: var(--text-secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 0;
          }

          .popup-note i {
            color: var(--neon-green);
            font-size: 0.8rem;
          }

          .popup-separator {
            color: var(--border-color);
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translate(-50%, -40%);
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%);
            }
          }

          @keyframes pulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(66, 133, 244, 0.7);
            }
            50% {
              box-shadow: 0 0 0 20px rgba(66, 133, 244, 0);
            }
          }

          @media (max-width: 640px) {
            .popup-container {
              padding: 2rem 1.5rem;
            }

            .popup-content h2 {
              font-size: 1.5rem;
            }

            .popup-content p {
              font-size: 1rem;
            }

            .popup-icon {
              width: 60px;
              height: 60px;
              font-size: 1.5rem;
            }

            .popup-note {
              flex-direction: column;
              gap: 0.25rem;
            }

            .popup-separator {
              display: none;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default ExitIntentPopup;
