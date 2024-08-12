import React from "react";

const ContactLoading = () => {
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
};

export default ContactLoading;
