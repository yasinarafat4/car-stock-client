import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import useSetTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  useSetTitle("Toy Details");

  const toyDetails = useLoaderData();
  const {
    name,
    sellerName,
    pictureUrl,
    price,
    quantity,
    sellerEmail,
    subCategory,
    description,
    rating,
  } = toyDetails;
  return (
    <>
      <h2 className="text-center text-4xl font-bold my-10 text-[#2E5879] dark:text-slate-300">
        {name}
      </h2>
      <div className="grid grid-cols lg:grid-cols-2">
        <figure>
          <img
            className="rounded-lg my-4 w-4/5 md:w-3/5 lg:w-11/12 mx-auto"
            src={pictureUrl}
            alt="Album"
          />
        </figure>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center px-2">{description}</p>
          <div className="grid grid-cols-2 gap-2 md:gap-4 my-4">
            <p>
              <span className="font-bold">Seller:</span> {sellerName}
            </p>
            <p>
              <span className="font-bold">Email:</span> {sellerEmail}
            </p>

            <p>
              <span className="font-bold">Quantity:</span> {quantity}
            </p>
            <p>
              <span className="font-bold">Sub-category:</span> {subCategory}
            </p>

            <p>
              <span className="font-bold">Price:</span> {price}
            </p>
            <div>
              <Rating
                placeholderRating={rating}
                emptySymbol={
                  <FaRegStar className="text-yellow-400"></FaRegStar>
                }
                readonly
                placeholderSymbol={
                  <FaStar className="text-yellow-400"></FaStar>
                }
                fullSymbol={<FaStar></FaStar>}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
