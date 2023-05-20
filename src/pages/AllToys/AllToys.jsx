import { useEffect, useState } from "react";
import TabularAllToy from "../TabularAllToy/TabularAllToy";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-10 text-[#2E5879]">
        All Toys
      </h2>{" "}
      {/* Tabular Data */}
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
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy) => (
              <TabularAllToy key={toy._id} toy={toy}></TabularAllToy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
