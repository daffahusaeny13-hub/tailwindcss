import React, { useState } from "react";
import {Route, Routes, useNavigate}  from "react-router-dom";

function Menu1() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("siswa")) || [];
    setData(savedData);
    }, []);

    return(
        <div className="p-8">
            <h1 className="text-center text-2x1 font-bold mb-6">Menu 1</h1>
            <button onClick={() => navigate ("/Login")}
                className="bg-blue-500 text-white px-4 py-2 rounded">
            </button>
        </div>
    )
}
export default Menu1;