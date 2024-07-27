"use client";
import SmoothScroll from "@/components/SmoothScroll";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Personal from "@/pages/Personal";
import Professional from "@/pages/Professional";
import dynamic from "next/dynamic";
import React from "react";

export default function Main() {
  const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

  return (
    <SmoothScroll>
      <Navbar />
      <Home />
      <About />
      <Professional />
      <Personal />
      <Contact />
    </SmoothScroll>
  );
}
