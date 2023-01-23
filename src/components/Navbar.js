import React from "react";
// import App from "../App";

const Navbar = () => {
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-md navbar-dark py-2 fixed-top"
        style={{ backgroundColor: "#407bff" }}
      >
        <div className="container">
          <a href="/" className="navbar-brand">
            CareerGuru
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#knowmore" className="nav-link">
                  Know more
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
            <a className="btn btn-warning btn-sm mx-2" href="/login">
              Login
            </a>
            <a href="/signup" className="btn btn-primary btn-sm mx-2">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
