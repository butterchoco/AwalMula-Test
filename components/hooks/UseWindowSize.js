import { useState, useEffect } from "react";
import useEventListener from "./UseEventListener";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    isLaptopDisplay: false,
    isTabletDisplay: false,
    isMobileDisplay: false,
  });

  const onResize = () => {
    setWindowSize({
      width: window.outerWidth,
      height: window.outerHeight,
      isLaptopDisplay: window.outerWidth < 1420 || window.innerWidth < 1420,
      isTabletDisplay: window.outerWidth < 920 || window.innerWidth < 920,
      isMobileDisplay: window.outerWidth < 612 || window.innerWidth < 612,
    });
  };

  useEffect(onResize, []);

  useEventListener("resize", onResize);

  return windowSize;
};

export default useWindowSize;
