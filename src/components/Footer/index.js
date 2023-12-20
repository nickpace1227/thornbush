import React from 'react';
import {Wrapper} from "./styles.js";
import { Link } from "react-router-dom";

export default function Footer() {
    const handleClick = () => {
        window.open('https://www.instagram.com/thornbushphotography/')
    }

    return(
        <Wrapper>
            <div className="main-footer">
                    <div className="footer-content">
                    <img src={require("../../assets/images/InstagramGlyphGradient.png")} className="instagram-logo" onClick={handleClick}/>
                    <div className="footer-words">
                        Check us out on instagram!
                    </div>
                    </div>
            </div>
        </Wrapper>
    )
}