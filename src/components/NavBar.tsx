import React, { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

import "../styles/nav-bar.scss";

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">Logo</div>
      {isMobileMenuOpen ? (
        <div className="navbar__menu-mobile">
          <IoMdClose
            onClick={() => setIsMobileMenuOpen(false)}
            className="navbar__icon navbar__icon-close"
          />
          <a onClick={() => setIsMobileMenuOpen(false)} href="#about">
            About Me
          </a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#projects">
            Projects
          </a>
          <a onClick={() => setIsMobileMenuOpen(false)} href="#contact">
            Contact
          </a>
        </div>
      ) : (
        ""
      )}
      <TiThMenu
        onClick={() => {
          setIsMobileMenuOpen(true),
            console.log("klikaniedziała", isMobileMenuOpen);
        }}
        className="navbar__icon"
      />
    </nav>
  );
};

export default NavBar;
