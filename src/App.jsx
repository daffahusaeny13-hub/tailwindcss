import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import TabelData from "./Component/tabeldata";
import DataSiswa from "./Component/DataSiswa";
import Tambahdata from "./Component/Tambahdata";
import TambahDataSiswa from "./Component/TambahDataSiswa";
import EditData from "./Component/editData";
import Sidnav from "./Component/Sidnav";
import Profil from "./Component/Profil";
import Dashboard from "./Component/Dashboard";
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
        {/* Route berfungsi untuk memanggil isi dari file yang ada di Sidnav */}
        <Routes> 
          <Route path="/" element={<Sidnav/>} />
          <Route path="/datakantin" element={<TabelData />} />
          <Route path="/datasiswa" element={<DataSiswa />} />
          <Route path="/tambahdata" element={<Tambahdata />} />
          <Route path="/tambahdatasiswa" element={<TambahDataSiswa />} />
          <Route path="/editdata" element={<EditData />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
    <div>
      <button onClick={showAlert}></button>
    </div>
      </div>
    </div>
  );
}

export default App;
