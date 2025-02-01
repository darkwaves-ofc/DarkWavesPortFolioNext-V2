import {
  faDiscord,
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export const navLinks: { title: string; path: string }[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
  { title: "Contact", path: "#contact" },
  { title: "Projects", path: "#projects" },
];

export const footerLinks: {
  link: string;
  icon: IconDefinition;
  name: string;
}[] = [
  { link: "#", icon: faFacebookF, name: "Facebook" },
  { link: "#", icon: faTwitter, name: "Twitter" },
  { link: "#", icon: faInstagram, name: "Instagram" },
  { link: "#", icon: faLinkedinIn, name: "LinkedIn" },
];

export const footerNavLinks: { path: string; title: string }[] = [
  { title: "About us", path: "#" },
  { title: "Our services", path: "#" },
  { title: "Privacy policy", path: "#" },
  { title: "Hire Us", path: "#" },
];

import WavesPNG from "@/public/Waves.png";
import DarkWavesOwnerPNG from "@/public/home/DarkWavesOwner.png";
import MainAboutPicJPG from "@/public/home/MainAboutPic.jpg";

export const mainData = {
  siteLogo: WavesPNG,
  SiteName: "Dark Waves",
  title: "DarkWaves DevLab: Crafting Digital Marvels",
  description:
    "Step into DarkWaves DevLab, where digital marvels are brought to life! At DevLab, we are a collective of creative minds and technical wizards dedicated to pushing the boundaries of programming and development.",
  logo: DarkWavesOwnerPNG,
  social_media: [
    { name: "youtube", icon: faYoutube, link: "#" },
    { name: "github", icon: faGithub, link: "#" },
    { name: "facebook", icon: faFacebookF, link: "#" },
    { name: "discord", icon: faDiscord, link: "#" },
  ],
  aboutTitle: "Pioneering Digital Excellence",
  about:
    "DarkWaves is a dynamic organization driven by digital innovation. We specialize in web development, software engineering, and design, crafting solutions that empower businesses and individuals through technology. With innovation at our core, we're committed to creating a brighter future. Join us on this journey of digital excellence.",
  usage: [{ title: "React" }, { title: "CSS" }, { title: "JS" }],
  aboutPic: MainAboutPicJPG,
};
import SkillSwap from "@/public/projects/SkillSwap.png";
import Braindance from "@/public/projects/braindance.png";
import NoError from "@/public/projects/Noerror.png";

export const ProjectsData = [
  {
    title: "Braindance",
    banner: Braindance,
    des: "This is a discord music bot. This project contains A web base dashboard for controll the discord bot. In this you can get better experience with a music bot.",
    usage: [{ title: "React" }, { title: "CSS" }, { title: "JS" }],
    url: "https://braindance.gg",
  },
  {
    title: "NoError",
    banner: NoError,
    des: "NoError Studios is a community dedicated to coding and development enthusiasts. Whether you're a beginner or an experienced developer, you'll find a welcoming environment to learn, collaborate, and share your knowledge.",
    usage: [{ title: "React" }, { title: "CSS" }, { title: "JS" }],
    url: "https://noerror.studio/",
  },
  {
    title: "SkillSwap",
    banner: SkillSwap,
    des: "With SkillSwap you can improve your knowledge with others. You can participate events and win then you can get prizes. Additionaly you have many of cources before participate your enteresting event. It may Handle you like lecture. This is a good user friend platform.",
    usage: [{ title: "React" }, { title: "CSS" }, { title: "JS" }],
    url: "http://103.195.101.44:4173/",
  },
];

// Importing all images as modules
import ReactPNG from "@/public/skills/React.png";
import HTMLPNG from "@/public/skills/HTML.png";
import CSSPNG from "@/public/skills/CSS.png";
import JSPNG from "@/public/skills/JS.png";
import NodeJsPNG from "@/public/skills/NodeJs.png";
import ExpressPNG from "@/public/skills/Express.png";
import MongoDBPNG from "@/public/skills/MongoDB.png";
import ReactNativePNG from "@/public/skills/ReactNative.png";
import ExpoPNG from "@/public/skills/Expo.png";
import FigmaPNG from "@/public/skills/Figma.png";
import IndesignPNG from "@/public/skills/Indesign.png";
import { StaticImageData } from "next/image";

// Define an interface for each skill item
export interface SkillItem {
  title: string;
  logo: StaticImageData; // Assuming use of Next.js Image component with TypeScript
}

// Define an interface for each skill category
export interface SkillCategory {
  title: string;
  content: SkillItem[];
}

// Define the type for the array holding all skill categories
export type SkillsData = SkillCategory[];
export const SkillsData: SkillsData = [
  {
    title: "Web Developing",
    content: [
      { title: "React", logo: ReactPNG },
      { title: "HTML", logo: HTMLPNG },
      { title: "CSS", logo: CSSPNG },
      { title: "JS", logo: JSPNG },
    ],
  },
  {
    title: "BackEnd Developing",
    content: [
      { title: "NodeJs", logo: NodeJsPNG },
      { title: "Express", logo: ExpressPNG },
      { title: "MongoDB", logo: MongoDBPNG },
    ],
  },
  {
    title: "Mobile Developing",
    content: [
      { title: "ReactNative", logo: ReactNativePNG },
      { title: "Expo", logo: ExpoPNG },
    ],
  },
  {
    title: "UI designing",
    content: [
      { title: "Figma", logo: FigmaPNG },
      { title: "Indesign", logo: IndesignPNG },
    ],
  },
];
