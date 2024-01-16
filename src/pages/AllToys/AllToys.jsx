import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";
import useSetTitle from "../../hooks/useTitle";
import TabularAllToy from "../TabularAllToy/TabularAllToy";

const AllToys = () => {
  useSetTitle("All Toys");

  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [toysPerPage, setToysPerPage] = useState(20);

  const { totalToys } = useLoaderData();

  const totalPages = Math.max(Math.ceil(totalToys / toysPerPage), 1);

  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://car-stock-server.vercel.app/addToys?page=${currentPage}&limit=${toysPerPage}`
      );
      const data = await response.json();
      setAllToys(data);
    }
    fetchData();
  }, [currentPage, toysPerPage]);

  // For Search
  const handleSearch = () => {
    fetch(`https://car-stock-server.vercel.app/searchToys/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  const options = [5, 10, 15, 20, 25, 30];
  function handleSelectChange(event) {
    setToysPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  return (
    <div>
      <div className="md:flex justify-between">
        <h2 className="text-start ms-4 text-2xl md:text-4xl font-bold my-10 text-[#2E5879] dark:text-slate-300">
          All Toys
        </h2>
        <div className="me-4 flex justify-center items-center mb-5 md:0 dark:text-slate-800">
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
              <th className="dark:bg-slate-900 dark:text-slate-300">#</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Image</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Seller Name</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Toy Name</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Sub-category</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Price</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">Available Quantity</th>
              <th className="dark:bg-slate-900 dark:text-slate-300">View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys?.map((toy, index) => (
              <TabularAllToy
                key={toy?._id}
                toy={toy}
                index={index}
              ></TabularAllToy>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Button */}
      <div className="btn-group flex justify-center my-4">
        {pageNumbers?.map((number) => (
          <button
            className={
              currentPage === number ? "btn btn-sm btn-active" : "btn btn-sm"
            }
            key={number}
            onClick={() => setCurrentPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <select
          className="bg-[#ca3325] text-white rounded-r-md"
          value={toysPerPage}
          onChange={handleSelectChange}
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AllToys;
