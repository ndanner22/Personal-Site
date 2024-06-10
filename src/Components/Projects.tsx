import ProjectTextAnimation from "./ProjectTextAnimation";

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="title">Projects!</h2>
      <div className="project-body">
        <div className="project-description">
          <ProjectTextAnimation />
        </div>
      </div>
    </div>
  );
}
