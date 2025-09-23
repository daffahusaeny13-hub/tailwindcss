import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const[scrol,setScroll] = useState(false)

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scaroll", () => {
      if (window.scrollY > 5) {
        console.log("testing");
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

const Navbar = () => {
  return (
    <div className="navbar fixed w-full transition-all py-4 bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="sm:text-2xl font-bold">Ngoding.</h1>
          </div>
          <ul className="flex lg:gap-12">
            <li className="flex items-center gap-3">
              <i className="ri-home-2-line"></i>
              <a href="#" className="font-medium opacity-75">
                Beranda
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-information-line"></i>
              <a href="#" className="font-medium opacity-75">
                Tentang Kami
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-settings-3-line"></i>
              <a href="#" className="font-medium opacity-75">
                Layanan
              </a>
            </li>
             <li className="flex items-center gap-3">
              <i className="ri-projector-2-line"></i>
              <a href="#" className="font-medium opacity-75">
                Proyek
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
}