import React, { useState } from 'react';
import ProjectsCard from '../ProjectsCard';

const ProjectsDeck = props => {
  const [showEarlierProjects, setShowEarlierProjects] = useState(false);

  if (props.projects.archive) {
    return (
      <section className="projects-deck earlier-projects">
        <button
          type="button"
          className="earlier-projects-toggle"
          onClick={() => setShowEarlierProjects(!showEarlierProjects)}
          aria-expanded={showEarlierProjects}
        >
          {showEarlierProjects ? 'Hide Earlier Projects' : 'Show Earlier Projects'}
        </button>

        {showEarlierProjects && (
          <>
            <header>
              <h1>{props.projects.title}</h1>
              {props.projects.intro && <p>{props.projects.intro}</p>}
            </header>
            <div className="projects-grid">
              {props.projects.records &&
                props.projects.records.map((card, i) => (
                  <ProjectsCard key={i} projects={card} isArchive={true} />
                ))}
            </div>
          </>
        )}
      </section>
    );
  }

  return (
    <section className="projects-deck">
      <div className="projects-grid">
        {props.projects.records &&
          props.projects.records.map((card, i) => (
            <ProjectsCard key={i} projects={card} isArchive={false} />
          ))}
      </div>
    </section>
  );
};

export default ProjectsDeck;
