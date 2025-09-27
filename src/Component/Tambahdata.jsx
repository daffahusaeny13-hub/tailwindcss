import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

function TambahData() {
  const navigate = useNavigate();

  const [makanan, setMakanan] = useState("");
  const [harga, setHarga] = useState("");
  const [paket, setPaket] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("menu")) || [];

    const newData = { makanan, harga, paket };

    localStorage.setItem("menu", JSON.stringify([...oldData, newData])); 

    Swal.fire("Sukses", "Data berhasil ditambahkan!", "success");
    
    navigate("/tabeldata");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 border rounded-lg shadow-lg w-full max-w-md bg-white">
        <h1 className="text-center text-2xl font-bold py-2">Menu</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-center block mb-1 font-semibold">Makanan</label>
            <input
              type="text"
              value={makanan}
              onChange={(e) => setMakanan(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div>
            <label className="text-center block mb-1 font-semibold">Harga</label>
            <input
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>

          <div>
            <label className="text-center block mb-1 font-semibold">Paket</label>
            <input
              type="text"
              value={paket}
              onChange={(e) => setPaket(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={() => navigate("/tabeldata")}
              className="bg-blue-400 text-white px-3 py-2 rounded"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-green-400 text-white px-3 py-2 rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TambahData;