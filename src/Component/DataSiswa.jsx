import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function DataSiswa() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("siswa")) || [];
    setData(savedData);
  }, []);

  const handleDelete = (index) => {
    Swal.fire({
      title: "Yakin hapus data?",
      text: "Data siswa akan dihapus permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgba(248, 252, 10, 1)",
      cancelButtonColor: "#09efffff",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
        localStorage.setItem("siswa", JSON.stringify(newData));
        Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
      }
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-bold mb-5">Data Siswa</h1>

      <div className="mb-3">
        <button
          onClick={() => navigate("/tambahdatasiswa")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Tambah Data
        </button>
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border p-2">No</th>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Password</th>
            <th className="border p-2">Jurusan</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center p-3">
                Belum ada data siswa
              </td>
            </tr>
          ) : (
            data.map((siswa, index) => (
              <tr key={index} className="bg-cyan-400 text-black">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">{siswa.nama}</td>
                <td className="border p-2">{siswa.email}</td>
                <td className="border p-2">{siswa.password}</td>
                <td className="border p-2">{siswa.jurusan}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataSiswa;
