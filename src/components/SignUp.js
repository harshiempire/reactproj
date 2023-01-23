import React from "react";
import signimg from "../assets/images/sign.png";
// import "./css/style.css";
import "./css/sign.css";
import Navbar from "./Navbar";

function SignUp() {
  return (
    <div>
      <Navbar />
      <section className="form mt-lg-5 my-4 mx-5">
        <div className="container">
          <div className="row no-gutters shadow-lg">
            <div
              className="col-7 d-none d-lg-block pl-4 mt-4"
              style={{ borderRadius: "30px!important" }}
            >
              <img src={signimg} className="img-fluid p-5" alt="" />
            </div>
            <div className="col-lg-5 px-5 pt-5 text-md-start text-center">
              <h1 className="fw-bold py-3">Sign Up</h1>
              <form>
                <div className="col">
                  <div className="form-row">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control my-3 p-2"
                    />
                  </div>
                </div>
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
                <div className="form-row">
                  <div className="col my-3 p-2 text-center age">
                    <input type="number" placeholder="Age" />
                  </div>
                </div>
                <div className="col">
                  <a
                    href="/signup"
                    className="btn btn1 mb-4 mt-3 sbtn"
                    type="button"
                  >
                    SignUp
                  </a>
                </div>
                <div className="col mb-3 pb-2">
                  <a className="" href="/login">
                    Already have an Account?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
