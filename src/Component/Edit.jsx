import React, { useEffect, useState } from "react";
function Edit() { 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/menu/${id}`);
      const data = Array.isArray(res.data) ? res.data[0] : res.data;
      setFormData(data);
    } catch (err) {
      console.error("Gagal mengambil data:", err);
      alert("Gagal mengambil data!");
    } finally {
        setLoading(false);
    }
  };
  
  fetchData();
}, [id]);

const handleSubmit = async (e) => {
  e.preventDefault();

  const dataToSend = {
    ...formData,
    harga: Number(formData.harga),
};

  try {
      await axios.put(`http://localhost:5000/menu/${id}`, dataToSend);
    alert("Data berhasil diubah!");
    navigate("/tabeldata");
  } catch (err) {
    console.error("Gagal mengupdate data:", err.response?.data || err.message);
    alert("Gagal mengupdate data!");
  }
}
};

export default Edit;