"use client"

import React from "react";
import Image from "next/image";
import { ProjectsData } from "@/lib/data";
import { Fade } from "react-awesome-reveal"; // Importing directly for SSR support

export default function Projects() {
  return (
    <div id="projects" className="mt-8">
      <div className="text-center mb-4 font-bold text-2xl">
        Our Recent Projects
      </div>
      <div className="flex flex-col gap-8 mt-3">
        {ProjectsData.map((data, index) => (
          <div
            key={index}
            className={`mb-4 ${index % 2 === 0 ? "flex flex-row" : "flex flex-row-reverse"} justify-center gap-4`}
          >
            <Fade direction={index % 2 === 0 ? "right" : "left"} triggerOnce>
              <a href={data.url} target="_blank" className="block w-[26rem] h-[18rem] rounded-[1.5rem] overflow-hidden">
                <Image
                  src={data.banner}
                  width={500}
                  height={500}
                  alt=""
                  className="transform scale-98 transition-transform duration-300 hover:scale-100 object-cover w-full h-full"
                />
              </a>
            </Fade>
            <Fade direction={index % 2 === 0 ? "left" : "right"} triggerOnce>
              <div className="flex flex-col justify-around w-full">
                <div className="font-bold text-lg">
                  {data.title}
                </div>
                <div className="font-medium">
                  {data.des}
                </div>
                <div className="flex flex-row justify-around mt-4">
                  {data.usage.map((usageData, usageIndex) => (
                    <div
                      className="font-semibold"
                      key={usageIndex}
                    >
                      {usageData.title}
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}
