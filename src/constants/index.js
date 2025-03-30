import {
  mobile,
  ProductManager,
  mlengineer,
  web,
  javascript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  launchpadNFT,
  tryit,
  mysql,
  threejs,
  tensorflow,
  pytorch,
  cpp,
  python,
  vercel,
  encryptix,
  ayLabel,
  github,
  AiImg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Product Manager (Tech-Oriented)",
    icon: ProductManager,
  },
  {
    title: "ML Engineer",
    icon: mlengineer,
  },
];

const technologies = [
  
 
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  
];

const experiences = [
  {
    title: "Front-End Intern",
    company_name: "Encryptix",
    icon: encryptix,
    iconBg: "#383E56",
    date: "October 2024 - November 2024",
    tasks: [
      "Worked on foundational front-end tasks using HTML, CSS, and JavaScript to refine creative skills.",
      "Gained insights into industry-level project structures and best practices.",
      "Improved UI/UX understanding by implementing responsive designs and interactive elements.",
      "Completed hands-on exercises to enhance coding efficiency and problem-solving in front-end development.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Ay-Label",
    icon: ayLabel,
    iconBg: "#E6DEDD",
    date: "March 2025",
    tasks: [
      "Designed and developed a fully responsive website using React, Tailwind CSS, and Framer Motion.",
      "Created sections showcasing company information, services, and a contact page for user inquiries.",
      "Implemented smooth animations and engaging UI interactions to enhance user experience.",
      "Ensured optimized performance and accessibility across different devices and screen sizes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The work delivered was outstanding, with great attention to detail and usability.",
    name: "Prateek Grover",
    designation: "Founder & Owner",
    company: "AY-Labels",
  },
  {
    testimonial: "Great designing skills! The creativity in the work exceeded my expectations. The designs were visually appealing. Highly recommend for anyone looking for  design services!",
    name: "Diya Saraf",
    designation: "Product Manager",
    company: "...",
  },
];


const projects = [
  {
    name: "LaunchPad NFT Marketplace",
    description:
      "A decentralized NFT marketplace enabling users to mint, list, buy, and sell NFTs on the Ethereum blockchain. Built with Solidity, Hardhat, React, and Ethers.js, the platform ensures a seamless and secure NFT trading experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ethers.js",
        color: "pink-text-gradient",
      },
      {
        name: "hardhat",
        color: "yellow-text-gradient",
      },
    ],
    image: launchpadNFT,
    source_code_link: "https://github.com/Pulkit7070/launchpad",
  },
  {
    name: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform built with the MERN stack, featuring Redux Toolkit for state management, JWT authentication, Cloudinary for image uploads, and PayPal integration for payments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "yellow-text-gradient",
      },
    ],
    image: tryit,
    source_code_link: "https://github.com/Pulkit7070/Try-it",
  },
  {
    name: "AI Image Generator",
    description:
      "An AI-powered image generation tool that creates images based on user-provided prompts using the Hugging Face Stability AI API. Built with Flask and OS-level automation, the platform provides a smooth and efficient way to generate AI-generated visuals.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "hugging face api",
        color: "green-text-gradient",
      },
      {
        name: "stability ai",
        color: "pink-text-gradient",
      },
      {
        name: "os",
        color: "yellow-text-gradient",
      },
    ],
    image: AiImg,
    source_code_link: "https://github.com/Pulkit7070/AI-Image-Generator",
  },
];


export { services, technologies, experiences, testimonials, projects };
