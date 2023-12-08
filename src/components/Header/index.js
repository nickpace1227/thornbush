import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from "./styles.js";
import "../Images/ThornbushLogo-White.png";

export default function Header() {
    return (
        <Wrapper>
        <div>
            <Link to="/homepage" class="header-logo">
                <img src="../Images/ThornbushLogo.png"/>
            </Link>
            <h1>
                Thornbush Photography
            </h1>
            <div class="nav-bar">
                        <Link to="/homepage">HomePage</Link>
                        <Link to="/Portfolio">Portfolio</Link>
                        <Link to="/About">About</Link>
                        <Link to="/ContactMe">Contact Me</Link>
            </div>
        </div>
        </Wrapper>
    )
}