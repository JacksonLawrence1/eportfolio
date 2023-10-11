import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";

import MenuIcons from "@/icons/menuIcons";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eportfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Jackson Lawrence</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>
        <MenuIcons>
          {children}
        </MenuIcons>
      </body>
    </html>
  );
}
