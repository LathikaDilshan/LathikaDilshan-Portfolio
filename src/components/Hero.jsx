import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="greeting">Hello, I'm</span>
          <h1 className="name">
            <span className="highlight">Lathika Dilshan</span>
          </h1>
          <h2 className="role delay-100">CS Undergraduate & Developer</h2>
          <p className="description delay-200">
            Passionate about Machine Learning, Backend Development, and building scalable, AI-driven applications.
          </p>
          <div className="hero-actions delay-300">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className={`hero-image-container ${isVisible ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
          <div className="image-wrapper float-animation">
            {/* The user can replace this placeholder src with their actual photo path like '/profile.jpg' */}
            <div className="profile-placeholder">
              <img 
                 src="https://media.licdn.com/dms/image/v2/D4E03AQGCJVCqKIRz3g/profile-displayphoto-crop_800_800/B4EZe6vgQwHgAI-/0/1751184708152?e=1774483200&v=beta&t=gz145_2GBNmStjRR-9VWpR-zBedXi7cBuiUKDPHFHeM" 
                 alt="Lathika Dilshan" 
                 className="profile-img"
              />
              <div className="glow-ring"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
