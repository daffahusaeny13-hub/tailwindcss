import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TabelData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/menu");
        setData(res.data); 
      } catch (error) {
        console.error("Error:", error);
        alert("Gagal");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => { {
      try {
        await axios.delete(`http://localhost:5000/menu/${id}`);
        alert("Data berhasil dihapus!");
        setData(data.filter((item) => item.id !== id)); 
      } catch (error) {
        console.error("Error:", error);
        alert("Gagal!");
      }
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <h2>Daftar Menu</h2>
      <button onClick={() => navigate("/tambahdata")}>+ Tambah Data</button>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Makanan</th>
            <th>Paket</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr 
                 key={item.id}
                 className="border-1 hover:bg-gray-50"
              >
                <td className="px-4 py-2 text-center">          
                 {index + 1}
                </td>
                <td className="px-4 py-2 text-center">
                     {item.makanan}
                </td>
                <td className="px-4 py-2 text-center">
                    {item.paket}
                </td>
                <td className="px-4 py-2 text-center">
                     {item.harga}
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Hapus</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TabelData;
