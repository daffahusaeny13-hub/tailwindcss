import { profile } from "console";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Swal from "sweetalert2"; 

function Profile () {
const navigate = useNavigate ();
const [showSejarah, setShowSejarah] = useState(false)

return (
<div className="p-50 mx-55">
<h1 className="text-center text-3x1 font-bold mb-3"></h1>
<div className="text-blue-300 mx-w-md bg-white shadow-lg p-3">
<img
className="w- h- rounded-full mx-auto border-3 border-blue-300 shadow-md"
src=""
alt=""
/>
</div>

<div>
</div>
</div>
);
}
export default profile;