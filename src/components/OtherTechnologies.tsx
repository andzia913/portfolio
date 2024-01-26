import React, { useEffect, useState, useRef } from "react";
import "../styles/other-technologies.scss";

interface PopupElement {
  name: string;
  description: string;
}

const OtherTechnologies: React.FC = () => {
  const [popupElementsState, setPopupElementsState] = useState<{
    [key: string]: boolean;
  }>({});

  const handleToggleDescription = (name: string) => {
    setPopupElementsState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const popupElements: PopupElement[] = [
    {
      name: "React",
      description: "Interactive UI and dynamic user interfaces using React",
    },
    {
      name: "TypeScript",
      description:
        "Explicit types and interfaces to catch errors during development and improve code",
    },
    {
      name: "Node.js",
      description:
        "Scalable, efficient backend backend applications with RESTful APIs",
    },
    {
      name: "Express JS",
      description: "Robust APIs and server-side logic",
    },
    {
      name: "SEO",
      description: "Website optimization for search engines",
    },
    {
      name: "HTML",
      description:
        "Proficient in HTML5, for creating structured and semantically web content",
    },
    {
      name: "LightHouse",
      description: "Web performance auditing and optimization",
    },
    {
      name: "IDEs",
      description: "Efficient coding and project management",
    },
    {
      name: "Fetch API",
      description: "Handling responses and managing data flow",
    },
    {
      name: "Material UI",
      description:
        "Creating visually and responsive user interfaces appealing UI",
    },
    {
      name: "Clean Code",
      description: "Improving code quality and readability",
    },
    {
      name: "Sass",
      description: "Streamlining styling workflows",
    },
    {
      name: "Git",
      description: "Version control and collaboration",
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
          {!popupElementsState[element.name] && (
            <div className="other-technologies__element-name">
              {element.name}
            </div>
          )}
          {popupElementsState[element.name] && (
            <div className="other-technologies__element-description">
              {element.name + ". "}
              {element.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OtherTechnologies;
