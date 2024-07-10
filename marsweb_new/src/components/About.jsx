import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoIosDoneAll } from "react-icons/io";

function About() {
  return (
    <div>
      {/* MAIN DIV */}
      <div className="mx-0 grid lg:grid-cols-2 sm:grid-cols-1 sm:gap-7 gap-3 mt-20 p-2">
        {/* M DIV 1 */}
        <div className="min-h-[200px] rounded-lg lg:grid-cols-1">
          <div className=" w-full h-full">
            <div className="relative flex justify-center items-center  top-0 left-0 right-0   object-cover bottom-0 w-full">
              <div className="relative">
                <div className="people">
                  <img
                    className="p-2 object-cover"
                    src="./images/3people.png"
                    alt="No Img"
                  />
                  <img
                    className="absolute p-2 w-[50%] h-full top-0 z-[-10]"
                    src="./images/other_img/istockphoto-1321317687-1024x1024.jpg"
                    alt="N?A"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* M DIV 2 */}
        <div className=" min-h-[200px] rounded-lg sm:mt-0 lg:ml-16">
          <p className="text-white bg-orange-500 font-semibold  min-h-9 max-w-28 flex items-center justify-center">
            About Us
          </p>
          <p className="font-semibold text-4xl mt-5 mb-5">
            Do You Want To <br /> Generate More We <br /> Know The Solution
          </p>
          <div className="rainbow ml-1 w-28 h-1 rounded-xl"></div>

          {/* MAIN DIV FOR  TEXT & ICONS*/}
          <div className="grid sm:grid-cols-1 max-h-full sm:max-h-full">
            {/* DIV 1*/}
            <div className="whitespace-nowrap flex flex-row gap-2 mt-5">
              <IoIosDoneAll className="text-3xl text-orange-500" />
              <p className="mt-0.5 font-semibold">
                Mattis effic iturut magna pelle sit
              </p>
            </div>
            {/* DIV 2*/}
            <div className="whitespace-nowrap flex flex-row gap-2 mt-4">
              <IoIosDoneAll className="text-3xl text-orange-500" />
              <p className="mt-0.5 font-semibold">
                {" "}
                Iturut magna pelle ntesque sit
              </p>
            </div>
            {/* DIV 3 */}
            <div className="whitespace-nowrap flex flex-row gap-2 mt-4 md:w-auto">
              <IoIosDoneAll className="text-3xl text-orange-500" />
              <p className="mt-0.5 font-semibold">
                {" "}
                Fusce enim nulla mollis eu metus in fringilla
              </p>
            </div>
            {/* DIV 4 */}
            <div className="flex flex-col sm:flex-row mt-5 max-h-full lg:w-[340px] shadow-lg">
              {/* FIRST ELEMENT- SUCCESS */}
              <div className="flex relative mb-4 sm:mb-0 sm:w-[180px] sm:p-5">
                <img
                  className="mt-8 max-h-20 max-w-20 sm:w-16 sm:h-16"
                  src="./images/goal.png"
                  alt="No Img"
                />
                <p className="font-bold text-5xl text-orange-500 sm:ml-0.5 ml-3">
                  2304
                </p>
                <p className="absolute left-24 top-[70px] font-medium">
                  SUCCESS
                </p>
              </div>
              {/* SECOND ELEMENT- HAPPY CLIENT */}
              <div className="flex relative sm:w-[180px] sm:p-5">
                <img
                  className="mt-8 max-h-20 w-20 sm:w-[50px] sm:h-16"
                  src="./images/costumer.png"
                  alt="No Img"
                />
                <p className="font-bold text-5xl text-orange-500 sm:ml-0.5 ml-4">
                  3498
                </p>
                <p className="absolute right-0 left-[100px] top-[60px] sm:top-[70px] sm:left-20 font-medium">
                  HAPPY
                  <br />
                  CLIENTS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
