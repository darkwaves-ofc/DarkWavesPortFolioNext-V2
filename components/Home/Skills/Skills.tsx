
"use client"
import React from "react";
import { SkillsData } from "@/lib/data";
import { Fade } from 'react-awesome-reveal';
import Image from "next/image";

export default function Skills() {
  return (
    <div className="flex flex-col items-center my-8 mx-auto w-full">
      <Fade direction="down">
        <div className="mb-4 text-center">
          <div className="text-2xl font-bold">
            My Own Skills With Programming
          </div>
        </div>
      </Fade>
      <div className="w-full">
        {SkillsData.map((data, index) => (
          <Fade key={index} direction={index % 2 === 0 ? "left" : "right"}>
            <div className="flex flex-col justify-between my-4">
              <div className="font-lg font-semibold my-4">
                {data.title}
              </div>
              <div className="flex flex-row justify-evenly w-full">
                {data.content.map((item, itemIndex) => (
                  <Fade key={itemIndex} direction={itemIndex % 2 === 0 ? "right" : "left"}>
                    <div className="flex flex-row items-center">
                      <div className="flex-shrink-0">
                        <Image
                          width={50}
                          height={50}
                          src={item.logo}
                          alt={item.title}
                          className="object-cover"
                        />
                      </div>
                      <div className="m-2 text-md font-semibold">
                        {item.title}
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
