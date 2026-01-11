// Libraries
import { motion } from 'framer-motion';

// Utils & Hooks
import useHashtagsList from '@/hooks/useHashtagsList';
import { cn } from '@/utils/cn';

// Components
import Section from '@layout/Section';

/**
 * Returns a Section component with two HashtagBanner components inside.
 *
 * @returns A Section component with two HashtagBanner components inside.
 */
function HashTags() {
  return (
    <Section className="pt-0 pb-20 md:pt-0 md:pb-15">
      <HashtagBanner className="relative z-10 w-[120%] translate-x-[-50px] translate-y-10 -rotate-12 md:translate-y-[50px] md:-rotate-12 lg:rotate-[-9deg]" />
      <HashtagBanner className="bg-dark rotate-1" />
    </Section>
  );
}

/**
 * A component that renders a moving banner with a list of hashtags.
 * The component uses the useHashtagsList hook to get a list of hashtags and then renders
 * a moving banner with the list of hashtags.
 *
 * @return  A JSX element representing the moving banner with a list of hashtags.
 */
const HashtagBanner = ({ className }: { className?: string }) => {
  const hashtags = useHashtagsList();

  return (
    <div className={cn('bg-primary flex transform overflow-hidden', className)}>
      <motion.ul
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        className="flex w-fit gap-5 py-4 pl-14 md:gap-14 md:py-6"
      >
        {[...hashtags, ...hashtags].map((hashtag, index) => {
          return (
            <li key={index}>
              <p className="text-white md:text-3xl">#{hashtag}</p>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default HashTags;
