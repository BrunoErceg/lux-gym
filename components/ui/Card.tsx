import Image from 'next/image';
import Animated from '@/components/animations/InViewAnimation';
import Heading from '@ui/Heading';
import Typography from './Typography';

type CardProps = {
  title?: string;
  description?: string;
  icon: string;
  animationDelay?: number;
};

function Card({ title, description, icon, animationDelay = 0 }: CardProps) {
  return (
    <Animated delay={animationDelay}>
      <div className="space-y-4">
        <Image
          src={icon}
          width={94}
          height={94}
          alt=""
          className="mx-auto size-18 md:mx-0 md:size-24"
        />
        <Heading level={3}>{title}</Heading>
        <Typography variant="body" className="mx-[10%] text-center md:mx-0 md:text-left">
          {description}
        </Typography>
      </div>
    </Animated>
  );
}

export default Card;
