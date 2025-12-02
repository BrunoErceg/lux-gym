import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@utils/cn";

type NavIconProps = {
  icon: any;
  link: string;
  className?: string;
};

function NavIcon({ icon, link, className }: NavIconProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={icon}
        className={cn(
          `hover:text-primary text-lg md:text-2xl transition-colors duration-200 hover:cursor-pointer`,
          className
        )}
      />
    </a>
  );
}

export default NavIcon;
