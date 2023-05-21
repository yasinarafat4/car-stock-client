import useSetTitle from "../../../hooks/useTitle";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Reviews from "./Reviews/Reviews";
import ShopByCategory from "./ShopbyCategory/ShopbyCategory";

const Home = () => {
  useSetTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <PhotoGallery></PhotoGallery>
      <ShopByCategory></ShopByCategory>
      <Brands></Brands>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
