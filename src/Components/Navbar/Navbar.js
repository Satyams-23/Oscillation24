import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand ms-2" href="#">
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
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse  justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav nav-underline ">
              <li className="nav-item ms-2">
                <Link className="nav-link" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link to="/about" className="nav-link" href="#">
                  About us
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link className="nav-link ">Track</Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" href="#">
                  Rules
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" href="#">
                  contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
