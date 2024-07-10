import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WebFont from "webfontloader";
import "animate.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { fas } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menucolor, setmenuColor] = useState(false);
  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false);
  // ACTIVE PAGE  STATE MANAGEMENT
  const location = useLocation();
  const currentPathSeg = location.pathname.split("/")[1];
  console.log(currentPathSeg);
  const [activeLink, setActiveLink] = useState(currentPathSeg);

  // OPEN HAMBURGER
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // CLOSING THE  MENU WHEN RESIZING WINDOW OR CLICKING ON LINKS
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // HAMBURGER COLOR CHANGE ON SCROLL
  const menucolors = () => {
    setmenuColor(!menucolor);
    menucolors();
  };

  // SMALL MENU CLICK FUNCTION
  const toggleSmallMenu = () => {
    setIsSmallMenuOpen(!isSmallMenuOpen);
    if (!isSmallMenuOpen) {
      // Add a delay to ensure the state change is reflected before applying the animation class
      setTimeout(() => {
        setIsClosing(true);
      }); // Adjust the delay as needed
    } else {
      setIsClosing(false);
    }
  };

  return (
    <header className=" gap-4 px-4 grid sm:grid-cols-4 scroll-smooth sticky top-0 h-[100%] min-w-[100%] bg-white opacity-100 z-50">
      <div
        className="order-2 sm:col-span-3 sm:order-1 relative h-[100%] sm:h-[100%] md:h-[100%] lg:h-[100%] flex w-full 
     justify-between sm:justify-start lg:justify-between sm:gap-[30%] lg:gap-12"
      >
        <Link to="/">
          <img
            className="h-[38px] w-32 md:h-[52px] md:w-[150px] mt-1 sm:mt-5 mb-5 sm:ml-5 pl-1
            xl:w-[190px] xl:h-[60px]"
            src="./images/logo.jpg"
            alt="No Img"
          />
        </Link>

        {/* Hamburger Icon */}
        <div className="flex items-center justify-end cursor-pointer 2xl:hidden xl:hidden lg:hidden md:visible sm:visible">
          <button
            onClick={toggleMenu}
            className={`hamburger-icon focus:outline-none ${
              isMenuOpen ? "active" : ""
            }`}
          >
            <span className="block w-6 h-1 bg-orange-500 mb-1"></span>
            <span className="block w-6 h-1 bg-orange-500 mb-1"></span>
            <span className="block w-6 h-1 bg-orange-500 mb-1"></span>
          </button>
        </div>

        {/* Menu in Laptop View */}
        <div
          className="hidden lg:flex lg:items-center xl:flex xl:items-center whitespace-nowrap 
        font-medium text-sm gap-x-4 text-[#111121] -mx-0 xl:mr-20"
        >
          <div
            className={`navbar flex items-center text-center ${
              activeLink == "home" ? "active-ham" : ""
            }`}
          >
            <Link to="/home" onClick={() => setActiveLink("home")}>
              Home
            </Link>
          </div>

          <div
            className={`navbar flex items-center text-center ${
              activeLink === "aboutus" ? "active-ham" : ""
            }`}
          >
            <Link to="/aboutus" onClick={() => setActiveLink("aboutus")}>
              About Us{" "}
            </Link>
          </div>
          <div
            className={`navbar flex items-center text-center ${
              activeLink === "webdesign" ? "active-ham" : ""
            }`}
          >
            <Link to="/webdesign" onClick={() => setActiveLink("webdesign")}>
              Web Design
            </Link>
          </div>
          <div
            className={`navbar flex items-center text-center ${
              activeLink === "sesm" ? "active-ham" : ""
            }`}
          >
            <Link to="/sesm" onClick={() => setActiveLink("sesm")}>
              SEM / SEO
            </Link>
          </div>
          <div
            className={`navbar flex items-center text-center ${
              activeLink === "careers" ? "active-ham" : ""
            }`}
          >
            <Link to="/careers" onClick={() => setActiveLink("careers")}>
              Careers
            </Link>
          </div>
          <div
            className={`navbar ml-3 xl:ml-10 flex items-center text-center ${
              activeLink === "contactus" ? "active-ham" : ""
            }`}
          >
            <Link
              className=""
              to="/contactus"
              onClick={() => setActiveLink("contactus")}
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* Menu in Mobile and Tablet View */}
        <div
          className={`MENU animate__animated animate__zoomIn menu absolute top-full left-[0%] w-full ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul
            className={`list ${menucolor} ? bg-slate-900  text-white ml-2 font-bold  : null `}
          >
            <li
              className={` item ${menucolor} ? hover:bg-[#ff7810] hover:text-white p-2 : null`}
            >
              <Link className="pl-4" to="/home">
                Home
              </Link>
            </li>
            <li
              className={`"item" ${menucolor} ? hover:bg-[#ff7810] hover:text-white p-2 : null`}
            >
              <Link className="pl-4" to="/aboutus">
                About Us
              </Link>
            </li>
            <li
              className={`"item" ${menucolor} ? hover:bg-[#ff7810] hover:text-white p-2 : null`}
            >
              <Link className="pl-4" to="/webdesign">
                Web Design
              </Link>
            </li>
            <li
              className={`"item" ${menucolor} ? hover:bg-[#ff7810] hover:text-white p-2 : null`}
            >
              <Link className="pl-4" to="/sesm">
                SEM / SEO
              </Link>
            </li>
            <li
              className={`"item" ${menucolor} ? hover:bg-[#ff7810] hover:text-white p-2 : null`}
            >
              <Link className="pl-4" to="/careers">
                Careers
              </Link>
            </li>
            <li
              className={`"item" ${menucolor} ? hover:bg-[#ff7810] hover:text-white p-2 : null`}
            >
              <Link className="pl-4" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* ENQUIRY  */}
      <div
        className="order-1 w-full sm:order-2 
       h-[100%] ml-2 whitespace-nowrap flex justify-center lg:justify-end "
      >
        <Link
          to="/enquirynow"
          className="enquiry hover:text-[#ff7810] inline-block shadow-2xl sm:h-[47px]
            lg:h-[42px] md:mt-7 mt-2 lg:mt-6 sm:mt-3.5 md:h-[42px] h-[42px] text-[#111121]
             font-semibold py-0.5 px-6 rounded-md transition duration-300 ease-in-out"
        >
          <div className="flex md:mt-1.5 mt-1.5 lg:mt-1.5 sm:mt-2 sm:flex sm:text-center ">
            Enquiry Now
          </div>
        </Link>

        {/* SMALL MENU FUNCTIONALITIES AFTER CLICK */}
        {isSmallMenuOpen && (
          <div
            className={`animate__animated ${
              isSmallMenuOpen
                ? "animate__slideInDown"
                : isClosing
                ? "animate__slideOutUp"
                : ""
            } absolute right-0 top-0 menu bg-white text-black h-[100vh] w-full overflow-y-auto sm:max-w-[44%] md:max-w-[32%] lg:max-w-[30%] xl:max-w-[32%]`}
          >
            <div className="flex justify-between">
              <img
                className="h-14 w-40 ml-5 mt-10 "
                src="./images/logo.jpg"
                alt="No Img"
              />
              <button className="mt-5 mr-5" onClick={toggleSmallMenu}>
                <IoCloseOutline className="font-thin text-3xl hover:text-orange-500 text-slate-300" />
              </button>
            </div>
            <p className="mt-4 ml-5 sm:ml-5 md:ml-5 lg:ml-5 text-medium text-[#111121] font-mono text-wrap leading-normal">
              Mars - Digital Marketing Agency Responsive HTML5 Template is Most
              PowerFull template 2018 For Everyone, Start working with an
              company that provide everything you need to generate awareness.
            </p>
            {/* GRADIENTS FOR ANIMATION */}
            <div className=" relative">
              <p className="mt-12 ml-5 sm:ml-5 md:ml-5 lg:ml-5  text-2xl font-normal">
                Contact Info
              </p>
              <div className="rainbow absolute bottom-0 left-5 top-12 w-28 h-[3px]"></div>
            </div>

            <div className="mt-12 ml-16">
              <p className=" font-bold ">ADDRESS</p>
              <p className="mt-2.5 text-base font-mono  font-medium text-gray-700">
                423B, Road Wordwide <br /> Country, USA
              </p>

              <p className="mt-7 font-bold">PHONE</p>
              <p className="mt-2.5 text-base font-mono font-medium text-gray-700">
                +91-234-567-8900
              </p>

              <p className="mt-7 font-bold">EMAIL</p>
              <p className="mt-2.5 text-base font-mono font-medium text-gray-700">
                themeht23@gmail.com
              </p>
            </div>
            <div className="flex justify-start mt-11 mb-10 ml-5">
              <AiFillFacebook className="" size={25} />

              <AiFillTwitterSquare className="ml-5" size={25} />

              <AiFillLinkedin className="ml-5" size={25} />

              <AiFillGooglePlusCircle className="ml-5" size={25} />
            </div>
          </div>
        )}
        {/* SMALL HAM Open & Close */}
        <div className="h-[100%]">
          <button
            onClick={toggleSmallMenu}
            className={`ml-4 sm:mt-8 mr-3 mt-6 lg:mt-9 md:mt-11 hamburger-icon focus:outline-none
                ${isSmallMenuOpen ? "active" : ""}`}
          >
            <span className="block w-3 lg:w-5 h-0.5 bg-purple-500 mb-0.5 lg:mb-1"></span>
            <span className="block w-3 lg:w-5 h-0.5 bg-purple-500 mb-0.5 lg:mb-1"></span>
            <span className="block w-3 lg:w-5 h-0.5 bg-purple-500 mb-0.5 lg:mb-1"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
