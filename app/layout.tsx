import Layout from "@components/layout/Layout";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "react-h5-audio-player/lib/styles.css";
import "react-loading-skeleton/dist/skeleton.css";

import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const tiro = Noto_Sans_Bengali({
  weight: "400",
  subsets: ["bengali"],
  variable: "--font-tiro",
});

export const metadata: Metadata = {
  title: "Dua & Ruqyah | All Duas Collection",
  icons: {
    shortcut: "/icons/dua-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/dua-logo.svg" />
      </head>
      <body
        className={`${inter.variable} ${tiro.variable}`}
        suppressHydrationWarning
      >
        <NextTopLoader color="#16a34a" showSpinner={false} />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
