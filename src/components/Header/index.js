import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles.js";
import ThornbushLogoWhite from "../../assets/images/ThornbushLogoWhite.png";

export default function Header() {
  return (
    <Wrapper>
      <div className="header-content">
        <Link to="/">
          <img className="header-logo" alt="logo" src={ThornbushLogoWhite} />
        </Link>
        <div className="header-words">
          <div className="company-name">Thornbush Photography</div>
          <nav className="nav-bar list">
            <Link to="/" className="link-item">
              Home
            </Link>
            <Link to="/Portfolio" className="link-item">
              Portfolio
            </Link>
            <Link to="/About" className="link-item">
              About
            </Link>
            <Link to="/Contact" className="link-item">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </Wrapper>
  );
}
