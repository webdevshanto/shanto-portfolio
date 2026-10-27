import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import LenisProvider from "./LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://nayeemdev-portfolio.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shanto | Full-Stack Developer",
    template: "%s | Shanto",
  },
  description: "Portfolio of Shanto, a Full-Stack Developer specializing in modern web applications, landing pages, and responsive digital experiences.",
  keywords: [
    "Shanto",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Bangladesh",
    "Portfolio",
    "Tailwind CSS Developer",
  ],
  authors: [{ name: "Shanto" }],
  creator: "Shanto",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Shanto | Full-Stack Developer",
    description: "Portfolio of Shanto, a Full-Stack Developer specializing in modern web applications, landing pages, and responsive digital experiences.",
    url: siteUrl,
    siteName: "Shanto.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanto | Full-Stack Developer",
    description: "Portfolio of Shanto, a Full-Stack Developer specializing in modern web applications, landing pages, and responsive digital experiences.",
    creator: "@shanto",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D2426",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}