"use client";
import React from "react";
import { SkillsData } from "@/lib/data";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import SkillCard from "./SkillCard";

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
            <SkillCard data={data}/>
          </Fade>
        ))}
      </div>
    </div>
  );
}
