"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/analiza");
  }, []);

  return <></>;
}

export default Page;
