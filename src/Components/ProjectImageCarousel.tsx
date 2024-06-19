import React, { useState } from "react";

interface Project {
  project_id: number;
  title: string;
  description: string;
  image: string;
  extraimages: string[];
  alt: string;
  stack: string[];
  github: string[];
  longdescription: string[];
}

interface ProjectImageCarouselProps {
  project: Project;
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({
  project,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % project.extraimages.length
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.extraimages.length) %
        project.extraimages.length
    );
  };

  const currentImage = project.extraimages[currentIndex];

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <div
          key={project.project_id}
          className="carousel-item active"
          style={{ transform: `translateX(0)` }}
        >
          <img
            src={currentImage}
            alt={`${project.title} ${currentIndex + 1}`}
            className="carousel-image"
          />
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

export default ProjectImageCarousel;
