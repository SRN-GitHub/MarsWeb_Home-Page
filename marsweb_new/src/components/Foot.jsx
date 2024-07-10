import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";

function Foot() {
  return (
    <div className="footer mt-10 w-full">
      <div className="top grid grid-cols-1 lg:grid-cols-3">
        {/* BLACK SECTION */}
        <div className="black bg-[#141414] ">
          <Link to="/home">
            <img
              className="mt-10 ml-10 w-44 h-16"
              src="./images/logo.jpg"
              alt="No Img"
            />
          </Link>
          {/* <img className="mt-10 ml-10" src="./images/logo.jpg" alt="N?a" /> */}
          <p className="ml-9 mt-5 text-white leading-7 font-medium font-sans pr-3">
            Loptus Digital Marketing HTML5 Template Is fully responsible,
            Performance oriented theme, Build whatever you like with the Loptus,
            Loptus is the creative, modern HTML5 Template suitable for Your
            business.
          </p>
          <button className="text-white flex mt-5 ml-9 font-semibold font-sans">
            Read More <HiArrowNarrowRight className="mx-1 my-1.5" />
          </button>
          <div className=" ">
            <p className="text-white font-semibold text-[29px] ml-9 mt-6">
              Follow Us
            </p>
            <div className="w-28 h-1 rainbow rounded-xl ml-9 mt-4"></div>
          </div>
          <div className="Iconss flex justify-start gap-x-3 ml-9 mt-10 mb-6 lg:mb-16">
            <FaFacebook
              className="text-white rounded-full border p-2"
              size={40}
            />
            <FaTwitter
              className="text-white rounded-full border p-2"
              size={40}
            />
            <FaGooglePlusG
              className="text-white rounded-full border p-2"
              size={40}
            />
            <FaLinkedin
              className="text-white rounded-full border p-2"
              size={40}
            />
            <FaSkype className="text-white rounded-full border p-2" size={40} />
          </div>
        </div>
        {/* MIDDELE SECTION */}
        <div className="1st w-full lg:col-span-2 gap-4 px-4 lg:px-20 py-20 ">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="usefull ">
              <p className="font-normal text-[29px]">Useful Links</p>
              <div className="w-24 h-1 rainbow mb-3 rounded-xl mt-2"></div>

              <div className="btn-class grid sm:grid-cols-2 mt-5">
                <div className="w-fit flex flex-col gap-5 leading-7 font-normal font-sans text-[#111121]">
                  <Link className="btn-L transition ease-out  hover:translate-x-2 hover:bg-orange-400 hover:text-white hover:scale-x-[1] hover: duration-300 ...">
                    About Us
                  </Link>
                  <Link className="btn-L transition ease-out  hover:translate-x-2 hover:bg-orange-400 hover:text-white hover:scale-x-[1] hover: duration-300 ...">
                    Our Service
                  </Link>
                  <Link className="btn-L transition ease-out  hover:translate-x-2 hover:bg-orange-400 hover:text-white hover:scale-x-[1] hover: duration-300 ...">
                    Case Studies
                  </Link>
                  <Link className="btn-L transition ease-out  hover:translate-x-2 hover:bg-orange-400 hover:text-white hover:scale-x-[1] hover: duration-300 ...">
                    Project
                  </Link>
                  <Link className="btn-L transition ease-out  hover:translate-x-2 hover:bg-orange-400 hover:text-white hover:scale-x-[1] hover: duration-300 ...">
                    Faq
                  </Link>
                </div>
                <div className="btn-R w-full flex flex-col gap-5 leading-7 font-normal font-sans">
                  <Link className="btn-L transition ease-out  hover:translate-x-2 hover:bg-orange-400 hover:text-white hover:scale-x-[1] hover: duration-300 ...">
                    Our Team
                  </Link>
                  <Link className="btn-L transition ease-out  hover:translate-x-2 hover:bg-orange-400 hover:text-white hover:scale-x-[1] hover: duration-300 ...">
                    Blog
                  </Link>
                  <Link className="btn-L transition ease-out  hover:translate-x-2 hover:bg-orange-400 hover:text-white hover:scale-x-[1] hover: duration-300 ...">
                    Privacy Policy
                  </Link>
                  <Link className="btn-L transition ease-out  hover:translate-x-2 hover:bg-orange-400 hover:text-white hover:scale-x-[1] hover: duration-300 ...">
                    Terms & Condition
                  </Link>
                  <Link className="btn-L transition ease-out  hover:translate-x-2 hover:bg-orange-400 hover:text-white hover:scale-x-[1] hover: duration-300 ...">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="contact">
              <p className="font-normal text-[29px]">Contact Us</p>
              <div className="w-28 h-1 rainbow mb-3 rounded-xl mt-2"></div>
              <p className="font-normal font-sans py-4 hover:text-orange-500 delay-200 transition ease-in">
                423B, Road Wordwide Country, USA
              </p>
              <button className="font-normal font-sans py-4 hover:text-orange-500 delay-200 transition ease-in">
                themeht23@gmail.com
              </button>{" "}
              <br />
              <button className="font-normal font-sans py-4 hover:text-orange-500 delay-200 transition ease-in-out">
                +91-234-567-9900
              </button>
              <br />
              <button className="font-normal font-sans py-4 hover:text-orange-500 delay-200 transition ease-in">
                +91-234-567-8900
              </button>
            </div>
          </div>
          {/* MDIDDLE BOTTOM */}
          <div className="2nd w-full mt-8 ">
            <div className="news p-4 shadow-md shadow-[#18181811]">
              <p className="font-normal text-[29px]">NewsLetter</p>
              <input
                type="email"
                placeholder="Email Address"
                className="border-none outline-none rounded-lg h-12 shadow-md w-full"
              />
              <button
                type="submit"
                className="bg-gradient-to-r  from-[#3d3d75] , to-[#FAA123] md:h-12 md:w-28 rounded-lg h-12 w-full text-white font-medium
                 hover:bg-gradient-to-tr hover:from-orange-500 hover:to-orange-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* LAST SEC */}
      <div className="3rd sm:flex justify-around mt-8 mb-8">
        <div className="copyright font-normal font-sans">
          <p>COPYRIGHT 2024 | ALL RIGHTS RESERVED</p>
        </div>
        <div className="designed font-normal font font-sans">
          <p>
            DESIGNED AND DEVELOPED{" "}
            <span className="text-[#FF7810]">MARSWEB SOLUTIONS</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Foot;
