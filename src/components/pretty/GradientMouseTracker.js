import React, { useEffect } from "react";

const RadialGradientMouseTracker = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const xPercentage = (clientX / window.innerWidth) * 100;
      const yPercentage = (clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${xPercentage}%`
      );
      document.documentElement.style.setProperty(
        "--mouse-y",
        `${yPercentage}%`
      );
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default RadialGradientMouseTracker;
