import React from "react";
import "../styles/header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">Hi, I'm Angelika</h1>
        <h2 className="header__subtitle">
          I'm a{" "}
          <span className="header__subtitle--highlight">
            Fullstack Developer
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
