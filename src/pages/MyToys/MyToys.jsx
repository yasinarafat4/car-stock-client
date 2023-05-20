import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import TabularMyToy from "../TabularMyToy/TabularMyToy";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  const [myToys, setMyToys] = useState([]);
  const url = `http://localhost:5000/myToys?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              ).then(() => {
                const remaining = myToys.filter((myToy) => myToy._id !== id);
                setMyToys(remaining);
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-10 text-[#2E5879]">
        My Toys
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>Image</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Update Data</th>
              <th>Delete Toy</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <TabularMyToy
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></TabularMyToy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
