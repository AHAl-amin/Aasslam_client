

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "./utils";

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  className,
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, reverse]);

  return (
    <div
      className={cn("relative flex overflow-hidden [--gap:1rem] py-4", className)}
      onMouseEnter={() => pauseOnHover && controls.stop()}
      onMouseLeave={() =>
        pauseOnHover &&
        controls.start({
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        })
      }
    >
      {/* duplicate children inside a wrapper to create seamless loop */}
      <motion.div
        className="flex shrink-0 gap-[--gap] whitespace-nowrap"
        animate={controls}
      >
        {[...React.Children.toArray(children), ...React.Children.toArray(children)]}
      </motion.div>
    </div>
  );
}
