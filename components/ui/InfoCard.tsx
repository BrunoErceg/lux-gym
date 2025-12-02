import { cn } from "@utils/cn";
import CountingAnimation from "@animations/CountingAnimation";

type InfoCardProps = {
  title?: string;
  countTo: number;
  description?: string;
  className?: string;
  duration?: number;
} & React.ComponentPropsWithoutRef<"div">;

function InfoCard({
  title,
  countTo,
  description,
  className,
  duration = 2000,
}: InfoCardProps) {
  return (
    <div
      className={cn(
        "text-light bg-dark w-full flex-col items-center p-4 md:p-6",
        className
      )}
    >
      <h4 className="m-0">{title}</h4>
      <h3 className="m-0 md:text-6xl">
        <CountingAnimation countTo={countTo} duration={duration} />+
      </h3>
      <p className="text-xs md:text-xl">{description}</p>
    </div>
  );
}

export default InfoCard;
