import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-10 text-[#2E5879]">
        Shop By Category
      </h2>
      <p className="text-center font-medium m-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi fugiat
        quod tenetur officiis eius commodi libero. Repellat culpa voluptate
        placeat.
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
