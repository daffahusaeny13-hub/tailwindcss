import "./App.css";
import React from "react";
import Swal from "sweetalert2";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../Component/HomePage";
import Login from "../../Component/Login";
import Menu1 from "../../Component/Menu1";
import Menu2 from "../../Component/Menu2";
import Menu3 from "../../Component/Menu3";
import Profile from "../../Component/Profile";
import sidnav from "../../Component/sidnav";

function App() {
    return (
    <div className="flex">
      <Sidnav />
        <Routes>
            <Routes path="/profile" element={<Profile/>} />
        </Routes>
      </div>
  );
}

export default App;
