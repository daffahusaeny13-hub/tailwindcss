import React from "react";
import {Route, Routes}  from "react-router-dom";
import { Link } from "react-router-dom";

 function Sidnav() {
  return (
    <div className="w-60 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">PPDB</h2>
      <nav className="flex flex-col space-y-3">
        <Link to="/homepage" className="hover:text-blue-400">HomePage</Link>
        <Link to="/login" className="hover:text-blue-400">Login</Link>
        <Link to="/menu1" className="hover:text-blue-400">Menu 1</Link>
        <Link to="/menu2" className="hover:text-blue-400">Menu 2</Link>
        <Link to="/menu3" className="hover:text-blue-400">Menu 3</Link>
        <Link to="/profile" className="hover:text-blue-400">Profile</Link>
      </nav>
    </div>
  );
}
export default Sidnav;