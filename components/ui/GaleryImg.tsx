import { PhotoView } from "react-photo-view";
import { cn } from "@utils/cn";
import Image from "next/image";
type GaleryImgProps = {
  src: string;
  alt: string;
  className?: string;
};
function GaleryImg({ src, alt, className }: GaleryImgProps) {
  return (
    <div
      className={cn(
        "relative col-span-1 row-span-1 object-cover hover:cursor-pointer",
        className
      )}
    >
      <PhotoView src={src}>
        <div
          className={`relative h-70 md:h-100 md: w-full overflow-hidden object-cover`}
        >
          <Image
            src={src}
            className={`object-cover hover:scale-110 duration-200 ease-in-out`}
            fill
            sizes="80vw"
            alt={alt}
          />
        </div>
      </PhotoView>
    </div>
  );
}

export default GaleryImg;

/* 
<motion.img
            initial={{ scale: 1.05 }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
                ease: easeInOut,
                type: "tween",
              },
            }}
            src={src}
            className={`h-full w-full overflow-hidden object-cover`}
            alt={alt}
          />
           */
