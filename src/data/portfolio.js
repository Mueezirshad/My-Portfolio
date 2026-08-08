import {
  RiReactjsLine,
  RiNextjsFill,
  RiNodejsFill,
} from "react-icons/ri";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

export const personalInfo = {
  name: "Moeez Irshad",
  brand: "Moeezirshad.dev",
  role: "Full Stack Developer",
  email: "your@email.com",
  location: "Karachi, Pakistan",
};

export const techStack = [
  {
    name: "React",
    icon: RiReactjsLine,
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "Node.js",
    icon: RiNodejsFill,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
];

export const projects = [
  {
    title: "VanishMart",
    description:
      "A modern full-stack e-commerce platform with authentication, Cloudinary image uploads and Stripe payments.",

    image: "/projects/vanishmart.png",

    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],

    
  },

  {
    title: "Saylani Portal",

    description:
      "Student management portal with Lost & Found, Complaints and Volunteer Registration.",

    image: "/projects/saylani.png",

    tech: [
      "Next.js",
      "Firebase",
      "Tailwind",
    ],

    live: "#",

    github: "#",
  },
  
  {
    title: "Clinic Management System",
    description:
      "A full-stack clinic management system with appointment scheduling, authentication and admin dashboard.",

    image: "/projects/clinic.png",

    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
    ],

    live: "https://your-live-link.vercel.app",

    github: "https://github.com/yourusername/project",
  },

];
export const stats = [
  {
    number: "15+",
    label: "Projects Completed",
  },
  {
    number: "2+",
    label: "Years Learning",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "100%",
    label: "Responsive UI",
  },
];

export const experience = [
  {
    year: "2023",
    title: "Started Web Development",
    description:
      "Began learning HTML, CSS and JavaScript while building small responsive websites.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    description:
      "Worked with React.js, Next.js, Tailwind CSS and created multiple responsive projects.",
  },
  {
    year: "2025",
    title: "Full Stack Development",
    description:
      "Built MERN Stack applications using Node.js, Express.js, MongoDB, Firebase and Cloudinary.",
  },
];

