import './Projects.css';
import { useScrollReveal } from './units/useScrollReveal';
import ecommerce from '../assets/image/project/ecommerce.jpg';
import chatbot from '../assets/image/project/chatbot.jpg';
import link from '../assets/image/project/link.png';
import github from '../assets/image/project/github.png';

export function Projects() {
  useScrollReveal();

  const projects = [
    {
      image: ecommerce,
      name: 'E-Commerce Website',
      description:
        'A complete Amazon-inspired eCommerce website built using HTML, CSS, and JavaScript.',
      liveLink: 'https://yogeshwaran1110.github.io/ecommerce-project/',
      repoLink: 'https://github.com/yogeshwaran1110/ecommerce-project',
    },
    {
      image: chatbot,
      name: 'Chatbot Application',
      description:
        'An interactive chatbot application developed using HTML, CSS, JavaScript and React.',
      liveLink: 'https://yogeshwaran1110.github.io/chatbot-project/',
      repoLink: 'https://github.com/yogeshwaran1110/chatbot-project',
    },

  ];

  return (
    <section id="projects" className="projects">
      <h1 className="section-title">Projects</h1>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="reveal project-card" key={project.name}>
            <div className="image-container">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />

              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  <img src={link} alt="Live Demo" />
                </a>
                <a href={project.repoLink} target="_blank" rel="noreferrer">
                  <img src={github} alt="GitHub Repo" />
                </a>
              </div>
            </div>

            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="live-link"
            >
              Live-link
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
