import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import Header from "../Header";
import Portfolio from "../Portfolio";
import ContactMe from "../ContactMe";
import About from "../About";

export default function Thornbush() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/HomePage" exact element={<HomePage />} />
                <Route path="/Portfolio" exact element={<Portfolio />} />
                <Route path="/About" exact element={<About />} />
                <Route path="/ContactMe" exact element={<ContactMe />} />
            </Routes>   
        </BrowserRouter>
    )
};