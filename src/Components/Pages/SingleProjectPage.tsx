import { useParams } from "react-router-dom";
import { FC } from "react";
import { projects, Project } from "../../data/projectData";
import { getTechIcon } from "../../utils/getTechIcons";
import ProjectImageCarousel from "../ProjectImageCarousel";

const SingleProjectPage: FC = () => {
  const { project_id } = useParams<{ project_id: string }>();
  const project: Project | undefined = projects.find(
    (p: Project) => p.project_id === project_id
  );
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="single-project-page">
      <div className="single-project-container">
        <h1>{project.title}</h1>
        <div className="project-top-line">
          <img
            src={project.image}
            alt={project.alt}
            className="single-project-image"
          />
          <div className="project-view">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img
                src="../../../images/icons/github-mark.png"
                alt="github logo"
                className="github-logo"
              />
            </a>
            {project.livelink.length > 0 ? (
              <a
                href={project.livelink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="live-link">Live Demo</p>
              </a>
            ) : null}
            {project.projectlink.length > 0 ? (
              <a
                href={project.projectlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="live-link">Project Link</p>
              </a>
            ) : null}
          </div>
        </div>
        {project.longdescription.length > 0
          ? project?.longdescription.map((description) => (
              <p className="project-long-description">{description}</p>
            ))
          : null}
        {project.extraimages.length > 0 ? (
          <ProjectImageCarousel project={project} />
        ) : null}
        <div className="tech-stack">
          {project.stack.map((tech) => (
            <img
              key={tech}
              src={getTechIcon(tech)}
              alt={tech}
              className="project-tech-icon"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
