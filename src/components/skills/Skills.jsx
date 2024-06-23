import React from 'react';
import Skill from './Skill'
import './Skills.css'; // Import your CSS file



const Skills = ({ skillsData }) => {
  return (
    <div className='skills-container'>
      <div className='max-width-container '>
        <div className='section-heading'>
          <h1 style={{marginBottom:"15px"}}>My Skills</h1>
          <h3 className='description-text'>Technologies I've used building my projects</h3>
        </div>
        <div className='flex-container'>
          {skillsData.map((skill) => (
            <Skill key={skill.id} skill={skill}   />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
