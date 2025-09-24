import React, { useEffect, useState } from "react";
import axios from "axios";

function Tabeldata() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/menu");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Daftar Menu</h1>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Makanan</th>
            <th>Paket</th>
            <th>Harga</th>
            <div className="mb-4">
              <label
              className="block text-gray-700 text-sm font-blod mb-4"
              htmlFor="makanan"
              >
                makanan 
              </label>
              <input 
               id="makanan"
               name="makanan"
               type="text"
               value={FormData.makanan || ""}
               onChange={handleChange}
               className="shadow appearance-none border rounded w-full"
               required
               >
              </input>
            </div>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4">Belum ada data</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={item.id || index}>
                <td>{index + 1}</td>
                <td>{item.makanan}</td>
                <td>{item.paket}</td>
                <td>{item.harga}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Tabeldata;
