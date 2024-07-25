"use client";
import Navbar from "@/components/Navbar";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Home from "@/pages/Home";
import { Rosarivo } from "next/font/google";
import React from "react";

export default function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="bg-blue w-full h-screen"></div>
      <div className="bg-red-600 w-full h-screen"></div>
    </>
  );
}
