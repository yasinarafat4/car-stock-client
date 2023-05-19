const CategoryCard = ({ category }) => {
  const { _id, picture, name, price, rating } = category;
  return (
    <div className="m-4 shadow-lg p-4 flex justify- items-center gap-4">
      <img className="w-1/2" src={picture} alt="" />
      <div className="space-y-3">
        <p>Name: {name}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  );
};

export default CategoryCard;
