import React from "react";
import Link from "next/link";
import Image from "next/image";

function Hero01() {
  return (
    <>
      <div className="heroContent xxs:w-full md:w-1/2 h-full ">
        <h1 className="font-extrabold  text-bgwhite  xxs:text-4xl lg:text-5xl 2xl:text-6xl leading-[1.05em] ">
          Crafting Digital Experiences with Animation and Code
        </h1>
        <div className="xxs:h-[20px] xxs:w-[80px] md:h-[35px] md:w-[100px] bg-bgblue flex justify-center items-center xxs:mt-3 md:mt-7">
          <Link
            href={"/contact"}
            className="flex justify-center gap-1 items-center"
          >
            <h3 className="text-bgwhite font-semibold uppercase xxs:text-xs md:text-sm ">
              Reach Me
            </h3>
            <Image
              className="xxs:h-[10px] xxs:w-[10px] sm:h-[12px] sm:w-[12px] md:h-[15px] md:w-[15px] lg:h-[18px] lg:w-[18px] "
              src="/arrow.svg"
              height={18}
              width={18}
              alt="arrow svg"
              priority
            />
          </Link>
        </div>
      </div>
      <div className="heroImageContainer xxs:hidden md:block xxs:w-full md:w-1/2 xxs:h-1/2 md:h-full flex justify-center items-end  relative">
        <Image
          className="bottom-0 absolute right-0"
          src="/hero-image.webp"
          height={500}
          width={500}
          alt="heroImage"
          priority
        />
      </div>
    </>
  );
}

export default Hero01;
