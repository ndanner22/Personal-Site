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
    <div className="home-carousel-container">
      <div className="home-carousel-inner">
        <div
          key={currentProject.project_id}
          className={`home-carousel-item active`}
          style={{ transform: `translateX(0)` }}
        >
          <h2>{currentProject.title}</h2>
          <p>{currentProject.description}</p>
          <Link to={`/projects/${currentProject.project_id}`}>
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="home-carousel-image"
            />
          </Link>
        </div>
      </div>
      <button className="home-arrow prev" onClick={goToPrevSlide}>
        Prev
      </button>
      <button className="home-arrow next" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default ProjectCarousel;
