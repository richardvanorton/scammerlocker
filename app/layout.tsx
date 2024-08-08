import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import PlausibleProvider from 'next-plausible'


export const metadata: Metadata = {
  title: "Scammerlocker",
  description: "Open-source tool to (legally) take down scam domains",
    openGraph: {
        title: "Scammerlocker",
        description: "Open-source tool to (legally) take down scam domains",
        url: 'https://scammerlocker.vercel.app/',
        siteName: "Scammerlocker v1",
        type: 'website',
        images: [
            {
                url: '/opengraph-image.png',
                alt: 'Preview image for Scammerlocker',
            }
        ]
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <PlausibleProvider domain="scammerlocker.vercel.app">
    <html lang="en">
      <body className={inter.className}>{children}
      <Toaster/>
      <SpeedInsights />
      <Analytics />
      </body>
    </html>
      </PlausibleProvider>
  );
}
