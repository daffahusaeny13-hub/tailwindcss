import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Tabeldata from "./Component/tabeldata";
import Tambahdata from "./Component/Tambahdata";
import EditData from "./Component/editData";
import Sidnav from "./Component/Sidnav";
import Swal from "sweetalert2";

function App() {
    const showAlert = () => {
    Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true
    });
  };

  return (
    <div className="flex">
      <Sidnav />
      <div className="flex-1 p-6 pl-16">
        <Routes>
          <Route path="/" element={<Sidnav/>} />
          <Route path="/tabeldata" element={<Tabeldata />} />
          <Route path="/tambahdata" element={<Tambahdata />} />
          <Route path="/editdata" element={<EditData />} />

        </Routes>
    <div>
      <button onClick={showAlert}></button>
    </div>
      </div>
    </div>
  );
}

export default App;
