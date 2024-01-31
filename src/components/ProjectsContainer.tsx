import React, { ReactComponentElement, ReactNode } from "react";
import Project from "./Project";
import "../styles/projects-container.scss";
import { StaticImage } from "gatsby-plugin-image";

interface ProjectProps {
  title: string;
  githubLink: string;
  liveLink: string;
  imageComponent?: ReactNode;
  description: string;
  technologies: string[];
  additionalInfo: string;
}

const ProjectsContainer: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Finan",
      githubLink: "https://github.com/andzia913/FinanBackend",
      liveLink: "http://vps-19591a52.vps.ovh.net/",
      imageComponent: (
        <StaticImage src={`../images/finan.png`} alt="Finanapp screenshot" />
      ),
      description:
        "FinanApp is a dynamic financial management application designed to streamline the tracking and planning your finance. It has two separates parts - backend and frontend. The backend is responsible for the business logic and data storage. The frontend is responsible for the user interface and user experience. The application is still under development.",
      technologies: [
        "React",
        "TypeScript",
        "Material UI",
        "Vite",
        "JWT Authentication",
        "NodeJS",
        "Express",
        "MySQL",
      ],
      additionalInfo:
        "In the application, a demo user has been created with the login: demo@demo.pl, password: demo. The application will be expanded in the future.",
    },
    {
      title: "Fp Development",
      githubLink: "https://github.com/andzia913/fpdev",
      liveLink: "https://fpdevelopment.com.pl",
      imageComponent: (
        <StaticImage
          src="../images/fpdev.png"
          alt="fpdevelopment.com.pl screenshot"
        />
      ),
      description:
        "Landing page for a real estate company. It includes an administrative panel for adjusting apartment prices and updating certain data. Additionally, there is a dynamic table featuring apartments that can be filtered by various parameters, along with interactive building floor plans.",
      technologies: ["React", "JavaScript", "Firebase", "Css"],
      additionalInfo:
        "This is a commercial project that has already been completed. It pertains to a real estate investment that has not yet commenced. The presented code represents only the frontend aspect of the project. Data connections to Firebase, enabling backend functionality, have been excluded from public access.",
    },
    {
      title: "Portfolio landing page",
      githubLink: "https://github.com/andzia913/portfolio",
      liveLink: "/",
      description:
        "Landing page about me and my projects, created in Gatsby. This portfolio provides a concise overview of my web development projects, tailored for recruiters' easy review. Explore my portfolio to see my capabilities and potential contributions to your team.",
      technologies: [
        "React",
        "TypeScript",
        "Gatsby",
        "Scss",
        "Css",
        "HTML",
        "RWD",
      ],
      additionalInfo: "This is the project you are currently viewing.",
    },
  ];

  return (
    <div className="projects-container" id="projects">
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
