import React from "react";
import "./track.css";
import gif from "./Time.gif";
import gif1 from "./Firmware.gif";
import gif3 from "./Real-time Sync.gif";
import gif4 from "./House restyling.gif";
import gif5 from "./people using robots.gif";

function Track() {
  return (
    <div className="container mt-5" id="track">
      <div className="fw-bolder text-center text-white track">TRACK</div>
      <p className="text-white text-center para mt-2">
        The following tracks refers to the categories in which your project
        belong Entries are not restricted to these topics only.
      </p>
      <div className="row justify-content-md-center">
        <div className="col p-2 d-flex justify-content-center">
          <div
            className="card border-5 border-secondary"
            style={{ width: "25rem" }}
          >
            <img src={gif} alt="Your GIF" />

            <div className="card-header">
              <h5 className="card-title fw-bolder">Track 1</h5>
            </div>
            <ul className="list-group list-group-numbered">
              <li className="list-group-item">Thermal and Fluid Power Engg.</li>
              <li className="list-group-item">
                Mechanical System Design and Development
              </li>
              <li className="list-group-item">Industry 4.0</li>
              <li className="list-group-item">Renewable Energy</li>
              <li className="list-group-item"> Optimisation and Simulation</li>
              <li className="list-group-item">
                AI and ML application to Mechanical systems
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-2  d-flex justify-content-center">
          <div className="card border-5 border-secondary" style={{ width: "25rem" }}>
            <img src={gif1} alt="Your GIF" />

            <div className="card-header">
              <h5 className="card-title fw-bolder">Track 2</h5>
            </div>
            <ul className="list-group list-group-numbered">
              <li className="list-group-item">
                Microcontroller and Embedded Systems
              </li>
              <li className="list-group-item">IoT and Industry 4.0</li>
              <li className="list-group-item">
                Signal,Image, Speech & Video Processing
              </li>
              <li className="list-group-item">
                Emerging Wireless Communication Technologies and Sensor Networks
              </li>
              <li className="list-group-item"> VLSI Application</li>
            </ul>
          </div>
        </div>
        <div className="col p-2  d-flex justify-content-center">
          <div className="card border-5 border-secondary" style={{ width: "25rem" }}>
            <img src={gif5} alt="Your GIF" />

            <div className="card-header">
              <h5 className="card-title fw-bolder">Track 3</h5>
            </div>
            <ul className="list-group list-group-numbered">
              <li className="list-group-item">
                Automation Using PLC, SCADA and DCS
              </li>
              <li className="list-group-item">Robotics</li>
              <li className="list-group-item">Biomedical Instrumentation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col p-2  d-flex justify-content-center">
          <div className="card border-5 border-secondary" style={{ width: "25rem" }}>
            <img src={gif3} alt="Your GIF" />

            <div className="card-header ">
              <h5 className="card-title fw-bolder">Track 4</h5>
            </div>
            <ul className="list-group list-group-numbered">
              <li className="list-group-item">Cloud Computing and Big Data</li>
              <li className="list-group-item">
                Artifical Intelligence and Machine Learning
              </li>
              <li className="list-group-item">Gaming</li>
              <li className="list-group-item">Web Of Things</li>
              <li className="list-group-item">Web Security and Networking</li>
              <li className="list-group-item">Robotics</li>
            </ul>
          </div>
        </div>
        <div className="col p-2  d-flex justify-content-center">
          <div className="card border-5 border-secondary" style={{ width: "25rem" }}>
            <img src={gif4} alt="Your GIF" />

            <div className="card-header">
              <h5 className="card-title fw-bolder">Track 5</h5>
            </div>
            <ul className="list-group list-group-numbered">
              <li className="list-group-item">
                {" "}
                Concrete Technology and Structural Engg.
              </li>
              <li className="list-group-item">
                Construction Management and Urban Planning
              </li>
              <li className="list-group-item">
                Transportation Engg. and Geotechnical Engg.
              </li>
              <li className="list-group-item">
                Environmental and Water Resources Engg.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
