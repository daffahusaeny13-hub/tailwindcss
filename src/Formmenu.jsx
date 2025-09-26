import React, { useState } from "react";
import Swal from "sweetalert2";

function FormMenu() {
  const [formData, setFormData] = useState({
    makanan: "",
    paket: "",
    harga: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Data berhasil disimpan!",
      text: `${formData.makanan} - ${formData.paket} - Rp${formData.harga}`,
      icon: "success",
      draggable: true, 
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        name="makanan"
        placeholder="Nama Makanan"
        value={formData.makanan}
        onChange={handleChange}
        className="border p-2 block mb-2"
      />
      <input
        type="text"
        name="paket"
        placeholder="Paket"
        value={formData.paket}
        onChange={handleChange}
        className="border p-2 block mb-2"
      />
      <input
        type="number"
        name="harga"
        placeholder="Harga"
        value={formData.harga}
        onChange={handleChange}
        className="border p-2 block mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Simpan
      </button>
    </form>
  );
}

export default FormMenu;
