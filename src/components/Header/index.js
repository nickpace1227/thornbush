import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <h1>
                Thornbush Photography
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/homepage">HomePage</Link>
                    </li>
                    <li>
                        <Link to="/Portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/ContactMe">Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}