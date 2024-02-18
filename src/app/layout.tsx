import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import MenuIcons from "@/app/menuIcons";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jackson Lawrence's Porfolio",
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
          <div className="bg-gradient-to-b from-bkg1 to-bkg2">
            {children}
          </div>
        </MenuIcons>
      </body>
    </html>
  );
}
