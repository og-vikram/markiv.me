import {
  IconHome,
  IconMessage,
  IconPaperclip,
  IconPencil,
  IconPlant2,
  IconUser,
  IconWriting,
} from "@tabler/icons-react";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

const Navbar = () => {
  const navItems = [
    {
      name: "home",
      link: "/",
      icon: (
        <IconHome className="h-4 w-4 text-dark-mode-primary dark:text-white" />
      ),
    },
    {
      name: "about",
      link: "/about",
      icon: (
        <IconUser className="h-4 w-4 text-dark-mode-primary dark:text-white" />
      ),
    },
    {
      name: "professional",
      link: "/professional",
      icon: (
        <IconPaperclip className="h-4 w-4 text-dark-mode-primary dark:text-white" />
      ),
    },
    {
      name: "personal",
      link: "/personal",
      icon: (
        <IconPlant2 className="h-4 w-4 text-dark-mode-primary dark:text-white" />
      ),
    },
    {
      name: "contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-dark-mode-primary dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
