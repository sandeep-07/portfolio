"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Resume", href: "/resume" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <div className="flex gap-8">
      {links.map((link) => {
        return (
          <Link
            className={cn(
              "text-white",
              pathname === link.href && "text-accent border-b-2  border-accent "
            )}
            key={link.href}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
