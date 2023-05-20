import { useEffect, useState } from "react";
import TabularToy from "../TabularToy/TabularToy";

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
      <h2 className="text-center text-4xl font-bold mt-10 text-[#2E5879]">
        All Toys
      </h2>{" "}
      <div>
        {allToys.map((toy) => (
          <TabularToy key={toy._id} toy={toy}></TabularToy>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
