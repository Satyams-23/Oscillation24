import React from "react";
import { Link } from "react-router-dom";
import { scrollToComponent } from "../ScrollTo";
import "./Navbar.css"

function Navbar() {
  const handleLinkClick = (componentId) => {
    scrollToComponent(componentId);
  };
  return (
    <nav
      className="navbar  navbar-expand-lg navbar-dark border-bottom sticky-top  p-1 "
      id="main"
    >
      <div className="container-fluid ">
        <Link to="/" className="navbar-brand">
          VNPS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ marginLeft: "auto" }}
          >
            <li className="nav-item ms-2">
              <Link className="nav-link" onClick={() => handleLinkClick("new")}>
                <button type="button" class="btn text-white fw-bolder ">
                  Home
                </button>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                onClick={() => handleLinkClick("about")}
              >
                <button type="button" class="btn text-white fw-bolder">
                  About
                </button>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                onClick={() => handleLinkClick("track")}
              >
                <button type="button" class="btn text-white fw-bolder">
                  Track
                </button>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                onClick={() => handleLinkClick("rule")}
              >
                <button type="button" class="btn  text-white fw-bolder ">
                  Rules{" "}
                </button>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                onClick={() => handleLinkClick("contact")}
              >
                <button type="button" class="btn text-white fw-bolder">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
