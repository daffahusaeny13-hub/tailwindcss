import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function EditData() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    makanan: "",
    paket: "",
    harga: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("editData");
    const index = localStorage.getItem("editIndex");

    if (savedData && index !== null) {
      setFormData(JSON.parse(savedData));
      setEditIndex(Number(index));
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

    const data = JSON.parse(localStorage.getItem("menu")) || [];
    if (editIndex !== null) {
      data[editIndex] = formData;
      localStorage.setItem("menu", JSON.stringify(data));
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Data berhasil diperbarui",
      showConfirmButton: false,
    });
    localStorage.removeItem("editIndex");
    localStorage.removeItem("editData");

    navigate("/tabeldata");
  };

  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-bold mb-4">Edit Data</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-4 shadow rounded"
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Makanan</label>
          <input
            type="text"
            name="makanan"
            value={formData.makanan}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Paket</label>
          <input
            type="text"
            name="paket"
            value={formData.paket}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Harga</label>
          <input
            type="number"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

export default EditData;
