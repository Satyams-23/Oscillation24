import React, { useEffect } from "react";
import anime from "animejs";
import "./PreLoader.css";
import png1 from "./2835be8b-1561-4d73-a8fc-877b339c40d7.png";
const PreLoader = () => {
  useEffect(() => {
    const textAnimation = anime.timeline({
      loop: true,
    });

    textAnimation
      .add({
        targets: ".text",
        opacity: [0, 1],
        duration: 2000,
        easing: "easeInOutQuad",
      })
      .add({
        targets: ".text",
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 2000,
        easing: "easeInOutQuad",
        delay: 500,
      })
      .add({
        targets: ".text",
        strokeDashoffset: [0, anime.setDashoffset],
        duration: 2000,
        easing: "easeInOutQuad",
        delay: 500,
      });
  }, []);

  return (
    <div
      className="container-fluid d-flex justify-content-center"
      style={{ backgroundColor: "black", height: "100vh" }}
    >
      <div
        className="text container p-0"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white", // Text color should be white for contrast
          textStroke: "2px black",
          opacity: 0,
        }}
      >
        <div>
          <img src={png1} className="logo"  />
        </div>
        <div className="vid">
          Vidyavardhini's College of Engineering and Technology
        </div>
        <div className="mt-2 present">presents</div>
        <div className="vnps">VNPS</div>
      </div>
    </div>
  );
};

export default PreLoader;
