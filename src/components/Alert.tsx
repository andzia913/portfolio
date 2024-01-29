import React from "react";
import "../styles/alert.scss";

type AlertProps = {
  status: "success" | "error" | "info";
  text: string;
};

const Alert: React.FC<AlertProps> = ({ status, text }) => {
  return (
    <div className={`alert alert--${status}`}>
      <p className="alert__text">{text}</p>
    </div>
  );
};

export default Alert;
