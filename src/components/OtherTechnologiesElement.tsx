import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "../styles/other-technologies-element.scss";

interface OtherTechnologiesElementProps {
  name: string;
  description: string;
}

const OtherTechnologiesElement: React.FC<OtherTechnologiesElementProps> = ({
  name,
  description,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      className="other-technologies__element"
      onClick={() => setShowDescription((currentValue) => !currentValue)}
    >
      {!showDescription && (
        <div className="other-technologies__element-name">
          <IoIosArrowForward />
          {name}
        </div>
      )}
      {showDescription && (
        <div className="other-technologies__element-description">
          {name + ". " + description}
        </div>
      )}
    </div>
  );
};

export default OtherTechnologiesElement;
