import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

import { headers } from "next/headers"; // added
import ContextProvider from "@/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buchkie",
  description: "Your web3 journal",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get("cookie");

  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col text-white  ${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased dark:bg-black`}
      >
        <ContextProvider cookies={cookies}>
          <Header />
          <main className="grow container mx-auto p-4 sm:p-6 lg:p-16">
            {children}
          </main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
