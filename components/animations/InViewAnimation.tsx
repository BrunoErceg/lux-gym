import { motion } from "framer-motion";
import type { ReactNode } from "react";

type InViewAnimationProps = {
  children: ReactNode;
  direction?: "up" | "none";
  delay?: number; // in seconds
  margin?: "-100px" | "0px";
};

function InViewAnimation({
  children,
  direction = "up",
  margin = "-100px",
  delay = 0,
}: InViewAnimationProps) {
  const initalObject = { opacity: 0, y: 0 };
  direction == "up" ? (initalObject.y = 20) : "";

  return (
    <motion.div
      initial={initalObject}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: delay },
      }}
      viewport={{ once: true, margin: margin }}
    >
      {children}
    </motion.div>
  );
}

export default InViewAnimation;
