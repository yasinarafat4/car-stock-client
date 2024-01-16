import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const TabularAllToy = ({ toy, index }) => {
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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* row */}
      <tr className="text-center" data-aos="fade-up">
        <td className="dark:bg-slate-900 dark:text-slate-300">{index + 1}</td>
        <td className="dark:bg-slate-900 dark:text-slate-300">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td className="dark:bg-slate-900 dark:text-slate-300">
          {sellerName}
          <br />
          <span className="badge badge-ghost badge-sm">{sellerEmail}</span>
        </td>
        <td className="dark:bg-slate-900 dark:text-slate-300">{name}</td>
        <td className="dark:bg-slate-900 dark:text-slate-300">{subCategory}</td>
        <td className="dark:bg-slate-900 dark:text-slate-300">${price}</td>
        <td className="dark:bg-slate-900 dark:text-slate-300">{quantity}</td>
        <td className="dark:bg-slate-900 dark:text-slate-300">
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
