import { Link } from "react-router-dom";
// import Header from "./Header";
import Cards from "./Cards";
import About from "./About";
import Service from "./Service";
import Projects from "./Projects";
import Temp_seo from "./Temp_seo";
import Temp_2 from "./Temp_2";
import Temp_3 from "./Temp_3";
import How_It_Works from "./How_It_Works";
import Test1 from "./Test1";
import Foot from "./Foot";

import "animate.css";

function Body() {
  return (
    <section className="overflow-hidden scroll-smooth  max-w-full sm:max-w-full md:max-w-full lg:max-w-full">
      {" "}
      {/*  FULL_SECTION  */}
      {/* bg-gradient-to-br from-indigo-100 from-30% via-sky-200  via-30% to-gray-100 to-90% ... */}
      <div className="relative grid lg:grid-cols-12  mb-10">
        <img
          className="absolute"
          src="./images/other_img/bgban2.png"
          alt="N?A"
        />
        {/*   TOTAL_BODY_INSIDE_THIS_DIV */}
        <div className="lg:col-span-7 ml-10 mt-32 whitespace-wrap">
          {" "}
          {/*  ONLY_TEXT & BUTTONS HERE_IN_THIS_DIV */}
          {/*  PARAGRAPHS  */}
          <p className="animate__animated animate__fadeInLeft  whitespace-wrap text-[#3D3D75] lg:text-6xl sm:text-5xl text-4xl  lg:leading-[70px ] leading-10 sm:font-bold font-bold mb-4 ">
            Looking For Most Powerful
            <span className="text-[#f1b340f6] font-semibold"> Digital </span>
            <p className="inline text-[#f1b340f6] font-semibold">
              Marketing
              <span className="text-[#3D3D75] font-bold lg:text-6xl">
                Template
              </span>
            </p>
          </p>
          <p className="animate__animated animate__fadeInUp text-gray-700 leading-7 mt-6 mb-4 font-sans text-base font-semibold ">
            Start working with a company that provides everything you need to
            generate awareness, drive traffic, connect with customers.
          </p>
          {/* --- 3 BUTTONS ---- */}
          <div className="animate__animated animate__fadeInUp max-w-[500px]">
            <div className=" grid sm:grid-cols-4 grid-cols-4 md:flex md:gap-x-2 whitespace-nowrap">
              <button
                className="enquiry mt-2.5 sm:h-11 sm:w-24 md:w-32 items-center font-semibold mb-1.5 rounded bg-gradient-to-r from-[#3d3d75] , to-[#FAA123]
              whitespace-nowrap text-white hover:from-orange-500 hover:to-orange-500"
              >
                Learn More
              </button>

              <button className="sm:mt-1 text-gray-700 md:ml-4 sm:ml-10 h-14 md:w-30 sm:max-w-20 text-base font-semibold ">
                PLAY&nbsp;NOW
              </button>

              <button className="whitespace-nowrap sm:mt-2">
                <span className="md:ml-4 sm:ml-16 block w-10 md:w-12 lg:w-14 h-0.5 bg-[#ff7810]  sm:mb-1"></span>
              </button>

              <button className="whitespace-nowrap sm:mb-1 ">
                <img
                  className=" h-12 w-12 sm:min-h-14 sm:min-w-14"
                  src="./images/play.png"
                  alt="No Image"
                />
              </button>
            </div>
          </div>
        </div>
        {/* IMAGES */}
        <div className="lg:col-span-5 mt-10 relative flex justify-center items-center xl:mt-16">
          <img
            className="rotating lg:w-[78%] sm:w-[65%] md:[65%] animate__animated animate__backInUp"
            src="./images/bgban2.png"
            alt="N/A"
          />
          <div className="animate__animated animate__fadeInRight absolute top-8 left-8 right-8 bottom-8 flex justify-center items-center">
            <img
              className="lg:w-[90%] sm:w-[65%] md:[65%] h-auto object-cover"
              src="./images/02.png"
              alt="N/A"
            />
          </div>
        </div>
      </div>
      {/* CARDS WITH IMAGES COMPONENT */}
      <Cards />
      {/* ABOUT SECTION */}
      <About />
      {/* SERVICE SECTION */}
      <Service />
      {/* PROJECT SECTION */}
      <Projects />
      {/* TEMPLATE SEO */}
      <Temp_seo />
      {/* TEMPLATE 2nd SECTION */}
      <Temp_2 />
      {/* TEMPLATE 2nd SECTION */}
      <Temp_3 />
      {/* HOW IT WORKS */}
      <How_It_Works />
      {/* TESTIMONIALS */}
      <Test1 />
      {/* FOOTER */}
      <Foot />
    </section>
  );
}

export default Body;
