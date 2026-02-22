const config = {
  title: "Rueben Kouwah Liu | Full-Stack Developer",
  description: {
    long: "Portfolio of Rueben Kouwah Liu, a full-stack developer and data enthusiast from Noida. B.Tech in Computer Science at Amity University. Explore projects like AI Finance Pro, Land Boundary Mapping, and Voice Cloning. Skills in React, Next.js, TypeScript, Python, Node.js, and more.",
    short:
      "Portfolio of Rueben Kouwah Liu — full-stack developer building AI-driven apps, dashboards, and data solutions.",
  },
  keywords: [
    "Rueben Liu",
    "Rueben Kouwah Liu",
    "portfolio",
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "React",
    "AI Finance Pro",
    "finance tracker",
    "Prisma",
    "Clerk",
    "Tailwind CSS",
    "Flutter",
    "Python",
    "data analytics",
    "Noida",
    "Amity University",
  ],
  author: "Rueben Kouwah Liu",
  email: "rueliu1@gmail.com",
  site: "",

  // for github stars button
  githubUsername: "codeRueben",
  githubRepo: "3d-portfolio-1",

  get ogImg() {
    return (this.site || "") + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/rueben-liu-3462a5250/?skipRedirect=true",
    github: "https://github.com/codeRueben",
    resume: "https://drive.google.com/file/d/1TU80SuNRJCVH9rqBs_nLLecOL4mS5YBo/view?usp=drive_link",
    twitter: "",
    instagram: "",
    facebook: "",
  },
};
export { config };
