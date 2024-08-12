import React from "react";

const WorkLoading = () => {
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
};

export default WorkLoading;
