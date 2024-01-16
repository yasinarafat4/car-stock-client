import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useSetTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";
import TabularMyToy from "../TabularMyToy/TabularMyToy";

const MyToys = () => {
  useSetTitle("My Toys");

  const { user } = useContext(AuthContext);

  const [myToys, setMyToys] = useState([]);
  const [control, setControl] = useState(false);

  const url = `https://car-stock-server.vercel.app/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-stock-server.vercel.app/myToys/${id}`, {
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
    <>
      <h2 className="ms-4 text-start text-4xl font-bold my-10 text-[#2E5879]  dark:bg-slate-900 dark:text-slate-300">
        My Toys
      </h2>

      <div className="overflow-x-auto w-full z-10">
        <table className="table w-full">
          {/* head */}
          <thead className="text-center">
            <tr className="dark:bg-slate-900 dark:text-slate-300">
              <th className="dark:bg-slate-900 dark:text-slate-300">#</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Image</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Seller Name</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Toy Name</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Sub-category</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Price</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Available Quantity</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Update Data</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Delete Toy</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy, index) => (
              <TabularMyToy
                key={toy._id}
                toy={toy}
                index={index}
                handleDelete={handleDelete}
                control={control}
                setControl={setControl}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
