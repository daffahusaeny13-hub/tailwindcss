import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tambahdata from "./auth/Pages/Tambahdata.jsx";
import Tabeldata from "./auth/Pages/Tabeldata.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tabeldata />} />
      <Route path="/tambah" element={<Tambahdata />} />
    </Routes>
  );
}

export default App;
