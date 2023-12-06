"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const getHash = () =>
  typeof window !== "undefined"
    ? decodeURIComponent(window.location.hash.replace("#", ""))
    : undefined;

const useHash = () => {
  const [hash, setHash] = useState(getHash());
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleHashChange = () => {
      setHash(getHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [router]);

  return isClient ? hash : null;
};

export default useHash;
