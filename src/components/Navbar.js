import React from "react";
// import App from "../App";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-md navbar-dark py-2 fixed-top"
        style={{ backgroundColor: "#407bff" }}
      >
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            CareerGuru
          </NavLink>

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
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
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
            <NavLink className="btn btn-warning btn-sm mx-2" to="/Login">
              Login
            </NavLink>
            <NavLink to="/SignUp" className="btn btn-primary btn-sm mx-2">
              Sign Up
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
