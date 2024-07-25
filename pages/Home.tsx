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
    <div className="bg-light-mode-primary dark:bg-dark-mode-primary w-full h-screen flex flex-col justify-center items-center max-h-screen">
      {/* <TypewriterEffect words={words} className="" / */}
      <div className="text-2xl">
        <p>
          Hello! I&apos;m{" "}
          <span className={rosarivo.className}>Vikram Sridhar</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
