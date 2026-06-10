import React, { useState } from 'react';
import Modal from 'react-modal';

import packingPlanner from '../../assets/packing-planner.png';
import oneBar from '../../assets/one-bar.png';
import cfQuickStart from '../../assets/cf-quick-start.png';
import buzzcard from '../../assets/buzzcard.png';

const imageMap = {
  'packing-planner.png': packingPlanner,
  'one-bar.png': oneBar,
  'cf-quick-start.png': cfQuickStart,
  'buzzcard.png': buzzcard,
};

const linkLabels = {
  primary: 'Open',
  secondary: 'Source',
};

const ProjectsCard = ({ projects, isArchive }) => {
  const [showModal, setShowModal] = useState(false);
  const imgUrl = imageMap[projects.media.title] || projects.media.href;
  const activeLinks = projects.links.filter(link => link.href);
  const primaryCardLink = projects.links.find(link => link.type === 'primary' && link.href);
  const paragraphs = projects.copy.split('\n\n');
  const showCardImage = isArchive && imgUrl;

  const themeClass = projects.theme ? ` theme-${projects.theme}` : '';

  return (
    <>
      <article className={`projects-card${isArchive ? ' archive-card' : ' featured-card'}${themeClass}`} onClick={() => setShowModal(true)}>
        {showCardImage && (
          <figure>
            <img src={imgUrl} alt={projects.media.alt} title={projects.media.title} />
          </figure>
        )}
        <div className="project-card-copy">
          {projects.status && <span className="project-status">{projects.status}</span>}
          <h2>{projects.title}</h2>
          <p>{projects.summary || projects.copy}</p>
          {projects.highlights && (
            <ul className="project-highlights" aria-label={`${projects.title} highlights`}>
              {projects.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
            </ul>
          )}
          {projects.tags && !projects.highlights && (
            <ul className="project-tags" aria-label={`${projects.title} tags`}>
              {projects.tags.slice(0, 4).map(tag => <li key={tag}>{tag}</li>)}
            </ul>
          )}
          <div className="card-actions">
            <button type="button">Read details</button>
            {primaryCardLink && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={primaryCardLink.href}
                onClick={event => event.stopPropagation()}
              >
                {primaryCardLink.title || 'Open'}
              </a>
            )}
          </div>
        </div>
      </article>

      <Modal
        isOpen={showModal}
        contentLabel={`Project details: ${projects.title}`}
        className={`Modal project-modal${imgUrl ? '' : ' no-media'}`}
        overlayClassName="Overlay"
        closeTimeoutMS={300}
        onRequestClose={() => setShowModal(false)}
        shouldCloseOnOverlayClick={true}
      >
        <button className="modal-close" onClick={() => setShowModal(false)} aria-label="Close modal">×</button>

        {imgUrl && (
          <div className="modal-media">
            <img src={imgUrl} alt={projects.media.alt} title={projects.media.title} />
          </div>
        )}

        <div className="modal-body">
          {projects.status && <span className="project-status">{projects.status}</span>}
          <h1>{projects.title}</h1>
          {paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}

          {projects.highlights && (
            <ul className="project-highlights" aria-label={`${projects.title} highlights`}>
              {projects.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
            </ul>
          )}

          {projects.tags && (
            <ul className="project-tags" aria-label={`${projects.title} tags`}>
              {projects.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
          )}

          {activeLinks.length > 0 && (
            <div className="modal-actions">
              {activeLinks.map(link => (
                <a target="_blank" rel="noopener noreferrer" href={link.href} key={link.href}>
                  {link.title || linkLabels[link.type] || 'Open'}
                </a>
              ))}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ProjectsCard;
