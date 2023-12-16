import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from "./styles.js";
import ThornbushLogoWhite from "../../assets/images/ThornbushLogoWhite.png";


export default function Header() {
    return (
        <Wrapper>
        <div className="header-content">
            <Link to="/homepage" >
                <img className="header-logo" alt="logo" src={ThornbushLogoWhite}/>
            </Link>
            <div className="header-words">
            <h1 className="company-name">
                Thornbush Photography
            </h1>
            <nav className="nav nav-bar">
                <ul className="list">
                    <li className="list-item">
                        <Link to="/homepage" className="link-item">HomePage</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/Portfolio" className="link-item">Portfolio</Link>
                    </li>
                    <li className="list-item">
                        <Link className="link-item" to="/About">About</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/Contact" className="link-item">Contact</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
        </Wrapper>
    )
}