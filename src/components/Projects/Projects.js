import React from "react";

import projects from "./projects.json";
import ProjectsDeck from "../ProjectsDeck";

const Projects = () => {

  return <div className= "projects-container" id="projects">{projects.map( (section, i) => <ProjectsDeck key={i} projects={section} />)}</div>

};

export default Projects;