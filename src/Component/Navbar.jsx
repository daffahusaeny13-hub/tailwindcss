import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">Menu App</h1>
      <div className="space-x-4">
        <Link to="/tabeldata" className="hover:text-gray-300">Tabel Data</Link>
        <Link to="/tambah" className="hover:text-gray-300">Tambah Data</Link>
      </div>
    </nav>
  );
}

export default Navbar;
