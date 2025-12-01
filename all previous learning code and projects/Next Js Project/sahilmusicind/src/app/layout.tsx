import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";
import favico from '@/Images/Icon.jpg'
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music Learning Ind",
  description: "Join us to learn and practice best music we have best music instructers to deal with you and they focused to teach best vibes and best practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Head>
        <link rel="icon" href={`${favico}`} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-600`}
      >
        <div className="flex items-center justify-center w-full relative ">
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
