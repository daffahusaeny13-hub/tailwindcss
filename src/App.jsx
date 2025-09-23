import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Landingpage from "./pages/Landingpage";
import TabelData from "./auth/Pages/Tabeldata";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/menu" element={<TabelData />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;