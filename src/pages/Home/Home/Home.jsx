import useSetTitle from "../../../hooks/useTitle";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Reviews from "./Reviews/Reviews";
import ShopByCategory from "./ShopbyCategory/ShopbyCategory";

const Home = () => {
  useSetTitle("Home");
  return (
    <>
      <Banner />
      <PhotoGallery />
      <ShopByCategory />
      <Brands />
      <Reviews />
    </>
  );
};

export default Home;
