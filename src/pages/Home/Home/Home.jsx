import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import ShopByCategory from "./ShopbyCategory/ShopbyCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PhotoGallery></PhotoGallery>
      <ShopByCategory></ShopByCategory>
      <Brands></Brands>
    </div>
  );
};

export default Home;
