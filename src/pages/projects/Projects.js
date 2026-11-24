import Header from "../../components/header/Header.jsx";
import ProjectData from "./ProjectData.js";
import ProjectCard from "./ProjectCard.jsx";
import './Projects.css';

function Projects() {
  const projects = ProjectData();

  return (
    <div>
      <Header />
      <div className="projects-container">
        <h1 className = "projects-title">Websites</h1>
        <p className = "projects-description">Here are some of the websites I've built</p>
        <div className="project-cards-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;