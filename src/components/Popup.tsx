import React, { useEffect, useState, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "../styles/popup.scss";

interface PopupProps {
  handleClosePopup: () => void;
}

interface PopupElement {
  name: string;
  description: string;
}

const Popup: React.FC<PopupProps> = ({ handleClosePopup }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [popupElementsState, setPopupElementsState] = useState<{
    [key: string]: boolean;
  }>({});

  const handleToggleDescription = (name: string) => {
    setPopupElementsState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      handleClosePopup();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
    <div className="popup" ref={popupRef}>
      <div className="popup__close-icon" onClick={handleClosePopup}>
        <IoIosCloseCircle />
      </div>
      {popupElements.map((element, index) => (
        <div
          className="popup__element"
          onClick={() => handleToggleDescription(element.name)}
          key={index}
        >
          {!popupElementsState[element.name] && (
            <div className="popup__element-name">{element.name}</div>
          )}
          {popupElementsState[element.name] && (
            <div className="popup__element-description">
              {element.name + ". "}
              {element.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Popup;
