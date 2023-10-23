import Link from "next/link";
import { IoIosBuild } from "react-icons/io";

const Home = () => (
  <div className="flex flex-col justify-center items-center h-screen pb-16 gap-16">
    <div className="flex justify-center items-center gap-8 pr-16">
      <div className="relative flex h-48 w-48 bg-primary rounded-full items-center justify-center">
        <IoIosBuild className="h-36 w-36" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl">Hi,</h1>
        <h1 className="text-6xl text-secondary whitespace-nowrap">{"I'm Jackson!"}</h1>
        <h1 className="text-4xl">Software Engineer & Game Dev</h1>
      </div>
    </div>
    <div className="flex gap-8">
    <Link href="/about">
        <button className="button">About Me</button>
      </Link>

      <Link href="/projects">
        <button className="button">Projects</button>
      </Link>

      <Link
        href="https://github.com/JacksonLawrence1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button">GitHub</button>
      </Link>

      <Link href="/contact">
        <button className="button">Contact</button>
      </Link>

    </div>
  </div>
);

export default Home;
