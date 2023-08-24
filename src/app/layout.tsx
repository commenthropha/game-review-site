import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavbarServer } from "./(global)";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Game Review Site",
  description:
    "A game review site reviewing a plethora of video games based on what you - the community - has to say about them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarServer />
        {children}
      </body>
    </html>
  );
}
