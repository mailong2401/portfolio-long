import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/common/Header'
import { Unica_One } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: 'Long Dev',
  description: 'Vietnam Green Production & Consumption Intelligence Platform',
}

const unicaOne = Unica_One({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${unicaOne.className} `}>
        <Providers>
          <Header />
          <main className="min-h-screen pt-24">
            {children}
          </main>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}
