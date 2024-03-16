import {
  LucideImages,
  LucideHome,
  LucideRss,
  LucideBookmark,
  LucideHeart,
} from "lucide-react";
import SideNavItems, { SideNavItemsMobile } from "./sidenav-items";

const SideNavbar = () => {
  const navItems = [
    {
      title: "Home",
      ref: "/",
      icon: LucideHome,
    },
    {
      title: "Images",
      ref: "/images",
      icon: LucideImages,
    },
    {
      title: "Posts",
      ref: "/posts",
      icon: LucideRss,
    },
    {
      title: "Saved",
      ref: "/saved",
      icon: LucideBookmark,
    },
    {
      title: "Liked",
      ref: "/liked",
      icon: LucideHeart,
    },
  ];

  return (
    <div className="hidden md:flex flex-col w-56 h-[calc(100vh-64px)] bg-background border-r-2 fixed">
      <div className="flex flex-col items-start justify-start">
        {navItems.map((item, index) => (
          <SideNavItems
            key={index}
            title={item.title}
            href={item.ref}
            logo={<item.icon size="24" />}
          />
        ))}
      </div>
    </div>
  );
};

export const SideNavbarMobile = () => {
  const navItems = [
    {
      title: "Home",
      ref: "/",
      icon: LucideHome,
    },
    {
      title: "Images",
      ref: "/images",
      icon: LucideImages,
    },
    {
      title: "Posts",
      ref: "/posts",
      icon: LucideRss,
    },
    {
      title: "Saved",
      ref: "/saved",
      icon: LucideBookmark,
    },
    {
      title: "Liked",
      ref: "/liked",
      icon: LucideHeart,
    },
  ];

  return (
    <div className="flex md:hidden bottom-0 fixed w-full h-16 bg-background border-t-2">
      <div className="flex w-full items-start justify-between">
        {navItems.map((item, index) => (
          <SideNavItemsMobile
            key={index}
            href={item.ref}
            logo={<item.icon size="24" />}
          />
        ))}
      </div>
    </div>
  );
};

export default SideNavbar;
