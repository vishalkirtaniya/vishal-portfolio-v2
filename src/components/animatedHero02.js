"use client";

import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const AnimatedHero02 = ({ title, content }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [isReversed, setIsReversed] = useState(false);

  const handleClick = () => {
    if (!isReversed) {
      gsap
        .timeline()
        .to(titleRef.current, {
          y: -20, // move upwards
          color: "#ffffffdc",
          opacity: 1,
          duration: 0.5,
        })
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 20, // move downwards
            color: "#ffffffdc",
            duration: 0.5,
          },
          "<"
        ); // "<" ensures both animations start at the same time
    } else {
      gsap
        .timeline()
        .to(titleRef.current, {
          x: 0,
          y: 0, // move upwards
          color: "#4b5563",
          opacity: 1,
          duration: 0.5,
        })
        .to(
          contentRef.current,
          {
            opacity: 0,
            y: 0, // move downwards
            color: "#4b5563",
            duration: 0.5,
          },
          "<"
        ); // "<" ensures both animations start at the same time
    }
    setIsReversed(!isReversed);
  };

  return (
    <div
      className="ml-3 h-full xxs:w-[47%] lg:w-1/3 text-gray-700 justify-center items-start hover:text-bgwhite transition duration-75 ease-linear relative "
      onClick={handleClick}
    >
      <div className="absolute h-full w-full  flex items-center z-10 hover:text-bgwhite hover:cursor-pointer transition duration-75">
        <h2
          ref={titleRef}
          className="font-bold xxs:text-xs md:text-md lg:text-xl bg-bgblack w-full text-end "
        >
          {title}
        </h2>
      </div>
      <div className="absolute h-full w-full  flex items-center z-0">
        <p
          ref={contentRef}
          className="font-light xxs:text-xs lg:text-sm opacity-0 text-end"
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default AnimatedHero02;
