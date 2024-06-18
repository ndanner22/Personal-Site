export interface Project {
  project_id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  github: string;
  stack: string[];
  extraimages: string[];
  longdescription: string[];
}

export const projects: Project[] = [
  {
    project_id: "1",
    title: "StayFresh",
    description:
      "StayFresh is a mobile app that uses AI to automatically scan your food items, give you reminders and recipe ideas to prevent food waste.",
    image: "../../public/images/stay-fresh.png",
    extraimages: [],
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
    longdescription: [],
  },
  {
    project_id: "2",
    title: "NC-News Frontend",
    description:
      "The frontend for a news website built using React and JavaScript, hosted on render.com.",
    image: "../../public/images/nc-news-fe-image.png",
    extraimages: ["../../public/images/ncnews-wireframe.png"],
    alt: "picture of homepage of a news website",
    github: "https://github.com/ndanner22/nc-news",
    stack: ["JavaScript", "React", "CSS", "Axios", "HTML"],
    longdescription: [],
  },
  {
    project_id: "3",
    title: "NC-News Backend",
    description:
      "The backend for a news website developed by creating a REST API using JavaScript and PostgreSQL, hosted on elephantsql.com.",
    image: "../../public/images/portrait.png",
    extraimages: [],
    alt: "picture of JavaScript code",
    github: "https://github.com/ndanner22/news-engine",
    stack: ["JavaScript", "PostgreSQL", "Node.js", "Express.js"],
    longdescription: [
      "I designed a RESTful API creating a backend for a news web application. This was the first time I created a live backend, so I was very careful to implement a thorough CRUD system for articles and comments. One key challenge of this project was anticipating frontend needs to provide the client with the best experience possible. By carefully planning ahead and understanding the abilities of PostgreSQL I was able to create the needed API endpoints that would enable a dynamic and interactive frontend.",
      "In completing this project I significantly grew my skills in several key areas. Through the process of seeding the database, I learned how to automate the population of initial data, ensuring a smooth and efficient setup for development and testing. Designing and implementing the RESTful API deepened my understanding of REST principles. Writing complex SQL queries for data retrieval and manipulation improved my ability to handle intricate database operations, optimizing performance and ensuring data integrity. Additionally, the project honed my debugging skills, as I encountered and resolved various issues, which strengthened my problem-solving abilities and attention to detail.",
    ],
  },
];
