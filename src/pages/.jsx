import { useState } from "react";
import { Link } from "react-router-dom";
import gambar from '../assets/ppdb.jpg'

function Register() {
  return (
    <div className="bg-[#000000] min-h-screen flex flex-col justify-between font-sans">
      {/* fr5tf */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center font-bold text-white text-3xl md:text-5xl uppercase mb-10 leading-tight tracking-wider">
          <h1 className="drop-shadow-lg">FORMULIR PENDAFTARAN</h1>
        </div>
        {/* pppppp */}
        <div className="bg-[#000000] rounded-ful p-4 md:p-5 shadow-xl w-full max-w-sm mb-10 transform -rotate-0">
          <div className="text-center text-[#FFFFFF] font-extrabold text-xl md:text-1xl">
            Pendaftaran SMK Bina Nusantara
              <div className="text-center text-[#FFFFFF] font-extrabold text-xl md:text-3xl">
          <p className="text-center text-[#FFFFFF] font-extrabold text-xl md:text-3xl">Registration Info:</p>
          <div className="text-center text-[#FFFFFF] font-extrabold text-xl md:text-3xl">
            <span className="font-bold">+62 838-7729-0876</span>
          </div>
          </div>
          </div>
        </div>

        <div className="text-center text-white text-base md:text-xl font-medium tracking-wide m-">
        </div> 
        <div className='2x1 '>

          <img src={sekolah} alt="" />
         <Link to="/R">
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
           Daftar
          </button>
          </Link>
        </div>
      </div>
    </div>

  );
};

import {Tabel} from 'react-bootstrap'

lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

function Tabel1() {

      const data2 = [
{id: 1, nama_lengkap:"M. Drean Julianto", nama_belakang: "Julianto",username:"Allea" },
{id: 2, nama_lengkap:"", nama_belakang: "City",username:"yhusuf"},
{id: 3, nama_lengkap:"", nama_belakang: "Madrid",username:"Los Galaticos"},

      ]
  return (
    <>
      <div style={{ width: "700px", marginleft: "10%" }}>
        <h5>Materi mapping Tabel</h5>
        <Tabel striped bordered>
          <thead>
            <tr>
                <th class="border border-gray-300...">full name</th>
                <th class="border border-gray-300...">last lengkap</th>
                <th class="border border-gray-300...">username</th>
              <th>#</th>
              <th>full name</th>
              <th>last name</th>
              <th>username</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => (
              <tr>
                <th class="border border-gray-300...">{item.nama_lengkap}</th>
                <th class="border border-gray-300...">{item.nama_lengkap}</th>
                <th class="border border-gray-300...">{item.username}</th>
                <td>{item.nama_lengkap}</td>
                <td>{item.nama_belakang}</td>
                <td>{item.username}</td>
              </tr>  
                
            
            ))}
            <tr>
              <th>1</th>
              <th>jacob</th>
              <yh>Thornton</yh>
              <th>@fat</th>
            </tr>
          </tbody>
        </Tabel>
      </div>

      <div style={{ width: "700px", marginleft: "10%" }}>
        <h5>Materi mapping Tabel</h5>
        <Tabel striped bordered>
          <thead>
            <tr>
                <th class="border border-gray-300...">full name</th>
                <th class="border border-gray-300...">last lengkap</th>
                <th class="border border-gray-300...">username</th>
              <th>#</th>
              <th>full name</th>
                <th>last name</th>
              <th>username</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => (
              <tr>
                <td>{item.nama_lengkap}</td>
                <td>{item.nama_belakang}</td>
                <td>{item.username}</td>
              </tr>  
                
            
            ))}
            <tr>
              <th>1</th>
              <th>jacob</th>
              <yh>Thornton</yh>
              <th>@fat</th>
            </tr>
          </tbody>
        </Tabel>
      </div>

    <div style={{ width: "700px", marginleft: "10%" }}>
        <h5>Materi mapping Tabel</h5>
        <Tabel striped bordered>
          <thead>
            <tr>
                <th class="border border-gray-300...">full name</th>
                <th class="border border-gray-300...">last lengkap</th>
                <th class="border border-gray-300...">username</th>
              <th>#</th>
              <th>full name</th>
              <th>last name</th>
              <th>username</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => (
              <tr>
                <th class="border border-gray-300...">{item.nama_lengkap}</th>
                <th class="border border-gray-300...">{item.nama_lengkap}</th>
                <th class="border border-gray-300...">{item.username}</th>
                <td>{item.nama_lengkap}</td>
                <td>{item.nama_belakang}</td>
                <td>{item.username}</td>
              </tr>  
                
            
            ))}
            <tr>
              <th>1</th>
              <th>jacob</th>
              <yh>Thornton</yh>
              <th>@fat</th>
            </tr>
          </tbody>
        </Tabel>
      </div>

       <div style={{ width: "700px", marginleft: "10%" }}>
        <h5>Materi mapping Tabel</h5>
        <Tabel striped bordered>
          <thead>
            <tr>
                <th class="border border-gray-300...">full name</th>
                <th class="border border-gray-300...">last lengkap</th>
                <th class="border border-gray-300...">username</th>
              <th>#</th>
              <th>full name</th>
              <th>last name</th>
              <th>username</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => (
              <tr>
                <th class="border border-gray-300...">{item.nama_lengkap}</th>
                <th class="border border-gray-300...">{item.nama_lengkap}</th>
                <th class="border border-gray-300...">{item.username}</th>
                <td>{item.nama_lengkap}</td>
                <td>{item.nama_belakang}</td>
                <td>{item.username}</td>
              </tr>  
                
            
            ))}
            <tr>
              <th>1</th>
              <th>jacob</th>
              <yh>Thornton</yh>
              <th>@fat</th>
            </tr>
          </tbody>
        </Tabel>
      </div>

      <div style={{ width: "700px", marginleft: "10%" }}>
        <h5>Materi mapping Tabel</h5>
        <Tabel striped bordered>
          <thead>
            <tr>
                <th class="border border-gray-300...">full name</th>
                <th class="border border-gray-300...">last lengkap</th>
                <th class="border border-gray-300...">username</th>
              <th>#</th>
              <th>full name</th>
              <th>last name</th>
              <th>username</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((item) => (
              <tr>
                <th class="border border-gray-300...">{item.nama_lengkap}</th>
                <th class="border border-gray-300...">{item.nama_lengkap}</th>
                <th class="border border-gray-300...">{item.username}</th>
                <td>{item.nama_lengkap}</td>
                <td>{item.nama_belakang}</td>
                <td>{item.username}</td>
              </tr>  
                
            
            ))}
            <tr>
              <th>1</th>
              <th>jacob</th>
              <yh>Thornton</yh>
              <th>@fat</th>
            </tr>
          </tbody>
        </Tabel>
      </div>     
    </>
  );
}
export default Tabel1

lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

import { useState } from "react";
import { Link } from "react-router-dom";
import gambar from '../assets/ppdb.jpg'; //untuk memanggil gambar 

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register data', formData);
        alert('Simulasi Pendaftaran Berhasl;');
    };
    
    return (
      <div className="ml-60 m-20">
      <div className="flex items-center bg-white p-10 rounded-lg shadow-lg w-[800px]">
        {/*untuk menyetarakan gambar dengan format register */}
        <div className="mr-50]">
          <img src={gambar} alt="PPDB" className="w-100 h-60 py-" />
        </div>

        <div className="w-100 -m-7 ml-20 -mx-3">
         <h1 className="text-2xl font-bold text-center mb-6">Selamat Datang</h1> 
          <h1 className="text-2xl font-bold text-center mb-6">Register PPDB</h1> 
          {/*css text berfungsi untuk menengahkan text dan menebalkan*/}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2"htmlFor="Name">
                        {/*css block berfungsi untuk menebalkan text*/}
                        nama
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         // css shadow fungsinya memberikan kotak pada text
                        name="name" //biar textny bisa diketik
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Masukan nama Anda" //untuk menampilkan text sementara
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                          {/*css block berfungsi untuk menebalkan text*/}
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         // css shadow fungsinya memberikan kotak pada text
                        name="email" //biar textny bisa diketik
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Masukan email Anda" //untuk menampilkan text sementara
                        required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                          {/*css block berfungsi untuk menebalkan text*/}
                            Password
                        </label>
                        <input className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus"
                         // css shadow fungsinya memberikan kotak pada text
                        type="password" //untuk menyembunyikan password
                        name="password" //biar textny bisa diketik
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Buat password Anda" //untuk menampilkan text sementara
                        required
                        />
                    </div>
                     <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nomor Wa">
                          {/*css block berfungsi untuk menebalkan text*/}
                            Nomor Wa
                        </label>
                        <input className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus"
                        // css shadow fungsinya memberikan kotak pada text 
                        name="Nomor Wa" //biar textny bisa diketik
                        value={formData.NomorWa}
                        onChange={handleChange}
                        placeholder="Masukan Nomor Wa" //untuk menampilkan text sementara
                        required
                        />
                    </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-00 hover:bg-blue-70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    //berfungsi untuk menebalkan dan memberikan warna biru disekeliling text
                    type="submit"
                    >
                    Masuk
                    </button>
                    <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"> 
                    {/*mengubah warna text menjadi biru*/}
                    Belum punya akun? Daftar
                    </Link>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

Register

import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    const [formData, setFormData] = useState ({
        email: '',
        password: '', 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', formData);
        alert('Simulasi Login Berhasil')
    };

    return (
        <div className="flex item-center justify-center min-h-screen -bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <h1 className="text-2x1 font-bold text-center mb-6">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onchange={handleChange}
                    placeholder="Masukan email anda"
                    required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2"htmlFor="Password">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus"
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onchange={handleChange}
                    placeholder="Masukan Password Anda"
                    required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    >
                    Masuk
                    </button>
                    <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Belum punya akun? Daftar
                    </Link>
                </div>
            </form>
          </div>
        </div>
    );
}

LoginPage

import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    const [formData, setFormData] = useState ({
        email: '',
        password: '', 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', formData);
        alert('Simulasi Login Berhasil')
    };

    return (
        <div className="flex item-center justify-center min-h-screen -bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <h1 className="text-2x1 font-bold text-center mb-6">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onchange={handleChange}
                    placeholder="Masukan email anda"
                    required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2"htmlFor="Password">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus"
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onchange={handleChange}
                    placeholder="Masukan Password Anda"
                    required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    >
                    Masuk
                    </button>
                    <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Belum punya akun? Daftar
                    </Link>
                </div>
            </form>
          </div>
        </div>
    );
}

 LoginPage

import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    const [formData, setFormData] = useState ({
        email: '',
        password: '', 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', formData);
        alert('Simulasi Login Berhasil')
    };

    return (
        <div className="flex item-center justify-center min-h-screen -bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
            <h1 className="text-2x1 font-bold text-center mb-6">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onchange={handleChange}
                    placeholder="Masukan email anda"
                    required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2"htmlFor="Password">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus"
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onchange={handleChange}
                    placeholder="Masukan Password Anda"
                    required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    >
                    Masuk
                    </button>
                    <Link to="/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                    Belum punya akun? Daftar
                    </Link>
                </div>
            </form>
          </div>
        </div>
    );
}
LoginPage

v
