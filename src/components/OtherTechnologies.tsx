import React, { useEffect, useState, useRef } from "react";
import "../styles/other-technologies.scss";

interface OtherTechnologiesElement {
  name: string;
  description: string;
}

const OtherTechnologies: React.FC = () => {
  const [techElementsState, setTechElementsState] = useState<{
    [key: string]: boolean;
  }>({});

  const handleToggleDescription = (name: string) => {
    setTechElementsState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const popupElements: OtherTechnologiesElement[] = [
    {
      name: "React",
      description:
        "I am proficient in creating interactive and dynamic user interfaces using React.",
    },
    {
      name: "TypeScript",
      description:
        "I possess expertise in using explicit types and interfaces to catch errors during code development.",
    },
    {
      name: "Node.js",
      description:
        "I am skilled in building scalable and efficient backend applications with Node.js.",
    },
    {
      name: "Express JS",
      description:
        "I excel in crafting robust APIs and server-side logic with Express.js.",
    },
    {
      name: "SEO",
      description:
        "I have the ability to optimize websites for search engine visibility.",
    },
    {
      name: "HTML",
      description:
        "I am proficient in creating structured and semantically rich web content with HTML5.",
    },
    {
      name: "LightHouse",
      description:
        "I am capable of conducting web performance audits and optimizing website performance.",
    },
    {
      name: "IDEs",
      description:
        "I can efficiently manage code and projects within Integrated Development Environments (IDEs).",
    },
    {
      name: "Fetch API",
      description:
        "I am adept at handling responses and managing data flow using the Fetch API.",
    },
    {
      name: "Material UI",
      description:
        "I am skilled in creating visually appealing and responsive user interfaces with Material UI.",
    },
    {
      name: "Clean Code",
      description:
        "I have the ability to improve code quality and readability, ensuring clean and maintainable code.",
    },
    {
      name: "Sass",
      description:
        "I am proficient in streamlining styling workflows using Sass.",
    },
    {
      name: "Git",
      description:
        "I am proficient in using Git for version control and facilitating effective collaboration.",
    },
    {
      name: "SQL & Relational Databases",
      description:
        "I have expertise in designing and querying relational databases using SQL, ensuring efficient data storage and retrieval.",
    },
    {
      name: "Postman",
      description:
        "I am proficient in utilizing Postman for API development, testing, and collaboration, streamlining the API workflow.",
    },
  ];
  return (
    <div className="other-technologies">
      {popupElements.map((element, index) => (
        <div
          className="other-technologies__element"
          onClick={() => handleToggleDescription(element.name)}
          key={index}
        >
          {!techElementsState[element.name] && (
            <div className="other-technologies__element-name">
              {element.name}
            </div>
          )}
          {techElementsState[element.name] && (
            <div className="other-technologies__element-description">
              {element.name + ". " + element.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OtherTechnologies;
