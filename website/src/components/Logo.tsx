import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="text-xl font-bold text-white pl-3">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          className="rounded-full"
          width={30}
          height={30}
        />
        <p>
          know
          <span className="italic -m-0.5">age</span>
        </p>
      </Link>
    </div>
  );
}
