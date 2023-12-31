'use client'

import { useRouter } from "next/navigation";
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/landing");
  }, [router]);

  return (
    <div className="flex h-screen w-screen"></div>
  );
}
