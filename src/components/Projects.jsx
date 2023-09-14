import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
const [navigate, setNavigate] = useState(null);

const handleClick = (projectName) => {
  setSelectedProject(projectName);
  if (selectedProject === 'schoolprojects') {
    setNavigate('/Projects/SchoolProjects');
  } else if (selectedProject === 'otherprojects') {
    setNavigate('/Projects/OtherProjects');
  }
};

  return (
    <div>
      <h1>Projects</h1>
      <div className="boox">
        <h2 className="first" onClick={() => handleClick('schoolprojects')}>
          School Projects
        </h2>
        <h3 className="second" onClick={() => handleClick('otherprojects')}>
          Other Projects
        </h3>
      </div>
      {navigate && <Navigate to={navigate} />}
    </div>
  );
}