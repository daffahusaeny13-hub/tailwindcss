import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function TabelData() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("menu")) || [];
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

        Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
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
      <h1 className="text-center text-2xl font-bold mb-4">Menu</h1>
      <button
        onClick={() => navigate("/tambahdata")}
           className="bg-blue-500 text-white px-4 py-2 rounded">
         Tambah Data
      </button>

      <table className="w-full border-collapse border text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="bg-blue-500 text-white border px-4 py-2">No</th>
            <th className="bg-blue-500 text-white border px-4 py-2">Makanan</th>
            <th className="bg-blue-500 text-white border px-4 py-2">Paket</th>
            <th className="bg-blue-500 text-white border px-4 py-2">Harga</th>
            <th className="bg-blue-500 text-white border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td className="bg-cyan-500 text-white border px-4 py-2">{i + 1}</td>
              <td className="bg-cyan-500 text-white border px-4 py-2">{item.makanan}</td>
              <td className="bg-cyan-500 text-white border px-4 py-2">{item.paket}</td>
              <td className="bg-cyan-500 text-white border px-4 py-2">{item.harga}</td>
              <td className="bg-cyan-500 text-white border px-4 py-2">
                <button
                   onClick={() => handleEdit(i)}
                   className="bg-yellow-500 text white px-2 py-1 rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(i)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelData;