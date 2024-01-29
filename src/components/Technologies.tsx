import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import "../styles/technologies.scss";
import Popup from "./Popup";
import OtherTechnologies from "./OtherTechnologies";

interface Technology {
  name: string;
  icon: ReactElement<IconType>;
}

const Technologies: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const technologies: Technology[] = [
    { name: "React", icon: <FaReact /> },
    { name: "NodeJS", icon: <DiNodejs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "MySQL", icon: <SiMysql /> },
  ];

  return (
    <div className="technologies" onClick={() => setIsPopupOpen(true)}>
      {technologies.map((technology) => (
        <div key={technology.name} className="technology">
          <div className="technology__icon">{technology.icon}</div>
          <span className="technology__name">{technology.name}</span>
        </div>
      ))}
      <button className="button" onClick={() => setIsPopupOpen(true)}>
        See all
      </button>
      {isPopupOpen && (
        <Popup
          handleClosePopup={handleClosePopup}
          children={<OtherTechnologies />}
        />
      )}
    </div>
  );
};

export default Technologies;
