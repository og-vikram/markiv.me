import GradientButton from "@/components/GradientButton";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandSpotify,
  IconBrandTwitter,
  IconBrandX,
  IconMail,
  IconWritingSign,
} from "@tabler/icons-react";
import React from "react";

const words = [
  {
    text: ">",
  },
  {
    text: "cat",
  },
  {
    text: " ",
  },
  {
    text: "about.text",
    className: "text-dark-mode-primary dark:text-light-mode-primary",
  },
];
const About = () => {
  return (
    <div
      className={`flex flex-col lg:flex-row justify-center bg-light-mode-primary dark:bg-dark-mode-primary`}
    >
      <div className="w-full lg:w-[70%] xl:w-[70%] flex flex-col items-center">
        <TypewriterEffect
          words={words}
          className=" text-xl md:text-3xl lg:text-4xl pt-10 md:pt-20 bg-text-mode-primary dark:text-light-mode-primary"
        />
        <p className="text-center w-11/12 md:w-10/12 text-lg md:text-2xl lg:text-3xl pt-10 lg:py-20 tracking-tight text-balance">
          I&apos;m a Software Engineer currently based out of the New York City
          Metropolitan Area. I&apos;m passionate about creating visually
          pleasing and unique experiences on top of robust and scalable systems.
          <br></br>
          <br></br>I recently graduated from{" "}
          <span className="text-[#CC0033]">Rutgers University</span> with a
          Bachelor&apos;s in Computer Science. Currently, I&apos;m very
          interested in the realm of human-technology interaction, in the form
          of Deep Learning and Large Language Models.
          {/* <span className="hidden"> */}
          <br />
          <br /> I&apos;ve been absolutely fascinated with computers since I was
          ~3. As a result, I have a wide range of interests in technology,
          encompassing both hardware and software. Whether it&apos;s building a
          custom mechanical keyboard or automating trivial parts of my life,
          I&apos;m always looking for new ways to grow.
          {/* </span> */}
        </p>
      </div>
      <div className="w-full lg:w-[30%] xl:w-[30%] flex flex-col space-y-4 lg:space-y-8 items-center justify-center py-8 lg:py-0">
        <GradientButton gradientClassName="bg-gradient-to-r from-fuchsia-500 to-pink-500">
          <IconWritingSign className="h-6 w-6 md:h-8 md:w-8 mr-4" />
          My résumé
        </GradientButton>
        <GradientButton gradientClassName="bg-[#0077B5]">
          <IconBrandLinkedin className="h-6 w-6 md:h-8 md:w-8 mr-4" />
          LinkedIn
        </GradientButton>
        <GradientButton gradientClassName="bg-[#08851b]">
          <IconMail className="h-6 w-6 md:h-8 md:w-8 mr-4" />
          Email
        </GradientButton>
        <GradientButton gradientClassName="bg-[#2b3137]">
          <IconBrandGithub className="h-6 w-6 md:h-8 md:w-8 mr-4" />
          GitHub
        </GradientButton>
        <GradientButton gradientClassName="bg-[#1DB954]">
          <IconBrandSpotify className="h-6 w-6 md:h-8 md:w-8 mr-4" />
          Spotify
        </GradientButton>
      </div>
    </div>
  );
};

export default About;
