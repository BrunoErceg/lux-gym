import { cn } from '@utils/cn';
import CountingAnimation from '@animations/CountingAnimation';
import { HTMLAttributes } from 'react';

type InfoCardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  countTo: number;
  description?: string;
  duration?: number;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 * A React component that displays an info card with a title, count and description.
 * The component is used to display information about a skill or project.
 *
 * @param {string} [title] - The title of the info card.
 * @param {number} [countTo] - The count to display on the info card.
 * @param {string} [description] - The description of the info card.
 * @param {number} [duration=2000] - The duration of the counting animation in milliseconds.
 * @returns - A React component that displays an info card with a title, count and description.
 */
function InfoCard({
  title,
  countTo,
  description,
  className,
  duration = 2000,
  ...props
}: InfoCardProps) {
  return (
    <div
      className={cn('bg-dark w-full flex-col items-center p-4 text-white md:p-6', className)}
      {...props}
    >
      <h4 className="m-0 text-left">{title}</h4>
      <h3 className="m-0 text-left md:text-6xl">
        <CountingAnimation countTo={countTo} duration={duration} />+
      </h3>
      <p className="text-xs md:text-xl">{description}</p>
    </div>
  );
}

export default InfoCard;
