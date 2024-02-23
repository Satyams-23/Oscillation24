import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar.js";
import About from "../About/About.js";
import Track from "../Track/Track.js";
import Rule from "../Rule/Rule.js";
import Main from "../Main/Main.js";
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer.js";
import WAVES from "vanta/dist/vanta.waves.min";

function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    setVantaEffect(
      WAVES({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        color: 0x191f26,
        shininess: 20.0,
        waveSpeed: 0.5,
        waveHeight: 20.0,
        zoom: 0.65,
      })
    );

    // Cleanup function
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="container-fluid p-0" ref={myRef}>
      <Navbar />
      <Main />
      <About />
      <Track />
      <Rule />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
