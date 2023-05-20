import { useContext } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TabularAllToy = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    _id,
    name,
    sellerName,
    pictureUrl,
    price,
    quantity,
    sellerEmail,
    subCategory,
  } = toy;

  const handleViewDetails = () => {
    if (user) {
      navigate(`/toyDetails/${_id}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to log in first to view details!",
        confirmButtonText: "Ok",
      }).then(() => {
        navigate("/login");
        navigate(`/toyDetails/${_id}`);
      });
    }
  };

  return (
    <>
      {/* row */}
      <tr className="text-center">
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>
          {sellerName}
          <br />
          <span className="badge badge-ghost badge-sm">{sellerEmail}</span>
        </td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>
          <AiOutlineEye
            title="Details"
            onClick={handleViewDetails}
            className="cursor-pointer text-2xl ml-7 lg:ml-10"
          />
        </td>
      </tr>
    </>
  );
};

export default TabularAllToy;
