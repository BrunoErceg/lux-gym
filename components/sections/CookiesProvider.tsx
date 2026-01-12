'use client';
import { CookieManager } from 'react-cookie-manager';
import { useTranslations } from 'next-intl';
function CookiesProvider({ children }: { children: React.ReactNode }) {
  const t = useTranslations('cookies');
  return (
    <CookieManager
      cookieKitId="68f0e4971bbc36d40feb9dfe"
      classNames={{
        popupTitle: 'text-xl font-gilory-bold text-dark',
        popupMessage: 'text-sm font-gilory text-gray-700',
        acceptButton: 'cookie-button red',
        declineButton: 'cookie-button',
      }}
      translations={{
        title: t('title'),
        message: t('description'),
        buttonText: t('accept'),
        declineButtonText: t('reject'),
      }}
      showManageButton={false}
      displayType="popup"
    >
      {children}
    </CookieManager>
  );
}

export default CookiesProvider;
