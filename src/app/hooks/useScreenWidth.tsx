"use client";
import { useState, useEffect } from "react";

const useScreenWidth = () => {
  const isClient = typeof window === "object";
  const [screenWidth, setScreenWidth] = useState(
    isClient ? window.innerWidth : 0
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isPad, setIsPad] = useState(false);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (screenWidth < 1024 && screenWidth > 426) {
      setIsPad(true);
    } else if (screenWidth < 426) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsPad(false);
    }
  }, [screenWidth]);

  return { screenWidth, isMobile, isPad };
};

export default useScreenWidth;
