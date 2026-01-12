import Image from 'next/image';
import Heading from '@ui/Heading';
import Typography from './Typography';
import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  icon: string;
};

/**
 * A React component that displays a card with a title, description and icon.
 * The component is used to display information about a skill or project.
 * The component is a wrapper around the Heading and Typography components.
 *
 * @returns - The JSX element of the component.
 */
function Card({ title, description, icon, className, ...props }: CardProps) {
  return (
    <div className={cn('space-y-4', className)} {...props}>
      <Image
        src={icon}
        width={94}
        height={94}
        alt={title}
        className="mx-auto size-18 md:mx-0 md:size-24"
      />
      <Heading level={3}>{title}</Heading>
      <Typography variant="body" className="mx-[10%] text-center md:mx-0 md:text-left">
        {description}
      </Typography>
    </div>
  );
}

export default Card;
