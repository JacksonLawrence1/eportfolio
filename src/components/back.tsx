"use client";

import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();

  return (
    <button className="button" onClick={router.back}>
      Back
    </button>
  );
};

export default Back;
