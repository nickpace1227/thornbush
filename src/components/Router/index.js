import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import Header from "../Header";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Footer from "../Footer";
import { GlobalStyles } from "../styles/globalStyles";

export default function Thornbush() {
  return (
    <BrowserRouter>
      <GlobalStyles>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Portfolio" exact element={<Portfolio />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </GlobalStyles>
    </BrowserRouter>
  );
}
