import React, { FC } from "react";
import { projects, Project } from "../../data/projectData"; // Adjust the import path as needed

const ProjectPage: FC = () => {
  return (
    <div className="project-page-container">
      {projects.map((project: Project) => (
        <section key={project.project_id} className="project-page-project">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          {/* Add more project details here if necessary */}
        </section>
      ))}
    </div>
  );
};

export default ProjectPage;
