import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { preLoaderAnim } from "../../animations";
import "./PreLoader.css";

const PreLoader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Run the preLoaderAnim function when the component mounts
    preLoaderAnim();

    // Set a timeout to navigate to the Home page after the animation duration
    const animationDuration = 5000; // Adjust the duration as per your animation
    const timeoutId = setTimeout(() => {
      navigate("/home"); // Redirect to the Home page
    }, animationDuration);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="preloader">
      <div className="texts-container text-white">
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibes.</span>
      </div>
    </div>
  );
};

export default PreLoader;
