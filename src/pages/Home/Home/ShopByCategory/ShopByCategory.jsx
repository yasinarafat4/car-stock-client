import { useEffect, useState } from "react";
import { Tab, TabList, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../../../components/SectionTitle";
import CategoryCard from "../CategoryCard/CategoryCard";
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
    <div className="dark:bg-slate-900 dark:text-slate-300">
      {/* Title */}
      <SectionTitle heading={"Shop By Category"} subHeading={"Explore a variety of playthings for joyful entertainment. Find the perfect miniature cars to delight and entertain your child."} />

      <p className="text-center font-medium m-4">
        <Tabs>
          <TabList className="custom-tab-list">
            <Tab className="custom-tab dark:text-slate-300" onClick={() => setTab("Sports Car")}>
              Sports Car
            </Tab>
            <Tab className="custom-tab dark:text-slate-300" onClick={() => setTab("Regular Car")}>
              Regular Car
            </Tab>
            <Tab className="custom-tab dark:text-slate-300" onClick={() => setTab("Truck")}>
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
