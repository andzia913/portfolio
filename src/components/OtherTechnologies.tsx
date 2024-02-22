import React from "react";
import "../styles/other-technologies.scss";
import OtherTechnologiesElement from "./OtherTechnologiesElement";

interface OtherTechnologiesElement {
  name: string;
  description: string;
}

const OtherTechnologies: React.FC = () => {
  const uiDevelopment: OtherTechnologiesElement[] = [
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
      name: "HTML",
      description:
        "I am proficient in creating structured and semantically rich web content with HTML5.",
    },
    {
      name: "Material UI",
      description:
        "I am skilled in creating visually appealing and responsive user interfaces with Material UI.",
    },
    {
      name: "Sass",
      description:
        "I am proficient in streamlining styling workflows using Sass.",
    },
  ];

  const backendDevelopment: OtherTechnologiesElement[] = [
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

  const toolsAndPractices: OtherTechnologiesElement[] = [
    {
      name: "SEO",
      description:
        "I have the ability to optimize websites for search engine visibility.",
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
      name: "Clean Code",
      description:
        "I have the ability to improve code quality and readability, ensuring clean and maintainable code.",
    },
    {
      name: "Git",
      description:
        "I am proficient in using Git for version control and facilitating effective collaboration.",
    },
  ];

  return (
    <>
      <div className="other-technologies">
        <div className="other-technologies__group">
          <h4 className="other-technologies__group-name">UI Development</h4>
          {uiDevelopment.map((element, index) => (
            <OtherTechnologiesElement
              key={index}
              name={element.name}
              description={element.description}
            />
          ))}
        </div>
        <div className="other-technologies__group">
          <h4 className="other-technologies__group-name">
            Backend development
          </h4>
          {backendDevelopment.map((element, index) => (
            <OtherTechnologiesElement
              key={index}
              name={element.name}
              description={element.description}
            />
          ))}
        </div>
        <div className="other-technologies__group">
          <h4 className="other-technologies__group-name">
            Tools and practises
          </h4>
          {toolsAndPractices.map((element, index) => (
            <OtherTechnologiesElement
              key={index}
              name={element.name}
              description={element.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OtherTechnologies;
