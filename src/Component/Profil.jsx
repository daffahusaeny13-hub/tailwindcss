import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Profil() {
  const navigate = useNavigate(); 

  const handleManchester = () => {

    Swal.fire({
      title: "Manchester United",
      text: " Manchester United telah memenangkan banyak trofi di sepak bola Inggris, termasuk 20 gelar Liga terbanyak dalam sejarah, 13 gelar Piala FA, 6 gelar Piala Liga dan 21 gelar Community Shield FA",
    });
  };
  
  return (
      <div className="p-50 mx-55">
      <h1 className="text-center text-3xl font-bold mb-3"></h1>
      <div className="text-red-300 max-w-md bg-white shadow-lg p-3 ">
        <img
          className="w-45  h-45 rounded-full mx-auto border-3 border-red-300 shadow-md"
          src="https://i.pinimg.com/1200x/09/72/9c/09729c858ff2b8ea6165cd8bd90f598f.jpg"
          alt="Profil"
          />
      </div>

      <div className="text-center text-red-300 max-w-md bg-white shadow-lg p-3 border font-semibold">
        <h2>The Red Devils</h2>

        <button
          onClick={handleManchester}
          className="flex justify-center bg-red-700 text-white ml-50 px-2 py-1 rounded font-semibold"
        >
         M.U
        </button>
      </div>
    </div>
  );
}

export default Profil;
