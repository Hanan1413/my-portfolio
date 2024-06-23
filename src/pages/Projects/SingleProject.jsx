import React from "react";
import "./Projects.css";

const SingleProject = ({ project }) => {
  const { title, desc, image, live } = project;
  return (
    <div>
      <div className="flex-item ">
        <div>
          <h1
            style={{
              marginBottom: "10px",
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            {title}
          </h1>
          <p>{desc}</p>

          <div className="buttons">
         
            <button
              className="code-button"
              onClick={() => {
                if (live) {
                  window.open(live, "_blank");
                }
              }}
            >
              see live demo 
            </button>
          </div>
        </div>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default SingleProject;
