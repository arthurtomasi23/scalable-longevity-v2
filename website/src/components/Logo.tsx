import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();
  const [atTop, setAtTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const textColor = isHome
    ? atTop
      ? "text-white"
      : "text-black"
    : "text-black";

  return (
    <div className={`text-xl font-bold ${textColor}`}>
      <Link href="/" className="flex items-center gap-2">
        SCALABLE
        <Image
          src="/logo.png"
          alt="Logo"
          className="rounded-full"
          width={35}
          height={35}
        />
        LONGEVITY
      </Link>
    </div>
  );
}
