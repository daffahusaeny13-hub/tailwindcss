import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Component/HomePage";
import Login from "./Component/Login";
import Menu1 from "./Component/Menu1";
import Menu2 from "./Component/Menu2";
import Menu3 from "./Component/Menu3";
import Profile from "./Component/Profile";
import Sidnav from "./Component/Sidnav";

function App() {
  return (
    <div className="flex">
      <Sidnav />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu1" element={<Menu1 />} />
        <Route path="/menu2" element={<Menu2 />} />
        <Route path="/menu3" element={<Menu3 />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
