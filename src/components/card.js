"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    src: "/work/project06.png",
    title: "Rental Housing Front End",
    subTitle: "Front End part of a e-commerce booking website",
    url: "https://totality-housing-market.netlify.app/",
  },
  {
    src: "/work/project05.png",
    title: "Graphic Designer Portfolio",
    subTitle: "Portfolio Website built with html, css, and javascript",
    url: "https://www.shilpakirtaniya.in/",
  },
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
];

export default function Card() {
  const VISIBLE = 3;
  const CARD_WIDTH = 260; // px
  const GAP = 40; // px

  const [index, setIndex] = useState(0);

  const maxIndex = items.length - VISIBLE;

  const moveLeft = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const moveRight = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className=" w-full flex items-center justify-center">
      {/* LEFT BUTTON */}
      <button
        onClick={moveLeft}
        disabled={index === 0}
        className="z-20 h-[44px] w-[44px] rounded-full bg-gray-700 text-bgwhite flex items-center justify-center disabled:opacity-30"
      >
        ‹
      </button>

      {/* VIEWPORT */}
      <div className="overflow-hidden w-[860px]">
        {/* SLIDER */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
          }}
        >
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.url}
              target="_blank"
              className="shrink-0 border-bgwhite border rounded-xl overflow-hidden shadow-md"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              {/* IMAGE */}
              <div className="relative w-full h-[220px] border-b-white">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-bgwhite mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-bgwhite">{item.subTitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={moveRight}
        disabled={index === maxIndex}
        className="z-20 h-[44px] w-[44px] rounded-full bg-gray-700 text-white flex items-center justify-center disabled:opacity-30"
      >
        ›
      </button>
    </div>
  );
}
