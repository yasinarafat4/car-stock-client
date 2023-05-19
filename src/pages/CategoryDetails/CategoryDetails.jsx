import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const categoryDetails = useLoaderData();
  const { name, picture, price, rating } = categoryDetails;
  return (
    <div>
      <h1>Name: {name}</h1>
      <img src={picture} alt="" />
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default CategoryDetails;
