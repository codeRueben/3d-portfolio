import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  const hasLive = (live || "").trim().length > 0;
  const hasRepo = (repo || "").trim().length > 0;
  if (!hasLive && !hasRepo) return null;
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {hasLive && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {hasRepo && repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  clerk: {
    title: "Clerk",
    bg: "black",
    fg: "white",
    icon: <span className="font-mono text-sm">Clerk</span>,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <span className="font-mono text-sm">Flutter</span>,
  },
  mapbox: {
    title: "Mapbox",
    bg: "black",
    fg: "white",
    icon: <span className="font-mono text-sm">Mapbox</span>,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <span className="font-mono text-sm">TF</span>,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <span className="font-mono text-sm">PyTorch</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "ai-finance-pro",
    category: "Full-Stack • Finance",
    title: "AI Finance Pro",
    src: "/assets/projects-screenshots/ai-finance-pro/dashboard.png",
    screenshots: ["dashboard.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.clerk,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://ai-finance-tracker-9nukdfgov-ruebens-projects-0b064456.vercel.app",
    github: "https://github.com/codeRueben/ai-finance-tracker",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Personal finance dashboard with AI-driven SMS transaction parsing
          </TypographyP>
          <TypographyP className="font-mono ">
            Full-stack personal finance app with an AI-driven SMS parser to automate
            transaction tracking and eliminate manual entry. Built with Next.js 15,
            TypeScript, Clerk auth, Prisma, and Tailwind. Dark-mode-first UI with
            dynamic charts for spending and savings insights.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Real-time balance, income vs spent, monthly budget tracking, and
            projected savings. Savings goals and clean overview for January 2026.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ai-finance-pro/dashboard.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li>Intelligent parsing engine for merchants, amounts, and dates from bank alerts</li>
            <li>Secure auth and protected API routes with Clerk and multi-step onboarding</li>
            <li>Optimized Prisma schemas for multiple account types</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "land-boundary-mapping",
    category: "Mobile • Mapping",
    title: "Land Boundary Mapping App",
    src: "/assets/projects-screenshots/ai-finance-pro/dashboard.png",
    screenshots: ["dashboard.png"],
    live: "",
    skills: {
      frontend: [PROJECT_SKILLS.flutter, PROJECT_SKILLS.mapbox],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            GPS-based boundary verification app with area calculation and document
            upload features. Built with Flutter and Mapbox SDK.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
  {
    id: "voice-cloning",
    category: "ML • Voice",
    title: "Cross-Language Voice Cloning",
    src: "/assets/projects-screenshots/ai-finance-pro/dashboard.png",
    screenshots: ["dashboard.png"],
    live: "",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.tensorflow, PROJECT_SKILLS.pytorch],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Multilingual text-to-speech models built with TensorFlow and PyTorch.
            Reduced Word Error Rate by 12% and improved audio quality by 20%.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
