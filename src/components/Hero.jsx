import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  // Particle Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Mouse state
    let mouse = {
      x: null,
      y: null,
      radius: 200 // Increased radius for better visibility
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Track mouse movement with coordinate correction
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Reset mouse when leaving window
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1; // Slightly larger particles
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`; // More visible
      }

      update() {
        // Normal movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary wrap
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Mouse interaction
        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;

            // Repulsion effect
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      // Increase particle count slightly
      const numberOfParticles = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(66, 133, 244, ${0.15 - distance / 1000})`; // Increased opacity
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        if (mouse.x != null) {
          let dx = mouse.x - particles[i].x;
          let dy = mouse.y - particles[i].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            ctx.beginPath();
            // Stronger connection to mouse
            ctx.strokeStyle = `rgba(36, 193, 224, ${0.5 - distance / mouse.radius})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      <div className="background-effects">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="hero-content" ref={titleRef}>
        <div className="pill-badge">
          <span className="dot"></span>
          <span className="badge-text">Ready to Build Your Project</span>
        </div>
        <h1>
          Defy Limits. <br />
          <span className="gradient-text">Build the Future.</span>
        </h1>
        <p>
          We engineer the impossible. Robotics, AI, and Data Solutions that propel your business beyond gravity.
        </p>

        <div className="cta-group">
          <a href="#services" className="btn primary-btn">
            Start Your Journey
          </a>
          <a href="#contact" className="btn secondary-btn">Contact Us</a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 5%;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .particle-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .background-effects {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.3;
        }

        .orb-1 {
          top: -10%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--neon-blue), transparent 70%);
          animation: float 20s infinite alternate;
        }

        .orb-2 {
          bottom: -10%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--neon-purple), transparent 70%);
          animation: float 25s infinite alternate-reverse;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1000px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .pill-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.6rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 100px;
          margin-bottom: 2.5rem;
          backdrop-filter: blur(10px);
        }

        .dot {
          width: 8px;
          height: 8px;
          background-color: var(--neon-green);
          border-radius: 50%;
          margin-right: 10px;
          box-shadow: 0 0 10px var(--neon-green);
          animation: pulse 2s infinite;
        }
        
        .badge-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: 0.5px;
        }

        h1 {
          font-size: 6rem;
          line-height: 1.05;
          font-weight: 800;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
        }

        .gradient-text {
          background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple), var(--neon-green));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-move 5s linear infinite;
        }

        p {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 3.5rem;
          line-height: 1.6;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-group {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 968px) {
          h1 { font-size: 4rem; }
          p { font-size: 1.2rem; }
        }

        @media (max-width: 768px) {
          h1 { font-size: 3rem; }
          .cta-group { flex-direction: column; align-items: center; }
          .btn { width: 100%; max-width: 300px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
