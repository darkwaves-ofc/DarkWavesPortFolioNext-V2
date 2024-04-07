"use client";
import React, { useState, useEffect } from "react";
import { mainData } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { cn } from "@/lib/utils";

export default function MainContent() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }

    // Initial check and add event listener for resizing
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`main-content ${
        mobile
          ? "flex flex-col-reverse items-center"
          : "flex flex-row items-center justify-center"
      } h-[40rem]`}
    >
      <Fade
        cascade
        direction="left"
        className={cn(mobile ? "w-full mb-5" : "w-1/2")}
        triggerOnce
      >
        <div className="details__section w-full">
          <h1 className="title text-3xl font-extrabold text-center">
            {mainData.title}
          </h1>
          <p className="description mt-2 font-semibold">{mainData.description}</p>
          <div className="contact__icon flex flex-row justify-around w-full mt-3 text-dark">
            {mainData.social_media.map((e, index) => (
              <a href={e.link} title={e.name} key={index} className="text-md">
                <FontAwesomeIcon icon={e.icon} />
              </a>
            ))}
          </div>
        </div>
      </Fade>
      <Fade
        direction={mobile ? "up" : "right"}
        className={cn(mobile ? " w-full" : "w-1/2")}
        triggerOnce
      >
        <div
          className={`logo__section relative rounded-[30%] ${
            !mobile ? "flex flex-col items-center justify-center h-full" : ""
          }`}
        >
          <Image
            src={mainData.logo}
            alt="Dark Waves Owner"
            width={300}
            height={450}
            className={`bg-[var(--color-dark-white)] m-auto object-cover animate-cropCircle ${
              mobile ? "w-10/12" : "w-full"
            }`}
          />
        </div>
      </Fade>
    </div>
  );
}
