"use client";

import { useRouter } from "next/navigation";

const Construction = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-5xl">🚧 Under Construction 🚧</h1>
      <button className="button" onClick={router.back}>Back</button>
    </div>
  );
};

export default Construction;
