"use client";
import { scrollToSection } from "@utils/scrollToSection";

function ScrollTo({
  children,
  section,
}: {
  children: string;
  section: React.RefObject<HTMLElement>;
}) {
  return (
    <button
      onClick={() => scrollToSection(section)}
      className="underline-animation relative text-xl"
    >
      {children}
    </button>
  );
}

export default ScrollTo;
