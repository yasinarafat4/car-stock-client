import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import TabularToy from "../TabularToy/TabularToy";

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
      <h2 className="text-center text-4xl font-bold mt-10 text-[#2E5879]">
        My Toys
      </h2>
      <div>
        {myToys.map((toy) => (
          <TabularToy key={toy._id} toy={toy}></TabularToy>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
