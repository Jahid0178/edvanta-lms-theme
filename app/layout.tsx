import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import "swiper/css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Edvanta – Modern LMS & Online Education Platform Template built with Next.js",
  description:
    "Edvanta is a modern LMS & online education template built with Next.js, perfect for courses, e-learning platforms, and educational startups.",
  keywords: [
    "lms",
    "learning management system",
    "education",
    "online course",
    "nextjs",
    "react",
    "dashboard",
    "e-learning",
    "admin panel",
    "school",
    "university",
    "training",
    "saas",
    "edtech",
  ],
  authors: [
    {
      name: "StackStudio",
      url: "https://themeforest.net/user/stackstudiotech",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
