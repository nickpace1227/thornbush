import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import Header from "../Header";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import About from "../About";
import {GlobalStyles} from "../styles/globalStyles";
import GlobalFonts from '../../assets/fonts/fonts.js';

export default function Thornbush() {
    return (
        <BrowserRouter>
        <GlobalFonts />
            <GlobalStyles>
                <Header />
                    <Routes>
                        <Route path="/" exact element={<HomePage />} />
                        <Route path="/HomePage" exact element={<HomePage />} />
                        <Route path="/Portfolio" exact element={<Portfolio />} />
                        <Route path="/About" exact element={<About />} />
                        <Route path="/Contact" exact element={<Contact />} />
                </Routes>
            </GlobalStyles>  
        </BrowserRouter>
    )
};