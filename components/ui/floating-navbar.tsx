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
  useEffect(() => {
    console.log(theme);
  });
  const icon =
    theme === "dark" ? (
      <IconSun className="h-4 w-4 bg-dark-mode-primary" />
    ) : (
      <IconMoon className="h-4 w-4 bg-light-mode-primary" />
    );

  const { scrollYProgress, scrollXProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0 && scrollXProgress.get() > 0.25) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          // y: 0,
          opacity: visible ? 1 : 0,
          // opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-2xl dark:bg-dark-mode-secondary bg-light-mode-primary shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2  items-center justify-center space-x-8 px-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 transition ease-in-out duration-300 hover:scale-110 hover:bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:text-transparent hover:bg-clip-text dark:hover:bg-gradient-to-r dark:hover:text-transparent dark:hover:bg-clip-text"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm sm:block hidden">{navItem.name}</span>
          </Link>
        ))}
        <button
          className="border border-transparent px-2 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-light-mode-primary/[0.3] rounded-lg"
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
