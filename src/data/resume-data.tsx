import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Zain Hoda",
  initials: "ZH",
  location: "New York City Metro",
  locationLink: "https://www.google.com/maps/place/NYC",
  about:
    "About",
  summary:
    "Summary",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    tel: "",
    email: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/zainhoda",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zainhoda/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/zain_hoda",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Stanford University",
      degree: "BS in Computer Science, Minor in Economics",
      start: "2002",
      end: "2006",
    },
    {
      school: "Princeton University",
      degree: "Master in Finance",
      start: "2006",
      end: "2008",
    },
  ],
  work: [
    {
      company: "Vanna AI",
      link: "https://vanna.ai",
      badges: ["Remote"],
      title: "Founder",
      logo: "https://vanna.ai/img/vanna.svg",
      start: "2023",
      end: "2024",
      description:
        "",
    },
  ],
  skills: [
    "Python",
    "LLMs",
    "RAG",
    "Svelte",
    "JavaScript",
    "TypeScript",
    "Go",
    "Elm",
  ],
  projects: [
    {
      title: "PyVibe",
      techStack: [
        "Side Project",
        "Python",
        "Tailwind",
      ],
      description: "Easily create styled web pages with just Pyton",
      logo: "https://cdn.pycob.com/pyvibe.svg",
      link: {
        label: "PyVibe",
        href: "https://www.pyvibe.com/",
      },
    },
  ],
} as const;
