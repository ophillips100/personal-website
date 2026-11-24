import './Projects.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <img src={project.cardImage} className="card-img" alt={project.title} />
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.cardDescription}</p>
          <a href={project.link} className="primary-btn" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;