import { useNavigate } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";

import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const CategoryCard = ({ category }) => {
  const { _id, picture, name, price, rating } = category;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleViewDetails = () => {
    if (user) {
      navigate(`/categoryDetails/${_id}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to log in first to view details!",
        confirmButtonText: "Ok",
      }).then(() => {
        navigate("/login");
        navigate(`/categoryDetails/${_id}`);
      });
    }
  };

  return (
    <div className="m-4 shadow-lg p-4 flex justify- items-center gap-4">
      <img className="w-1/2 rounded-md" src={picture} alt="" />
      <div className="space-y-3">
        <p>
          <span className="font-bold">Name:</span> {name}
        </p>
        <p>
          <span className="font-bold">Price:</span> {price}
        </p>
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar className="text-yellow-400"></FaRegStar>}
            readonly
            placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
