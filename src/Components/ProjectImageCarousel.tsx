import React, { useState } from "react";
import { Project } from "../data/projectData";
import ProjectImageModal from "./ProjectImageModal";

interface ProjectImageCarouselProps {
  project: Project;
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({
  project,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageUrl: string) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

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
          key={currentIndex}
          className={`carousel-item active`}
          style={{ transform: `translateX(0)` }}
        >
          <img
            src={currentImage}
            alt={`${project.title} ${currentIndex}`}
            className="carousel-image"
            onClick={() => openModal(currentImage)}
          />
        </div>
      </div>
      <button className="arrow prev" onClick={goToPrevSlide}>
        &lt;
      </button>
      <button className="arrow next" onClick={goToNextSlide}>
        &gt;
      </button>
      {isModalOpen && (
        <ProjectImageModal imageUrl={modalImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProjectImageCarousel;
