"use client";

// components/ScrollManager.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const sections = ["/", "/work", "/about", "/contact"];
const TOUCH_SENSITIVITY_THRESHOLD = 30; // Adjust this threshold as necessary
const ANIMATION_DURATION = 600; // ms, adjust for faster/slower transitions

const ScrollManager = () => {
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);
  // overlay state controls the full-screen transition animation
  const [overlayStyle, setOverlayStyle] = useState({ display: "none" });
  const [overlayDirection, setOverlayDirection] = useState(null); // 'up' or 'down'

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling) return;

      setIsScrolling(true);
      if (event.deltaY > 0) {
        runTransitionAndNavigate("next");
      } else {
        runTransitionAndNavigate("prev");
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

  // high-level helper that runs overlay animations and navigates
  const runTransitionAndNavigate = (dir) => {
    // dir: 'next' or 'prev'
    const currentIndex = sections.indexOf(router.pathname);
    const goingNext = dir === "next";

    // Determine target index
    const targetIndex = goingNext ? currentIndex + 1 : currentIndex - 1;
    if (targetIndex < 0 || targetIndex >= sections.length) {
      // nothing to do
      setIsScrolling(false);
      return;
    }

    // direction for visual animation: when going to next page, overlay will
    // slide from bottom to top ('up'), when going prev it will slide from top to bottom ('down')
    const visualDir = goingNext ? "up" : "down";
    setOverlayDirection(visualDir);

    // Prepare overlay off-screen depending on direction and make it visible
    const startTransform =
      visualDir === "up" ? "translateY(100%)" : "translateY(-100%)";
    const endTransform = "translateY(0)";
    const exitTransform =
      visualDir === "up" ? "translateY(-100%)" : "translateY(100%)";

    // show overlay positioned off-screen (no transition) with opacity 0 so we can
    // fade it in smoothly; use requestAnimationFrame to avoid flashes
    setOverlayStyle({
      display: "block",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      background: "#111010ff",
      transform: startTransform,
      opacity: 0,
      transition: "none",
      zIndex: 9999,
      pointerEvents: "auto",
      willChange: "transform, opacity",
    });

    // start enter animation on the next frame for a smooth transition (avoids sudden paint)
    requestAnimationFrame(() => {
      // a second rAF helps ensure the browser has applied initial styles
      requestAnimationFrame(() => {
        setOverlayStyle((s) => ({
          ...s,
          transform: endTransform,
          opacity: 1,
          transition: `transform ${ANIMATION_DURATION}ms ease, opacity ${ANIMATION_DURATION}ms ease`,
        }));
      });
    });

    // after enter animation completes, navigate
    setTimeout(() => {
      router
        .push(sections[targetIndex], undefined, { scroll: false })
        .then(() => {
          // after route change, animate overlay out to reveal new page (fade + slide)
          setOverlayStyle((s) => ({
            ...s,
            transform: exitTransform,
            opacity: 0,
            transition: `transform ${ANIMATION_DURATION}ms ease, opacity ${ANIMATION_DURATION}ms ease`,
          }));

          // finally hide overlay and allow further scrolling
          setTimeout(() => {
            setOverlayStyle({ display: "none" });
            setIsScrolling(false);
          }, ANIMATION_DURATION + 20);
        })
        .catch(() => {
          // on navigation failure, hide overlay and reset
          setOverlayStyle({ display: "none" });
          setIsScrolling(false);
        });
    }, ANIMATION_DURATION + 20);
  };

  // overlayStyle is inline-styled to avoid external CSS changes; tweak ANIMATION_DURATION
  // or the background color to match your design.
  return (
    <>
      <div
        style={overlayStyle}
        aria-hidden={!overlayStyle || overlayStyle.display === "none"}
      />
    </>
  );
};

export default ScrollManager;
