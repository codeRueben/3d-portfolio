import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
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

type ExtraProjectLink = { label: string; href: string };
type WebsiteProof = { label: string; url: string; screenshot: string };

const PROJECT_LINKS = {
  aiFinanceLive:
    "https://ai-finance-tracker-9nukdfgov-ruebens-projects-0b064456.vercel.app/",
  aiFinanceRepo: "https://github.com/codeRueben/ai-finance-tracker",
  churnRepo: "https://github.com/codeRueben/telco-churn-analysis",
  churnDashboard:
    "https://codeRueben.github.io/telco-churn-analysis/telco_dashboard.html",
  churnReport:
    "https://codeRueben.github.io/telco-churn-analysis/executive_summary.html",
  landBoundaryRepo: "https://github.com/codeRueben/Land-boundary-app",
};

const WEBSITE_PROOFS = {
  aiFinanceLive: {
    label: "AI Finance Tracker Live Demo",
    url: PROJECT_LINKS.aiFinanceLive,
    screenshot: `https://image.thum.io/get/width/1200/noanimate/${PROJECT_LINKS.aiFinanceLive}`,
  },
  churnRepo: {
    label: "Telco Churn GitHub Repository",
    url: PROJECT_LINKS.churnRepo,
    screenshot:
      "https://opengraph.githubassets.com/1/codeRueben/telco-churn-analysis",
  },
  churnDashboard: {
    label: "Telco Churn Dashboard",
    url: PROJECT_LINKS.churnDashboard,
    screenshot: `https://image.thum.io/get/width/1200/noanimate/${PROJECT_LINKS.churnDashboard}`,
  },
  churnReport: {
    label: "Telco Churn Executive Report",
    url: PROJECT_LINKS.churnReport,
    screenshot: `https://image.thum.io/get/width/1200/noanimate/${PROJECT_LINKS.churnReport}`,
  },
  landBoundaryRepo: {
    label: "Land Boundary Mapping GitHub Repository",
    url: PROJECT_LINKS.landBoundaryRepo,
    screenshot:
      "https://opengraph.githubassets.com/1/codeRueben/Land-boundary-app",
  },
};

const ProjectsLinks = ({
  live,
  repo,
  extras = [],
}: {
  live: string;
  repo?: string;
  extras?: ExtraProjectLink[];
}) => {
  const hasLive = (live || "").trim().length > 0;
  const hasRepo = (repo || "").trim().length > 0;
  if (!hasLive && !hasRepo && extras.length === 0) return null;
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-start gap-3 my-3 mb-8">
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
      {extras.map((item) => (
        <Link
          key={item.href}
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={item.href}
        >
          <Button variant={"default"} size={"sm"}>
            {item.label}
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      ))}
    </div>
  );
};

const ProofGallery = ({ proofs }: { proofs: WebsiteProof[] }) => {
  if (!proofs.length) return null;
  return (
    <div className="mt-8">
      <TypographyH3 className="my-4 mt-8">Website Proof Screenshots</TypographyH3>
      <p className="font-mono mb-3 text-sm text-zinc-500">
        Proof images linked to each website listed in resume.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {proofs.map((proof) => (
          <Link
            key={proof.url}
            href={proof.url}
            target="_blank"
            rel="noopener"
            className="block border border-zinc-700 rounded-lg overflow-hidden hover:border-zinc-500 transition-colors"
          >
            <Image
              src={proof.screenshot}
              alt={`Screenshot proof for ${proof.label}`}
              width={1200}
              height={720}
              className="w-full h-48 object-cover bg-black"
            />
            <div className="font-mono text-xs p-3">{proof.label}</div>
          </Link>
        ))}
      </div>
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
  content: ReactNode;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "ai-finance-tracker",
    category: "Full-Stack • Finance",
    title: "Full-Stack AI Finance Tracker",
    src: "/assets/projects-screenshots/ai-finance-pro/dashboard.png",
    screenshots: ["dashboard.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: PROJECT_LINKS.aiFinanceLive,
    github: PROJECT_LINKS.aiFinanceRepo,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-driven transaction tracker with secure full-stack architecture
          </TypographyP>
          <TypographyP className="font-mono ">
            Built with Next.js 15, TypeScript, Prisma, and a responsive analytics
            interface. The app parses transaction signals and turns them into a
            monthly financial dashboard.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Dashboard Snapshot</TypographyH3>
          <p className="font-mono mb-2">
            Real-time balance, income/spending trend, and budget visibility in a
            single dashboard view.
          </p>
          <SlideShow images={[`${BASE_PATH}/ai-finance-pro/dashboard.png`]} />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li>AI parser streamlines transaction capture and categorization</li>
            <li>Protected routes and authenticated flow for financial data</li>
            <li>Prisma-backed schema design for clean relational storage</li>
          </ul>
          <ProofGallery proofs={[WEBSITE_PROOFS.aiFinanceLive]} />
        </div>
      );
    },
  },
  {
    id: "customer-churn-analysis",
    category: "ML • Analytics",
    title: "Customer Churn Analysis (IBM Telco)",
    src: "/assets/projects-screenshots/customer-churn/preview.svg",
    screenshots: ["preview.svg"],
    live: PROJECT_LINKS.churnDashboard,
    github: PROJECT_LINKS.churnRepo,
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Analysed 7,043 telecom records from the IBM Telco dataset and
            benchmarked Logistic Regression, Random Forest, Decision Tree, and
            Gradient Boosting models.
          </TypographyP>
          <ProjectsLinks
            live={this.live}
            repo={this.github}
            extras={[{ label: "Report", href: PROJECT_LINKS.churnReport }]}
          />
          <TypographyH3 className="my-4 mt-8">Outcome</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li>Best AUC-ROC reached 0.87</li>
            <li>Validated churn drivers with statistical significance tests</li>
            <li>Generated probability-based high-risk customer segments</li>
          </ul>
          <ProofGallery
            proofs={[
              WEBSITE_PROOFS.churnRepo,
              WEBSITE_PROOFS.churnDashboard,
              WEBSITE_PROOFS.churnReport,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "land-boundary-mapping",
    category: "Mobile • Mapping",
    title: "Land Boundary Mapping App",
    src: "/assets/projects-screenshots/land-boundary/preview.svg",
    screenshots: ["preview.svg"],
    live: "",
    github: PROJECT_LINKS.landBoundaryRepo,
    skills: {
      frontend: [PROJECT_SKILLS.flutter, PROJECT_SKILLS.mapbox],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            GPS-based boundary verification app with automated polygon area
            calculation. Built with Flutter and Mapbox SDK for field-first usage.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <ProofGallery proofs={[WEBSITE_PROOFS.landBoundaryRepo]} />
        </div>
      );
    },
  },
  {
    id: "voice-cloning",
    category: "ML • Voice",
    title: "Cross-Language Voice Cloning",
    src: "/assets/projects-screenshots/voice-cloning/preview.svg",
    screenshots: ["preview.svg"],
    live: "",
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.tensorflow,
        PROJECT_SKILLS.pytorch,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Built multilingual voice cloning pipelines using TensorFlow and
            PyTorch, reducing Word Error Rate by 12% and improving output audio
            quality by 20%.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];
export default projects;
