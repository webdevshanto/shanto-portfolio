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
    default: "Nayeem | Front-End Developer",
    template: "%s | Nayeem",
  },
  description: "Portfolio of Nayeem, a Front-End Developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Passionate about building modern, responsive, and high-performance web applications.",
  keywords: [
    "Nayeem",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Bangladesh",
    "Portfolio",
    "Tailwind CSS Developer",
  ],
  authors: [{ name: "Nayeem" }],
  creator: "Nayeem",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Nayeem | Front-End Developer",
    description: "Portfolio of Nayeem, a Front-End Developer specializing in React, Next.js, TypeScript, and Tailwind CSS.",
    url: siteUrl,
    siteName: "Nayeem.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nayeem | Front-End Developer",
    description: "Portfolio of Nayeem, a Front-End Developer specializing in React, Next.js, TypeScript, and Tailwind CSS.",
    creator: "@developernayeem",
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