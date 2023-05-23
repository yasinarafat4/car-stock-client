import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ShopByCategory.css";

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [tab, setTab] = useState("Sports Car");

  useEffect(() => {
    fetch(`https://car-stock-server.vercel.app/categories/${tab}`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, [tab]);

  return (
    <div>
      <h2 className="text-center text-3xl md:text-4xl font-bold mt-10 text-[#2E5879]">
        Shop By Category
      </h2>
      <p className="text-center font-medium m-4">
        <Tabs>
          <TabList className="custom-tab-list">
            <Tab className="custom-tab" onClick={() => setTab("Sports Car")}>
              Sports Car
            </Tab>
            <Tab className="custom-tab" onClick={() => setTab("Regular Car")}>
              Regular Car
            </Tab>
            <Tab className="custom-tab" onClick={() => setTab("Truck")}>
              Truck
            </Tab>
          </TabList>
        </Tabs>
      </p>
      <div className="grid grid-cols md:grid-cols-2">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
