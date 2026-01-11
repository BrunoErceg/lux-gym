import { useContext, useRef } from 'react';
import { cn } from '@utils/cn';
import { RefContext } from '@context/context';

type SectionProps = {
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  id?: string | any;
  children: React.ReactNode;
  className?: string;
};

function Section({ padding = 'md', id, className, children }: SectionProps) {
  const sectionRef = useRef(null);
  const refSections = useContext(RefContext);
  refSections[id] = sectionRef;

  const size = {
    none: 'py-0',
    xs: 'py-2 md:py-5',
    sm: 'py-8 md:py-10',
    md: 'py-15 md:py-20',
    lg: 'py-10 md:py-30',
    xl: 'py-25 md:py-40',
    xxl: 'py-30 md:py-50',
  };
  return (
    <section className={cn(size[padding], className)} ref={sectionRef} id={id}>
      {children}
    </section>
  );
}

export default Section;
