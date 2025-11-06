"use client";
import { scrollToSection } from "@utils/scrollToSection";

type ScrollToProps = {
  children: string;
  section: React.RefObject<HTMLElement>;
};

function ScrollTo({ children, section }: ScrollToProps) {
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
