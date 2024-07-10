import React from "react";
import { IoIosDoneAll } from "react-icons/io";

function Temp_2() {
  return (
    <div className="mt-28 sm:flex  md:flex bg-slate-100 p-2">
      {/* CONTENT DIV */}
      <div className="sm:w-[50%]  relative mt-7 sm:mt-0 ml-4">
        <div>
          <p className="text-blue-950 mb-4 text-4xl font-bold line-clamp-3 whitespace-wrap">
            We Proved That We’re
            <br />
            The Powerfull Template
          </p>
          <div className="ml-1 w-28 h-[3px] rainbow rounded-xl"></div>
        </div>
        {/* ANIM */}

        <div className="mx-5 mt-8">
          <p className="text-xl ">
            Etiam nec odio vestibulum est mattis effic iturut
            <br />
            magna. Pelle ntesque sit am et tellus blandit.
            <br />
            Etiam nec odio vestibul.
            <br />
            Etiam nec odio vestibulum est mattis effic iturut.
          </p>
          {/* TICK 1 */}
          <div className="mt-7 flex">
            <div className="">
              <IoIosDoneAll className="text-4xl text-orange-500" />
            </div>
            <div className="mt-1 text-lg ml-2">
              <p>Mattis effic iturut magna pelle ntesque sit</p>
            </div>
          </div>
          {/* TICK 2 */}
          <div className="mt-1 flex">
            <div className="">
              <IoIosDoneAll className="text-4xl text-orange-500" />
            </div>
            <div className="mt-1 text-lg ml-2">
              <p>Phasellus eget purus id felis dignissim convallis</p>
            </div>
          </div>
          {/* TICK 3 */}
          <div className="mt-1 flex">
            <div className="">
              <IoIosDoneAll className="text-4xl text-orange-500" />
            </div>
            <div className="mt-1 text-lg ml-2 mb-14">
              <p>
                Fusce enim nulla mollis eu metus in sagittis <br /> fringilla
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* IMG DIV */}

      <div className="">
        <img
          className="imgtemp sm:w-auto sm:h-[370px]"
          src="./images/other_img/cont2.png"
          alt="No Img"
        />
      </div>
    </div>
  );
}

export default Temp_2;
