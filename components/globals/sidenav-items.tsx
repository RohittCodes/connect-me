"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SideNavItemsProps {
  logo: ReactNode;
  title: string;
  href: string;
}

const SideNavItems = ({ logo: Logo, title, href }: SideNavItemsProps) => {
  const pathname = usePathname();
  const basepath = pathname.split("/")[1];
  const isActive = basepath === href.split("/")[1];

  return (
    <div className="flex h-full w-full px-2 py-2">
      <Button
        variant="secondary"
        className={cn(
          "bg-background w-full h-12 px-4 items-center justify-center rounded-md",
          isActive && "bg-muted"
        )}
      >
        <Link className="flex items-center w-full h-full text-left" href={href}>
          {Logo}
          <span className="ml-2">{title}</span>
        </Link>
      </Button>
    </div>
  );
};

export default SideNavItems;
