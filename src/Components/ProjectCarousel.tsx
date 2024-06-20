import React, { useState } from "react";
import { projects } from "../data/projectData"; // Assuming ProjectsData is correctly imported
import { Link } from "react-router-dom";

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <div
          key={currentProject.project_id}
          className={`carousel-item active`}
          style={{ transform: `translateX(0)` }}
        >
          <div>
            <h2 className="project-carousel-title">{currentProject.title}</h2>
            <p className="project-carousel-description">
              {currentProject.description}
            </p>
          </div>
          {/* <div className="carousel-image-container"> */}
          <Link to={`/projects/${currentProject.project_id}`}>
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="carousel-image"
            />
          </Link>
          {/* </div> */}
        </div>
      </div>
      <button className="arrow prev" onClick={goToPrevSlide}>
        &lt;
      </button>
      <button className="arrow next" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ProjectCarousel;
