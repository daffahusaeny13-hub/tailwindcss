import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Dashboard from "./Component/Dashboard";
import Profile from "./Component/Profile";
import Sidenav from "./layout/Sidenav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Sidenav />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;