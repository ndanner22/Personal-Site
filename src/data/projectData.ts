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
      "typescript",
      "reactnative",
      "expogo",
      "axios",
      "nativewind",
      "nodejs",
      "postgres",
      "express",
      "firebaseauth",
      "openai",
      "googlecloud",
    ],
    longdescription: [
      "StayFresh is an app that I developed in a team of five for our Northcoders final project. It makes managing food expiration dates a breeze, preventing any food waste and saving money. It allows users to track their grocery items, get timely reminders, and explore recipe ideas for soon-to-expire items. It’s ideal for budget-conscious individuals. Instead of the labourious task of manually inputting each item to track themselves, StayFresh features a built-in option to scan or upload shopping receipts, automatically adding purchases to the inventory. This was inspired by our own experience struggling to make use of everything we buy and the current cost of living crisis. After some research we discovered that the UK throws away 9.5 Million tons of food every year so we felt like this app would be a great way to help combat this issue.",
      "In selecting technologies, we chose React Native for its ability to deliver an exceptional mobile user experience, paired with using ExpoGo for streamlined real-time testing and team collaboration. We chose to use Typescript to leverage its type syntax for faster development and error prevention. After quick spiking as we were under time constraints, Google Cloud Vision emerged as our OCR of choice for its compatibility with React Native and Expo, offering high accuracy in text detection from image files. Postgresql and Express were selected for our backend to align with our relational data model and leverage our existing knowledge. Open AI was utilized for its robust language modeling capabilities, consistently delivering accurate results when prompted to identify food ingredients, prices, and suggested expiry dates.",
      "While we are incredibly pleased with the final outcome, the journey to developing our project was not without its challenges. This was our team's first experience working collaboratively on a project, and we found that conducting daily standup meetings and maintaining a well-organized Trello board were essential for staying organized and on track. Many of the app's features and the underlying technologies were new to us, so having Trello enabled effective time management as we navigated through documentation and experimented with different ideas. Developing our AI query refinement, which operates behind the scenes in the app, required effective communication and collaboration as well. Crafting questions to ensure users consistently receive desired results proved more demanding than anticipated, yet overcoming this challenge was immensely rewarding. I look forward to refining and utilizing this skill as I embark on future projects.",
    ],
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
    stack: ["javascript", "react", "css", "axios", "html"],
    longdescription: [
      "For NC-News frontend, I successfully used the backend created in my previous project to host a dynamic React web application, allowing clients to easily view, access and update the news article information as they need. This was my first experience using React and I loved how much cleaner and more intuitive it felt compared to creating a Multipage HTML site. While mastering React's component-based architecture presented a learning curve, it allowed me to really hone my skills in meticulously wireframing.",
      "Building this frontend in React has been instrumental in growing my expertise across several crucial areas of web development. Developing various components for displaying articles, comments, and interactive elements enhanced my proficiency in React’s component-based architecture, improving my ability to create reusable and modular UI elements. Integrating frontend components with backend APIs sharpened my skills in data retrieval, state management, and handling asynchronous operations effectively. Notably for me, designing and styling the frontend really emphasized the importance of CSS for creating visually appealing and user-friendly interfaces.",
    ],
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
    stack: ["javascript", "postgres", "nodejs", "express"],
    longdescription: [
      "For this project I designed a RESTful API creating a backend for a news web application. This was the first time I created a live backend, so I was very careful to implement a thorough CRUD system for articles and comments. One key challenge of this project was anticipating frontend needs to provide the client with the best experience possible. By carefully planning ahead and understanding the abilities of PostgreSQL I was able to create the needed API endpoints that would enable a dynamic and interactive frontend.",
      "In completing this project I significantly grew my skills in several key areas. Through the process of seeding the database, I learned how to automate the population of initial data, ensuring a smooth and efficient setup for development and testing. Designing and implementing the RESTful API deepened my understanding of REST principles. Writing complex SQL queries for data retrieval and manipulation improved my ability to handle intricate database operations, optimizing performance and ensuring data integrity. Additionally, the project honed my debugging skills, as I encountered and resolved various issues, which strengthened my problem-solving abilities and attention to detail.",
    ],
  },
];
