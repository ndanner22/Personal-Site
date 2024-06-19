import React from "react";

interface ModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ProjectImageModal: React.FC<ModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt="Enlarged" className="modal-image" />
      </div>
    </div>
  );
};

export default ProjectImageModal;
