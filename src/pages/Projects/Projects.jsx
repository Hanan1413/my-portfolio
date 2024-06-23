import React, { useState } from 'react';
import './Projects.css'
import SingleProject from './SingleProject';

function Projects({projectsData}) {

  return (
    <div>
       <div className="project-container " >
      <h1 >My Porjects</h1>
      {projectsData.map(project => (
        <div  key={project.id}>
         <SingleProject  project={project}  />
        </div>
        
      ))}
      </div>
    </div>
  );
};
export default Projects;
