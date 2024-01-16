import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import UpdateToyModal from "../UpdateToyModal/UpdateToyModal";

const TabularMyToy = ({ toy, index, handleDelete, control, setControl }) => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Toy update handler
  const handleToyUpdate = (data) => {
    console.log(data);
    fetch(`https://car-stock-server.vercel.app/updateToy/${data?._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
        Swal.fire("Success", "Toy updated successfully", "success");
        closeModal();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error", "Failed to update toy. Please try again.", "error");
      });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* row */}
      <tr
        className="text-center"
        data-aos="fade-up"
      >
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
          <FaEdit
            title="Update"
            className="cursor-pointer text-2xl ml-7 lg:ml-10 text-blue-500"
            onClick={() => setIsModalOpen(true)}
          />
        </td>

        <td className="dark:bg-slate-900 dark:text-slate-300">
          <FaTrashAlt
            title="Delete"
            onClick={() => handleDelete(_id)}
            className="cursor-pointer text-2xl ml-7 lg:ml-10 text-red-600"
          />
        </td>
      </tr>
      {isModalOpen && (
        <UpdateToyModal
          closeModal={closeModal}
          toy={toy}
          handleToyUpdate={handleToyUpdate}
        />
      )}
    </>
  );
};

export default TabularMyToy;
