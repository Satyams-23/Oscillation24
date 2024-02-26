import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { preLoaderAnim } from "../../animations";
import "./PreLoader.css";

const PreLoader = () => {
    useEffect(() => {
      preLoaderAnim();
    }, []);
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
