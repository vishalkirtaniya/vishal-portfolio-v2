"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();
  const menuButton = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menuContainer", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .fromTo(
          ".menuLinkItemHolder",
          { y: 75 },
          {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
          }
        );
      menuButton.current = gsap
        .timeline({ paused: true })
        .to(".up1", {
          y: 9,
          duration: 0.3,
          ease: "power1.in",
        })
        .to(
          ".down1",
          {
            y: -9,
            duration: 0.3,
            ease: "power1.in",
          },
          0
        )
        .to(
          ".up1",
          {
            duration: 0.7,
            rotateZ: 45,
            ease: "power4.inOut",
          },
          0.3
        )
        .to(
          ".down1",
          {
            duration: 0.7,
            rotateZ: -45,
            ease: "power4.inOut",
          },
          0.3
        )
        .to(
          ".mid1",
          {
            duration: 0.3,
            width: 0,
            height: 0,
            ease: "power4.inOut",
          },
          0
        );
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
      menuButton.current.play();
    } else {
      tl.current.reverse();
      menuButton.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div
      className="h-[100vh] w-full flex flex-col items-start absolute"
      ref={container}
    >
      <div className="h-[10vh] w-full flex justify-center z-50 fixed">
        <nav className="flex montserratFont items-center justify-between  w-[90%] container h-[6vh] max-w-[1383px]  ">
          <div className="h-full w-1/5 flex items-center justify-between ">
            <div className="leftSideButton h-full w-[300px]  ">
              <Link href="/" className="flex items-center justify-start ">
                <div className="logoContainer flex items-center ">
                  <Image
                    className=""
                    src="/logo.svg"
                    width={50}
                    height={50}
                    alt="logo"
                  />
                </div>
                <div className="nameContainer">
                  <h1 className=" font-bold leading-6 text-md uppercase text-white">
                    Vishal Kirtaniya
                  </h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="h-full w-4/5 flex items-center justify-end ">
            <div className="h-full w-[100px] ">
              <div className="rightSideButton h-full w-full flex justify-end items-center ">
                <div
                  className="h-[20px] w-[30px]  flex flex-col justify-between items-center hover:cursor-pointer z-30"
                  onClick={toggleMenu}
                >
                  <div className="h-[2px] w-full up1 border border-bgwhite rounded-full"></div>
                  <div className="h-[2px] w-[60%] mid1 border border-bgwhite rounded-full"></div>
                  <div className="h-[2px] w-full down1 border border-bgwhite rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="menuContainer bg-githubblack h-[100vh] w-full flex items-center justify-center z-40 fixed">
        <div className="h-3/5 w-2/5 menuLink flex flex-col xxs:gap-1 md:gap-2 lg:gap-1">
          {menuLinks.map((link, index) => (
            <div className=" w-full menuLinkItem overflow-hidden " key={index}>
              <div className="h-full w-full menuLinkItemHolder montserratFont xxs:text-4xl md:text-5xl lg:text-6xl text-bgwhite">
                <Link
                  href={link.path}
                  className="menu w-full"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
