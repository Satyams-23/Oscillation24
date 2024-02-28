import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar.js";
import About from "../About/About.js";
import Track from "../Track/Track.js";
import Rule from "../Rule/Rule.js";
import Main from "../Main/Main.js";
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer.js";
import BackToTopButton from "../BackToTopButton.js";
import PreLoader from "../PreLoader/PreLoader.js";
function Home() {
  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "black" }}>
      <Navbar />
      <Main />
      <About />
      <Track />
      <Rule />
      <Contact />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default Home;
