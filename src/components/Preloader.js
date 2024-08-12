"use client";

import { useEffect } from "react";
// components/Preloader.js
import React from "react";
import { gsap } from "gsap";

const Preloader = () => {
  React.useEffect(() => {
    const preloaderElement = document.querySelector(".preloader");

    if (preloaderElement) {
      gsap.to(preloaderElement, {
        opacity: 0,
        duration: 0.5,
        delay: 2,
        onComplete: () => {
          preloaderElement.style.display = "none";
        },
      });
    }
  }, []);

  return (
    <div className="preloader  w-full h-full flex items-center justify-center bg-bgblack">
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
