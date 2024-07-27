"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { IconArrowDown } from "@tabler/icons-react";
import { EB_Garamond, Kalnia } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import localFont from "next/font/local";

const garamond = Kalnia({
  weight: ["500"],
  // style: ["italic"],
  subsets: ["latin"],
});

const classyVogue = localFont({
  src: "../public/fonts/Classyvogueregular.ttf",
});

const garamond_normal = EB_Garamond({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const words = [
  "building robust and scalable appplications",
  "creating seamless and beautiful user interfaces",
];

const light_mode_gradient = "bg-gradient-to-r from-indigo-500 to-blue-500";
const dark_mode_gradient = "";
const Home = () => {
  return (
    // <div className="relative">
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <div className="bg-light-mode-primary dark:bg-dark-mode-primary w-screen h-screen flex flex-col justify-center items-center max-h-screen text-dark-mode-primary dark:text-light-mode-primary z-5">
        <div className="text-5xl md:text-6xl lg:text-8xl text-center">
          <p className="text-2xl md:text-4xl lg:text-5xl">
            hello! i&apos;m <br />
          </p>
          <p className="mt-3 md:mt-6 bg-gradient-to-r from-fuchsia-500 to-pink-500 inline-block text-transparent bg-clip-text text-7xl md:text-8xl">
            <span className={`tracking-tighter ${classyVogue.className}`}>
              Vikram Sridhar
            </span>
          </p>
        </div>
        <div className="text-xl md:text-3xl lg:text-3xl text-pretty text-center w-3/4 mt-12">
          <p>
            i&apos;m a{" "}
            <span
              className={`bg-gradient-to-r from-fuchsia-500 to-pink-500 inline-block text-transparent bg-clip-text tracking-tighter ${classyVogue.className}`}
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
          className="h-10 w-10 mt-20 md:mt-36 sticky animate-bounce "
        />
      </div>
      <ShootingStars maxSpeed={1} minSpeed={1} trailColor="fuchsia" />
      <StarsBackground className="-z-5" />
    </motion.div>
    // </div>
  );
};

export default Home;
