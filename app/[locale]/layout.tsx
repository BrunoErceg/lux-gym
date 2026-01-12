import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/layout/Footer';
import CookiesProvider from '@/components/sections/CookiesProvider';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Lux Gym - Vaša omiljena Teretana u Šibeniku',
  description: 'Tvoja zona snage i energije',
  keywords: 'Gym,Teratana,Šibenik,Fitnes,Trening,Privatni Trener',
  icons: {
    icon: '/favicon.ico',
  },
};
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
  // Dohvati poruke na serveru
  return (
    <html lang={locale}>
      <body className={`antialiased`}>
        <NextIntlClientProvider>
          <CookiesProvider>
            <main>{children}</main>
            <Footer />
          </CookiesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
