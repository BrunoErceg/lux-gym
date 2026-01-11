// Next
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

// Images
import background from '@images/teretana-privatni-trening.jpg';

// Components
import OutlineText from '@/components/ui/OutlineText';
import Heading from '@/components/ui/Heading';

export const metadata: Metadata = {
  title: '404 - Page not found',
  description: 'Page not found',
};

function NotFound() {
  return (
    <div className="text-light relative flex h-screen w-auto items-center justify-center">
      <Image alt="" src={background} fill sizes="90vw" className="relative z-[-1] object-cover" />
      <div className="container">
        <Heading level={1} className="mb-4 text-center text-9xl md:text-center">
          <OutlineText>404</OutlineText>
        </Heading>
        <Heading level={3} className="md:text-center">
          Page not found
        </Heading>
        <Link href="/" className="underline-animation mx-auto block w-fit text-center text-xl">
          Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
