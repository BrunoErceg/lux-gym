import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode } from 'react';

type HeadingProps = VariantProps<typeof HeadingVariants> &
  HTMLAttributes<HTMLHeadingElement> & {
    level: 1 | 2 | 3 | 4;
    white?: boolean;
    footer?: boolean;
    className?: string;
    children: ReactNode;
  };

const HeadingVariants = cva('font-gilory-bold text-center md:text-left', {
  variants: {
    level: {
      1: 'mb-3 ml-[-5px] text-left text-[2.7rem] leading-[0.8] md:mb-5 md:text-8xl lg:mb-8 lg:text-9xl',
      2: 'mb-10 text-2xl md:mb-18 md:text-5xl',
      3: 'mb-2 text-2xl md:mb-3 md:text-3xl',
      4: 'mb-3 text-xl md:text-2xl',
    },

    white: {
      true: 'text-white/90',
    },

    footer: {
      true: 'text-left text-white/90 md:text-left',
    },
  },

  defaultVariants: {
    level: 1,
    white: false,
  },
});

/**
 * A React component that displays a heading with a variant style.
 *
 * @returns A React component that displays a heading with a variant style.
 */
function Heading({ level, white = false, footer, className, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag className={cn(HeadingVariants({ level, white, footer }), className)} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;
