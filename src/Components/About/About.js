import React from "react";
import "../About/About.css";
function About() {
  return (
    <div className="container-fluid mt-5 pt-3  " id="about">
      <hr className="border-2 border-dark opacity-100 " />
      <div className=" fw-bolder text-center about text-white">ABOUT US</div>
      <div className="container">
        <p className="text-white text-center par mt-2">
          Oscillations'23 - TPP (Technical Paper Presentation) an intercollege student technical paper presentation annually organized by VCET in order to give due recognition to the inquisitiveness and creativity of students. We invite the brightest minds to come and compete in TPP 2023 to showcase their research work and win accolades and exciting prizes.
        </p>
        <div className="container mt-5">
          <div className="row justify-content-center p-0 ">
            <div className="col  text-center">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/csi.png"
                className="img "
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col text-center">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/isa.png"
                className="img "
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col text-center">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/ishrae.png"
                className="img"
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col  mt-3 text-center">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/igbc.png"
                className="img "
                style={{ width: "10rem", aspectRatio: "3/2" }}
                alt=""
              />
            </div>
            <div className="col mt-3 text-center">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/ieee.png"
                className="img"
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col mt-3 text-center ">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/iete.png"
                className="img "
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
            <div className="col mt-3 text-center">
              <img
                src="https://adityalawate.github.io/VNPS-2023/images/logos/final/vmea.png"
                className="img "
                style={{ width: "8rem", aspectRatio: "1" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
