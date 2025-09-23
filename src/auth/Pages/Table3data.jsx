import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function TambahMenu() {
  const [makanan, setMakanan] = useState("");
  const [porsi, setPorsi] = useState("");
  const [harga, setHarga] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/menu", {
        makanan,
        porsi,
        harga,
      });
      alert("Data berhasil ditambahkan");
      navigate("/");
    } catch (err) {
      console.error("Gagal menambah data:", err);
      alert("Gagal menambah data");
    }
  };

  return (
    <div className="px-[5%] pt-[5%]">
      <h1 className="text-2xl font-bold mb-4">Tambah Data Menu</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Makanan</label>
          <input
            type="text"
            value={makanan}
            onChange={(e) => setMakanan(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Porsi</label>
          <input
            type="text"
            value={porsi}
            onChange={(e) => setPorsi(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label>Harga</label>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Simpan Data
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-gray-400 text-white px-4 py-2 ml-2"
        >
          Kembali
        </button>
      </form>
    </div>
  );
}

export default TambahMenu;