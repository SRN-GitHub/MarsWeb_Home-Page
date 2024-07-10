import React from "react";
import { Global, css } from "@emotion/react";

function How_It_Works() {
  return (
    <div className="main mt-32 bg-emerald-50 mb-10">
      <div className="relative p-2">
        <div className="flex justify-center text-center">
          <p className="mt-20 pt-1 bg-orange-500 text-white h-8 w-32 font-semibold">
            How It Work
          </p>
        </div>
        <div className=" ">
          <p className=" mt-5 text-4xl font-bold text-gray-800 text-center mb-4 ">
            Three Step For Started
            <br />
            Working Process
          </p>
          <div className="mx-auto w-28 h-[3px] rainbow rounded-xl"></div>
        </div>
      </div>

      {/* right-[155px] lg:right-[453px] xl:right-[660px] top-[225px] sm:top-[230px] w-28 h-1 */}

      {/* CARDSS */}
      <div className=" mt-20 lg:ml-5 grid md:grid-cols-1 lg:grid-cols-3 p-2">
        {/* SINGLE CARD COMPONENT */}
        <div className=" flex flex-col items-center justify-center text-center  w-auto h-[450px]  m-2">
          {/* DASHED PROPERTY */}
          <div className="relative flex justify-center items-center h-56 w-52 border-dashed border-2 rounded-xl border-slate-950">
            {/* 01 CIRCLE  */}
            <div
              className="absolute -right-9 -top-9 bg-orange-500 flex justify-center items-center rounded-full  text-white text-3xl 
                    font-semibold h-20 w-20"
            >
              01
            </div>
            <div>
              <img src="./images/other_img/stp.png" alt="No Img" />
            </div>
          </div>
          <div className="mt-10">
            <p className="text-3xl text-gray-800 font-semibold">
              Research Project
            </p>
            <p className="text-gray-500 mt-3 text-lg px-5">
              Leverage agile frameworks to provide a robust synopsis for high
              level
            </p>
          </div>
        </div>

        {/* SIGNLE CARD 2 */}
        <div className=" flex flex-col items-center justify-center text-center  w-auto h-[450px]  m-2">
          {/* DASHED PROPERTY */}
          <div className="relative flex justify-center items-center h-56 w-52 border-dashed border-2 rounded-xl border-slate-950">
            {/* 01 CIRCLE  */}
            <div
              className="absolute -right-9 -top-9 bg-orange-500 flex justify-center items-center rounded-full  text-white text-3xl 
                    font-semibold h-20 w-20"
            >
              02
            </div>
            <div>
              <img src="./images/other_img/stp2.png" alt="No Img" />
            </div>
          </div>
          <div className="mt-10">
            <p className="text-3xl text-gray-800 font-semibold">Targeting</p>
            <p className="text-gray-500 mt-3 text-lg px-5">
              Leverage agile frameworks to provide a robust synopsis for high
              level
            </p>
          </div>
        </div>

        {/* SIGNLE CARD 3 */}
        <div className=" flex flex-col items-center justify-center text-center  w-auto h-[450px]  m-2">
          {/* DASHED PROPERTY */}
          <div className="relative flex justify-center items-center h-56 w-52 border-dashed border-2 rounded-xl border-slate-950">
            {/* 01 CIRCLE  */}
            <div
              className="absolute -right-9 -top-9 bg-orange-500 flex justify-center items-center rounded-full  text-white text-3xl 
                    font-semibold h-20 w-20"
            >
              03
            </div>
            <div>
              <img src="./images/other_img/stp3.png" alt="No Img" />
            </div>
          </div>
          <div className="mt-10">
            <p className="text-3xl text-gray-800 font-semibold">Result</p>
            <p className="text-gray-500 mt-3 text-lg px-5">
              Leverage agile frameworks to provide a robust synopsis for high
              level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default How_It_Works;
