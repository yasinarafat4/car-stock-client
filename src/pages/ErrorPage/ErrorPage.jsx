import { Link } from "react-router-dom";
import errorImage from "../../assets/images/Error-image/error-image.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={errorImage} alt="Error" className="w-5/12 mb-8" />
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-base text-gray-600 mb-8">
        We could not find the page you are looking for. Please try again later.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
