import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/header.scss";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  useEffect(() => {
    window.innerWidth < 992 ? setIsMobile(true) : setIsMobile(false);
  }, []);
  return (
    <div className="header">
      {isMobile && (
        <StaticImage
          src="../images/keyboard.png"
          alt="keyboard"
          placeholder="blurred"
          layout="fullWidth"
          z-index={-1}
        />
      )}
      {!isMobile && (
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
