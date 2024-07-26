"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Rosarivo } from "next/font/google";
import React from "react";

const rosarivo = Rosarivo({
  weight: ["400"],
  style: ["italic"],
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
const Home = () => {
  return (
    <div className="bg-light-mode-primary dark:bg-dark-mode-primary w-full h-screen flex flex-col justify-center items-center max-h-screen text-dark-mode-primary dark:text-light-mode-primary">
      {/* <TypewriterEffect words={words} className="" /> */}
      <div className="text-3xl md:text-4xl lg:text-6xl text-center">
        <p className="text-xl md:text-2xl lg:text-3xl">
          hello! i&apos;m <br />
        </p>
        <p className="mt-6 md:mt-8 lg:mt-10 max-sm:text-5xl">
          <span className={rosarivo.className}>Vikram Sridhar</span>.
        </p>
      </div>
      <div className="text-lg md:text-xl lg:text-3xl text-pretty text-center w-3/4 mt-12">
        <p>
          i&apos;m a software engineer who enjoys creating seamless and
          beautiful user experiences.
        </p>
      </div>
    </div>
  );
};

export default Home;
