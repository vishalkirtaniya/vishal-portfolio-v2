"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";

const AnimatedHero02 = ({ title, content }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [isReversed, setIsReversed] = useState(false);

  const handleClick = () => {
    gsap.timeline()
      .to(titleRef.current, {
        y: isReversed ? 0 : -20,
        color: isReversed ? "#4b5563" : "#ffffffdc",
        duration: 0.4,
      })
      .to(contentRef.current, {
        opacity: isReversed ? 0 : 1,
        y: isReversed ? 0 : 20,
        color: "#ffffffdc",
        duration: 0.4,
      }, "<");

    setIsReversed(!isReversed);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full lg:w-1/3 cursor-pointer relative"
    >
      <div className="text-right">
        <h2
          ref={titleRef}
          className="font-bold text-sm sm:text-base lg:text-xl text-gray-500"
        >
          {title}
        </h2>
        <p
          ref={contentRef}
          className="text-sm opacity-0 text-gray-300 mt-2"
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default AnimatedHero02;