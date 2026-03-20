import React, { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <h2 className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
        About <span className="highlight">Me</span>
      </h2>

      <div className={`about-content glass-card ${isVisible ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
        <div className="about-text">
          <p>
            Hello! I'm Lathika Dilshan, an Undergraduate Computer Science student with hands-on experience in machine learning projects, backend development, and AI-driven applications. I have a strong understanding of data science fundamentals and practical exposure to building RESTful APIs using FastAPI.
          </p>
          <p>
            My passion lies in developing scalable, data-driven solutions and continuously enhancing my technical expertise. Through academic and technical projects, I've developed strong analytical thinking and problem-solving abilities.
          </p>
          <p>
            I am currently seeking an internship in Data Science, Machine Learning Engineering, or Backend Development to apply my skills in real-world environments.
          </p>

          <div className="about-actions mt-8">
            <a href="https://docs.google.com/document/d/19lYsTXXmsuiykJN6klavPFyl_SLo4H3hs7FHkIvluik/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Download size={20} /> View / Download CV
            </a>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number highlight">4+</span>
            <span className="stat-label">Major Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number highlight">AI/ML</span>
            <span className="stat-label">Core Focus</span>
          </div>
          <div className="stat-item">
            <span className="stat-number highlight">Python/JS</span>
            <span className="stat-label">Tech Stack</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
