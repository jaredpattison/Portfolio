import React, { useState } from 'react';
import Modal from 'react-modal';
import github from '../../assets/github.svg';
import world from '../../assets/www.png';

// Import all project images
import packingPlanner from '../../assets/packing-planner.png';
import oneBar from '../../assets/one-bar.png';
import cfQuickStart from '../../assets/cf-quick-start.png';
import buzzcard from '../../assets/buzzcard.png';

// Image map for dynamic lookup
const imageMap = {
  'packing-planner.png': packingPlanner,
  'one-bar.png': oneBar,
  'cf-quick-start.png': cfQuickStart,
  'buzzcard.png': buzzcard,
};

const ProjectsCard = ({ projects }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const imgUrl = imageMap[projects.media.title] || packingPlanner;

  return (
    <>
      <div className="projects-card">
        <figure>
          <img
            onClick={handleOpenModal}
            src={imgUrl}
            alt={projects.media.alt}
            title={projects.media.title}
          />
        </figure>
      </div>

      <Modal 
        isOpen={showModal}
        contentLabel={`Project details: ${projects.title}`}
        className="Modal"
        overlayClassName="Overlay"
        closeTimeoutMS={1000}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
      >
        <div id="image-social">
          <div id="image-container">
            <img
              src={imgUrl}
              alt={projects.media.alt}
              title={projects.media.title}
            />
          </div>

          <div id="social-icons">
            <button className="social" onClick={handleCloseModal} aria-label="Close modal">X</button>
            {projects.links[1].href && (
              <a target="_blank" rel="noopener noreferrer" href={projects.links[1].href}>
                <img alt="View project on GitHub" className="social" src={github}/>
              </a>
            )}
            {projects.links[0].href && (
              <a target="_blank" rel="noopener noreferrer" href={projects.links[0].href}>
                <img alt="View project website" className="social" src={world} />
              </a>
            )}
          </div>
        </div>

        <div id="description">
          <p>
            {projects.copy}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ProjectsCard;