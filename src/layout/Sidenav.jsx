import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="flex min-h-screen">
        <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <nav className="space-y-4">
          <Link to="/profile" className="block hover:underline">Profile</Link>
        </nav>
      </div>
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidenav;