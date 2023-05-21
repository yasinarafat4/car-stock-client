import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import UpdateToyModal from "../UpdateToyModal/UpdateToyModal";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <tr className="text-center" data-aos="fade-up">
        <td>{index + 1}</td>
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
          <FaEdit
            title="Update"
            className="cursor-pointer text-2xl ml-7 lg:ml-10 text-blue-500"
            onClick={() => setIsModalOpen(true)}
          />
        </td>

        <td>
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
