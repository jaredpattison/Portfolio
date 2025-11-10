import React from 'react';
import ProjectsCard from '../ProjectsCard';

const ProjectsDeck = props => {

  return (
    <section className="projects-deck">
      {props.projects.records &&
        props.projects.records.map((card, i) => <ProjectsCard key={i} projects={card} />)}
    </section>
  );

};

export default ProjectsDeck;
