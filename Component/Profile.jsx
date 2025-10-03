import React from "react";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom"

function Profile () {
const navigate = useNavigate ();
const [showProfile, setShowProfile] = useState (false);

return (
    
<div className="p-50 mx-55">
    <h1 className="text-center text-3x1 font-bold mb-3"></h1>
    <div className="text-blue-300 max-w-md bg-white shadow-lg p-3">
        <img className="w- h- rounded-full mx-auto border-3 border-blue-300 shadow-md"
        src="https://i.pinimg.com/736x/3a/12/b9/3a12b97d7f4cbb0a4e35e81faa954d69.jpg"
        alt=""         
        /> 
    </div>
    <div className="text-center text-blue-300 max-w-md bg-white shadow-lg p-3 border-font semibold">
        <h2 className="text2xl mb-3"></h2>
      <button
          onClick={() => setShowProfile(!showProfile)}
          className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          Profile
        </button>
        {showProfile && (
            <div className="mt-3 text-gray-700">
                <img
                className="mx-auto mb-3 rounded-lg-shadow"
                alt=""
                src="https://i.pinimg.com/736x/81/a0/d5/81a0d50d6254a0e411ae15d7de92e490.jpg"
                />
            </div>
        )}
    </div>
</div>
)
}
export default Profile;