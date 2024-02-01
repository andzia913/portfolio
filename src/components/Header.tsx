import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      {window.innerWidth < 992 && (
        <StaticImage
          src="../images/keyboard.png"
          alt="keyboard"
          placeholder="blurred"
          layout="fullWidth"
          z-index={-1}
        />
      )}
      {window.innerWidth > 992 && (
        <StaticImage
          src="../images/keyboard-xl.png"
          alt="keyboard"
          placeholder="blurred"
          layout="fullWidth"
          z-index={-1}
          objectFit="contain"
        />
      )}
      <div className="header__content">
        <h1 className="header__title">Hi, I'm Angelika</h1>
        <h2 className="header__subtitle">
          <p className="header__subtitle--highlight">
            I'm a Fullstack Developer with experience in JavaScript, TypeScript,
            React, Node.js, and other modern web technologies.
          </p>
          <p>And I'm looking for a job {";)"}</p>
          <a className="button" href="#projects">
            See my projects
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Header;
