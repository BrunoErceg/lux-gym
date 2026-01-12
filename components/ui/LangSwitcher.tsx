import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Link, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

/**
 * A React component that renders a link to switch between locales.
 * It uses the useLocale and usePathname hooks from next-intl to get the current locale and pathname.
 * The component renders a link with the text 'English' or 'Hrvatski' depending on the current locale.
 * The link will switch to the other locale when clicked.
 * @returns A React component that renders a link to switch between locales.
 */
function LangSwitcher() {
  const local = useLocale();
  const pathname = usePathname();
  return (
    <Link
      href={pathname}
      className="underline-animation text-lg"
      locale={local === 'hr' ? 'en' : 'hr'}
    >
      {local === 'hr' ? 'English' : 'Hrvatski'}
      <FontAwesomeIcon icon={faLanguage} className="ml-2" />
    </Link>
  );
}

export default LangSwitcher;
