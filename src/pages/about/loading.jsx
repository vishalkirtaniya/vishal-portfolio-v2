import React from "react";

const AboutLoading = () => {
  return (
    <>
      <section className="section animate-pulse h-[90vh] bg-bgblack flex justify-start items-center montserratFont text-bgwhite absolute ">
        <div className="xxs:h-[500px] md:h-[600px] w-full  ">
          <div className="xxs:h-[50%] md:h-[70%] w-full  gap-2 flex flex-col pt-[5px] ">
            <div className="h-[54px] w-[550px]  bg-slate-700 rounded-full opacity-50"></div>
            <div className="h-[54px] w-[520px]  bg-slate-700 rounded-full opacity-50"></div>
            <div className="h-[54px] w-[560px]  bg-slate-700 rounded-full opacity-50"></div>
            <div className="h-[54px] w-[580px]  bg-slate-700 rounded-full opacity-50"></div>
            <div className="h-[54px] w-[400px]  bg-slate-700 rounded-full opacity-50"></div>

            <div className="flex justify-center items-center h-[40px] w-[120px] mt-[6px] ">
              <div className="h-[20px] w-[90px] rounded-full bg-slate-700  "></div>
            </div>
          </div>
          <div className="xxs:h-[50%] md:h-[30%]  w-full flex xxs:flex-col xxs:items-start sm:flex-row md:justify-start md:items-center xxs:gap-1 sm:gap-5">
            <div>
              <div className="xxs:h-[70px] xxs:w-[70px] sm:h-[120px] sm:w-[120px] z-40">
                <div className="h-full xxs:w-[70px] sm:w-[120px] border-bgblue xxs:border-[5px] sm:border-[10px] z-20 flex justify-center items-center bg-slate-700"></div>
              </div>
              <div className="w-[90px] xxs:ml-[10px] sm:ml-[20px] xxs:h-[16px] sm:h-[18px] opacity-75 z-50 bg-slate-700 rounded-full"></div>
            </div>
            <div>
              <div className="xxs:h-[70px] xxs:w-[70px] sm:h-[120px] sm:w-[120px] z-40">
                <div className="h-full xxs:w-[70px] sm:w-[120px] border-bgblue xxs:border-[5px] sm:border-[10px] z-20 flex justify-center items-center bg-slate-700"></div>
              </div>
              <div className="w-[90px] xxs:ml-[10px] sm:ml-[20px] xxs:h-[16px] sm:h-[18px] opacity-75 z-50 bg-slate-700 rounded-full"></div>
            </div>
            <div>
              <div className="xxs:h-[70px] xxs:w-[70px] sm:h-[120px] sm:w-[120px] z-40">
                <div className="h-full xxs:w-[70px] sm:w-[120px] border-bgblue xxs:border-[5px] sm:border-[10px] z-20 flex justify-center items-center bg-slate-700"></div>
              </div>
              <div className="w-[90px] xxs:ml-[10px] sm:ml-[20px] xxs:h-[16px] sm:h-[18px] opacity-75 z-50 bg-slate-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutLoading;
