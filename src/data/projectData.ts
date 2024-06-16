export interface Project {
  project_id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  github: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    project_id: "1",
    title: "StayFresh",
    description:
      "StayFresh is a mobile app that uses AI to automatically scan your food items, give you reminders and recipe ideas to prevent food waste.",
    image: "../../public/images/stay-fresh.png",
    alt: "picture of cell phone app containing a grocery list",
    github: "https://github.com/ndanner22/Stay-Fresh-FE",
    stack: [
      "TypeScript",
      "React Native",
      "Expo Go",
      "Axios",
      "NativeWind",
      "Node.js",
      "PostgreSQL",
      "Express.js",
      "Firebase Auth",
      "OpenAI",
      "Google Cloud Vision OCR",
    ],
  },
  {
    project_id: "2",
    title: "NC-News Frontend",
    description:
      "The frontend for a news website built using React and JavaScript, hosted on render.com.",
    image: "../../public/images/place-holder.jpeg",
    alt: "picture of homepage of a news website",
    github: "https://github.com/ndanner22/nc-news",
    stack: ["JavaScript", "React", "CSS", "Axios", "HTML"],
  },
  {
    project_id: "3",
    title: "NC-News Backend",
    description:
      "The backend for a news website developed by creating a REST API using JavaScript and PostgreSQL, hosted on elephantsql.com.",
    image: "../../public/images/portrait.png",
    alt: "picture of JavaScript code",
    github: "https://github.com/ndanner22/news-engine",
    stack: ["JavaScript", "PostgreSQL", "Node.js", "Express.js"],
  },
];
