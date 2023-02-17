import React from "react";
const featuredImages = ["img-1", "img-2", "img-3"];
const HeroSection = () => {
 <div className="max-w-screen-xl m-auto">
   <div className="w-full relative select-none">
     <img src={featuredImages[0]} alt="" />

     <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
       <button>Previous</button>
       <button>Next</button>
     </div>
   </div>
 </div>;
};

export default HeroSection;
