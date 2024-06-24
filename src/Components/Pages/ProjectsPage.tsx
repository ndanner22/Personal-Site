import React, { FC } from "react";
import { projects, Project } from "../../data/projectData";
import { Link } from "react-router-dom";

const ProjectPage: FC = () => {
  return (
    <div className="projects-page">
      <div className="projects-page-container">
        {projects.map((project: Project) => (
          <section key={project.project_id} className="project-page-project">
            <div className="project-page-image-container">
              <img
                className="project-page-image"
                src={project.image}
                alt={project.alt}
              />
            </div>
            <div className="project-page-body">
              <h1 className="project-title">{project.title}</h1>
              <p className="project-description">{project.description}</p>
            </div>
            <Link to={`/projects/${project.project_id}`} className="learn-more">
              Learn More
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
