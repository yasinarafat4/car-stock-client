import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { useState } from "react";
import image1 from "../../../../assets/images/gallery-img/image1.png";
import image10 from "../../../../assets/images/gallery-img/image10.png";
import image11 from "../../../../assets/images/gallery-img/image11.png";
import image12 from "../../../../assets/images/gallery-img/image12.png";
import image2 from "../../../../assets/images/gallery-img/image2.png";
import image3 from "../../../../assets/images/gallery-img/image3.png";
import image4 from "../../../../assets/images/gallery-img/image4.png";
import image5 from "../../../../assets/images/gallery-img/image5.png";
import image6 from "../../../../assets/images/gallery-img/image6.png";
import image7 from "../../../../assets/images/gallery-img/image7.png";
import image8 from "../../../../assets/images/gallery-img/image8.png";
import image9 from "../../../../assets/images/gallery-img/image9.png";
import SectionTitle from "../../../../components/SectionTitle";

const PhotoGallery = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  // Image open and close functionality
  const [selectedImage, setSelectedImage] = useState(null);

  const openSingleImage = (imageUrl) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {/* Title */}
      <SectionTitle
        heading={"Car Toy Showcase"}
        subHeading={
          "Immerse yourself in a world of imagination, discovering exquisite craftsmanship, intricate details, and vibrant colors that bring these toy cars to life."
        }
      />

      <div className="flex flex-wrap justify-center items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-1/2 md:w-1/3 lg:w-1/4 p-2 hover:scale-110"
            data-aos="zoom-in"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full cursor-pointer rounded-md"
              onClick={() => openSingleImage(image)}
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="max-w-4xl max-h-4xl">
            <img
              src={selectedImage}
              alt="Full-size Image"
              className="w-full h-full object-contain rounded-md"
            />

            <button
              onClick={closeImage}
              className="absolute -top-3 -right-3 btn btn-circle btn-sm  bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
