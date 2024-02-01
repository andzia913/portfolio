import React, { ReactNode } from "react";
import "../styles/project.scss";
import { GrTechnology } from "react-icons/gr";
import { CiCircleInfo } from "react-icons/ci";
import { TbWriting } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

interface ProjectProps {
  title: string;
  githubLink: string;
  liveLink: string;
  imageComponent?: ReactNode;
  description: string;
  technologies: string[];
  additionalInfo: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  githubLink,
  liveLink,
  imageComponent,
  description,
  technologies,
  additionalInfo,
}) => {
  const [activeSection, setActiveSection] = React.useState("description");

  return (
    <div className="project">
      <h2 className="project__title">{title}</h2>
      <div className="project__container">
        <div className={imageComponent ? "project__img" : ""}>
          {imageComponent}
        </div>
        <div className="project__content">
          <div className="project__sidebar">
            <div
              className={`project__sidebar-item ${
                activeSection === "description"
                  ? "project__sidebar-item--active"
                  : ""
              }`}
              onClick={() => setActiveSection("description")}
            >
              <TbWriting />
            </div>
            <div
              className={`project__sidebar-item ${
                activeSection === "technologies"
                  ? "project__sidebar-item--active"
                  : ""
              }`}
              onClick={() => setActiveSection("technologies")}
            >
              <GrTechnology />
            </div>
            <div
              className={`project__sidebar-item ${
                activeSection === "info" ? "project__sidebar-item--active" : ""
              }`}
              onClick={() => setActiveSection("info")}
            >
              <CiCircleInfo />
            </div>
          </div>
          <div className="project__description">
            <div className="project__details">
              {activeSection === "description" && description}
              {activeSection === "technologies" && technologies.join(", ")}
              {activeSection === "info" && additionalInfo}
            </div>
          </div>
        </div>
      </div>
      <div className="project__links">
        <a className="project__link" href={githubLink}>
          <FaGithub /> Code on GitHub
        </a>
        <a className="project__link" href={liveLink}>
          <FaEye /> Live View
        </a>
      </div>
    </div>
  );
};

export default Project;
