"use client";

import Image from "next/image";
import Link from "next/link";

type WebsiteProof = {
  label: string;
  url: string;
  screenshot: string;
};

type ResumeProject = {
  id: number;
  name: string;
  description: string;
  stack: string;
  proofs: WebsiteProof[];
};

const PROJECTS: ResumeProject[] = [
  {
    id: 1,
    name: "Full-Stack AI Finance Tracker",
    description:
      "AI-driven transaction tracker built with secure full-stack architecture and responsive financial charts.",
    stack: "Next.js 15, TypeScript, Prisma",
    proofs: [
      {
        label: "Live Demo",
        url: "https://ai-finance-tracker-9nukdfgov-ruebens-projects-0b064456.vercel.app/",
        screenshot:
          "https://image.thum.io/get/width/1200/noanimate/https://ai-finance-tracker-9nukdfgov-ruebens-projects-0b064456.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    name: "Customer Churn Analysis (IBM Telco Dataset)",
    description:
      "Churn modeling and risk scoring workflow across 7,043 telecom records with model benchmarking and reporting.",
    stack: "Python, scikit-learn",
    proofs: [
      {
        label: "GitHub Repository",
        url: "https://github.com/codeRueben/telco-churn-analysis",
        screenshot:
          "https://opengraph.githubassets.com/1/codeRueben/telco-churn-analysis",
      },
      {
        label: "Dashboard",
        url: "https://codeRueben.github.io/telco-churn-analysis/telco_dashboard.html",
        screenshot:
          "https://image.thum.io/get/width/1200/noanimate/https://codeRueben.github.io/telco-churn-analysis/telco_dashboard.html",
      },
      {
        label: "Executive Report",
        url: "https://codeRueben.github.io/telco-churn-analysis/executive_summary.html",
        screenshot:
          "https://image.thum.io/get/width/1200/noanimate/https://codeRueben.github.io/telco-churn-analysis/executive_summary.html",
      },
    ],
  },
  {
    id: 3,
    name: "Land Boundary Mapping App",
    description:
      "GPS-enabled boundary verification and area calculation tool focused on field workflows.",
    stack: "Flutter, Mapbox SDK",
    proofs: [
      {
        label: "GitHub Repository",
        url: "https://github.com/codeRueben/Land-boundary-app",
        screenshot:
          "https://opengraph.githubassets.com/1/codeRueben/Land-boundary-app",
      },
    ],
  },
  {
    id: 4,
    name: "Cross-Language Voice Cloning",
    description:
      "Voice synthesis research project that lowered WER by 12% and improved generated audio quality by 20%.",
    stack: "TensorFlow, PyTorch",
    proofs: [],
  },
];

export default function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[150px] text-zinc-300 py-28">
      <h1 className="text-4xl mb-3">Projects</h1>
      <p className="text-zinc-500 mb-10 font-mono text-sm">
        Resume-aligned projects with website proof screenshots.
      </p>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <li
            key={project.id}
            className="border border-zinc-700 rounded-xl p-5 bg-black/30 backdrop-blur"
          >
            <h2 className="text-2xl mb-2">{project.name}</h2>
            <p className="text-zinc-400 text-sm mb-2">{project.description}</p>
            <p className="text-zinc-500 text-xs mb-4 font-mono">{project.stack}</p>

            {project.proofs.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {project.proofs.map((proof) => (
                  <Link
                    key={proof.url}
                    href={proof.url}
                    target="_blank"
                    rel="noopener"
                    className="border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-colors"
                  >
                    <Image
                      src={proof.screenshot}
                      alt={`Proof screenshot: ${proof.label}`}
                      width={1200}
                      height={720}
                      className="w-full h-48 object-cover bg-zinc-900"
                    />
                    <div className="p-3 text-sm font-mono">{proof.label}</div>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-zinc-500 text-xs font-mono">
                No public website link is listed for this project in the resume.
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
