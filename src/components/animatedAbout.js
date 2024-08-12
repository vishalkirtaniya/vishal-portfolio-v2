"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const AnimatedAbout = ({ image, title, para }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const innerDivRef = useRef(null);
  const imageRef = useRef(null);
  //   const titleRef = useRef(null);

  const handleClick = () => {
    const screenWidth = window.innerWidth;
    let targetContainerSize, targetInnerDivSize, targetImageSize;

    if (screenWidth < 640) {
      // Small screens (e.g., mobile)
      targetContainerSize = isExpanded
        ? { height: "70px", width: "70px" }
        : { height: "80px", width: "310px" };

      targetInnerDivSize = isExpanded
        ? { height: "70px", width: "70px" }
        : { height: "80px", width: "80px" };

      targetImageSize = isExpanded
        ? { height: 60, width: 60 }
        : { height: 70, width: 70 };
    } else {
      // Medium screens (e.g., tablet and laptop)
      targetContainerSize = isExpanded
        ? { height: "120px", width: "120px" }
        : { height: "130px", width: "360px" };

      targetInnerDivSize = isExpanded
        ? { height: "120px", width: "120px" }
        : { height: "130px", width: "130px" };

      targetImageSize = isExpanded
        ? { height: 100, width: 100 }
        : { height: 110, width: 110 };
    }
    // const targetTitleSize = isExpanded ? { y: "-20" } : { y: "0" };

    gsap.to(containerRef.current, {
      height: targetContainerSize.height,
      width: targetContainerSize.width,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(innerDivRef.current, {
      width: targetInnerDivSize.width,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(imageRef.current, {
      height: targetImageSize.height,
      width: targetImageSize.width,
      duration: 0.5,
      ease: "power2.inOut",
    });

    // gsap.to(titleRef.current, {
    //   y: targetTitleSize.y,
    //   duration: 0.5,
    //   ease: "power2.inOut",
    // });

    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="xxs:h-[70px] xxs:w-[70px] sm:h-[120px] sm:w-[120px] relative overflow-hidden z-30"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <div
          ref={innerDivRef}
          className="h-full xxs:w-[70px] sm:w-[120px] border-bgblue xxs:border-[5px] sm:border-[10px] absolute z-20 flex justify-center items-center bg-aboutbg"
        >
          <Image
            ref={imageRef}
            src={image}
            height={100}
            width={100}
            alt="image"
          />
        </div>
        <div className="h-full w-[220px] right-0  absolute">
          <p className=" xxs:text-xs md:text-sm lg:text-base text-balance ">
            {para}
          </p>
        </div>
      </div>
      <h3 className="xxs:ml-[10px] text-slate-300 sm:ml-[20px] xxs:text-sm sm:text-lg opacity-75 z-10">
        {title}
      </h3>
    </div>
  );
};

export default AnimatedAbout;
