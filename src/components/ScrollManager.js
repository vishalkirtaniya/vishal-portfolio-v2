"use client";

// components/ScrollManager.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const sections = ["/", "/work", "/about", "/contact"];

const ScrollManager = () => {
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling) return;

      setIsScrolling(true);
      if (event.deltaY > 0) {
        navigateToNextPage();
      } else {
        navigateToPreviousPage();
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isScrolling, router.pathname]);

  const navigateToNextPage = () => {
    const currentIndex = sections.indexOf(router.pathname);
    if (currentIndex < sections.length - 1) {
      router
        .push(sections[currentIndex + 1], undefined, { scroll: false })
        .then(() => {
          setTimeout(() => setIsScrolling(false), 800); // Adjust this timeout as necessary
        });
    } else {
      setIsScrolling(false);
    }
  };

  const navigateToPreviousPage = () => {
    const currentIndex = sections.indexOf(router.pathname);
    if (currentIndex > 0) {
      router
        .push(sections[currentIndex - 1], undefined, { scroll: false })
        .then(() => {
          setTimeout(() => setIsScrolling(false), 800); // Adjust this timeout as necessary
        });
    } else {
      setIsScrolling(false);
    }
  };

  return null;
};

export default ScrollManager;
