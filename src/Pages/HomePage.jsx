import React from "react";
import { Link } from "react-router-dom";
import ppdb from "../assets/ppdb.jpg"; 

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <main className="flex-grow w-full flex flex-col items-center justify-center">
        <div id="Beranda" className="text-center">
          <h1 className="text-4xl font-extrabold mb-6">
            Selamat datang di PPDB
          </h1>

          <div className="flex flex-col items-center gap-6 mt-4 rounded-lg p-6 bg-blue-100 shadow-lg">
            <img
              src={ppdb}
              alt="ppdb"
              className="w-64 h-64 object-cover rounded-md shadow-md"
            />

            <Link
              to="/login"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
            >
              Login
            </Link>
          </div>
        </div>

        <hr className="my-10 w-full max-w-4xl border-t border-gray-300" />

        <div id="Jurusan" className="max-w-6xl mx-auto py-10 px-4 w-full">
          <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Jurusan
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-xl rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">TKJ</h2>
              <p className="text-sm text-gray-600">
                Mempelajari bongkar pasang komputer, jaringan, dan dasar-dasar coding.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-red-600 mb-2">TSM</h2>
              <p className="text-sm text-gray-600">
                Mempelajari cara bongkar pasang dan servis mesin sepeda motor.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-green-600 mb-2">DPB</h2>
              <p className="text-sm text-gray-600">
                Mempelajari teknik menjahit, desain pola, dan produksi busana.
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-yellow-600 mb-2">AKL</h2>
              <p className="text-sm text-gray-600">
                Mempelajari akuntansi, manajemen keuangan, dan transaksi.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;