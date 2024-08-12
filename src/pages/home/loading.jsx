import React from "react";

const HomeLoading = () => {
  return (
    <div className="xxs:h-[400px] md:h-[600px] w-full flex flex-col xxs:self-center lg:self-end lg:mb-10 borderWhite absolute">
      <div className="h-[65%] w-full flex justify-between montserratFont ">
        <div className="heroContent animate-pulse xxs:w-full md:w-1/2 h-full flex flex-col gap-1 pt-2">
          <div className="h-[55px] w-[500px]  bg-slate-700 rounded-full opacity-50"></div>
          <div className="h-[55px] w-[550px]  bg-slate-700 rounded-full opacity-50"></div>
          <div className="h-[55px] w-[450px]  bg-slate-700 rounded-full opacity-50"></div>
          <div className="h-[55px] w-[200px]  bg-slate-700 rounded-full opacity-50"></div>

          <div className="xxs:h-[20px] xxs:w-[80px] md:h-[35px] md:w-[100px] bg-bgblue flex justify-center items-center xxs:mt-3 md:mt-6 opacity-50"></div>
        </div>
      </div>
      <div className="bg-gray-600 h-[3px] w-full animate-pulse opacity-50"></div>
      <div className="flex  xxs:h-[20%] md:h-[15%] w-full justify-end animate-pulse">
        <div className="ml-3 h-full xxs:w-[47%] lg:w-1/3 text-gray-700 justify-center items-start hover:text-bgwhite transition duration-75 ease-linear relative ">
          <div className="absolute h-full w-full animate-pulse flex items-center justify-end z-10">
            <div className="h-[30px] w-[100px] rounded-full bg-slate-700 opacity-50 "></div>
          </div>
        </div>
        <div className="ml-3 h-full xxs:w-[47%] lg:w-1/3 text-gray-700 justify-center items-start hover:text-bgwhite transition duration-75 ease-linear relative ">
          <div className="absolute h-full w-full animate-pulse flex items-center justify-end z-10">
            <div className="h-[30px] w-[240px] rounded-full bg-slate-700 opacity-50 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoading;
