"use client";
import React, { useState, useEffect } from "react";
import { mainData } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { cn } from "@/lib/utils";

export default function MainContent() {
  return (
    <div
      className={
        "main-content flex items-center flex-col-reverse md:flex-row  md:justify-center h-[40rem]"
      }
    >
      <div className="w-full mb-5 md:w-1/2 md:mb:0">
        <div className="details__section w-full">
          <h1 className="title text-3xl font-extrabold text-center">
            {mainData.title}
          </h1>
          <p className="description mt-2 font-semibold">
            {mainData.description}
          </p>
          <div className="contact__icon flex flex-row justify-around w-full mt-3 text-dark">
            {mainData.social_media.map((e, index) => (
              <a href={e.link} title={e.name} key={index} className="text-md">
                <FontAwesomeIcon icon={e.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pt-0 pt-5 md:mb-40">
        <div
          className="logo__section relative rounded-[30%] md:flex md:flex-col md:items-center md:justify-center md:h-full"
        >
          <Image
            src={mainData.logo}
            alt="Dark Waves Owner"
            width={300}
            height={300}
            className="bg-[var(--color-dark-white)] m-auto object-cover animate-cropCircle w-10/12 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
