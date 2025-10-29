import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AppKit } from "../context/appkit";
import { Providers } from "../components/Providers"; // new file

const inter = Inter({ subsets: ["latin"] });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <Providers>
          <AppKit>
            <Header />
            <main className="grow container mx-auto p-4 sm:p-6 lg:p-16">
              {children}
            </main>
            <Footer />
          </AppKit>
        </Providers>
      </body>
    </html>
  );
}
