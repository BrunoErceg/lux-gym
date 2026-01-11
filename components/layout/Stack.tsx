import { cn } from '@utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

type StackProps = VariantProps<typeof stackVariants> & HTMLAttributes<HTMLDivElement>;

const stackVariants = cva('flex', {
  variants: {
    gap: {
      none: '',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-8',
    },
    direction: {
      col: 'flex-col',
      row: 'flex-row items-center',
    },
  },
  defaultVariants: {
    gap: 'md',
    direction: 'row',
  },
});

/**
 * A React component that displays a stack of elements with a variant style.
 * The component is used to layout pages and sections.
 *
 * @returns - The JSX element of the component.
 */
function Stack({ direction, gap, className, children, ...props }: StackProps) {
  return (
    <div className={cn(stackVariants({ gap, direction }), className)} {...props}>
      {children}
    </div>
  );
}

export default Stack;
