"use client";

// components/ScrollManager.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const sections = ["/", "/work", "/about", "/contact"];
const TOUCH_SENSITIVITY_THRESHOLD = 30; // Adjust this threshold as necessary

const ScrollManager = () => {
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);

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

    const handleTouchStart = (event) => {
      setTouchStartY(event.touches[0].clientY);
    };

    const handleTouchEnd = (event) => {
      const touchEndY = event.changedTouches[0].clientY;
      if (touchStartY === null) return;

      const swipeDistance = touchStartY - touchEndY;
      if (Math.abs(swipeDistance) > TOUCH_SENSITIVITY_THRESHOLD) {
        if (swipeDistance > 0) {
          navigateToNextPage();
        } else {
          navigateToPreviousPage();
        }
        setTouchStartY(null);
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isScrolling, router.pathname, touchStartY]);

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
