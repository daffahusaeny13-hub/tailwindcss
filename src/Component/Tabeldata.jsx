import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Tabeldata() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  navigate("/Edit");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5010/menu");
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Menu</h1>
      <button
        onClick={() => navigate("/tambah")}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Tambah Data
      </button>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">No</th>
            <th className="border p-2">Makanan</th>
            <th className="border p-2">Paket</th>
            <th className="border p-2">Harga</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-2">
                Belum ada data
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={item.id || index}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{item.makanan}</td>
                <td className="border p-2">{item.paket}</td>
                <td className="border p-2">{item.harga}</td>
                <td className="border p-2">
                  <button
                    onClick={() => navigate(`/edit/${item.id}`)}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >
                    Edit
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

export default Tabeldata;
