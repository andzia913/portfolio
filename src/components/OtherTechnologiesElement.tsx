import React, { useState } from "react";
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
    <p
      className="other-technologies__element"
      onClick={() => setShowDescription((currentValue) => !currentValue)}
    >
      {!showDescription && (
        <div className="other-technologies__element-name">{name}</div>
      )}
      {showDescription && (
        <div className="other-technologies__element-description">
          {name + ". " + description}
        </div>
      )}
    </p>
  );
};

export default OtherTechnologiesElement;
