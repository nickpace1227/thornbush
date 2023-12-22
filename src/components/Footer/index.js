import React from "react";
import { Wrapper } from "./styles.js";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <Wrapper>
          <Link to="https://www.instagram.com/thornbushphotography/" target="_blank" rel="noopener noreferrer" className="footer-content">
            <img
            alt="instagram-logo"
            src={require("../../assets/images/InstagramGlyphGradient.png")}
            className="instagram-logo"
            />
            <div className="footer-words">Check us out on instagram!</div>
          </Link>
    </Wrapper>
  );
}
