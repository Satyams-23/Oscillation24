import React from "react";
import { Link } from "react-scroll";
function Navbar() {
  <Link
    activeClass="active"
    to="main"
    spy={true}
    smooth={true}
    offset={50}
    duration={500}
    className="nav-link "
    aria-current="page"
    href="#"
  ></Link>;
  return (
    <nav className="navbar  navbar-expand-lg navbar-dark border-bottom sticky-top  p-1">
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
              <Link to="/" className="nav-link">
                <button type="button" class="btn text-white fw-bolder ">
                  Home
                </button>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                aria-current="page"
                href="#"
              >
                <button type="button" class="btn text-white fw-bolder">
                  About
                </button>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                activeClass="active"
                to="track"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                aria-current="page"
                href="#"
              >
                <button type="button" class="btn text-white fw-bolder">
                  Track
                </button>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                activeClass="active"
                to="rule"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                aria-current="page"
                href="#"
              >
                <button type="button" class="btn  text-white fw-bolder ">
                  Rules{" "}
                </button>
              </Link>
            </li>
            <li className="nav-item ms-2">
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                aria-current="page"
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
