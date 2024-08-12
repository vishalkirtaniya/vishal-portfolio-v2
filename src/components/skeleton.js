import React from "react";

export function AboutLoading() {
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
}

export function ContactLoading() {
  return (
    <section className="section animate-pulse h-[90vh] w-full bg-bgblack  flex justify-start items-center montserratFont text-bgwhite relative">
      <div className="h-full w-full flex xxs:justify-center lg:justify-end items-center relative ">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial"></div>
        </div>
        <div className="h-[400px] w-[300px] bg-black rounded-lg box01 flex flex-col gap-3 justify-center items-center absolute z-10">
          <div className="h-[18px] w-[100px] rounded-full bg-slate-700"></div>
          <div className="h-[18px] w-[150px] rounded-full bg-slate-700"></div>
          <div className="h-[18px] w-[100px] rounded-full bg-slate-700"></div>

          <div className="LinkedInContainer h-[40px] flex justify-center items-center w-[160px] bg-linkedinblue">
            <div className="h-[18px] w-[70px] rounded-full bg-slate-700"></div>
          </div>

          <div className="GitHubContainer h-[40px] w-[160px] flex justify-center items-center bg-githubblack">
            <div className="h-[18px] w-[70px] rounded-full bg-slate-700"></div>
          </div>

          <div className="InContainer h-[40px] w-[160px] flex justify-center items-center bg-bgblue">
            <div className="h-[18px] w-[70px] rounded-full bg-slate-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeLoading() {
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
}

export function WorkLoading() {
  return (
    <section className="section h-[90vh] animate-pulse bg-bgblack flex justify-start items-center montserratFont text-bgwhite">
      <div className="h-[600px] w-full  flex flex-col justify-center items-center">
        <div className="xxs:h-[20px] sm:h-[22px] lg:h-[34px] w-[90px] rounded-full bg-slate-700 "></div>
        <div className="h-[400px] w-full flex justify-evenly items-center">
          <div className="flex justify-center items-center h-full w-full">
            <div className="h-4/5 w-1/12 flex justify-center items-center self-start">
              <div className="leftButton">
                <div className="h-[50px] w-[50px] rounded-full bg-slate-700 flex justify-center items-center"></div>
              </div>
            </div>
            <div className="h-full w-10/12 montserratFont gap-3">
              <div className="h-[80%] w-full flex justify-evenly items-center overflow-hidden">
                <div className="card h-[150px] w-[150px] bg-slate-700 rounded-full overflow-hidden flex justify-center items-center"></div>
                <div className="card h-[250px] w-[250px] bg-slate-700 rounded-full overflow-hidden flex justify-center items-center"></div>
                <div className="card h-[150px] w-[150px] bg-slate-700 rounded-full overflow-hidden flex justify-center items-center"></div>
              </div>
              <div className="h-[20%] w-full flex flex-col justify-start items-center">
                <div className="h-[20px] w-[100px] rounded-full bg-slate-700 title"></div>

                <div className="h-[16px] w-[150px] rounded-full bg-slate-700 subTitle"></div>
              </div>
            </div>
            <div className="h-4/5 w-1/12 self-start flex justify-center items-center ">
              <div className="rightButton">
                <div className="h-[50px] w-[50px] rounded-full bg-slate-700 flex justify-center items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
