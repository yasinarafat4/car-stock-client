import { useEffect, useState } from "react";
import TabularAllToy from "../TabularAllToy/TabularAllToy";
import { FiSearch } from "react-icons/fi";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/addToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  // For Search
  const handleSearch = () => {
    fetch(`http://localhost:5000/searchToys/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <div>
      <div className="md:flex justify-between">
        <h2 className="text-center text-2xl md:text-4xl font-bold my-10 text-[#2E5879]">
          All Toys
        </h2>
        <div className="flex justify-center items-center mb-5 md:0">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search..."
            className="h-10 py-2 px-4 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white h-10 px-4 rounded-r"
          >
            <FiSearch className="h-5 w-5" />
          </button>
        </div>
      </div>

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
