import React from "react";
import fimg from "../assets/images/icons8-facebook-48.png";
import "./css/sform.css";
import Navbar from "./Navbar";

const Form = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid home">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="tryfixed">
              <div className="container">
                <button
                  type="button"
                  id="googleSignIn"
                  className="btn-social-view g-btn"
                >
                  <img
                    src="https://img.icons8.com/bubbles/50/null/google-logo.png"
                    className="logoimg"
                    alt="hello"
                  />
                  Sign Up with Google
                </button>
                <button type="button" className="btn-social-view fb-btn">
                  <i>
                    <img src={fimg} className="logoimg" alt="hello" />
                  </i>
                  Sign Up with Facebook
                </button>
                <button type="button" className="btn-social-view linkedIn-btn">
                  <img
                    src="https://img.icons8.com/fluency/48/null/linkedin-2.png"
                    className="logoimg"
                    alt="hello"
                  />
                  Sign Up with LinkedIn
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-5 py-3 my-3">
            <h3 className="text-center m-4">Create an account</h3>
            <form>
              <div className="form-group">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group">
                <label for="mobile">Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter your mobile number for"
                />
              </div>
              <div className="form-group">
                <label for="location">Current Location</label>
                <select className="form-control" id="location">
                  <option>Hyderabad</option>
                  <option>Chennai</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Kolkata</option>
                  <option>Bangalore</option>
                </select>
              </div>
              <div className="form-group">
                <label for="experience">Total Experience</label>
                <select className="form-control" id="experience">
                  <option>0-1</option>
                  <option>1-2</option>
                  <option>2-3</option>
                  <option>3-4</option>
                  <option>4-5</option>
                </select>
              </div>

              <div className="form-group">
                <label for="skills">Key Skills</label>
                <select name="countries" id="countries" multiple>
                  <option value="1">Afghanistan</option>
                  <option value="2">Australia</option>
                  <option value="3">Germany</option>
                  <option value="4">Canada</option>
                  <option value="5">Russia</option>
                </select>
              </div>
              <div className="form-group">
                <label for="about">About Me</label>
                <textarea
                  className="form-control"
                  id="about"
                  rows="3"
                  placeholder="Tell us about yourself"
                >
                  I am a software engineer who loves to learn and learn about
                  new technologies. I am also a programmer and a software
                  engineer who loves to learn and learn about new technologies.
                  I am also a software engineer who loves to learn and learn
                  about new technologies.
                </textarea>
              </div>

              <a href="/dashboard" className="btn btn-primary">
                SUBMIT
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
