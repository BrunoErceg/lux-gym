import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Lux Gym - Vaša omiljena Teretana u Šibeniku",
  description: "Tvoja zona snage i energije",
  keywords: "Gym,Teratana,Šibenik,Fitnes,Trening,Privatni Trener",
  icons: {
    icon: "/favicon.ico", // Probajte prvo sa .ico
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
