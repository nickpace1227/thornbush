import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from "./styles.js";
import ThornbushLogoWhite from "../Images/ThornbushLogoWhite.png";
import ThornbushLogo from "../Images/ThornbushLogo.png";
import GatorEye from "../Images/GatorEye.jpg";

export default function Header() {
    return (
        <Wrapper>
        <div>
            <Link to="/homepage" class="header-logo">
                <img src={ThornbushLogo}/>
            </Link>
            <h1 class="company-name">
                Thornbush Photography
            </h1>
            <nav class="nav-bar">
                <ul>
                    <li class="nav-items">
                        <Link class="nav-links" to="/homepage">HomePage</Link>
                    </li>
                    <li class="nav-items">
                        <Link class="nav-links" to="/Portfolio">Portfolio</Link>
                    </li>
                    <li class="nav-items">
                        <Link class="nav-links" to="/About">About</Link>
                    </li>
                    <li class="nav-items">
                        <Link class="nav-links" to="/ContactMe">Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </Wrapper>
    )
}