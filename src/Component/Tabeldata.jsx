import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function TabelData() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("kantin")) || [];
    setData(savedData);
  }, []);

  const handleDelete = (index) => {
    Swal.fire({
      title: "Yakin?",
      text: "Data akan dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
        localStorage.setItem("kantin", JSON.stringify(updatedData));
        Swal.fire("Terhapus!", "Data berhasil dihapus.", "success");
      }
    });
  };

  const handleEdit = (index) => {
    navigate(`/editkantin/${index}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Data Menu Kantin</h1>
      {data.length === 0 ? (
        <p>Tidak ada data menu kantin.</p>
      ) : (
        <table className="table-auto border border-gray-400 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-3 py-2">Nama Menu</th>
              <th className="border px-3 py-2">Harga</th>
              <th className="border px-3 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-3 py-2">{item.nama}</td>
                <td className="border px-3 py-2">{item.harga}</td>
                <td className="border px-3 py-2 space-x-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-400 px-2 py-1 rounded"
                  >
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
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TabelData;
