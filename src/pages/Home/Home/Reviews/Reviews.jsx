import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Rating from "react-rating";
import SectionTitle from "../../../../components/SectionTitle";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    comment:
      "Great product! I love the quality and the design. Highly recommended.",
    rating: 5,
    image: "https://i.ibb.co/RB38Xd6/Men-Vector1.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    comment:
      "Excellent customer service! They were very helpful and responsive.",
    rating: 4,
    image: "https://i.ibb.co/phgKNCk/Women-Vector1.png",
  },
  {
    id: 3,
    name: "Mike Johnson",
    comment:
      "The product didn't meet my expectations. The material feels cheap.",
    rating: 2,
    image: "https://i.ibb.co/TYzsMDH/Men-Vector2.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    comment:
      "Fast shipping and great communication. I'm very happy with my purchase.",
    rating: 5,
    image: "https://i.ibb.co/dg0nGGq/Women-Vector2.png",
  },
  {
    id: 5,
    name: "David Brown",
    comment:
      "The customer support team went above and beyond to help me. Impressive!",
    rating: 5,
    image: "https://i.ibb.co/MZQtcgM/Men-Vector3.png",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    comment: "Average product. Not bad, but nothing extraordinary either.",
    rating: 3,
    image: "https://i.ibb.co/t2Wby8P/Women-Vector3.png",
  },
];

const Reviews = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gray-100 py-8 dark:bg-slate-900 dark:text-slate-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <SectionTitle heading={"Customer Reviews"} subHeading={"TODO"} />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-6 h-full w-full flex flex-col dark:bg-slate-900"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={review.image}
                    alt={review.name}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-slate-300">
                    {review.name}
                  </h3>
                </div>
              </div>
              <p className="text-gray-800 dark:text-slate-300">{review.comment}</p>
              <Rating
                initialRating={review.rating}
                emptySymbol={<span className="text-gray-300">&#9734;</span>}
                fullSymbol={<span className="text-yellow-500">&#9733;</span>}
                readonly
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
