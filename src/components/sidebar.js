"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useRouter } from "next/router";

const pathLinks = [
  { path: "/", label: "Home", no: "01" },
  { path: "/work", label: "Work", no: "02" },
  { path: "/about", label: "About", no: "03" },
  { path: "/contact", label: "Contact", no: "04" },
];

const SideBar = () => {
  const router = useRouter();
  const linkRefs = useRef([]);

  useEffect(() => {
    const currentPath = router.pathname;

    // Reset all links' animations
    linkRefs.current.forEach((link) => {
      gsap.to(link, {
        x: 0,
        color: "#555658",
        fontWeight: 400,
        duration: 0.5,
        ease: "power3.in",
      });
    });

    // Find the link that matches the current path and animate it
    linkRefs.current.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        gsap.to(link, {
          x: 50,
          color: "#ffffff",
          fontWeight: 500,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    });
  }, [router.pathname]);

  return (
    <div className="h-[50vh] items-center w-[80%] flex montserratFont font-normal z-30">
      <ul className="left-side-nav h-full w-1/5 flex flex-col justify-around items-end text-white pr-3">
        {pathLinks.map((link, index) => (
          <li key={index}>
            <span className=" text-[#555658]">{link.no}</span>
          </li>
        ))}
      </ul>
      <div className="midLine h-full w-[2px] bg-githubblack"></div>
      <ul className="right-side-nav h-full w-4/5 flex flex-col justify-around items-start pl-3 text-white">
        {pathLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.path} ref={(el) => (linkRefs.current[index] = el)}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
