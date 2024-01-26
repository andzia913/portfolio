import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/accordion.scss";

interface AccordionProps {
  title: string;
  content: string[];
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "accordion--open" : ""}`}>
      <div className="accordion__header" onClick={handleToggle}>
        <h3 className="accordion__title">{title}</h3>
        <span className="accordion__icon">
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      {isOpen && (
        <div className="accordion__content">
          {content.map((element) => (
            <div className="accordion__element">{element}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
