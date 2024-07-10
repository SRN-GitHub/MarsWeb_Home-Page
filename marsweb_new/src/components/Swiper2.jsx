import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        autoplay={true}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full  p-4">
            <div className="sliderr w-full h-full flex justify-center items-center p-8 sm:p-10">
              <div className="container1 relative border w-full ">
                {/* IMG GIRL */}
                <div className="absolute -top-10 -left-5 z-[999]">
                  <img
                    className="rounded-full shadow-2xl border-4 border-double  h-20 w-20 sm:h-28 sm:w-28"
                    src="./images/other_img/girl.png"
                    alt="No Img"
                  />
                </div>
                {/* IMG 2 */}
                <div className="rounded-full bg-white absolute -bottom-5 -right-9 z-[999] h-20 w-20 sm:h-24 sm:w-24">
                  <img
                    className="p-6 h-20 w-20 sm:h-24 sm:w-24"
                    src="./images/other_img/quotation.png"
                    alt="No Img"
                  />
                </div>

                <div className=" bg-[#FF7810] path1 rounded-t-xl min-h-[350px] w-full sm:h-[30  0px]">
                  <div className="absolute -bottom-[60px] left-0 w-0 h-0 border-[60px] border-transparent border-l-[#FF7810] border-r-0"></div>

                  <div className=" bg-orange-500 rounded-xl ml-8 lg:h-[320px] h-[320px]">
                    {/* CONTENT */}
                    <div className="CONTENT lg:py-8 py-2">
                      <p className="text-center text-white whitespace-wrap sm:font-semibold md:font-normal lg:px-14 lg:font-semibold  md:px-6 md:pt-8 px-5 pt-3 font-light sm:px-12 sm:pt-12">
                        Professional recommended and great experience, Nam
                        pulvinar vitae neque et porttitor, Praesent sed nisi
                        eleifend, Consectetur adipisicing elit, sed do eiusmodas
                        temporo incididunt
                      </p>
                      <p className="text-center bg-orange-600 whitespace-nowrap mt-3 lg:mt-7 font-semibold md:mt-3 text-white sm:text-lg sm:mt-7">
                        Lana Rhodse
                      </p>
                      <p className="text-center pt-1 lg:pt-6 md:pt-2 sm:pt-4">
                        CEO of Loptus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full  p-4">
            <div className="sliderr w-full h-full flex justify-center items-center p-8 sm:p-10">
              <div className="container1 relative border w-full ">
                {/* IMG GIRL */}
                <div className="absolute -top-10 -left-5 z-[999]">
                  <img
                    className="rounded-full shadow-2xl border-4 border-double  h-20 w-20 sm:h-28 sm:w-28"
                    src="./images/other_img/girl.png"
                    alt="No Img"
                  />
                </div>
                {/* IMG 2 */}
                <div className="rounded-full bg-white absolute -bottom-5 -right-9 z-[999] h-20 w-20 sm:h-24 sm:w-24">
                  <img
                    className="p-6 h-20 w-20 sm:h-24 sm:w-24"
                    src="./images/other_img/quotation.png"
                    alt="No Img"
                  />
                </div>

                <div className=" bg-[#FF7810] path1 rounded-t-xl min-h-[350px] w-full sm:h-[30  0px]">
                  <div className="absolute -bottom-[60px] left-0 w-0 h-0 border-[60px] border-transparent border-l-[#FF7810] border-r-0"></div>

                  <div className=" bg-orange-500 rounded-xl ml-8 lg:h-[320px] h-[320px]">
                    {/* CONTENT */}
                    <div className="CONTENT lg:py-8 py-2">
                      <p className="text-center text-white whitespace-wrap sm:font-semibold md:font-normal lg:px-14 lg:font-semibold  md:px-6 md:pt-8 px-5 pt-3 font-light sm:px-12 sm:pt-12">
                        Professional recommended and great experience, Nam
                        pulvinar vitae neque et porttitor, Praesent sed nisi
                        eleifend, Consectetur adipisicing elit, sed do eiusmodas
                        temporo incididunt
                      </p>
                      <p className="text-center bg-orange-600 whitespace-nowrap mt-3 lg:mt-7 font-semibold md:mt-3 text-white sm:text-lg sm:mt-7">
                        Lana Rhodse
                      </p>
                      <p className="text-center pt-1 lg:pt-6 md:pt-2 sm:pt-4">
                        CEO of Loptus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full  p-4">
            <div className="sliderr w-full h-full flex justify-center items-center p-8 sm:p-10">
              <div className="container1 relative border w-full ">
                {/* IMG GIRL */}
                <div className="absolute -top-10 -left-5 z-[999]">
                  <img
                    className="rounded-full shadow-2xl border-4 border-double  h-20 w-20 sm:h-28 sm:w-28"
                    src="./images/other_img/girl.png"
                    alt="No Img"
                  />
                </div>
                {/* IMG 2 */}
                <div className="rounded-full bg-white absolute -bottom-5 -right-9 z-[999] h-20 w-20 sm:h-24 sm:w-24">
                  <img
                    className="p-6 h-20 w-20 sm:h-24 sm:w-24"
                    src="./images/other_img/quotation.png"
                    alt="No Img"
                  />
                </div>

                <div className=" bg-[#FF7810] path1 rounded-t-xl min-h-[350px] w-full sm:h-[30  0px]">
                  <div className="absolute -bottom-[60px] left-0 w-0 h-0 border-[60px] border-transparent border-l-[#FF7810] border-r-0"></div>

                  <div className=" bg-orange-500 rounded-xl ml-8 lg:h-[320px] h-[320px]">
                    {/* CONTENT */}
                    <div className="CONTENT lg:py-8 py-2">
                      <p className="text-center text-white whitespace-wrap sm:font-semibold md:font-normal lg:px-14 lg:font-semibold  md:px-6 md:pt-8 px-5 pt-3 font-light sm:px-12 sm:pt-12">
                        Professional recommended and great experience, Nam
                        pulvinar vitae neque et porttitor, Praesent sed nisi
                        eleifend, Consectetur adipisicing elit, sed do eiusmodas
                        temporo incididunt
                      </p>
                      <p className="text-center bg-orange-600 whitespace-nowrap mt-3 lg:mt-7 font-semibold md:mt-3 text-white sm:text-lg sm:mt-7">
                        Lana Rhodse
                      </p>
                      <p className="text-center pt-1 lg:pt-6 md:pt-2 sm:pt-4">
                        CEO of Loptus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full  p-4">
            <div className="sliderr w-full h-full flex justify-center items-center p-8 sm:p-10">
              <div className="container1 relative border w-full ">
                {/* IMG GIRL */}
                <div className="absolute -top-10 -left-5 z-[999]">
                  <img
                    className="rounded-full shadow-2xl border-4 border-double  h-20 w-20 sm:h-28 sm:w-28"
                    src="./images/other_img/girl.png"
                    alt="No Img"
                  />
                </div>
                {/* IMG 2 */}
                <div className="rounded-full bg-white absolute -bottom-5 -right-9 z-[999] h-20 w-20 sm:h-24 sm:w-24">
                  <img
                    className="p-6 h-20 w-20 sm:h-24 sm:w-24"
                    src="./images/other_img/quotation.png"
                    alt="No Img"
                  />
                </div>

                <div className=" bg-[#FF7810] path1 rounded-t-xl min-h-[350px] w-full sm:h-[30  0px]">
                  <div className="absolute -bottom-[60px] left-0 w-0 h-0 border-[60px] border-transparent border-l-[#FF7810] border-r-0"></div>

                  <div className=" bg-orange-500 rounded-xl ml-8 lg:h-[320px] h-[320px]">
                    {/* CONTENT */}
                    <div className="CONTENT lg:py-8 py-2">
                      <p className="text-center text-white whitespace-wrap sm:font-semibold md:font-normal lg:px-14 lg:font-semibold  md:px-6 md:pt-8 px-5 pt-3 font-light sm:px-12 sm:pt-12">
                        Professional recommended and great experience, Nam
                        pulvinar vitae neque et porttitor, Praesent sed nisi
                        eleifend, Consectetur adipisicing elit, sed do eiusmodas
                        temporo incididunt
                      </p>
                      <p className="text-center bg-orange-600 whitespace-nowrap mt-3 lg:mt-7 font-semibold md:mt-3 text-white sm:text-lg sm:mt-7">
                        Lana Rhodse
                      </p>
                      <p className="text-center pt-1 lg:pt-6 md:pt-2 sm:pt-4">
                        CEO of Loptus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
