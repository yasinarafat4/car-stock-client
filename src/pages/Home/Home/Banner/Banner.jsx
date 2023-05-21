import "./Banner.css";
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
            <button className="btn-blogs ">Our Blogs</button>
          </Link>
          <Link to="/alltoys">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              View Toys
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
