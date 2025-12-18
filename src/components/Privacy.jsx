import React from 'react';

const Privacy = () => {
    return (
        <section id="privacy" className="privacy-policy">
            <div className="container">
                <div className="legal-content">
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last Updated: December 18, 2025</p>

                    <div className="section">
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to Oswald Stack ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>
                    </div>

                    <div className="section">
                        <h2>2. Information We Collect</h2>
                        <h3>2.1 Personal Information</h3>
                        <p>We may collect personal information that you voluntarily provide to us when you:</p>
                        <ul>
                            <li>Fill out our contact form</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Request information about our services</li>
                            <li>Engage with us through email or other communication channels</li>
                        </ul>
                        <p>This information may include:</p>
                        <ul>
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Company name</li>
                            <li>Project details and requirements</li>
                        </ul>

                        <h3>2.2 Automatically Collected Information</h3>
                        <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
                        <ul>
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>Referring URLs</li>
                            <li>Pages viewed and time spent on pages</li>
                            <li>Device identifiers</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect for the following purposes:</p>
                        <ul>
                            <li><strong>Service Delivery:</strong> To respond to your inquiries and provide the services you request</li>
                            <li><strong>Communication:</strong> To send you updates, newsletters, and marketing materials (with your consent)</li>
                            <li><strong>Improvement:</strong> To analyze usage patterns and improve our website and services</li>
                            <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security issues</li>
                            <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>4. Data Sharing and Disclosure</h2>
                        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                        <ul>
                            <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business (e.g., email service providers, analytics providers)</li>
                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                            <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </div>

                    <div className="section">
                        <h2>6. Your Privacy Rights</h2>
                        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                        <ul>
                            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                            <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                            <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                            <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time where we rely on consent to process your information</li>
                        </ul>
                        <p>To exercise these rights, please contact us at <a href="mailto:oswald.info.com@gmail.com">oswald.info.com@gmail.com</a></p>
                    </div>

                    <div className="section">
                        <h2>7. Cookies and Tracking Technologies</h2>
                        <p>
                            We may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can control cookie settings through your browser preferences.
                        </p>
                    </div>

                    <div className="section">
                        <h2>8. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                        </p>
                    </div>

                    <div className="section">
                        <h2>9. Children's Privacy</h2>
                        <p>
                            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                        </p>
                    </div>

                    <div className="section">
                        <h2>10. International Data Transfers</h2>
                        <p>
                            Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                        </p>
                    </div>

                    <div className="section">
                        <h2>11. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                        </p>
                    </div>

                    <div className="section">
                        <h2>12. Contact Us</h2>
                        <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
                        <div className="contact-info">
                            <p><strong>Oswald Stack</strong></p>
                            <p>Email: <a href="mailto:oswald.info.com@gmail.com">oswald.info.com@gmail.com</a></p>
                            <p>Phone: <a href="tel:+918637620660">+91 8637 620660</a></p>
                            <p>Address: House Of God, Sathankulam, Tuticorin, India</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .privacy-policy {
          background-color: var(--bg-primary);
          padding: 8rem 0 4rem;
          min-height: 100vh;
        }

        .legal-content {
          max-width: 900px;
          margin: 0 auto;
        }

        h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.1;
          background: linear-gradient(135deg, var(--neon-blue), var(--neon-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .last-updated {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
        }

        .section {
          margin-bottom: 3rem;
        }

        h2 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem;
          color: var(--neon-blue);
        }

        p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 1rem;
          font-size: 1.05rem;
        }

        ul {
          list-style: disc;
          margin-left: 2rem;
          margin-bottom: 1rem;
        }

        li {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 0.5rem;
          font-size: 1.05rem;
        }

        strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        a {
          color: var(--neon-blue);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        a:hover {
          color: var(--neon-purple);
          text-decoration: underline;
        }

        .contact-info {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 2rem;
          margin-top: 1rem;
        }

        .contact-info p {
          margin-bottom: 0.5rem;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .privacy-policy {
            padding: 6rem 0 3rem;
          }

          h1 {
            font-size: 2.5rem;
          }

          h2 {
            font-size: 1.5rem;
          }

          h3 {
            font-size: 1.2rem;
          }

          p, li {
            font-size: 1rem;
          }

          ul {
            margin-left: 1.5rem;
          }

          .contact-info {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.3rem;
          }

          .section {
            margin-bottom: 2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Privacy;
