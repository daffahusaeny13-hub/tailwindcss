import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditSiswa() {
  const navigate = useNavigate();
  const { id } = useParams(); // ambil index dari URL
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    jurusan: ""
  });

  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem("siswa")) || [];
    if (allData[id]) {
      setFormData(allData[id]);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allData = JSON.parse(localStorage.getItem("siswa")) || [];
    allData[id] = formData; // update berdasarkan index
    localStorage.setItem("siswa", JSON.stringify(allData));
    Swal.fire("Berhasil!", "Data siswa berhasil diupdate.", "success");
    navigate("/datasiswa");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-3">
      <input
        name="nama"
        value={formData.nama}
        onChange={handleChange}
        placeholder="Nama"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input
        name="jurusan"
        value={formData.jurusan}
        onChange={handleChange}
        placeholder="Jurusan"
      />
      <button type="submit">Simpan</button>
    </form>
  );
}

export default EditSiswa;
