import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Swal from "sweetalert2";

function Sidnav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <button
        onClick={() => setOpen(!open)}
        className="p-3 fixed top-4 left-4 z-50 bg-blue-600 text-white rounded-lg shadow-md"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-blue-800 text-white w-64 p-5 transition-transform duration-300 z-40 shadow-lg ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-2xl font-bold mb-4 py-9">Masukkan Text...</div>

        <nav className="space-y-3">
          <a
            href="/tabeldata"
            className="block py-2 px-3 rounded hover:bg-blue-600 transition"
          >
            Tabel Data
          </a>
          <a 
          href="tambahdata"
          className="block py-2 px-3 rounded hover:bg-blue-600 transition"
          >
            Tambah Data 
          </a>
        </nav>
      </div>

        <div
        />
    </div>
  );
}

export default Sidnav;
