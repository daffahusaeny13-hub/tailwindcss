import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md mb-4">
      <Link
              to="/dashboard"
            >
              Kembali Ke Dahsboard
            </Link>
      </div>
      <div className="w-full max-w-md bg-white shadow-lg p-6 rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Profile</h1>
        <div className="text-gray-700 text-base">
          <p><span className="font-semibold">Nama:</span> Daffa Husaeny</p>
          <p><span className="font-semibold">Kelas:</span> X TKJ</p>
          <p><span className="font-semibold">Sekolah:</span> SMK Binus Nusantara</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
