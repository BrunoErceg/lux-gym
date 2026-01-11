import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const typographyVariants = cva('', {
  variants: {
    variant: {
      subheading: 'text-md text-left md:text-xl',
      support: 'mb-2 text-sm tracking-widest md:mb-4 md:text-base',
      body: 'text-light-dark',
      price: 'text-primary absolute right-0 text-2xl',
      footer: '',
      copyright: 'text-center text-sm',
    },
    white: {
      true: 'text-white/80',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type TypographyProps = VariantProps<typeof typographyVariants> &
  HTMLAttributes<HTMLParagraphElement> & {
    centered?: boolean;
    className?: string;
    children: ReactNode;
  };

/**
 * A React component that displays a paragraph of text with the given variant style.
 * The component is used to display descriptions of skills or projects.
 *
 * @returns A React component that displays a paragraph of text with the given variant style.
 */
function Typography({ variant, white, className, children, ...props }: TypographyProps) {
  return (
    <p className={cn(typographyVariants({ variant, white }), className)} {...props}>
      {children}
    </p>
  );
}

export default Typography;
