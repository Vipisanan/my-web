export const SITE_URL = "https://vipisanan.vercel.app";

export const RESUME_URL =
  "https://drive.google.com/file/d/1F_usjW6ygboqxpuK7UXP-CmwVqLlTyYt/view?usp=sharing";

/** Set to false when you are not actively looking. Drives the hero pill copy. */
export const AVAILABLE_FOR_WORK = false;

/** Hides the "Send a message" form in the Reach out section.
 *  The form code is still there — flip this to true to bring it back. */
export const SHOW_CONTACT_FORM = false;

export const PROFILE = {
  name: "Vipisanan Esvaramoorthy",
  shortName: "E.Vipisanan",
  role: "Software Engineer",
  headline: "Java / Spring Boot / React",
  currentRole: "Software Engineer L5",
  currentCompany: "FreeBalance",
  currentDomain: "government resource planning & public financial management",
  summary:
    "Full stack developer with 6+ years building and maintaining robust software — Java, Spring Boot and microservices on the back, ReactJS on the front, with a focus on scalability and performance.",
  about:
    "Hi, I'm Vipisanan, a dedicated Full Stack Developer with over 6 years of experience building and maintaining robust software applications. Proficient in Java, Spring Boot, ReactJS and Microservices, with a strong focus on scalability, performance and user-centric design. Adept at collaborating in cross-functional teams, using Agile methodologies and delivering high-quality software on time.",
  email: "vipisanan1@gmail.com",
  phone: "+94 77 93 98 779",
  phoneHref: "tel:+94779398779",
  location: "Colombo, Sri Lanka",
  timezone: "GMT+5:30",
  photo: "/assert/me1.jpg",
  yearsExperience: "6+",
};

export interface ExperienceDataType {
  period: string;
  role: string;
  company: string;
  employment: string;
  summary: string;
  skills: string[];
}

export const EXPERIENCE: ExperienceDataType[] = [
  {
    period: "Apr 2025 — Present",
    role: "Software Engineer, Level 5",
    company: "FreeBalance",
    employment: "Full-time · On-site",
    summary:
      "Building government resource planning (GRP) software for the FreeBalance Accountability Suite — public financial management systems used by ministries of finance to run budgeting, expenditure and treasury operations at national scale. Engaged through Hatch Works Pvt Ltd.",
    skills: ["GovTech", "Public financial management", "Java", "Spring Boot", "ReactJS"],
  },
  {
    period: "Apr 2023 — Feb 2025",
    role: "Senior Software Engineer",
    company: "EV Technologies",
    employment: "Full-time · Hybrid",
    summary:
      "Modernised the Sysco Warehouse Management System (SWMS) for Syscolabs — migrating an Oracle Form Builder application to Spring Boot and ReactJS while continuing to ship features on the legacy system, keeping both integrated through the transition.",
    skills: ["Spring Boot", "ReactJS", "Oracle", "Legacy modernisation", "Unit testing"],
  },
  {
    period: "Jun 2022 — Apr 2023",
    role: "Software Engineer",
    company: "Allion Technologies",
    employment: "Full-time",
    summary:
      "Owned the front end of the HCSL Internal Audits Module — React architecture, API integration, auth routing, PR reviews, plus document printing and PDF export. Architected the ML/NLP layer of Emotionise AI for real-time emotionally-aware suggestions, and mentored two React interns.",
    skills: ["ReactJS", "NLP / ML architecture", "API integration", "Mentoring", "Jira"],
  },
  {
    period: "Jun 2021 — Jun 2022",
    role: "Software Engineer",
    company: "Koach",
    employment: "Full-time",
    summary:
      "Full-stack work on Koach Hub, the sports coaching platform connecting coaches, players and parents — training plans, scheduling, evaluations and real-time updates.",
    skills: ["Java", "Spring Boot", "ReactJS"],
  },
  {
    period: "2018 — 2021",
    role: "Earlier roles",
    company: "HUEX Studio · SenzMate IoT Intelligence",
    employment: "Associate & Intern",
    summary:
      "React and React Native R&D at HUEX Studio, and earlier IoT engineering at SenzMate — Java, Spring Boot and Angular work on connected-device platforms including the SenzAgro smart-farming system.",
    skills: ["React Native", "IoT", "Angular", "Java"],
  },
];

export interface SampleWorkDataType {
  name: string;
  description: string;
  year: string;
  imageUrl: string;
  url: string;
  tags: string[];
}

export const PROJECTS: SampleWorkDataType[] = [
  {
    name: "Koach Hub",
    description:
      "Sports coaching platform connecting coaches, players and parents — training plans, scheduling, evaluations and real-time updates.",
    year: "2021",
    imageUrl: "/assert/koach.png",
    url: "https://koachhub.com/",
    tags: ["Coaching", "Scheduling", "Real-time"],
  },
  {
    name: "Knodify",
    description:
      "Subscription-based online learning system: tutors publish course material, students access it through tiered plans.",
    year: "2021",
    imageUrl: "/assert/knodify.png",
    url: "https://koachhub.com/",
    tags: ["E-learning", "Subscriptions"],
  },
  {
    name: "Inomas",
    description:
      "Restaurant operations suite — shift scheduling, payroll tracking and collaborative task handling for floor teams.",
    year: "2020",
    imageUrl: "/assert/inomas.png",
    url: "/assert/inomas.png",
    tags: ["Scheduling", "Payroll"],
  },
  {
    name: "SenzAgro",
    description:
      "IoT smart-farming system that raises yield while conserving water, land and energy through sensor-driven automation.",
    year: "2018–2019",
    imageUrl: "/assert/senz-agro.png",
    url: "https://senzagro.com/",
    tags: ["Smart farming", "Sustainability"],
  },
];

export interface SkillDataType {
  category: string;
  skills: string[];
}

export const STACK: SkillDataType[] = [
  {
    category: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Event-driven microservices",
      "REST APIs",
      "Spring Security",
      "JPA",
      "Oracle",
    ],
  },
  {
    category: "Frontend",
    skills: ["ReactJS", "Redux", "TypeScript", "JavaScript", "React Native", "Angular"],
  },
  {
    category: "Cloud & infra",
    skills: ["AWS", "AWS EC2", "AWS VPC", "AWS S3", "IAM", "Docker"],
  },
  {
    category: "Practice",
    skills: [
      "TDD · JUnit · Mockito",
      "Git",
      "Jira",
      "Swagger",
      "Postman",
      "Linux",
    ],
  },
];

/** Marquee row under the hero. */
export const HERO_STACK = [
  "Java",
  "Spring Boot",
  "Microservices",
  "Event-driven",
  "ReactJS",
  "Redux",
  "TypeScript",
  "AWS",
  "Docker",
];

export interface EducationDataType {
  year: string;
  institution: string;
  degree: string;
  details: string[];
}

export const EDUCATION: EducationDataType[] = [
  {
    year: "2016 — 2020",
    institution: "University of Kelaniya, Sri Lanka",
    degree: "BSc. (Hons.) in Software Engineering",
    details: ["Junior Treasurer of the Tamil Students' Union"],
  },
  {
    year: "2013",
    institution: "MU / Vidyananda College, Sri Lanka",
    degree: "G.C.E. Advanced Level — Mathematics stream",
    details: [],
  },
];

export interface OnlineCoursesDataType {
  year: string;
  providerName: string;
  providerLogo: string;
  title: string;
  details: string;
  skills: string[];
  certificate: string;
  certificateUrl: string;
}

export const CERTIFICATES: OnlineCoursesDataType[] = [
  {
    year: "Feb 2025",
    providerName: "Udemy",
    providerLogo: "/assert/udemy.png",
    title: "Java Spring Framework 6 with Spring Boot 3",
    details:
      "Hands-on Spring Core, AOP, JPA, REST, Security, Microservices and Docker.",
    skills: ["Spring Core", "AOP", "Rest API"],
    certificate: "/assert/certificates/vipisanan-spring-boot-udm.png",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-1a3cf1bb-ce49-4494-b53d-4272ba0d2b8c/",
  },
  {
    year: "Feb 2025",
    providerName: "LinkedIn",
    providerLogo: "/assert/linkedinLearn.png",
    title: "Test-Driven Development in Spring Boot with JUnit and Mockito",
    details:
      "Writing maintainable code using TDD, JUnit and Mockito for Spring Boot applications.",
    skills: ["TDD", "JUnit", "Mockito", "Spring Boot"],
    certificate: "/assert/certificates/vipisanan-tdd-lnk.png",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/2887f44eaf217a086951ceb80459aa28d76fc485f131e016e9755369ea3f084b?trk=share_certificate",
  },
  {
    year: "Feb 2025",
    providerName: "LinkedIn",
    providerLogo: "/assert/linkedinLearn.png",
    title: "AWS Essential Training for Developers",
    details:
      "Managing IAM users and security policies, deploying and scaling EC2 instances, and using AWS storage and database solutions.",
    skills: ["IAM", "EC2", "VPC", "S3"],
    certificate: "/assert/certificates/vipisanan-aws-essential-lnk.png",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/55a6c6f2ee5658b1b7ca8c7e3a2d74cb0bf47534d88c10ba2afb1fdc6f5fe0da",
  },
  {
    year: "Jan 2025",
    providerName: "Udemy",
    providerLogo: "/assert/udemy.png",
    title: "Docker for Java Developers",
    details: "Containerisation concepts, Docker Compose, networking and security best practices.",
    skills: ["Docker"],
    certificate: "/assert/certificates/vipisanan-docker-udm.png",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-1da17628-2e8d-46ad-820c-195d10e8e559/",
  },
  {
    year: "Feb 2025",
    providerName: "LinkedIn",
    providerLogo: "/assert/linkedinLearn.png",
    title: "React: Ecosystems",
    details: "Routing, server-side rendering, animation, debugging and workflow optimisation.",
    skills: ["Routing", "Hooks"],
    certificate: "/assert/certificates/vipisanan-aws-essential-lnk.png",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/458da88fd079399a923a9e6a07e4a56c5bc8d73643f57dfef1262a1e4a1631df",
  },
  {
    year: "Mar 2025",
    providerName: "LinkedIn",
    providerLogo: "/assert/linkedinLearn.png",
    title: "Tech Career Skills: Effective Technical Communication",
    details: "Technical communication, project management and code review practices.",
    skills: ["Project Management", "Code Review", "Communication"],
    certificate: "/assert/certificates/vipisanan-tech-communication.png",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/351bfb5507cc08c6c0d3cded12bed74d04a7f8d17fd14caeff14ad0e9f328b1b?trk=share_certificate",
  },
  {
    year: "Feb 2025",
    providerName: "LinkedIn",
    providerLogo: "/assert/linkedinLearn.png",
    title: "Overcoming Procrastination",
    details: "Productivity strategies, time management and habit building.",
    skills: ["Time Management"],
    certificate: "/assert/certificates/vipisanan-overcoming-procrastination-lnk.png",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/90a3e7ea0d3c4d57f7d178fadbe5f9c39ccfa4fb4d9e5f5d292d9220ceaa99a5?trk=share_certificate",
  },
];

export interface SocialDataType {
  name: string;
  handle: string;
  url: string;
}

export const SOCIALS: SocialDataType[] = [
  { name: "GitHub", handle: "@vipisanan", url: "https://www.github.com/vipisanan" },
  { name: "LinkedIn", handle: "in/vipisanan", url: "https://www.linkedin.com/in/vipisanan" },
  { name: "Fiverr", handle: "@vipisanan", url: "https://www.fiverr.com/vipisanan" },
  { name: "X", handle: "@EVipisanan", url: "https://twitter.com/EVipisanan" },
  { name: "Instagram", handle: "@vipisanan", url: "https://www.instagram.com/vipisanan" },
  { name: "Facebook", handle: "/vipisanan", url: "https://www.facebook.com/vipisanan" },
];

export interface NavBarOptionType {
  label: string;
  path: string;
}

export const NAV_ITEMS: NavBarOptionType[] = [
  { label: "work", path: "sample-work" },
  { label: "experience", path: "experience" },
  { label: "stack", path: "skills" },
  { label: "credentials", path: "credentials" },
  { label: "contact", path: "reach-out" },
];
