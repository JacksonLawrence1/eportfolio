import Link from "next/link";
import "./landing.css";

export default function Menu() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link href="/home">
        <h1 className="menu-text-hover animate-pulse text-9xl">Start</h1>
      </Link>
    </div>
  );
}
