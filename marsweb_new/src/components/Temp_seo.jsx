import React from "react";
import { IoIosDoneAll } from "react-icons/io";
function Temp_seo() {
  return (
    <div className="mt-28 sm:flex w-full">
      {/* IMG DIV */}
      <div className=" sm:w-[50%] relative p-2 mt-12">
        <img
          className="lg:ml-10 sm:h-[370px]  sm:w-[500px]"
          src="./images/other_img/istockphoto-1321317687-1024x1024.jpg"
          alt="No img"
        />
        <div className="absolute top-0">
          <img
            className="lg:ml-10 imgtemp sm:w-auto sm:h-[370px]"
            src="./images/other_img/cont.png"
            alt="No Img"
          />
        </div>
      </div>
      {/* CONTENT DIV */}
      <div className="sm:w-[50%] p-2 relative mt-7 sm:mt-0 lg:ml-8 xl:ml-0">
        <div>
          <p className="text-blue-950  text-4xl font-bold line-clamp-3 whitespace-wrap">
            This Time We Proved That We’re The Best SEO!
          </p>
        </div>
        {/* ANIM */}

        <div className="ml-1 w-24 h-[3px] rainbow mb-3 rounded-xl mt-3"></div>
        <div className="mx-5 mt-10">
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
            <div className="mt-1 text-lg ml-2">
              <p>
                Fusce enim nulla mollis eu metus in sagittis <br /> fringilla
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temp_seo;
