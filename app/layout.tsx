import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Shahzad Ahmad - Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies",
  keywords: [
    "Shahzad Ahmad",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Shahzad Ahmad" }],
  creator: "Shahzad Ahmad",
  openGraph: {
    title: "Shahzad Ahmad - Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
    url: "https://shahzadsportfolio.vercel.app/",
    siteName: "Shahzad Ahmad Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/124631079?s=400&u=9d174f8ab39805774cea363de04b35536c1c063d&v=4", // replace with your OG image path
        width: 1200,
        height: 630,
        alt: "Shahzad Ahmad Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzad Ahmad - Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
    images: ["https://x.com/shazcodes/photo"],
    creator: "@shazcodes", 
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#0A0A0A",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
