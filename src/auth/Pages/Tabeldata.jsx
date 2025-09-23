import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TabelData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ambil data pertama kali
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/menu");
        setData(res.data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // hapus data
  const handleDelete = async (id) => {
    const konfirmasi = window.confirm("Yakin ingin menghapus data ini?");
    if (!konfirmasi) return;

    try {
      await axios.delete(`http://localhost:5000/menu/${id}`);
      alert("Data berhasil dihapus");
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Gagal menghapus data:", err);
      alert("Gagal menghapus data");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="px-[5%] pt-[5%] md:px-10 md:pt-1">
      {/* render tabel di sini */}
    </div>
  );
}

export default TabelData;
