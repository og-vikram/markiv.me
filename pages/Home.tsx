"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { IconArrowDown } from "@tabler/icons-react";
import { EB_Garamond } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const garamond = EB_Garamond({
  weight: ["600"],
  style: ["italic"],
  subsets: ["latin"],
});

const garamond_normal = EB_Garamond({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const words = [
  {
    text: "cd",
    className: "text-dark-mode-primary dark:text-light-mode-primary",
  },
  {
    text: "/home/vikram",
    className: "text-dark-mode-primary dark:text-light-mode-primary",
  },
];

const light_mode_gradient = "bg-gradient-to-r from-indigo-500 to-blue-500";
const dark_mode_gradient = "";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <div className="bg-light-mode-primary dark:bg-dark-mode-primary w-screen h-screen flex flex-col justify-center items-center max-h-screen text-dark-mode-primary dark:text-light-mode-primary">
        <div className="text-5xl md:text-6xl lg:text-8xl text-center">
          <p className="text-2xl md:text-4xl lg:text-5xl">
            hello! i&apos;m <br />
          </p>
          <p className="mt-6 bg-gradient-to-r from-fuchsia-500 to-pink-500 inline-block text-transparent bg-clip-text">
            <span className={garamond.className}>Vikram Sridhar</span>
          </p>
        </div>
        <div className="text-xl md:text-xl lg:text-3xl text-pretty text-center w-3/4 mt-12">
          <p>
            i&apos;m a{" "}
            <span
              className={`bg-gradient-to-r from-fuchsia-500 to-pink-500 inline-block text-transparent bg-clip-text`}
            >
              software engineer
            </span>{" "}
            who enjoys creating seamless and beautiful user experiences.
          </p>
        </div>
        <IconArrowDown
          style={{
            color: "fuchsia",
          }}
          className="h-10 w-10 mt-36 sticky animate-bounce "
        />
      </div>
      <ShootingStars />
      <StarsBackground />
    </motion.div>
  );
};

export default Home;
