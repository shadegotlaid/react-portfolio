import React from "react";
import "./MyProjects.css";

function MyProjects() {
  return (
    <div className="my-projects-container">
      <div className="my-projects-text">
        <p>
          This is one of my favorite art projects. A picture I have drawn of my favorite horror movie killers.
          Hope it does not scare you as much.
        </p>
      </div>
      <div className="my-projects-image">
        <img src="/Projects.png" alt="Art Project" />
      </div>
    </div>
  );
}

export default MyProjects;
