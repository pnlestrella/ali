import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingHearts from "@/components/FloatingHearts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YANGSILOG",
  description: "A special Valentine's Day message created with love for YANG",
  icons: {
    icon: [
      { url: "/photos/heart.png" },
      { url: "/photos/heart.png", sizes: "16x16", type: "image/png" },
      { url: "/photos/heart.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/photos/heart.png",
    apple: "/photos/heart.png",
  },
  openGraph: {
    title: "YANGSILOG",
    description: "A special Valentine's Day message",
  },
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
        <FloatingHearts />
        {children}
      </body>
    </html>
  );
}
