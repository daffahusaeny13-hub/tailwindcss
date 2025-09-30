import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

function TambahDataSiswa() {
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jurusan, setJurusan] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();

  localStorage.removeItem("menu");  

  const oldData = JSON.parse(localStorage.getItem("siswa")) || []; 


  const newData = { nama, email, password, jurusan }; 


  localStorage.setItem("siswa", JSON.stringify([...oldData, newData])); 

  Swal.fire("Sukses", "Data Berhasil Ditambah😨😰!", "success");
  navigate("/datasiswa");
};

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-2 border shadow-lg bg-white">
        <h1 className="text-center text-2xl font-bold py-1">Data Siswa</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-center block mb-1 font-semibold text-cyan-300">Nama</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="border p-1 w-50 ml-25 mr-25 rounded"
              required
            />
          </div>

          <div>
            <label className="text-center block mb-1 font-semibold text-cyan-300">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-1 w-50 ml-25 mr-25 rounded"
              required
            />
          </div>

          <div>
            <label className="text-center block mb-1 font-semibold text-cyan-300">Password</label>
            <input
              type="password"
              inputMode="numeric"
              pattern="\d*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-1 w-50 ml-25 mr-25 rounded"
            />
          </div>

          <div>
            <label className="text-center block mb-1 font-semibold text-cyan-300">Jurusan</label>
            <input
              type="text"
              value={jurusan}
              onChange={(e) => setJurusan(e.target.value)}
              className="border p-1 w-50 ml-25 mr-25 rounded"
            />
          </div>

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={() => navigate("/datasiswa")}
              className="bg-blue-300 text-white px-2 py-1 rounded"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-green-300 text-white px-3 py-2 rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TambahDataSiswa;
