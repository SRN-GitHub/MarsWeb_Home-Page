import React from "react";

//   ANIMATION and HOVER  EFFECTS WILL  BE ADDED HERE LATER ON.

function Projects() {
  return (
    <section>
      <div className="relative flex flex-col items-center justify-start p-2">
        <p className="mt-20 pt-1 bg-orange-500 text-white h-9 w-24 text-center font-semibold">
          Project
        </p>
        <p className=" mt-5 text-5xl font-semibold text-gray-800 text-center">
          We’ve Done Lot’s Of Work, Let’s
          <br />
          Check Some From Here
        </p>
        <div className="rainbow rounded-xl absolute mx-auto top-[410px] sm:top-[273px] w-28 h-[3px]"></div>

        {/* IMAGES */}
        <div className="overflow-hidden grid mt-20 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 w-full">
          <div class="group relative w-full min-h-[300px] ">
            <img
              src="./images/project_img/01.jpg"
              alt="No Img"
              className="group-hover:top-0"
            />
            <div
              class="absolute top-0 left-0 right-0 w-full bg-black h-0 px-8 opacity-0  
              transition-all
              duration-1000
              group-hover:opacity-100 
              group-hover:h-full
              group-hover:py-8"
            >
              <div class="h-full">
                <p class="text-orange-500 text-lg">BRANDING</p>
                <p class="text-3xl text-white font-medium tracking-wide">
                  SEO Tracking <br /> Analysis
                </p>
              </div>
            </div>
          </div>

          <div class="group relative w-full min-h-[300px] ">
            <img
              src="./images/project_img/02.jpg"
              alt="No Img"
              className="group-hover:top-0"
            />
            <div
              class="absolute top-0 left-0 right-0 w-full bg-black h-0 px-8 opacity-0  
              transition-all
              duration-1000
              group-hover:opacity-100 
              group-hover:h-full
              group-hover:py-8"
            >
              <div class="h-full">
                <p class="text-orange-500 text-lg">BRANDING</p>
                <p class="text-3xl text-white font-medium tracking-wide">
                  SEO Tracking <br /> Analysis
                </p>
              </div>
            </div>
          </div>

          <div class="group relative w-full min-h-[300px] ">
            <img
              src="./images/project_img/03.jpg"
              alt="No Img"
              className="group-hover:top-0"
            />
            <div
              class="absolute top-0 left-0 right-0 w-full bg-black h-0 px-8 opacity-0  
              transition-all
              duration-1000
              group-hover:opacity-100 
              group-hover:h-full
              group-hover:py-8"
            >
              <div class="h-full">
                <p class="text-orange-500 text-lg">BRANDING</p>
                <p class="text-3xl text-white font-medium tracking-wide">
                  SEO Tracking <br /> Analysis
                </p>
              </div>
            </div>
          </div>

          <div class="group relative w-full min-h-[300px] ">
            <img
              src="./images/project_img/04.jpg"
              alt="No Img"
              className="group-hover:top-0"
            />
            <div
              class="absolute top-0 left-0 right-0 w-full bg-black h-0 px-8 opacity-0  
              transition-all
              duration-1000
              group-hover:opacity-100 
              group-hover:h-full
              group-hover:py-8"
            >
              <div class="h-full">
                <p class="text-orange-500 text-lg">BRANDING</p>
                <p class="text-3xl text-white font-medium tracking-wide">
                  SEO Tracking <br /> Analysis
                </p>
              </div>
            </div>
          </div>

          <div class="group relative w-full min-h-[300px] ">
            <img
              src="./images/project_img/05.jpg"
              alt="No Img"
              className="group-hover:top-0"
            />
            <div
              class="absolute top-0 left-0 right-0 w-full bg-black h-0 px-8 opacity-0  
              transition-all
              duration-1000
              group-hover:opacity-100 
              group-hover:h-full
              group-hover:py-8"
            >
              <div class="h-full">
                <p class="text-orange-500 text-lg">BRANDING</p>
                <p class="text-3xl text-white font-medium tracking-wide">
                  SEO Tracking <br /> Analysis
                </p>
              </div>
            </div>
          </div>

          <div class="group relative w-full min-h-[300px] ">
            <img
              src="./images/project_img/06.jpg"
              alt="No Img"
              className="group-hover:top-0"
            />
            <div
              class="absolute top-0 left-0 right-0 w-full bg-black h-0 px-8 opacity-0  
              transition-all
              duration-1000
              group-hover:opacity-100 
              group-hover:h-full
              group-hover:py-8"
            >
              <div class="h-full">
                <p class="text-orange-500 text-lg">BRANDING</p>
                <p class="text-3xl text-white font-medium tracking-wide">
                  SEO Tracking <br /> Analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
