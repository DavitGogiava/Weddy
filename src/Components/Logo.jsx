"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <Image
      src="/Images/Logo.png" // Route of the image file
      fill
      sizes="100%"
      alt="Logo"
      onClick={() => router.push("/")}
    />
  );
}
