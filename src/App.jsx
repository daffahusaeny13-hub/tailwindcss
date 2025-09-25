import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Tabeldata from "./Component/tabeldata";
import Tambahdata from "./Component/Tambahdata";
import Edit from "./Component/Edit";
import Sidnav from "./Component/Sidnav";

function App() {
  return (
    <div>
      <div>
        <Sidnav/>
      </div>
      <Routes>
        <Route path="/Tabeldata" element={<Tabeldata />} />
        <Route path="/" element={<Tambahdata />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/Sidnav" element={<Sidnav />} />
      </Routes>
    </div>
  );
}

export default App;
