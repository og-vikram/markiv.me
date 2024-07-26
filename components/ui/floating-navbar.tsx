"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { theme, setTheme } = useTheme();
  const icon =
    theme === "dark" ? (
      <IconSun className="h-4 w-4 bg-dark-mode-primary" />
    ) : (
      <IconMoon className="h-4 w-4 bg-light-mode-primary" />
    );
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          //   y: visible ? 0 : -100,
          y: 0,
          //   opacity: visible ? 1 : 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-2xl dark:bg-black-100 bg-light-mode-primary shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2  items-center justify-center space-x-8 px-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm sm:block hidden">{navItem.name}</span>
          </Link>
        ))}
        <button
          className="border-2 px-2 py-2 border-dark-mode-primary dark:border-light-mode-primary rounded-lg"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {icon}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
