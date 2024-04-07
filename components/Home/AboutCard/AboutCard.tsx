"use client"

import React from "react";
import { mainData } from "@/lib/data";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function AboutCard() {
  return (
    <div className="main__about_content grid gap-5 mx-auto">
      <Fade direction="left">
        <div className="relative">
          <Image
            src={mainData.aboutPic}
            alt="About Dark Waves"
            className="about__image rounded-lg"
            width={500}
            height={250}
          />
          <Image
            src={mainData.siteLogo}
            width={100}
            height={100}
            alt="Dark Waves Official Logo"
            className="about__sub_logo absolute w-30 rounded-full right-0 bottom-0 border-3 border-light"
          />
        </div>
      </Fade>
      <Fade direction="right">
        <div className="content__container">
          <span className="title__intro text-primary font-bold">About Us</span>
          <h2 className="mb-2">{mainData.aboutTitle}</h2>
          <span>{mainData.about}</span>
        </div>
      </Fade>
    </div>
  );
}
