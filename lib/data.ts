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
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Projects", path: "/projects" },
];

export const footerLinks: { link: string; icon: IconDefinition }[] = [
  { link: "#", icon: faFacebookF },
  { link: "#", icon: faTwitter },
  { link: "#", icon: faInstagram },
  { link: "#", icon: faLinkedinIn },
];

export const footerNavLinks: { path: string; title: string }[] = [
  { title: "About us", path: "#" },
  { title: "Our services", path: "#" },
  { title: "Privacy policy", path: "#"  },
  { title: "Hire Us", path: "#"  },
];


export const mainData = {
  siteLogo: "/Waves.png",
  SiteName: "Dark Waves",
  title: "DarkWaves DevLab: Crafting Digital Marvels",
  description:
    "Step into DarkWaves DevLab, where digital marvels are brought to life! At DevLab, we are a collective of creative minds and technical wizards dedicated to pushing the boundaries of programming and development.",
  logo: "/home/DarkWavesOwner.png",
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
  aboutPic: "/home/MainAboutPic.jpg",
};

export const ProjectsData = [
  {
    title: "Braindance",
    banner: "/projects/braindance.png",
    des: "This is a discord music bot. This project contains A web base dashboard for controll the discord bot. In this you can get better experience with a music bot.",
    usage: [{ title: "React" }, { title: "CSS" }, { title: "JS" }],
    url: "https://braindance.gg",
  },
  {
    title: "NoError",
    banner: "/projects/Noerror.png",
    des: "NoError Studios is a community dedicated to coding and development enthusiasts. Whether you're a beginner or an experienced developer, you'll find a welcoming environment to learn, collaborate, and share your knowledge.",
    usage: [{ title: "React" }, { title: "CSS" }, { title: "JS" }],
    url: "https://noerror.studio/",
  },
  {
    title: "SkillSwap",
    banner: "/projects/SkillSwap.png",
    des: "With SkillSwap you can improve your knowledge with others. You can participate events and win then you can get prizes. Additionaly you have many of cources before participate your enteresting event. It may Handle you like lecture. This is a good user friend platform.",
    usage: [{ title: "React" }, { title: "CSS" }, { title: "JS" }],
    url: "http://103.195.101.44:4173/",
  },
];

export const SkillsData = [
  {
    title: "Web Delveloping",
    content: [
      { title: "React", logo: "/skills/React.png" },
      { title: "HTML", logo: "/skills/HTML.png" },
      { title: "CSS", logo: "/skills/CSS.png" },
      { title: "JS", logo: "/skills/JS.png" },
    ],
  },
  {
    title: "BackEnd Delveloping",
    content: [
      { title: "NodeJs", logo: "/skills/NodeJs.png" },
      { title: "Express", logo: "/skills/Express.png" },
      { title: "MongoDB", logo: "/skills/MongoDB.png" },
    ],
  },
  {
    title: "Mobile Delveloping",
    content: [
      { title: "ReactNative", logo: "/skills/ReactNative.png" },
      { title: "Expo", logo: "/skills/Expo.png" },
    ],
  },
  {
    title: "UI designing",
    content: [
      { title: "Figma", logo: "/skills/Figma.png" },
      { title: "Indesign", logo: "/skills/Indesign.png" },
    ],
  },
];

export const commonData = {
  responsive: {
    mobile: 320,
    tablet: 768,
    desktop: 1024,
  },
};
