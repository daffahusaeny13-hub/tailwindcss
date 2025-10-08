import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("dashboar");
  };

  return (
    <div className="flex items-center justify-center bg-sky-500 min-h-screen">
      <div className="bg-amber-50 p-10 rounded-2xl shadow-lg w-full max-w-sm min-h-[480px] flex flex-col justify-center">
        <h1 className="text-center font-bold mb-8 text-3xl text-gray-800">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col items-start w-full">
            <label className="text-center font-semibold mb-1" htmlFor="Email">
              Email
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="Email"
              type="email"
              name="Email"
              placeholder="Masukkan email anda"
              required
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <label className="font-semibold mb-1" htmlFor="Password">
              Password
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="Password"
              type="password"
              name="Password"
              placeholder="Masukkan password anda"
              required
            />
          </div>
          <div className="flex flex-col items-center gap-3 mt-6">
            <button
              type="submit"
              className="bg-green-600 text-white w-full py-2.5 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;