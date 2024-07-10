import React from "react";

function Cards() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 md:gap-5 gap-4 p-2 min-w-[370px]  xl:mt-20 sm:mt-10 mt-6">
      {/* MARKETING */}
      <div
        className="py-8 lg:w-80 sm:w-auto xl:w-auto  flex flex-col justify-center items-center whitespace-wrap shadow-2xl rounded-md bg-white 
          transition ease-in-out delay-200 hover:translate-y-2 hover:scale-x-[1] hover: duration-700 ..."
      >
        <img
          className="sm:h-[120px] w-[120px]"
          src="./images/marketing.png"
          alt="No Img"
        />
        <p className="mt-11 text-center font-medium text-2xl font-serif">
          Online Marketing
        </p>
        <p className="p-5 whitespace-wrap">
          Design must be functional, and functionality must be translated into.
        </p>
        <div className="flex justify-center">
          <button className="btn w-32 h-12 text-white rounded bg-gradient-to-r  from-[#3d3d75] , to-[#FAA123] hover:from-orange-500 hover:to-orange-500">
            Learn More
          </button>
        </div>
      </div>
      {/* DATA ANALYSIS */}
      <div
        className="py-8 lg:w-80 sm:w-auto xl:w-auto flex flex-col justify-center items-center whitespace-wrap shadow-2xl rounded-md bg-white
      transition ease-out delay-200 hover:translate-y-2 hover:scale-x-[1] hover: duration-700 ..."
      >
        <img
          className="h-[120px] w-[120px]"
          src="./images/data_analysis.png"
          alt="No Img"
        />
        <p className="mt-11 text-center font-medium text-2xl font-serif">
          Data Analysis
        </p>
        <p className="p-5 whitespace-wrap">
          Design must be functional, and functionality must be translated into.
        </p>
        <div className="flex justify-center w-32 h-12 text-white rounded bg-gradient-to-r from-[#3d3d75] , to-[#FAA123] hover:from-orange-500 hover:to-orange-500">
          <button className="">Learn More</button>
        </div>
      </div>
      {/* SEO OPTIMIZATION */}
      <div
        className="py-8 lg:w-80 sm:w-auto xl:w-auto xl:h-[470px] flex flex-col justify-center items-center whitespace-wrap shadow-2xl rounded-md bg-white
      transition ease-out delay-200 hover:translate-y-2 hover:scale-x-[1] hover: duration-700 ..."
      >
        <img
          className="h-[120px] w-[120px]"
          src="./images/optimise.png"
          alt="No Img"
        />
        <p className="mt-11 text-center font-medium text-2xl font-serif">
          SEO Optimization
        </p>
        <p className="p-5 whitespace-wrap">
          Design must be functional, and functionality must be translated into.
        </p>
        <div className="flex justify-center w-32 h-12 text-white rounded bg-gradient-to-r  from-[#3d3d75] , to-[#FAA123] hover:from-orange-500 hover:to-orange-500">
          <button className="">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
