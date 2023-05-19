import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { _id, picture, name, price, rating } = category;
  return (
    <div className="m-4 shadow-lg p-4 flex justify- items-center gap-4">
      <img className="w-1/2 rounded-md" src={picture} alt="" />
      <div className="space-y-3">
        <p>
          <span className="font-bold">Name:</span> {name}
        </p>
        <p>
          <span className="font-bold">Price:</span> {price}
        </p>
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar className="text-yellow-400"></FaRegStar>}
            readonly
            placeholderSymbol={<FaStar className="text-yellow-400"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
        </div>

        <Link to={`/categoryDetails/${_id}`}>
          <button className="btn btn-primary normal-case">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
