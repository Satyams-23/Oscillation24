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
        <div className="row texts-container text-white text-center">
          <span>VIDYAVARDHINI'S COLLOGE OF ENGINEERING AND TECHNOLOGY</span>
          <span>PRESENTS</span>
          <span>VNPS'24</span>
        </div>
      </div>
    );
  };

export default PreLoader;
