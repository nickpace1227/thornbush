import React from "react";
import { Wrapper } from "./styles.js";
// ToDo delete this import you're not using it OR see comment below
import { Link } from "react-router-dom";

export default function Footer() {
  const handleClick = () => {
    window.open("https://www.instagram.com/thornbushphotography/");
  };

  return (
    <Wrapper>
      <div className="main-footer">
        <div className="footer-content">
          {/*  ToDo need a alt tag here */}
          <img
            src={require("../../assets/images/InstagramGlyphGradient.png")}
            className="instagram-logo"
            onClick={handleClick}
          />
          {/* ToDo I'd turn this into a link */}
          <div className="footer-words">Check us out on instagram!</div>
        </div>
      </div>
    </Wrapper>
  );
}
