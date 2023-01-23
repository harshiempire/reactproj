import React from "react";
import Navbar from "./Navbar";
// import "./css/style.css";
import "./css/login.css";
import logimg from "../assets/images/login.png";

const Login = () => {
  return (
    <div>
      <Navbar />
      <section className="form mt-lg-5 my-4 mx-5">
        <div className="container">
          <div className="row no-gutters shadow-lg">
            <div className="col-lg-5 px-5 pt-5 text-md-start">
              <h1 className="fw-bold py-3">Login</h1>
              <form>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="email"
                      placeholder="Email-Address"
                      className="form-control my-3 p-2"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control my-3 p-2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-7">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="col-5">
                    <a href="/login">Forgot Password?</a>
                  </div>
                  <div className="row pt-2">
                    <div className="col-6"></div>
                    <a href="/signup" className="col-6">
                      Create a new Account!
                    </a>
                  </div>
                </div>
                <div className="col">
                  <button className="btn1 mb-4 mt-3 p-2" type="button" href="">
                    Login
                  </button>
                </div>
                {/* <div className="col mb-3 pb-2">
                  <a className="" href="/signup">
                    Don't have an account?
                  </a>
                </div> */}
              </form>
            </div>
            <div
              className="col-7 d-none d-lg-block pl-4 mt-4"
              style={{ borderRadius: "5px!important" }}
            >
              <img src={logimg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
