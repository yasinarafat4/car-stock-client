import { useState } from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../../../assets/images/brands/brand1.png";
import img2 from "../../../../assets/images/brands/brand2.png";
import img3 from "../../../../assets/images/brands/brand3.png";
import img4 from "../../../../assets/images/brands/brand4.png";
import img5 from "../../../../assets/images/brands/brand5.png";
import img6 from "../../../../assets/images/brands/brand6.png";
import img7 from "../../../../assets/images/brands/brand7.png";
import img8 from "../../../../assets/images/brands/brand8.png";
import SectionTitle from "../../../../components/SectionTitle";

const Brands = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseOver = () => {
    setIsPaused(true);
  };

  const handleMouseOut = () => {
    setIsPaused(false);
  };

  return (
    <div className="mb-10">
      {/* Title */}
      <SectionTitle heading={" Our Brands"} subHeading={"TODO"} />
      <Marquee
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        speed={40}
        gradient={false}
        pauseOnHover={!isPaused}
      >
        <img className="mr-4 rounded-lg" src={img1} alt="" />
        <img className="mr-4 rounded-lg" src={img2} alt="" />
        <img className="mr-4 rounded-lg" src={img3} alt="" />
        <img className="mr-4 rounded-lg" src={img4} alt="" />
        <img className="mr-4 rounded-lg" src={img5} alt="" />
        <img className="mr-4 rounded-lg" src={img6} alt="" />
        <img className="mr-4 rounded-lg" src={img7} alt="" />
        <img className="mr-4 rounded-lg" src={img8} alt="" />
      </Marquee>
    </div>
  );
};

export default Brands;
