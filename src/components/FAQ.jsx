import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How much do your projects typically cost?',
            answer: 'Our projects range from ₹2,00,000 for starter AI/ML solutions to ₹30,00,000+ for enterprise-scale implementations. The exact cost depends on complexity, timeline, and your specific requirements. We offer tiered packages for Al/ ML (₹2-15L), Robotics (₹3-25L), Data Analytics (₹1.5-10L), and SaaS Development (₹5-30L). Contact us for a free consultation and customized quote.'
        },
        {
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary based on scope. A Proof of Concept takes 4-8 weeks, mid-sized implementations take 3-6 months, and enterprise solutions can take 6-12 months. We provide detailed project timelines during the planning phase and deliver in phases with regular check-ins so you can track progress.'
        },
        {
            question: 'Do you offer post-launch support and maintenance?',
            answer: 'Yes! All projects include complimentary support for 1-6 months depending on package tier. We also offer ongoing maintenance retainers starting at ₹50,000/month, which include monitoring, updates, bug fixes, and feature enhancements. Our goal is your long-term success.'
        },
        {
            question: 'What industries do you work with?',
            answer: 'We primarily serve Manufacturing & Industrial Automation, Healthcare & Pharma, E-commerce & Retail, Financial Services, Logistics & Supply Chain, and Education/EdTech sectors. However, our solutions are adaptable to any industry looking to leverage AI, robotics, or data analytics.'
        },
        {
            question: 'Can you integrate with our existing systems?',
            answer: 'Absolutely. We specialize in seamless integrations with existing ERP, CRM, databases, and legacy systems. We use APIs, webhooks, and modern integration tools to ensure your new solution works harmoniously with your current tech stack without disruption.'
        },
        {
            question: 'What is your payment structure?',
            answer: 'We typically follow a milestone-based payment structure: 30% upon project commencement, 40% at mid-project milestones, and 30% upon final delivery. For larger projects, we can customize payment terms. We also offer retainer models for ongoing work at ₹2-5 lakhs/month.'
        },
        {
            question: 'Do you provide training for our team?',
            answer: 'Yes, comprehensive training is included in all our packages. We provide hands-on workshops, documentation, and video tutorials to ensure your team can effectively use and maintain the solution. We also offer ongoing training support as part of maintenance packages.'
        },
        {
            question: 'Can we start with a small pilot project?',
            answer: 'Definitely! We recommend starting with a Proof of Concept (PoC) or pilot project to validate the solution before full-scale implementation. This reduces risk, demonstrates ROI quickly (typically within 1-2 months), and allows you to experience our expertise firsthand.'
        },
        {
            question: 'What makes Oswald Stack different from competitors?',
            answer: 'We combine deep technical expertise across AI, Robotics, Analytics, and SaaS with a results-driven approach focused on measurable ROI. Unlike generic agencies, we understand complex business problems and deliver solutions that pay for themselves within 6-12 months through cost savings and efficiency gains.'
        },
        {
            question: 'How do I get started?',
            answer: 'Simply schedule a free 30-minute consultation via our contact form, email (oswald.info.com@gmail.com), phone (+91 8637 620660), or WhatsApp. We\'ll discuss your challenges, explore potential solutions, and provide a preliminary assessment—completely free with no obligation.'
        }
    ];

    return (
        <section id="faq" className="faq">
            <div className="container">
                <div className="section-header">
                    <h2>Frequently Asked Questions</h2>
                    <div className="underline"></div>
                    <p className="section-subtitle">Got questions? We have answers.</p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <p>Still have questions?</p>
                    <a href="#contact" className="btn primary-btn">Contact Us</a>
                </div>
            </div>

            <style jsx>{`
        .faq {
          background-color: var(--bg-primary);
          padding: 8rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: 800;
        }

        .underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple));
          margin: 1.5rem auto;
          border-radius: 2px;
        }

        .section-subtitle {
          color: var(--text-secondary);
          font-size: 1.2rem;
        }

        .faq-list {
          max-width: 900px;
          margin: 0 auto 4rem;
        }

        .faq-item {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          margin-bottom: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .faq-item:hover {
          border-color: var(--neon-blue);
          box-shadow: 0 4px 20px rgba(66, 133, 244, 0.1);
        }

        .faq-question {
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }

        .faq-question h3 {
          font-size: 1.15rem;
          font-weight: 600;
          margin: 0;
          flex: 1;
        }

        .faq-question i {
          color: var(--neon-blue);
          font-size: 1rem;
          transition: transform 0.3s ease;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
        }

        .faq-item.active .faq-answer {
          max-height: 500px;
          padding: 0 2rem 1.5rem;
        }

        .faq-answer p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin: 0;
        }

        .faq-cta {
          text-align: center;
          padding: 3rem 2rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          max-width: 600px;
          margin: 0 auto;
        }

        .faq-cta p {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .faq {
            padding: 5rem 0;
          }

          .section-header h2 {
            font-size: 2.25rem;
          }

          .faq-question {
            padding: 1.25rem 1.5rem;
          }

          .faq-question h3 {
            font-size: 1rem;
          }

          .faq-item.active .faq-answer {
            padding: 0 1.5rem 1.25rem;
          }
        }
      `}</style>
        </section>
    );
};

export default FAQ;
