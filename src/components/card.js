"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

const Card = () => {
  const [items, setItems] = useState([
    {
      src: "/work/project01.png",
      title: "DevFolio Sample",
      subTitle: "Website with lots of Interactive Animations",
      url: "https://devporfolio.netlify.app/",
    },
    {
      src: "/work/project02.png",
      title: "Arizona Sample",
      subTitle: "A sample website with Aesthetic Design",
      url: "https://aestheticwebsite.netlify.app/",
    },
    {
      src: "/work/project03.png",
      title: "Commercial Clothing",
      subTitle: "A Sample website for commercial Clothing Brand",
      url: "https://commercialclothing.netlify.app/",
    },
    {
      src: "/work/project04.png",
      title: "Coffee Brand",
      subTitle: "A Sample Website for a Coffee Brand",
      url: "https://commercialcoffee.netlify.app/",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  const moveRight = () => {
    const newIndex = (currentIndex === 0 ? items.length : currentIndex) - 1;
    gsap.to([cardsRef.current, titleRef.current, subTitleRef.current], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.to([cardsRef.current, titleRef.current, subTitleRef.current], {
          opacity: 1,
          duration: 0.5,
        });
      },
    });
  };

  const moveLeft = () => {
    const newIndex = (currentIndex + 1) % items.length;
    gsap.to([cardsRef.current, titleRef.current, subTitleRef.current], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex(newIndex);
        gsap.to([cardsRef.current, titleRef.current, subTitleRef.current], {
          opacity: 1,
          duration: 0.5,
        });
      },
    });
  };

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, 3);
  }, [currentIndex]);

  const currentItems = [
    items[currentIndex % items.length],
    items[(currentIndex + 1) % items.length],
    items[(currentIndex + 2) % items.length],
  ];

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="h-4/5 w-1/12 flex justify-center items-center self-start">
        <button
          className="leftButton z-30"
          onClick={moveLeft}
          ref={leftButtonRef}
        >
          <div className="h-[50px] w-[50px] rounded-full bg-gray-600 flex justify-center items-center">
            <Image
              className="rotate-180"
              src="/arrow1.svg"
              height={20}
              width={20}
              alt="left arrow key"
            />
          </div>
        </button>
      </div>
      <div className="h-full w-10/12 montserratFont gap-3">
        <div className="h-[80%] w-full flex justify-evenly items-center overflow-hidden">
          {currentItems.map((item, index) => {
            const isMiddleCard = index === 1;
            const cardContent = (
              <div
                className={`card h-[${isMiddleCard ? "250px" : "150px"}] w-[${
                  isMiddleCard ? "250px" : "150px"
                }] rounded-full overflow-hidden flex justify-center items-center`}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <Image
                  className="hover:scale-105 transition duration-150 ease-in-out"
                  src={item.src}
                  height={isMiddleCard ? 250 : 150}
                  width={isMiddleCard ? 250 : 150}
                  alt={item.title}
                />
              </div>
            );

            return isMiddleCard ? (
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                {cardContent}
              </Link>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </div>
        <div className="h-[20%] w-full flex flex-col justify-start items-center">
          <Link
            href={currentItems[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="title-link"
          >
            <h3 className="text-lg font-bold title" ref={titleRef}>
              {currentItems[1].title}
            </h3>
          </Link>
          <p
            className="text-sm font-light w-[300px] text-center subTitle"
            ref={subTitleRef}
          >
            {currentItems[1].subTitle}
          </p>
        </div>
      </div>
      <div className="h-4/5 w-1/12 self-start flex justify-center items-center ">
        <button
          className="rightButton z-30"
          onClick={moveRight}
          ref={rightButtonRef}
        >
          <div className="h-[50px] w-[50px] rounded-full bg-gray-600 flex justify-center items-center">
            <Image
              className=""
              src="/arrow1.svg"
              height={20}
              width={20}
              alt="right arrow key"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
