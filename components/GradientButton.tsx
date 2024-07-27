import React from "react";

const GradientButton = ({
  children,
  className,
  gradientClassName,
}: {
  children: React.ReactNode;
  className?: string;
  gradientClassName?: string;
}) => {
  return (
    <button className="p-[3px] relative">
      <div className={`absolute inset-0 rounded-xl ${gradientClassName}`} />
      <div
        className={`px-8 py-2 text-md md:text-lg lg:text-xl bg-dark-mode-primary dark:bg-light-mode-primary rounded-xl relative group transition duration-300 text-light-mode-primary dark:text-dark-mode-primary hover:bg-transparent dark:hover:bg-transparent dark:hover:text-light-mode-primary flex justify-center ${className}`}
      >
        {children}
      </div>
    </button>
  );
};

export default GradientButton;
