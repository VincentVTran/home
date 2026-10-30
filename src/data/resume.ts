// Single source of content for the site. Keep in sync with ../resume/resume.tex.

export type Job = {
  company: string;
  title: string;
  location: string;
  dates: string;
  highlights: string[];
};

export type Stat = { value: string; label: string };
export type Award = { title: string; org: string; detail: string; date: string };
export type Project = { title: string; blurb: string; image: string; url: string };
export type SkillGroup = { name: string; items: string[] };
export type Social = { name: "LinkedIn" | "GitHub" | "Instagram"; url: string };

export const profile = {
  name: "Vincent Tran",
  role: "Software Engineer",
  tagline: "Building cloud infrastructure that scales.",
  location: "Austin, TX",
  email: "VincentTran197120@gmail.com",
  photo: "images/profile.webp",
  bio: "Software engineer at Apple working on multi-cloud enablement. Before that, three years at Amazon building serverless validation systems for EKS and keeping Prime Video's core services running at 99.99% uptime. I care about backend systems, Kubernetes, and infrastructure that runs itself.",
  social: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vincentvinhtran/" },
    { name: "GitHub", url: "https://github.com/VincentVTran" },
    { name: "Instagram", url: "https://www.instagram.com/vincentvtran197/" },
  ] satisfies Social[],
};

export const stats: Stat[] = [
  { value: "1,400%", label: "Windows EKS node density increase" },
  { value: "34", label: "AWS regions validated autonomously" },
  { value: "5,000+", label: "active clusters on each EKS AMI release" },
  { value: "99.99%", label: "uptime for Prime Video's outbound service" },
];

export const experience: Job[] = [
  {
    company: "Apple",
    title: "Software Engineer",
    location: "Austin, TX",
    dates: "Apr 2026 – Present",
    highlights: [
      "Working on Apple Cloud's third-party cloud (3PC) initiative, driving multi-cloud enablement across the company.",
      "Managed GCP org policy for LLM models across cloud accounts.",
      "Designed and implemented cloud account decommissioning across AWS and GCP.",
    ],
  },
  {
    company: "Amazon",
    title: "Software Development Engineer",
    location: "Seattle, WA",
    dates: "Jul 2023 – Apr 2026",
    highlights: [
      "Architected a serverless validation infrastructure with AWS Lambda, S3 and CDK, cutting manual validation from 2–3 days to zero.",
      "Scaled validation across EKS, ECS on EC2, and Windows Fargate in 34 regions, handling 1,360+ public AMIs autonomously.",
      "Led the operational readiness review rollout: 36 improvements that minimized P0 incidents during monthly EKS AMI releases affecting 5,000+ clusters.",
      "Collaborated with 10+ AWS partner teams to ship Kubernetes 1.30 support for Windows EKS.",
      "Maintained an API service's network path at 500–700 ms latency under 15,000+ req/sec.",
      "Modernized Prime Video's core outbound service, maintaining 99.99% uptime for millions of users.",
    ],
  },
  {
    company: "Amazon Web Services",
    title: "Software Development Engineer Intern",
    location: "Seattle, WA",
    dates: "May 2022 – Aug 2022",
    highlights: [
      "Designed and implemented prefix delegation for Windows EKS in Go, boosting node density by 1,400% and cutting customer infrastructure costs by 92%.",
      "Demoed a Kubernetes resource-controller proof of concept to 100+ engineers and executives, influencing the core EKS roadmap.",
    ],
  },
  {
    company: "Capital One",
    title: "Software Engineering Intern",
    location: "McLean, VA",
    dates: "Jun 2021 – Aug 2021",
    highlights: [
      "Built a Spring service to parse unstructured addresses using a 60M-address dataset.",
      "Presented with 3 fellow interns to the Card Tech core team, which manages data for 65M+ active customers.",
    ],
  },
  {
    company: "J.B. Hunt",
    title: "Application Development Intern",
    location: "Fayetteville, AR",
    dates: "Jun 2019 – May 2022",
    highlights: [
      "Developed Docker and Kubernetes pipelines for 4 web services, scaled with Nginx.",
      "Led a team of 4 as backend lead for the external hackathon registration site.",
    ],
  },
];

export const education = {
  school: "University of Arkansas",
  degree: "B.S. Computer Engineering",
  location: "Fayetteville, AR",
  dates: "Aug 2019 – May 2023",
};

export const skills: SkillGroup[] = [
  { name: "Languages", items: ["Go", "Java", "TypeScript", "Python", "C++"] },
  {
    name: "Cloud & Infra",
    items: ["AWS", "GCP", "Azure", "AliCloud", "Kubernetes", "CDK", "Containers", "Networking"],
  },
  { name: "Data & Testing", items: ["SQL", "Spring", "A/B Testing", "Canary Testing"] },
  {
    name: "Tooling",
    items: ["Linux", "Git", "CI/CD", "Prometheus", "Grafana", "Helm", "Multithreading"],
  },
];

export const awards: Award[] = [
  {
    title: "NSF MDaS Scholarship",
    org: "National Science Foundation",
    detail: "Top 10 first-generation college students pursuing computer science.",
    date: "Mar 2021",
  },
  {
    title: "Software Engineering Summit Finalist",
    org: "Capital One",
    detail: "Top 40 selected from 3,000+ applicants nationwide.",
    date: "Nov 2019",
  },
  {
    title: "Hackathon, 1st Place",
    org: "J.B. Hunt",
    detail: "Won with a 6-member team against 19+ teams.",
    date: "Mar 2019",
  },
];

export const projects: Project[] = [
  {
    title: "Troogle",
    blurb: "A search engine for finding previously aired trivia questions.",
    image: "images/portfolio/troogle.webp",
    url: "https://stoic-panini-1f7a82.netlify.app/start",
  },
  {
    title: "Mood Bird",
    blurb: "Sentiment analysis of Twitter feeds using pre-trained NLP models.",
    image: "images/portfolio/moodbird.webp",
    url: "https://jovial-colden-1aa1a6.netlify.app/",
  },
];
