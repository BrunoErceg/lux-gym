"use client";
import { motion } from "framer-motion";
import { cn } from "@utils/cn";
import useHashtagsList from "@hooks/useHashtagsList";

type hastagProps = {
  className?: string;
};

function Hashtag({ className }: hastagProps) {
  const hashtags = useHashtagsList();

  return (
    <div className={cn("bg-primary flex overflow-hidden", className)}>
      <motion.ul
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="flex w-fit gap-14 py-6 pl-14"
      >
        {[...hashtags, ...hashtags].map((hastag, index) => {
          return (
            <li key={index}>
              <p className="text-3xl text-white">#{hastag}</p>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
}

export default Hashtag;
