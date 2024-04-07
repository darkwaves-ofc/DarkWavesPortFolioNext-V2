import React from "react";
// import "./Home.css";
import MainContent from "../../components/Home/MainContent/MainContent";
import AboutCard from "../../components/Home/AboutCard/AboutCard";
import Projects from "../../components/Home/Projects/Projects";
import Skills from "../../components/Home/Skills/Skills";
import Contact from "../../components/Home/Contact/Contact";

export default function Home() {
  return (
    <div
      className="flex flex-col m-auto"
      style={{ width: "clamp(min(13vw, 27rem), 90%, max(29vw, 57rem))" }}
    >
      <MainContent />
      <AboutCard />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
