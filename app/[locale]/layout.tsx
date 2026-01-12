// Style
import '../globals.css';

// Icons
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Components
import Footer from '@layout/Footer';
import CookiesProvider from '@sections/CookiesProvider';

// Next
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const baseUrl = 'https://lux-gym.hr/';
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    icons: {
      icon: '/favicon.ico',
    },
    verification: {
      google: 'ZFU2Ig87LnpOnn7gOsOQeAmI8wU9eYNZ6K9zk1lO64A',
    },
    alternates: {
      canonical: locale === 'hr' ? baseUrl : `${baseUrl}/en`,
      languages: {
        'hr-HR': baseUrl,
        'en-US': `${baseUrl}/en`,
        'x-default': baseUrl,
      },
    },
  };
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <CookiesProvider>
            <main>{children}</main>
            <Footer />
          </CookiesProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
