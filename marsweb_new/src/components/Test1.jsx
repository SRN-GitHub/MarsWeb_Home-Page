import React from "react";
import Swiper2 from "./Swiper2";
function Test1() {
  return (
    <div className="relative flex flex-col sm:flex-row ">
      <div className="left w-full sm:w-[50%] ">
        <div className=" min-h-[430px] ">
          <div className="pl-3 text-center">
            <p className="mt-20 pt-1 bg-orange-500 text-white h-8 w-28 font-semibold">
              Testimonial
            </p>
          </div>
          <div className="mt-4">
            <p className="pl-3 text-4xl font-semibold md:text-5xl md:font-medium text-gray-800 border-spacing-5">
              You Can See Our
              <br />
              Clients Feedback <br /> What You Say?
            </p>
          </div>
          <div className=" ml-3 mt-5 w-28 h-[3px] rainbow rounded-xl"></div>
          <p className="mt-6 ml-3 text-gray-500 text-lg mb-6">
            Deos et accusamus et iusto odio dignissimos qui blanditiis
            praesentium voluptatum dele <br /> corrupti quos dolores et quas
            molestias
          </p>
        </div>
      </div>
      <div className="right w-full sm:w-[50%]">
        <Swiper2 />
      </div>
      {/* BACKGROUND IMAGE */}
      <div
        className="right_left absolute top-0 right-0 w-[7680px] h-full z-[-1] bg-repeat-x"
        style={{
          backgroundImage: "url(./images/other_img/testi_img.png)",
        }}
      ></div>
    </div>
  );
}

export default Test1;
