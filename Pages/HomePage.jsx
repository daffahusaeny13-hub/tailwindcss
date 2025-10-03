import React from "react";
import { Route, Routes } from "react-router-dom";
import ppdb from "../assets/ppdb.jpg";
function HomePage() {

    return(
        <div className="min-h-screen flex items-center justify-center bg-grident-to-r from-blue-400 to-block">
            <div className="text-center text-white max-w-md">
                <img 
                src={ppdb} alt="Logo Sekolah"
                className="mx-auto w-55 h-50 mb-6 rounded-4 shadow-lg"
                />
                <p className="mb-6 text-lg">PPDB</p>
                <Link to="/M">
                <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-5 shadow-lg hover:bg-gray-400 transition">
                Daftar
                </button>
                </Link>
            </div>
            <div className="text-blue text-center mt-10 text-lg min-h-screen justify-between">
                <h3 className="uppercase">
                    PPDB Smk Binus Nusantara
                </h3>
                <h2>Jurusan Di Binus Nusantara</h2>
                <div className="grid grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">

                     <div class="p-4 border rounded-lg shadow-md">
                         <h2 class="text-lg font-bold mb-2">TKJ</h2>
                         <p class="text-blue">Belajar perakitan dan perbaikan komputer dan jaringan.</p>
                     </div>

                     <div class="p-4 border rounded-lg shadow-md">
                        <h2 class="text-lg font-bold mb-2">TSM</h2>
                        <p class="text-blue">Belajar Mekanisme Kendaraan</p>
                     </div>

                     <div class="p-4 border rounded-lg shadow-md">
                        <h2 class="text-lg font-bold mb-2">AKL</h2>
                        <p class="text-blue">mempelajari percatatan transaksi dan Ekonimi bisnis</p>
                     </div>

                     <div class="p-4 border rounded-lg shadow-md">
                        <h2 class="text-lg font-blue mb-2">TB</h2>
                        <p class="text-blue">mempelajari cara menjahit pakaian dan jenis benang jarum</p>
                     </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;