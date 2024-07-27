"use client";
import React from "react";
import ReactLenis, { Lenis } from "lenis/react";

const SmoothScroll = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
