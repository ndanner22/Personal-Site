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
          key={currentProject.id}
          className={`carousel-item active`}
          style={{ transform: `translateX(0)` }}
        >
          <h2>{currentProject.title}</h2>
          <p>{currentProject.description}</p>
          <Link to={`/projects/${currentProject.id}`}>
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="carousel-image"
            />
          </Link>
        </div>
      </div>
      <button className="arrow prev" onClick={goToPrevSlide}>
        Prev
      </button>
      <button className="arrow next" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default ProjectCarousel;
