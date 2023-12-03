import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TCC",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      {/* <body className={inter.className}>{children}</body> */}
      <body className="font-noto flex flex-col items-center justify-between min-h-screen w-3/4 bg-gray-100">
        {children}
      </body>
    </html>
  );
}
