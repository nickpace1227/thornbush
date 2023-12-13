import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from "./styles.js";
import ThornbushLogoWhite from "../../assets/images/ThornbushLogoWhite.png";
import ThornbushLogo from "../../assets/images/ThornbushLogo.png";

export default function Header() {
    return (
        <Wrapper>
        <div>
            <Link to="/homepage" className="header-logo">
                <img src={ThornbushLogo}/>
            </Link>
            <h1 className="company-name">
                Thornbush Photography
            </h1>
            <nav className="nav-bar">
                <ul>
                    <li className="nav-items">
                        <Link className="nav-links" to="/homepage">HomePage</Link>
                    </li>
                    <li className="nav-items">
                        <Link className="nav-links" to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-items">
                        <Link className="nav-links" to="/About">About</Link>
                    </li>
                    <li className="nav-items">
                        <Link className="nav-links" to="/ContactMe">Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </Wrapper>
    )
}