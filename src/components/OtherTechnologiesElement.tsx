import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

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
      <div className="other-technologies__element-name">
        {showDescription ? <IoIosArrowDown /> : <IoIosArrowForward />}
        {name}
      </div>
      {showDescription && (
        <div className="other-technologies__element-description">
          {description}
        </div>
      )}
    </div>
  );
};

export default OtherTechnologiesElement;
