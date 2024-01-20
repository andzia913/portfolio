import React from "react";
import Project from "./Project";
import "../styles/projects-container.scss";

interface ProjectProps {
  title: string;
  githubLink: string;
  liveLink: string;
  imageSrc: string;
  description: string;
  technologies: string[];
  additionalInfo: string;
}

const ProjectsContainer: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Project 1",
      githubLink: "https://github.com/project1",
      liveLink: "https://project1.com",
      imageSrc: "project1.png",
      description: "This is project 1.",
      technologies: ["React", "TypeScript"],
      additionalInfo: "Additional info about project 1.",
    },
    {
      title: "Finan",
      githubLink: "https://github.com/andzia913/FinanBackend",
      liveLink: "https://project2.com",
      imageSrc: "project2.png",
      description:
        "This is project 2.This is project 2.This is project 2.This is project 2.This is project 2.This is project 2.This is project 2.This is project 2.",
      technologies: [
        "React",
        "JavaScript",
        "React",
        "JavaScript",
        "React",
        "JavaScript",
        "React",
        "JavaScript",
        "React",
        "JavaScript",
        "React",
        "JavaScript",
        "React",
        "JavaScript",
        "React",
        "JavaScript",
      ],
      additionalInfo:
        "Additional info about project 2.Additional info about project 2.This is project 2.This is project 2.This is project 2.This is project 2.",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-container__title">Projects</h2>
      <div className="projects-container__projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
