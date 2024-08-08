import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

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
                url: 'https://raw.githubusercontent.com/gitdagray/my-blogposts/main/images/og-card.png',

                width: 1200,
                height: 630,
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
    <html lang="en">
      <body className={inter.className}>{children}
      <Toaster/>
      <SpeedInsights />
      <Analytics />
      </body>
    </html>
  );
}
