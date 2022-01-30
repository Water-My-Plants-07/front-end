import "./App.css";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <h1>Water my Plants</h1>
      <Login />
    </div>
  );
};

export default App;
