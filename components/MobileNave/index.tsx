"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Resume", href: "/resume" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        {" "}
        <Menu className="text-[32px] text-accent" />{" "}
      </SheetTrigger>
      <SheetContent className="bg-primary flex flex-col justify-center gap-8 items-center">
        {links.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-white w-fit text-xl capitalize hover:text-accent transition-all",
                pathname === link.href &&
                  "text-accent border-b-2  border-accent "
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
