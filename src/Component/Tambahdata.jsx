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
    
    console.log({
      makanan,
      harga,
      paket,
    });


    navigate("/tabeldata");
  }
  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-bold py-2">Data Menu</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Makanan</label>
          <input
            type="text"
            value={makanan}
            onChange={(e) => setMakanan(e.target.value)}
            className="border p-1"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Harga</label>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            className="border p-1"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Paket</label>
          <input
            type="text"
            value={paket}
            onChange={(e) => setPaket(e.target.value)}
            className="border p-1"
          />
        </div>

        <div className="flex gap-2">
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
  );
}

export default TambahData;