"use client";
import Navbar from "@/components/Navbar";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <DummyContent />;
    </>
  );
}

const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-[400rem] w-full bg-white  relative border border-neutral-200 dark:border-white/[0.2] rounded-md dark:bg-black-100 ">
      <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
        Scroll back up to reveal Navbar
      </p>
      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
    </div>
  );
};
