import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative bg-cover min-h-screen w-full flex justify-center items-center bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/8cKkBpS/banner1.png')",
      }}
    >
      <div className="absolute left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full flex flex-col justify-center ps-8 w-3/4 md:w-1/3">
        <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl text-white font-bold mb-4 sm:mb-6 lg:mb-8">
          Welcome to the Car Toy World
        </h1>
        <p className="text-sm text-white mb-6 sm:mb-8 lg:mb-10">
          Rev up your imagination with our wide selection of car toys. From
          colorful cars to interactive play sets, our baby-friendly toys offer
          endless fun and learning opportunities.
        </p>

        <div className="flex gap-2">
          <Link to="/blogs">
            <button className="bg-transparent text-red-500 border border-red-500 px-2 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-md hover:bg-red-500 hover:text-white duration-300">
              Our Blogs
            </button>
          </Link>
          <Link to="/alltoys">
            <button className="bg-blue-600 hover:bg-blue-700 duration-300 text-white py-1 md:py-2 px-2 md:px-4 text-sm md:text-base rounded-md focus:outline-none focus:shadow-outline">
              View Toys
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
