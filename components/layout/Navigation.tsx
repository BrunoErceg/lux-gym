'use client';
// React
import { useTranslations } from 'next-intl';

// Components
import Stack from '@layout/Stack';
import LangSwitcher from '@ui/LangSwitcher';
import Link from 'next/link';

const SECTIONS = ['gym', 'personalTrainer', 'gallery', 'priceList'];

/**
 * Navigation component which renders a navigation bar with links to different sections of the website.
 * It also includes a language switcher.
 * @returns  A JSX element representing the navigation bar.
 */
function Navigation() {
  const t = useTranslations('navigation');
  return (
    <nav className="container">
      <div className="flex items-center justify-between">
        {/* -- Logo -- */}
        <Link href="/" className="font-gilory-bold text-xl md:text-3xl">
          LUX GYM
        </Link>

        {/* -- Scroll Navigation -- */}
        <Stack gap="lg" className="hidden lg:flex">
          {SECTIONS.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="underline-animation relative text-xl"
            >
              {t(section)}
            </Link>
          ))}
        </Stack>

        {/* -- Language switcher -- */}
        <Stack>
          <LangSwitcher />
        </Stack>
      </div>
    </nav>
  );
}

export default Navigation;
