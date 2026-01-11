import { cn } from '@utils/cn';
import { HTMLAttributes } from 'react';

type TextGroupProps = HTMLAttributes<HTMLDivElement> & {
  centered?: true | false;
};

function TextGroup({ centered = false, children, className }: TextGroupProps) {
  return <div className={cn(centered == true ? 'text-center' : '', className)}>{children}</div>;
}

export default TextGroup;
