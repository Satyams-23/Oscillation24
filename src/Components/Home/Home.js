import React from "react";
import Navbar from "../Navbar/Navbar.js";
import About from "../About/About.js";
import Track from "../Track/Track.js";
import Rule from "../Rule/Rule.js";
import Main from "../Main/Main.js";
import Contact from "../Contact/Contact.js";
function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Track />
      <Rule />
      <Contact />
    </>
  );
}

export default Home;