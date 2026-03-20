import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here
    alert("Thanks for your message! This is a demo so it wasn't actually sent.");
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <h2 className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
        Get In <span className="highlight">Touch</span>
      </h2>
      
      <div className="contact-container">
        <div className={`contact-info ${isVisible ? 'animate-fade-in delay-100' : 'opacity-0'}`}>
          <h3>Let's talk about everything!</h3>
          <p className="contact-desc">
            Feel free to reach out for collaborations, opportunities, or just to say hello. I'll get back to you as soon as possible.
          </p>
          
          <div className="info-cards">
            <div className="info-card glass-card">
              <Mail className="info-icon" size={24} />
              <div>
                <h4>Email</h4>
                <p>lathikadilshanoffice@gmail.com</p>
              </div>
            </div>
            
            <div className="info-card glass-card">
              <Phone className="info-icon" size={24} />
              <div>
                <h4>Phone</h4>
                <p>+94 75 240 9128</p>
              </div>
            </div>
            
            <div className="info-card glass-card">
              <MapPin className="info-icon" size={24} />
              <div>
                <h4>Location</h4>
                <p>Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`contact-form-container glass-card ${isVisible ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="How can I help you?" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
            </div>
            
            <button type="submit" className="btn-primary form-submit">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
