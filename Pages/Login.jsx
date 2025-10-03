import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const oldData = JSON.parse(localStorage.getItem("Login")) || [];
    const newData = { email, password };

    localStorage.setItem("Login", JSON.stringify([...oldData, newData]));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleLogin} className="space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        <div>
          <label className="text-center block mb-1 font-semibold text-cyan-300">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-1 w-50 ml-25 mr-25 rounded"
            required
          />
        </div>

        <div>
          <label className="text-center block mb-1 font-semibold text-cyan-300">
            Password
          </label>
          <input
            type="number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-1 w-50 ml-25 mr-25 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
