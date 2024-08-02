import GradientButton from "@/components/GradientButton";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
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
    text: "professional.text",
    className: "text-dark-mode-primary dark:text-light-mode-primary",
  },
];

const Professional = () => {
  return (
    <div className="flex flex-col w-full bg-light-mode-primary dark:bg-dark-mode-primary text-dark-mode-primary dark:text-light-mode-primary">
      <TypewriterEffect
        words={words}
        className="text-xl md:text-3xl lg:text-4xl py-10 text-dark-mode-primary dark:text-light-mode-primary bg-light-mode-primary dark:bg-dark-mode-primary"
      />
      <div className={`flex flex-col lg:flex-row justify-center`}>
        <div className="w-full xl:w-1/2 flex flex-col items-center py-4 md:py-12">
          <div className="flex flex-col items-center justify-center">
            <div className="w-[90%] md:w-3/4">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-8">
                Experience
              </h1>
              <h2 className="text-xl md:text-3xl lg:text-4xl mb-2 md:mb-4">
                Rudolph Research Analytical
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-2 md:mb-4">
                Software Engineering Intern <br></br>{" "}
                <span className="text-md md:text-lg lg:text-xl">
                  June 2021 - August 2021
                </span>
              </p>
              <div className="text-md md:text-lg lg:text-xl pb-12">
                <ul>
                  <li className="py-2">
                    • Led an operation to transform Android tablets into
                    companion devices bundled with pharmaceutical instruments.
                  </li>
                  <li className="py-2">
                    • Designed scripts to efficiently analyze extensive 15+ year
                    document archives, transforming data into usable format.
                  </li>
                  <li className="py-2">
                    • Created a user-intuitive Excel template using various
                    macros in order to streamline manual data entry processes.
                  </li>
                </ul>
              </div>
              <h2 className="text-xl md:text-3xl lg:text-4xl mb-2 md:mb-4">
                Rudolph Research Analytical
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-2 md:mb-4">
                Quality Assurance Intern <br></br>
                <span className="text-md md:text-lg lg:text-xl">
                  July 2020 - September 2020
                </span>
              </p>
              <div className="text-md md:text-lg lg:text-xl">
                <ul>
                  <li className="py-2">
                    • Oversaw testing of multiple GUI language translations,
                    ensuring a smooth transition to clients in 12 countries.
                  </li>
                  <li className="py-2">
                    • Automated routine testing of quartz control plates,
                    speeding up the process by 50% while minimizing human input.
                  </li>
                  <li className="py-2">
                    • Digitized 10 years worth of archived quality assurance
                    data, allowing for extensive analysis.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/2 flex flex-col space-y-12 lg:space-y-24 py-4 md:py-12">
          {/* Education section */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-[90%] md:w-3/4">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-8">
                Education
              </h1>
              <h2 className="text-xl md:text-3xl lg:text-4xl mb-2 md:mb-4">
                Rutgers University
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-2 md:mb-4">
                B.S. in Computer Science <br></br>{" "}
                <span className="text-md md:text-lg lg:text-xl">
                  September 2020 - May 2024
                </span>
              </p>
              <p className="text-md md:text-lg lg:text-xl">
                <span className="font-semibold">Honors: </span>
                Dean&apos;s List (2022-2024)
              </p>
              <p className="text-md md:text-lg lg:text-xl">
                <span className="font-semibold">Relevant Courses: </span>
                Software Engineering, Introduction to Artificial Intelligence,
                Systems Programming
              </p>
            </div>
          </div>
          {/* Tools I use section */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-[90%] md:w-3/4">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-8">
                Activities{" "}
              </h1>
              <h2 className="text-xl md:text-3xl lg:text-4xl mb-2 md:mb-4">
                Alpha Phi Omega Service Fraternity
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-2 md:mb-4">
                Website Administrator<br></br>
                <span className="text-md md:text-lg lg:text-xl">
                  September 2023 - January 2024
                </span>
              </p>
              <div className="text-md md:text-lg lg:text-xl">
                <ul>
                  <li className="py-2">
                    • Effectively managed and maintained the fraternity’s
                    website, ensuring a consistent online presence.
                  </li>
                  <li className="py-2">
                    • Continuously enhanced and updated the website,
                    incorporating new content and features as required.
                  </li>
                  <li className="py-2">
                    • Increased website engagement by 20%, resulting in a higher
                    rush event attendance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
