// import logo from './logo.svg';
import React, { Component } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
// import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    );
  }
}

export default App;
