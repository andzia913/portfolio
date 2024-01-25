import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <StaticImage
        src="../images/keyboard.png"
        alt="keyboard"
        placeholder="blurred"
        layout="fullWidth"
        z-tabIndex={-1}
      />
      <div className="header__content">
        <h1 className="header__title">Hi, I'm Angelika</h1>
        <h2 className="header__subtitle">
          <p className="header__subtitle--highlight">
            I'm a Fullstack Developer with experience in JavaScript, TypeScript,
            React, Node.js, and other modern web technologies.
          </p>
          <p>And I'm looking for a job {";)"}</p>
        </h2>
      </div>
    </div>
  );
};

export default Header;
