import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Tambahdata() {
  const [formData, setFormData] = useState({ makanan: "", paket: "", harga: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/menu", formData);
      navigate("/tabeldata");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tambah Data</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="makanan"
          value={formData.makanan}
          onChange={handleChange}
          placeholder="Makanan"
          className="border p-2 w-full"
          required
        />
        <input
          name="paket"
          value={formData.paket}
          onChange={handleChange}
          placeholder="Paket"
          className="border p-2 w-full"
          required
        />
        <input
          name="harga"
          value={formData.harga}
          onChange={handleChange}
          placeholder="Harga"
          className="border p-2 w-full"
          type="number"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Simpan
        </button>
      </form>
    </div>
  );
}

export default Tambahdata;
