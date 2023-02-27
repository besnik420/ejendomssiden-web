import React, { useEffect, useState } from "react";
import Image1 from "../HomePage/assets/HeroSection/Building-1.jpg";
import Image2 from "../HomePage/assets/HeroSection/Building-2.jpg";
import Image3 from "../HomePage/assets/HeroSection/Building-3.jpg";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  // Initialize a variable count to keep track of the index of the current image
  let count = 0;

  // Create an array of images to display in the HeroSection
  const featuredImages = [Image1, Image2, Image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use the useEffect hook to start a timer that will automatically switch the displayed image after a certain amount of time
  useEffect(() => {
    const interval = setInterval(() => {
      handleOnNextClick();
    }, 5000);
    // Clean up function that is called before the component is unmounted
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to handle the click event for the Previous button
  const handleOnPrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  // Function to handle the click event for the Next button
  const handleOnNextClick = () => {
    count = (currentIndex + 1) % featuredImages.length;
    setCurrentIndex(count);
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("${featuredImages[currentIndex]}")` }}
    >
      <Navbar />
      
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Find din drømmebolig</h1>
          <p className="mb-5">Vi forbinder mennesker og ejendomme perfekt</p>

          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Søg på vej, by eller kommune"
                className="input input-bordered w-full"
              />
              <button className="btn btn-square bg-blue-500 border-0 w-24 hover:bg-blue-600">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <span className="bg-inherit">Søg</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick}>
            {/* Previous */}
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {/* Next */}
          <button onClick={handleOnNextClick}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
