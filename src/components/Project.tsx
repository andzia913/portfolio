import React from "react";
import "../styles/project.scss";
import { GrTechnology } from "react-icons/gr";
import { CiCircleInfo } from "react-icons/ci";
import { TbWriting } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

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
  const [activeSection, setActiveSection] = React.useState("description");

  return (
    <div className="project">
      <h2 className="project__title">{title}</h2>
      <img className="project__image" src={imageSrc} alt={title} />
      <div className="project__container">
        <div className="project__sidebar">
          <li
            className={`project__sidebar-item ${
              activeSection === "description"
                ? "project__sidebar-item--active"
                : ""
            }`}
            onClick={() => setActiveSection("description")}
          >
            <TbWriting />
          </li>
          <li
            className={`project__sidebar-item ${
              activeSection === "technologies"
                ? "project__sidebar-item--active"
                : ""
            }`}
            onClick={() => setActiveSection("technologies")}
          >
            <GrTechnology />
          </li>
          <li
            className={`project__sidebar-item ${
              activeSection === "info" ? "project__sidebar-item--active" : ""
            }`}
            onClick={() => setActiveSection("info")}
          >
            <CiCircleInfo />
          </li>
        </div>
        <div className="project__content">
          <div className="project__details">
            {activeSection === "description" && description}
            {activeSection === "technologies" && technologies.join(", ")}
            {activeSection === "info" && additionalInfo}
          </div>
        </div>
      </div>
      <div className="project__links">
        <a className="project__link" href={githubLink}>
          <FaGithub /> Code on GitHub
        </a>
        <a className="project__link" href={liveLink}>
          Live View
        </a>
      </div>
    </div>
  );
};

export default Project;
