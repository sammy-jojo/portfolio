import React, { useState } from 'react';
import './App.css';
import product2 from './assets/product2.png';
import product1 from './assets/product1.png';
import product3 from './assets/product3.png';
import product4 from './assets/product4.png';
import { Link } from 'react-router-dom';
import poo from './assets/poo.jpg';

// Inline SVG icons to avoid external dependencies and ensure functionality.
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 17 2.22A13.43 13.43 0 0 0 12 2c-1.63 0-3.26.2-4.8.59-1.39-.45-2.3-1.2-3.3-2.18A5.07 5.07 0 0 0 4 1a5.44 5.44 0 0 0-1.07 3.65c0 5.41 3.3 6.6 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
    <path d="M22 6L12 13 2 6" />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// New components for each page
const AboutSection = ({ onNavigate }) => (
  <section id="about" className="about-section">
    <div className="about-container">
      <div className="about-text">
        <h1 className="about-title">
          Hi, I'm <br /><span className="highlight">Samuel G.</span>
        </h1>
        <p className="about-description">
          A passionate web developer with a knack for creating clean, user-friendly
          experiences. <br /> <br /> 
          {/* It's fun, a bit challenging but rewarding, I specialize in front-end development using modern frameworks like React to bring designs to life.<br /><br />  */}
          As a creative problem-solver, I love building beautiful and web applications that are not only visually stunning but also highly performant and accessible.

        </p>
        <div className="about-buttons">
          <button onClick={() => onNavigate('projects')} className="button button-primary">
            View My Work
          </button>
          <button onClick={() => onNavigate('contact')} className="button button-secondary">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="profile-image-container">
        <div className="profile-image-wrapper">
          <img src={poo} alt="Samuel G. Profile" className="profile-image" />
        </div>
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="projects-section">
    <div className="section-header">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">
        A selection of my recent work, showcasing my skills in web development and design.
      </p>
    </div>
    <div className="projects-grid">
      {/* Project Card 1 */}
      <div className="project-card">
        <img src={product1} alt="Project 1" className="project-image" />
        <div className="project-card-content">
          <h3 className="project-title">Pear SDC</h3>
          <p className="project-description">This is a website for, a company focused on "Empowering our Future Through Science and Technology."
            <br/>
The site is designed to showcase the company's services and mission. It is structured into several key sections:
<br/>
Mission & Vision: An area that outlines the company's core principles.
<br/>
Programs & Services: A detailed breakdown of their offerings, including Mentorship, Training, Cutting-edge Technology, and Creative Solutions.
<br/>
FAQ/Business Practices: A collapsible section that answers common questions.

Footer: Standard contact and social media information.</p>
 <a href="https://sammy-jojo.github.io/pear-sdc/" target='_blank' className="project-link">
            <span>View Project</span>
          </a>
        </div>
      </div>
      {/* Project Card 2 */}
      {/* <div className="project-card">
        <img src={product2} alt="Project 2" className="project-image" />
        <div className="project-card-content">
          <h3 className="project-title">Project Name</h3>
          <p className="project-description">A brief description of the project, its purpose, and the technologies used. This could be a web app, a mobile app, or a simple website.</p>
          <a href="#" className="project-linkcd ">
            <span>View Project</span>
          </a>
        </div>
      </div> */}
      {/* Project Card 3 */}
      <div className="project-card">
        <img src={product3} alt="Project 3" className="project-image" />
        <div className="project-card-content">
          <h3 className="project-title">To-do-list</h3>
          <p className="project-description">This is a to-do list application built using pure JavaScript, without any frameworks. The interface is clean and straightforward, featuring a single input field to add new tasks and an "Add" button. The list displays added tasks, with a a clear way to remove each item. The simple design and core functionality demonstrate a solid understanding of fundamental web development principles.
</p>
          <a href="https://sammy-jojo.github.io/todo-list/" target='_blank' className="project-link">
            <span>View Project</span>
          </a>
        </div>
      </div>
      {/* Project Card 4 */}
      <div className="project-card">
        <img src={product4} alt="Project 4" className="project-image" />
        <div className="project-card-content">
          <h3 className="project-title">Homzy Real Estate Website</h3>
          <p className="project-description">This is a real estate website built using React. The website features a clean, modern, and professional design. It includes a hero section with a strong call-to-action, a dedicated section to showcase popular properties with pricing, and a section that highlights the company's core values. The site also provides multiple ways for a user to contact the company, such as chat, video call, and direct messaging, and it also includes sections for partner logos and a subscription call-to-action.</p>
          <a href="https://sammy-jojo.github.io/todo-list/" className="project-link">
            <span>View Project</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// const ResumeSection = () => (
//   <section id="resume" className="resume-section">
//     <div className="section-header">
//       <h2 className="section-title">My Resume</h2>
//       <p className="section-subtitle">
//         Download my complete professional resume to learn more about my experience and skills.
//       </p>
//       <a href="#" className="button button-primary">
//         Download Resume
//       </a>
//     </div>
//   </section>
// );

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <div className="section-header">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
    </div>
    <div className="contact-links">
      <a href="mailto:samuel.g@example.com" className="contact-link">
        <div className="contact-icon-wrapper">
          <MailIcon />
        </div>
        <span className="contact-link-text">samuelgaruba34@gmail.com</span>
      </a>
      <a href="https://github.com/samuelg" target="_blank" rel="noopener noreferrer" className="contact-link">
        <div className="contact-icon-wrapper">
          <GitHubIcon />
        </div>
        <span className="contact-link-text">https://github.com/sammy-jojo</span>
      </a>
      {/* <a href="https://linkedin.com/in/samuelg" target="_blank" rel="noopener noreferrer" className="contact-link">
        <div className="contact-icon-wrapper">
          <LinkedInIcon />
        </div>
        <span className="contact-link-text">linkedin.com/in/samuelg</span>
      </a> */}
    </div>
  </section>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutSection onNavigate={handleLinkClick} />;
      case 'projects':
        return <ProjectsSection />;
      case 'resume':
        return <ResumeSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection onNavigate={handleLinkClick} />; // Fallback to the about page
    }
  };

  const handleLinkClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <div className={`app-container ${isMenuOpen ? 'menu-open' : ''}`}>
      {/* Header */}
      <header className="app-header">
        <nav className="navbar">
          <button onClick={() => handleLinkClick('about')} className="logo-button">Samuel G.</button>
          
          <div className="nav-links">
            <button onClick={() => handleLinkClick('about')} className="nav-link">About</button>
            <button onClick={() => handleLinkClick('projects')} className="nav-link">Projects</button>
            {/* <button onClick={() => handleLinkClick('resume')} className="nav-link">Resume</button> */}
            <button onClick={() => handleLinkClick('contact')} className="nav-link">Contact</button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-links">
            <button onClick={() => handleLinkClick('about')} className="mobile-nav-link">About</button>
            <button onClick={() => handleLinkClick('projects')} className="mobile-nav-link">Projects</button>
            {/* <button onClick={() => handleLinkClick('resume')} className="mobile-nav-link">Resume</button> */}
            <button onClick={() => handleLinkClick('contact')} className="mobile-nav-link">Contact</button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>&copy; 2025 Samuel G. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/samuelg" target="_blank" rel="noopener noreferrer" className="social-link">
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com/in/samuelg" target="_blank" rel="noopener noreferrer" className="social-link">
            <LinkedInIcon />
          </a>
          <a href="mailto:samuel.g@example.com" className="social-link">
            <MailIcon />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
