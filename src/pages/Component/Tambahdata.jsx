import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FormMenu() {
  const [formData, setFormData] = useState({
    makanan: "",
    paket: "",
    harga: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });                 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/menu", formData);

      console.log("Respon server:", response.data);
      alert("Data berhasil ditambahkan");

      setFormData({
        makanan: "",
        paket: "",
        harga: "",
      });

      navigate("/tabeldata"); 
    } catch (error) {
      console.error("Eror saat menambahkan data:", error);
      alert("Gagal menambahkan data!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Makanan:</label>
        <input
          type="text"
          name="makanan"
          value={formData.makanan}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Paket:</label>
        <input
          type="text"
          name="paket"
          value={formData.paket}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Harga:</label>
        <input
          type="number"
          name="harga"
          value={formData.harga}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Menyimpan..." : "Simpan"}
      </button>
    </form>
  );
}

export default FormMenu;

