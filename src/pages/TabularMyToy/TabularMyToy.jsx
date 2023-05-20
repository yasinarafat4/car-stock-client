import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import UpdateToyModal from "../UpdateToyModal/UpdateToyModal";

const TabularMyToy = ({ toy, index, handleDelete }) => {
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

  return (
    <>
      {/* row */}
      <tr className="text-center">
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
            className="cursor-pointer text-2xl ml-7 lg:ml-10"
            onClick={() => setIsModalOpen(true)}
          />
        </td>

        <td>
          <FaTrashAlt
            title="Delete"
            onClick={() => handleDelete(_id)}
            className="cursor-pointer text-2xl ml-7 lg:ml-10"
          />
        </td>
      </tr>
      {isModalOpen && <UpdateToyModal closeModal={closeModal} toy={toy} />}
    </>
  );
};

export default TabularMyToy;
