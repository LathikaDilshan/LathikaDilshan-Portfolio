import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'MERN-ThinkBoard',
    description: 'A full-stack note-taking application built using the MERN stack with functional APIs and secure data handling.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Postman'],
    githubUrl: 'https://github.com/LathikaDilshan/MERN-ThinkBoard',
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'Inklet',
    description: 'A full-stack backend web application built using Spring Boot framework following robust MVC architecture principles.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Java', 'Spring Boot', 'Spring MVC', 'REST API'],
    githubUrl: 'https://github.com/LathikaDilshan/Inklet-Social-Media-App',
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'HR Management System',
    description: 'A comprehensive desktop system developed to intelligently manage employee records, attendance, and payroll data.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['C#', '.NET', 'SQL Server'],
    githubUrl: 'https://github.com/LathikaDilshan/E-channeling-web-site',
    liveUrl: '#'
  },
  {
    id: 4,
    title: 'Parkinsons Detection AI',
    description: 'An AI model developed for the early detection of Parkinson\'s Disease (PD) using advanced acoustic vocal analysis techniques.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/LathikaDilshan/parkinsons-early-detection-acoustic-analysis',
    liveUrl: '#'
  }
];

const Projects = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <h2 className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
        Featured <span className="highlight">Projects</span>
      </h2>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card glass-card ${isVisible ? `animate-fade-in delay-${(index + 1) * 100}` : 'opacity-0'}`}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="GitHub Repository">
                    <Github size={24} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-icon-link" aria-label="Live Demo">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
