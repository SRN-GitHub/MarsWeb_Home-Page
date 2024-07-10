import React from "react";

function Temp_3() {
  return (
    <div className="relative grid md:grid-cols-2 mt-20 p-2">
      {/* SEC 1 */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        <div className="">
          {/* DIGITAL */}
          <div className="bg-white rounded-2xl">
            <div className="">
              {/* SINGLE CARD */}
              <div
                className="py-1 w-auto flex flex-col text-center items-center whitespace-wrap rounded-3xl 
                transition-all ease-in-out delay-300 hover:translate-y-[7px] hover:scale-y-[1] hover:duration-1000 hover:bg-white shadow-lg ..."
              >
                {/* SINGLE CARD  CONTENT */}
                <img
                  className="h-[120px] w-[130px]"
                  src="./images/service_img/digi_marketing.png"
                  alt="No Img"
                />
                <p className="mt-11 text-center text-gray-700 font-semibold text-2xl font-sans">
                  Digital Marketing
                </p>

                <p className="p-10 text-center font-sans whitespace-wrap">
                  Design must be functional, and futionality must
                  <br />
                  translated
                </p>
              </div>
            </div>
          </div>
          {/* EMAIL MARKETING */}
          <div className="bg-white lg:mt-7 mt-6 rounded-2xl">
            <div className="">
              {" "}
              {/* SINGLE CARD */}
              <div
                className="py-1 w-auto flex flex-col text-center  items-center whitespace-wrap rounded-3xl 
                            transition-all ease-in-out delay-300 hover:translate-y-[7px] hover:scale-y-[1] hover:duration-1000 hover:bg-white shadow-lg ..."
              >
                {/* SINGLE CARD  CONTENT */}
                <img
                  className="h-[120px] w-[130px]"
                  src="./images/service_img/email.png"
                  alt="No Img"
                />

                <p className="mt-11 text-center text-gray-700 font-semibold text-2xl font-sans">
                  Email Marketing
                </p>

                <p className="p-10 text-center font-sans whitespace-wrap">
                  Design must be functional, and futionality must translated
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* SEC 2 */}
        <div className="bg-white lg:ml-5 mt-8">
          {/* CONTENT MARKETING */}
          <div className="lg:mt-7">
            <div className="">
              {/* SINGLE CARD */}
              <div
                className="py-1 w-auto flex flex-col text-center  items-center whitespace-wrap rounded-3xl  
                transition-all ease-in-out delay-300 hover:translate-y-[7px] hover:scale-y-[1] hover:duration-1000 hover:bg-white shadow-lg ..."
              >
                {/* SINGLE CARD  CONTENT */}
                <img
                  className="h-[120px] w-[130px]"
                  src="./images/service_img/content.png"
                  alt="No Img"
                />

                <p className="mt-11 text-center text-gray-700 font-semibold text-2xl font-sans">
                  Content Marketing
                </p>

                <p className="p-10 text-center font-sans whitespace-wrap">
                  Design must be functional, and futionality must translated
                </p>
              </div>
            </div>
          </div>
          {/* QUICK SUPPORT */}
          <div className=" bg-white mt-7  rounded-2xl">
            <div className="">
              {/* SINGLE CARD */}
              <div
                className="py-1 w-auto flex flex-col text-center  items-center whitespace-wrap rounded-3xl  
                transition-all ease-in-out delay-300 hover:translate-y-[7px] hover:scale-y-[1] hover:duration-1000 hover:bg-white shadow-lg ..."
              >
                {/* SINGLE CARD  CONTENT */}
                <img
                  className="h-[120px] w-[130px]"
                  src="./images/service_img/quicksup.png"
                  alt="No Img"
                />

                <p className="mt-11 text-center text-gray-700 font-semibold text-2xl font-sans">
                  Quick Support
                </p>

                <p className="p-10 text-center font-sans whitespace-wrap">
                  Design must be functional, and futionality must translated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SEC 3 IMG */}
      <div className="lg:pt-1 pt-10 lg:mt-52 xl:mt-32 z-10">
        <img className="imgtemp" src="./images/other_img/tp4.png" alt="N?A" />
      </div>
      <div className="absolute left-[300px] top-[270px] z-[-1] ">
        <img
          src="./images/other_img/rot_temp.png"
          className="w-fit rotating object-cover"
          alt="n?A"
        />
      </div>
    </div>
  );
}

export default Temp_3;
