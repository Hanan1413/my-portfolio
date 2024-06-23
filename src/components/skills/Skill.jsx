import React from "react";
import "./Skills.css";

function Skill({ skill }) {
  const { title, icon } = skill;
  return (
    <div className="shadow hover-scale duration-5 image-card ">
      <img src={icon} alt={title}  className="skill-img"/>
      <p className="icon-text">{title}</p>
    </div>
  );
}

export default Skill;
