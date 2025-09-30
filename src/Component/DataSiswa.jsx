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
      text: "Data dihapus!",
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
        localStorage.setItem("menu", JSON.stringify(newData));

        Swal.fire("Terhapus!", "Data dihapus.", "success");
      }
    });
  };

const handleEdit = (index) => {
  const item = data[index];
  localStorage.setItem("editIndex", index); 
  localStorage.setItem("editData", JSON.stringify(item)); 
  navigate("/editdata");
};

  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-bold mb-4">Data Siswa</h1>

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
          <tr className="bg-gray-200">
            <th className="bg-blue-500 text-white border px-4 py-2">No</th>
            <th className="bg-blue-500 text-white border px-4 py-2">Nama</th>
            <th className="bg-blue-500 text-white border px-4 py-2">Email</th>
            <th className="bg-blue-500 text-white border px-4 py-2">Password</th>
            <th className="bg-blue-500 text-white border px-4 py-2">Jurusan</th>
            <th className="bg-blue-500 text-white border px-4 py-2">Aksi</th>
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
              <td className="bg-cyan-500 text-white border px-4 py-2">{index + 1}</td>
              <td className="bg-cyan-500 text-white border px-4 py-2">{siswa.nama}</td>
              <td className="bg-cyan-500 text-white border px-4 py-2">{siswa.email}</td>
              <td className="bg-cyan-500 text-white border px-4 py-2">{siswa.password}</td>
              <td className="bg-cyan-500 text-white border px-4 py-2">{siswa.jurusan}</td>
              <td className="bg-cyan-500 text-white border px-4 py-2">
                 <button
                   onClick={() => handleEdit(index)}
                   className="bg-yellow-500 text white px-2 py-1 rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
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
