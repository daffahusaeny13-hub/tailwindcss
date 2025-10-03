import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";

function App() {
  return (
    <div className="flex">
      <Sidnav />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
