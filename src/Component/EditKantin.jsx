import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function EditKantin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    makanan: "",
    harga: "",
    paket: ""
  });

  useEffect(() => {
    const editData = JSON.parse(localStorage.getItem("editKantinData"));
    if (editData) {
      setFormData(editData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const index = localStorage.getItem("editKantinIndex");
    const allData = JSON.parse(localStorage.getItem("kantin")) || [];

    allData[index] = formData;
    localStorage.setItem("kantin", JSON.stringify(allData));

    Swal.fire("Berhasil!", "Data kantin berhasil diupdate.", "success");
    navigate("/datakantin");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Data Kantin</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="makanan"
          value={formData.makanan}
          onChange={handleChange}
          placeholder="Nama Makanan"
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="harga"
          value={formData.harga}
          onChange={handleChange}
          placeholder="Harga"
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="paket"
          value={formData.paket}
          onChange={handleChange}
          placeholder="Paket"
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
}

export default EditKantin;
