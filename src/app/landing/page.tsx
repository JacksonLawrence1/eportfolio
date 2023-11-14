import Link from "next/link";
import "./landing.css";

import { Varta } from "next/font/google";

const cinzel = Varta({subsets: ['latin']});

export default function Menu() {
  return (
    <div className={`${cinzel.className} flex flex-col justify-center items-center h-screen gap-4`}>
      <Link href="/home">
        <h1 className="menu-text-hover animate-pulse text-7xl">START</h1>
      </Link>
    </div>
  );
}
