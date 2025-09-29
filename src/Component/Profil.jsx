import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Profil() {
  const navigate = useNavigate(); 
  
  const handleSejarah = () => {
    Swal.fire({
      title: "Lionel Messi",
      text: "Lionel Messi adalah pemain sepak bola Argentina salah satu terbaik sepanjang masa.",
    });
  };
  
  return (
      <div className="p-50 mx-55">
      <h1 className="text-center text-3xl font-bold mb-3"></h1>
      <div className="bg-white shadow-lg rounded-2x1 p-6 max-w-sm w-full texy-center">
        <img
          className="w-28 h-30 rounded-full mx-auto border-4 border-cyan-300 shadow-md"
          src="https://i.pinimg.com/736x/c7/b2/4e/c7b24efe2effb692793ff42466e0273d.jpg"
          alt="Profil"
          />
      </div>

      <div className="text-center text-cyan-300 max-w-md bg-white shadow-lg rounded-2xl p-3 border">
        <h2>Lionel Messi</h2>
        <p>Messi beridentik dengan Ballon d'Or</p>
        <p>La Pulga</p>

        <button
          onClick={handleSejarah}
          className="bg-yellow-500 text-white ml-50 px-2 py-1 rounded"
        >
          Sejarah
        </button>
      </div>
    </div>
  );
}

export default Profil;
