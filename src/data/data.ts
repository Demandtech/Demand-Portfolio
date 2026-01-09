import spotmate_img_dark from "/assets/projects/spotmate-image-dark.png";
import spotmate_img_light from "/assets/projects/spotmate-image-light.png";
import upville_img from "/assets/projects/upville-image.png";
import techstack_img from "/assets/projects/tech-stack.png";
// import altblog_img_dark from "/assets/projects/altblog-img-dark.png";
// import altblog_img_light from "/assets/projects/altblog-img-light.png";
import pixelium_img from "/assets/projects/pixelium-image.png";

export const projects = [
  {
    name: "Upville Homes",
    description:
      " Property Asset Management and Tracking System (PAMTS). The PAMTS project aims to develop a comprehensive web-based platform to improve property asset management.",
    tools:
      "Tools: TypeScript, React, Expressjs, MongoDb, React Query, Redux toolkits, Socket.io, Nextui, Tailwind CSS, Git & Github, Render, Vercel.",
    repo_url: "https://github.com/Demandtech/upvilles-home-frontend",
    live_url: "https://upvillehomes.vercel.app",
    image: upville_img,
    light_img: null,
  },
  {
    name: "Pixelium",
    description:
      "Pixelium is a comprehensive student examination management portal designed to streamline the creation, administration, and evaluation of exams. It enables schools to manage students, exams, and results efficiently through a secure, role-based system with a modern, responsive interface.",
    tools:
      "Tools: TypeScript, Nextjs, Expressjs, MongoDb, React Query, Shadcn, Tailwind CSS, Render, Vercel.",
    repo_url: "https://github.com/Demandtech/pixellium_school_portal_frontend",
    live_url: "https://altblog-frontend.vercel.app/",
    image: pixelium_img,
    light_img: null,
  },
  {
    name: "Tech Stack",
    description:
      "TechStack; Devs2Dev is a tech developers conference event, in which senior tech developers, startup CEO and CTO are invited to speak to developers on various TechStach, frameworks, programming languages, jobs, latest tech development and also share their tech experience",
    tools: "Tools: Javascript, React, Tailwind CSS, Git & Github, Vercel.",
    repo_url: "https://github.com/Demandtech/techstack",
    live_url: "https://techstack24.vercel.app",
    image: techstack_img,
    light_img: null,
  },
  {
    name: "spotmate",
    description:
      "Your ultimate fitness companion, a social media, weekly meal plan, weekly workout plan and fitness tracking both on website and application.",
    tools:
      "Tools: Javascript, Nextjs, Laravel, Redux, Tailwind CSS, GraphQl, Third Parties API's, Playwright, Jest, Git & Github, Vercel.",
    repo_url: "",
    live_url: "https://spotmatefrontend.vercel.app",
    image: spotmate_img_dark,
    light_img: spotmate_img_light,
  },

  // {
  //   name: "StreetBazaar",
  //   description:
  //     "Your ultimate fitness companion, a social media and fitness tracking application.",
  //   tools:
  //     "Tools: Javascript, Reactjs, Redux, Styled components, Git & Github, Vercel.",
  //   github_url: "",
  //   live_url: "",
  //   image: "",
  // },
];
