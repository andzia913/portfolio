import React from "react";

interface ProjectProps {
  title: string;
  githubLink: string;
  liveLink: string;
  imageSrc: string;
  description: string;
  technologies: string[];
  additionalInfo: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  githubLink,
  liveLink,
  imageSrc,
  description,
  technologies,
  additionalInfo,
}) => {
  return (
    <div className="projects">
      <h2 className="projects__title">{title}</h2>
      <div className="projects__container">
        <div className="projects__sidebar">
          <li className="projects__sidebar-item">Project Description</li>
          <li className="projects__sidebar-item">Project Technologies</li>
          <li className="projects__sidebar-item">Additional Info</li>
        </div>
        <div className="projects__content">
          <img className="projects__image" src={imageSrc} alt={title} />
          <div className="projects__links">
            <a className="projects__link" href={githubLink}>
              <i className="fab fa-github"></i> GitHub
            </a>
            <a className="projects__link" href={liveLink}>
              Live View
            </a>
          </div>
          <div className="projects__details">
            <div className="projects__detail projects__description">
              {description}
            </div>
            <div className="projects__detail projects__technologies">
              {technologies.join(", ")}
            </div>
            <div className="projects__detail projects__additional-info">
              {additionalInfo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
