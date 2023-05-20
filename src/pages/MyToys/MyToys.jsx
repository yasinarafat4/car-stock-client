import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import TabularMyToy from "../TabularMyToy/TabularMyToy";

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

  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-10 text-[#2E5879]">
        My Toys
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <TabularMyToy key={toy._id} toy={toy}></TabularMyToy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
