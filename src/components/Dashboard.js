import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
import axios from "axios";

import "./css/dashboard.css";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [joblist, setJobList] = useState([]);
  const navigate = useNavigate();
  const callDashboard = async () => {
    try {
      const res = await fetch("/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      console.log(res);
      console.log(data);
      if (!(res.status === 200)) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };
  const getData = async () => {
    const res = await axios.get("/getdata");
    console.log(res.status);
    if (res.status === 200) {
      console.log(res.data);
      setJobList(res.data);
    }
  };

  useEffect(() => {
    callDashboard();
    getData();
  }, []);

  const jobcont = joblist.map((obj) => {
    return (
      <Modal
        companyName={obj.companyName}
        desiredSkills={obj.desiredSkills}
        jobDescription={obj.jobDescription}
        role={obj.role}
        yearsOfExperience={obj.yearsOfExperience}
        _id={obj._id}
      />
    );
  });

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-lg-9 matter ">
            <div className="row">
              <div className="col-lg topbar border border-dark">
                <span className="h2">Dashboard</span>
              </div>
              <div className="col-lg-10 catter">{jobcont}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
