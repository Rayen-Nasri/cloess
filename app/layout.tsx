import type { Metadata } from "next";
import { Aboreto } from "next/font/google";
import "./globals.css";

const aboreto = Aboreto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aboreto',
});

export const metadata: Metadata = {
  title: "CLOESS",
  description: "CLOESS - Your Online Shopping Destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={aboreto.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
