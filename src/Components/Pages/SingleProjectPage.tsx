import { useParams } from "react-router-dom";
import React, { FC } from "react";
import { projects, Project } from "../../data/projectData";

const SingleProjectPage: FC = () => {
  const { project_id } = useParams<{ project_id: string }>(); // Correctly destructure useParams and type it
  const project: undefined | Project = projects.find(
    (p: Project) => p.project_id === project_id
  );

  return (
    <div className="single-project-page">
      <div className="single-project-container">
        <h1>{project.title}</h1>
        <img
          src={project.image}
          alt={project.alt}
          className="single-project-image"
        />
        {project.stack.join(", ")}
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <img
            src="../../../public/images/icons/github-mark.png"
            alt="github logo"
            className="github-logo"
          />
        </a>
        {project.extraimages.length > 0
          ? project?.extraimages.map((extraimage) => (
              <img src={extraimage} className="extra-image" />
            ))
          : null}

        {project.longdescription.length > 0
          ? project?.longdescription.map((description) => <p>{description}</p>)
          : null}
      </div>
    </div>
  );
};

export default SingleProjectPage;
