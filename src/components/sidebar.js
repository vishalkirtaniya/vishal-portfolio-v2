"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { gsap } from "gsap";

const SideBar = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      const activeLink = document.querySelector(".active-link");
      const allLinks = document.querySelectorAll(".trigger");
      if (activeLink) {
        // Animate the active link
        const tl = gsap.timeline();
        tl.to(activeLink, {
          x: 50,
          color: "#ffffff",
          fontWeight: 500, // Make the font bold
          duration: 0.5,
          ease: "power3.out",
        });
      }

      // Reset animations for all links
      allLinks.forEach((link) => {
        if (!link.classList.contains("active-link")) {
          gsap.to(link, {
            x: 0,
            color: "#555658",
            fontWeight: 400,
            duration: 0.5,
            ease: "power3.in",
          });
        }
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <div className="h-[50vh] items-center w-[80%] flex   montserratFont font-normal ">
        <ul className="left-side-nav h-full w-1/5 flex flex-col justify-around items-start text-white ">
          <li>
            <span className="trigger text-customGrey pl-3">01</span>
          </li>
          <li>
            <span className="trigger text-customGrey pl-3">02</span>
          </li>
          <li>
            <span className="trigger text-customGrey pl-3">03</span>
          </li>
          <li>
            <span className="trigger text-customGrey pl-3">04</span>
          </li>
          {/* <li>
            <span className="trigger text-customGrey pl-3">05</span>
          </li> */}
        </ul>
        <div className="midLine h-full w-[2px] bg-gray-600"></div>
        <ul className="right-side-nav h-full w-4/5 flex flex-col justify-around items-start pl-3 text-white">
          <li>
            <Link
              href="/"
              className={
                router.pathname === "/" ? "trigger active-link" : "trigger"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className={
                router.pathname === "/work" ? "trigger active-link" : "trigger"
              }
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                router.pathname === "/about" ? "trigger active-link" : "trigger"
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={
                router.pathname === "/contact"
                  ? "trigger active-link"
                  : "trigger"
              }
            >
              Contact
            </Link>
          </li>
          {/* <li>
            <Link
              href="/hire"
              className={
                router.pathname === "/hire" ? "trigger active-link" : "trigger"
              }
            >
              Hire Me
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
